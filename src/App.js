import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import * as constants from './components/constants';
import Header from './components/Header';
import Card from './components/Card';
import Trailer from './components/Trailer';
import $ from 'jquery';
let data = require('./API/data');

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            movies: {},
            id: '',
            showing: false,
            index: -1
        };

        this.toggleMovie = this.toggleMovie.bind(this);
    }

    componentDidMount() {
        // usually this would be an get request to api, but due to cors error, data is being loaded through a file
        this.setState({
            movies: data[1]
        });
    }

    toggleMovie(id, index) {
        // if clicked on the same movie which is already open, return
        if (this.state.index === index) {
            return;
        }

        // calculating in which row and place we have to add a div for the trailer
        let row_items = Math.floor(($(window).width() - constants.CONTAINER_PADDING) / constants.CARD_WIDTH);
        let insert_place = ((Math.ceil((index+1) / row_items)-1) * row_items) + 1;

        // if another trailer is showing, remove it before adding a new div
        if (this.state.showing) {
            $('.trailer-wrapper').remove();
        }

        // adds a new div and render trailer component in the div
        $(`.list-wrapper > div:nth-child(${insert_place})`).before("<div class=\"trailer-wrapper\"></div>");
        ReactDOM.render(<Trailer data={this.state.movies[id]}/>, document.getElementsByClassName('trailer-wrapper')[0]);

        this.setState({
            id, showing: true, index
        })
    }

    render() {
        const {movies, id} = this.state;

        return (
            <main>
                <Header/>
                <div className={'list-wrapper'}>
                    {
                        Object.keys(movies).map((key, index) => <Card key={key} index={index} data={movies[key]} active={id} toggle={this.toggleMovie}/>)
                    }
                </div>

            </main>
        );
    }
}

export default App;
