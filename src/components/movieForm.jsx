import React from 'react'
import Joi from "joi-browser"
import Form from './common/form'
import { getMovie, saveMovie } from '../services/fakeMovieService'
import { getGenres } from '../services/fakeGenreService'
import Input from './common/input'
import Select from "./common/select"

class MovieForm extends Form {
  constructor(props) {
    super(props)
  
    this.state = {
       data : {
        title :"",
        genreId : "",
        numberInStock : "",
        dailyRentalRate : ""
       },
       genres : [],
       errors : {}
    }
  }

  schema = {
    _id : Joi.string(),
    title : Joi.string()
    .required()
    .label("Title"),
    genreId : Joi.string()
    .required()
    .label("Genre"),
    numberInStock : Joi.number()
    .required()
    .min(0)
    .max(100)
    .label("Number in stock"),
    dailyRentalRate : Joi.number()
    .required()
    .min(0)
    .max(10)
    .label("Daily rental rate")
}

componentDidMount(){
  const genres = getGenres()
  this.setState({genres})
  console.log(genres)
  const movieId = this.props.match.params.id;
  console.log(movieId)
  if(movieId === "new") return;

  const movie = getMovie(movieId);
  if(!movie) return this.props.history.replace("/not-found")

  this.setState({data : this.mapToViewModel(movie)});
}

mapToViewModel(movie){
  return {
    _id : movie.id,
    title : movie.title,
    genreId : movie.genre_id,
    numberInStock : movie.numberInStock,
    dailyRentalRate : movie.dailyRentalRate
  };
}

doSubmit = () =>{
  saveMovie(this.state.data);

  this.props.history.push("/movies");
}

  render() {
    const {data, errors} = this.state;
    return (
      <div>
        <h1>Movie Form</h1>
        <form onSubmit={this.handleSubmit}>
        <Input
            name="title"
            label= "Title"
            value={data.title}
            onChange={this.handleChange}
            type="text"
            error={errors.title}
            />
        <Select 
            name="genreId"
            label="Genre"
            value={data.genreId}
            options={this.state.genres}
            onChange={this.handleChange}
            error={errors.genreId}
            />
          <Input
            name="numberInStock"
            label= "Number in stock"
            value={data.numberInStock}
            onChange={this.handleChange}
            type="number"
            error={errors.numberInStock}
            />
          <Input
            name="dailyRentalRate"
            label= "Daily rental rate"
            value={data.dailyRentalRate}
            onChange={this.handleChange}
            type="number"
            error={errors.dailyRentalRate}
            />
            {this.renderButton("save")}
        </form>
      </div>
    )
  }
}

export default MovieForm