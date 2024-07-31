import React, { useState, useEffect } from 'react';
import { getMovies } from '../services/fakeMovieService';
import { getGenres } from '../services/fakeGenreService';
import Pagination from './pagination';
import ListGroup from './listGroup';
import MoviesTable from './moviesTable';
import SearchBox from './searchBox';

const Movie = () => {
    const [movies, setMovies] = useState([]);
    const [pageSize] = useState(6);
    const [currentPage, setCurrentPage] = useState(1);
    const [genres, setGenres] = useState([]);
    const [selectedGenre, setSelectedGenre] = useState(null);
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        const fetchedMovies = getMovies();
        const fetchedGenres = [{ _id: "", name: "All Genres" }, ...getGenres()];
        setMovies(fetchedMovies);
        setGenres(fetchedGenres);
    }, []);

    const handleDelete = (movie) => {
        const updatedMovies = movies.filter(m => m._id !== movie._id);
        setMovies(updatedMovies);
    };

    const handlePageChange = (page) => setCurrentPage(page);

    const handleSearch = (query) => {
        setSearchQuery(query);
        setSelectedGenre(null);
        setCurrentPage(1);
    };

    const handleSelectGenre = (genre) => {
        setSelectedGenre(genre);
        setSearchQuery("");
        setCurrentPage(1);
    };

    const getPagedData = () => {
        let filteredMovies = movies;

        if (searchQuery) {
            filteredMovies = movies.filter(movie =>
                movie.title.toLowerCase().includes(searchQuery.toLowerCase())
            );
        } else if (selectedGenre && selectedGenre._id) {
            filteredMovies = movies.filter(movie => movie.genre._id === selectedGenre._id);
        }

        const startIndex = (currentPage - 1) * pageSize;
        const paginatedMovies = filteredMovies.slice(startIndex, startIndex + pageSize);

        return { totalCount: filteredMovies.length, data: paginatedMovies };
    };

    const { totalCount, data: paginatedMovies } = getPagedData();

    if (totalCount === 0) return <p>There are no movies in the database.</p>;

    return (
        <div className='background'>
            <div className='row'>
                <div className='col-3'>
                    <ListGroup
                        items={genres}
                        onSelectGenre={handleSelectGenre}
                        selectedItem={selectedGenre}
                    />
                </div>
                <div className='col'>
                    <SearchBox value={searchQuery} onChange={handleSearch} />
                    <p>Showing {totalCount} movies in the database</p>
                    <MoviesTable
                        movies={paginatedMovies}
                        onDelete={handleDelete}
                    />
                    <Pagination
                        itemCount={totalCount}
                        pageSize={pageSize}
                        onPageChange={handlePageChange}
                        currentPage={currentPage}
                    />
                </div>
            </div>
        </div>
    );
};

export default Movie;
