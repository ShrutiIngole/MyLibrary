import React from 'react';
import axios from 'axios';

import '../styles/Book.css';

import Book from '../components/Book.js';

class Arrivals extends React.Component {
    state = {
        releases: []
    }

    componentDidMount () {
    
        axios
            .get(`https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${process.env.REACT_APP_NYT_BESTSELLER_KEY}`)
            // get the list of top 15 and set the state as details of these books
            .then( book=> {
                book.data.results.books.map (each => {
                    this.setState({
                        releases : [...this.state.releases,{
                            _id: each.primary_isbn13,
                            name: each.title,
                            author: each.author,
                            coverimg: each.book_image,
                            desc: each.description
                        }]
                    })
                })
            })
            .catch(error => {
                console.log(error)
            });
    }
    
    
    render () {
        const handleClick = (bookId) => {
            
            let newState = [...this.state.releases]
            let idx = this.state.releases.findIndex(book => book._id === bookId )
            axios
                .post("http://localhost:5000/api/new", newState[idx])
                .then(res => {  
                    return 0
                })
                .catch(err => {
                    console.log(err)
                })
        }
        return (
            <div id="container" className="content">
                {
                    this.state.releases.map( each => {
                        return (
                            <div id="book">
                                <Book 
                                    key={each.id} 
                                    details={each} 
                                    buttonText="Add to catalogue" 
                                    handleClick={e=>{handleClick(each._id)}} 
                                    ext="Arrivals"
                                />
                            </div>
                        );
                    })
                }
            </div>
        );
    }
};

export default Arrivals;