import { Component } from "react";
import styled from 'styled-components';

const ButtonLoadMore = styled.button`
    padding: 8px;
    background-color: blue;
    color: white;
    font-size: 18px;
    display: block;
    margin-left: auto;
    margin-right: auto;
`;

export class Button extends Component{

    render() {
        return (
            <ButtonLoadMore type="button" onClick={this.props.handleLoadMore}>Load more</ButtonLoadMore>
        );
    }
}