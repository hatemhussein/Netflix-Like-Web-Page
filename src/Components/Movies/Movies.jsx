import React, { Component } from 'react'
import Movie from './Movie';

export default class Movies extends Component {
  state={
    movies:[
      {id:0, name:'Werewolf by Night', img: "1.jpg"},
      {id:1, name:'Luckiest Girl Alive', img:"2.jpg"},
      {id:2, name:'Hellraiser', img:"3.jpg"},
      {id:3, name:"Mr. Harrigan's Phone", img:"4.jpg"},
      {id:4, name:'Catherine Called Birdy', img:"5.jpg"},
      {id:5, name:'Old People', img:"6.jpg"}
  ]
  }
  render() {
    let {movies} = this.state;
    return (
      <section className='container mt-5'>
        <h1>Trending movies</h1>
        <div className="row justify-content-center p-3">
          {movies.map((movie)=>{
            return <Movie movie={movie} key={movie.id}/>
          })}

        </div>
        
      </section>
    )
  }
}
