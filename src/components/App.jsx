import { Component } from "react";
import axios from 'axios';
import { Searchbar } from "./Searchbar/Searchbar";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { ImageGalleryItem } from "./ImageGalleryItem/ImageGalleryItem";
import { Button } from "./Button/Button";

export class App extends Component {
  state = {
    imgSearch: '',
    imgArray: [],
    page: 1,
  }

  handleSubmit = ({ imgSearch },{resetForm} ) => {

    this.setState({imgSearch });
    
    // console.log(this.state);
    this.getImg(imgSearch,1).then(result => {
      this.setState({ imgArray: [...result.data.hits], page: 1, imgSearch });
    }).catch(e => { 
       this.setState({ imgArray: [], page: 1, imgSearch: ''});
    });
    // resetForm();
  }

  handleLoadMore = () => {
    const { imgSearch } = this.state;

    this.getImg(imgSearch,2).then(result => {
      this.setState({ imgArray: [...result.data.hits], page: 2, imgSearch });
      }).catch(e => { 
          this.setState({ imgArray: [], page: 1, imgSearch: ''});
      });
    
    // this.setState(prevState => {
    //   return {
    //     page: prevState.page + 1,

    //   }

    // });
    console.log("Load more");
  }

  async getImg(imgSearch, page) {
    const query = `https://pixabay.com/api/?q=${imgSearch}&page=${page}&key=31033465-5993d082d5a9a4a2e6778e4ca&image_type=photo&orientation=horizontal&per_page=12`;
     return axios
      .get(query)
       .then(result => {
         console.log(result);
        if (result.data.hits.length === 0) return {};
        return result;
      })
      .catch(e => {
        return {};
      });
  }

  render() {
    return (
      <>
        <Searchbar handleSubmit={this.handleSubmit} />
        {this.state.imgArray.length > 0 &&
          <ImageGallery>
            {this.state.imgArray.map(e => {
              return (
                <ImageGalleryItem key={e.id} src={e.webformatURL} alt={e.tags} />
              );
            })}
          </ImageGallery>
        }
        {this.state.imgArray.length > 11 &&
          <Button handleLoadMore={this.handleLoadMore} />
        }
      </>
    );
  }
};
