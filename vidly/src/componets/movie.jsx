import React, { Component } from 'react';
import { getMovie, getMovies } from '../services/fakeMovieService';

class Movie  extends Component {
    state = { 
        movies: getMovies()
     } 
     handleDelete =(movie)=>{
        const movies = this.state.movies.filter(m=>m._id != movie._id)
        this.setState({movies : movies        })  
       }
    render() { 
        if (this.state.movies.length === 0 ) return
<p>There are no movie in database </p> ; 

        return (
            <React.Fragment>
                <p>Showing {this.state.movies.length} movies in the database</p>
<h1>Movies componet</h1>
<table className='table   table-striped '> 


<thead>
    <tr className='table-dark'>
        <th>Title</th>
        <th>Genre</th>
        <th>Stock</th>
        <th>Rate</th>
        <th>Delete</th>
    </tr>
</thead>
<tbody>
    {this.state.movies.map(movie => (
    <tr key={movie._id}> 
        <td>{movie.title}</td>
        <td>{movie.genre.name}</td>
        <td>{movie.numberInStock}</td>
        <td>{movie.dailyRentalRate}</td>
        <td><button onClick={()=> this.handleDelete(movie)} className='btn btn-danger btn-sm'> Delete </button></td>
        
    </tr>
    ))}
</tbody>

</table>
            </React.Fragment>
        );
    
}
}
export default Movie;