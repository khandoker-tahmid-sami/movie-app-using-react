import React, { Component } from 'react'
import { getMovies} from '../services/fakeMovieService'
import { getGenres } from '../services/fakeGenreService'
import Pagination from './common/Pagination'
import { paginate } from '../utils/Paginate'
import ListGroup from './common/ListGroup'
import MoviesTable from './MoviesTable'
import { Link } from 'react-router-dom'
import _ from "lodash"
import Like from './common/Like'


class Movies extends Component {
  constructor(props) {
    super(props)
  
    this.state = { 
       movies : [],
       genres : [],
       currentPage : 1,
       pageSize : 4,
       sortColumn: {path: "title", order: "asc"}
    }
  }

  componentDidMount(){
    const genres = [{_id: "", name : "All Genres"}, ...getGenres()]
    this.setState({movies: getMovies(), genres })
  }

  handleDelete =(movie) =>{
    const movies = this.state.movies.filter(m => m._id !== movie._id)
    this.setState({movies})
  }
  handleLike = (item) =>{
    const movies = [...this.state.movies]
    const index = movies.indexOf(item)
    // movies[index] = {...movies[index]}
     movies[index].liked = !movies[index].liked;
    this.setState({movies})
    console.log("liked clicked",  movies[index])
  }
  handlePageChange = (page) =>{
    this.setState({
      currentPage : page
    })
  }
  handleGenreSelect = (genre) => {
    this.setState({
      selectedGenre : genre,
      currentPage : 1
    })
  } 
  handleSort = (sortColumn) =>{
    this.setState({sortColumn})
  }
  gerPagedData = () =>{
    const {pageSize, currentPage, sortColumn, selectedGenre, movies: allMovies} = this.state;
    const filtered = selectedGenre && selectedGenre._id ? allMovies.filter(m => m.genre._id === selectedGenre._id) : allMovies
    // console.log(filtered)
    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order])
    const movies = paginate(sorted, currentPage, pageSize )
    // console.log(movies)
    return {totalCount: filtered.length, data: movies }
  }
  render() {
    const {length : count} = this.state.movies;
    const {pageSize, currentPage, sortColumn} = this.state;
    if(count == 0) return <p>There are no movies in the database</p>
    const {totalCount, data: movies} = this.gerPagedData()
    return (
      <div className='row'>
        <div className='col-3'>
          <ListGroup 
            items={this.state.genres} 
            selectedItem={this.state.selectedGenre}
            onItemSelect={this.handleGenreSelect}
          />
        </div>
        <div className='col'>
          <Link 
          to="/movies/new"
          className='btn btn-primary mb-3'>
            New Movie
          </Link>
        <p>There are {totalCount} in the database</p>
          <MoviesTable 
            movies={movies} 
            sortColumn={sortColumn}
            onDelete={this.handleDelete} 
            onLike={this.handleLike}
            onSort = {this.handleSort}
          />
          <Pagination 
            itemsCount={totalCount} 
            pageSize={pageSize} 
            currentPage={currentPage}
            onPageChange={this.handlePageChange} 
          />
        </div>
      </div>
    )
    
  }
}

export default Movies