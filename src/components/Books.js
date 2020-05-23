import React, { Component } from 'react';
import  axios from 'axios';
import { Button, DatePicker, version } from "antd";
import "antd/dist/antd.css";
class Books extends Component {
  constructor(props) {
    super(props);
    this.state={
      books:[
       
        ]
    }
  }
  componentDidMount(){
    console.log('componentDidMount')
    axios({
      method:'GET',
      url: 'http://localhost:4000/book',
      data:null
    })
    .then(res =>{
      console.log(res.data);
      this.setState( {
        books : res.data
    })
   
    })
    .catch(error =>{
      console.log(error)
    })
  }
  showBooks = () => {
    let result = null;
    var {books}=this.state;
    result = books.map((book, index) => {
      return (
       <div className="card" style={{width: '18rem'}} >
         <img className="card-img-top" src={book.cover} alt="Card image cap"/>
         <div className="card-body">
          <h5 className="card-title">Title : {book.title}</h5>
          <p className="card-text"> Description : {book.description} Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <p className='card-text'>Price : {book.price}</p>
          <a href="#" ><Button type="primary">Add to cart</Button></a>
         </div>
       </div>)
    });
    return result;
  };
  render() {
    return (
      <div className='box'>
        {this.showBooks()}
      </div>
    );
  }
}
export default Books;