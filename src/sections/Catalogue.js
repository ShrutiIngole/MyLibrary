import React from 'react';
import axios from 'axios';

import '../styles/Book.css';

import Book from '../components/Book';

class Catalogue extends React.Component {
    state = {
        catlg: []
    }
    
    componentDidMount() {
        axios
            .get('http://localhost:5000/api/all')
            .then( book=> {
                book.data.books.map (each => {
                    this.setState({
                        catlg : [...this.state.catlg,{
                            _id: each._id,
                            name: each.name,
                            author: each.author,
                            coverimg: each.coverimg,
                            desc: each.desc,
                            removed: false
                        }]
                    })
                    return 0;
                })
                console.log("----------catalogue state-----------")
                console.log(this.state.catlg)           
            })
            .catch(error => {
                console.log("Things have not gone correctly :(")
                console.log(error);
            });

    }

    
    render() {

        const deleteClick = (e, bookId) => {
            console.log(bookId)
            axios
                .delete("http://localhost:5000/api/delete", {data: { _id: bookId } } )
                .then( res=> {
                    const idx = this.state.catlg.findIndex(book => book._id === bookId );
                    const newState = [...this.state.catlg]
                    newState.splice(idx, 1)
                    this.setState({
                        catlg: newState
                    })
                }
                )
                .catch(err => {
                    console.log(err)
                })
        }

        return (
            <div id="container" className="content">
                {
                    (this.state.catlg.length > 0) 
                    ?
                    (
                        this.state.catlg.map( each => {
                            return (
                                <div id="book">
                                    <Book 
                                        key={each._id} 
                                        details={each} 
                                        buttonText="Remove from catalogue" 
                                        handleClick={e=>{deleteClick(e, each._id)}}
                                    />
                                </div>
                            );
                        })
                    )
                    :
                    (
                        <h4> There are no books in your catalogue. Head over to New Arrivals or Add to start adding books. </h4>
                    )
                }
            </div>
        );
    }
};

export default Catalogue;