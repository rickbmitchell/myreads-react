import React, { Component } from "react";
import PropTypes from "prop-types";
import ShelfShifter from "./ShelfShifter";

class Book extends Component{
    static propTypes = {
        book: PropTypes.object.isRequired,
        changeShelf: PropTypes.func.isRequired
    };

    // formatAuthor(book) {
    //     if(book.authors.length > 1){
    //         book.authors === book.authors + ", "
    //     }
    // };

    render(){
        const { book } = this.props;
        return(
            <div className="book" id={book.id}>
                <div className="book-top">
                    <div className="book-cover" style={{backgroundImage: `url("${book.imageLinks.thumbnail}")` }}></div>
                    <ShelfShifter
                        book={book}
                        changeShelf={this.props.changeShelf}/>
                </div>
                <div className="book-title">{book.name}</div>
                <div className="book-authors">{book.authors &&
              book.authors.map(author =>
                <p key={author}>
                  {author}
                </p>
              )}</div>
            </div>
        )
    }
}

export default Book;