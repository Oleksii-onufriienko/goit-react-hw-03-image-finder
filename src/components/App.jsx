import { Component } from "react";
import { Searchbar } from "./Searchbar/Searchbar";



export class App extends Component {
  state = {
    imgSearch: '',
  }

  handleSubmit = ({ imgSearch },{resetForm} ) => {

    this.setState({imgSearch });
    
    console.log(this.state);
    resetForm();
  }

  render() {
    return (
      <>
        <Searchbar handleSubmit={this.handleSubmit} />
      </>
    );
  }
};
