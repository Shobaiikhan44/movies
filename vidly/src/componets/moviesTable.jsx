import React, { Component } from 'react';


const MoviesTable = (props) => {
    const {movies , onDelete , onSort} = props ; 
    return ( 
        <table className="table table-striped table-dark">
                    <thead>
                        <tr className="table-dark">
                            <th onClick={()=>onSort('title')}>Title</th>
                            <th onClick={()=>onSort('genre.name')}>Genre</th>
                            <th onClick={()=>onSort('numberInStock')}>Stock</th>
                            <th onClick={()=>onSort('dailyRentalRate')}>Rate</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {movies.map((movie) => (
                            <tr key={movie._id}>
                                <td>{movie.title}</td>
                                <td>{movie.genre.name}</td>
                                <td>{movie.numberInStock}</td>
                                <td>{movie.dailyRentalRate}</td>
                                <td>
                                    <button onClick={() => onDelete(movie)} className="btn btn-danger btn-sm">
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
     );
}
 
export default MoviesTable;