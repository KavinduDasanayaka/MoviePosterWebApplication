import './App.css'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Layout from './component/Layout.jsx';
import {Routes,Route} from 'react-router-dom'; 
import Home from './component/home/home';
import Header from './component/header/Header.jsx';
import Trailer from './component/trailer/Trailer.jsx';
import Reviews from './component/reviews/Reviews.jsx';

function App() {
  const [movies,setMovies] = useState([]) //If keep a state of array dont forget to []
  const [reviews, setReviews] = useState([]);
  const [movie, setMovie] = useState();

  //Function to change the state of the movies variable
  //When react monitor the changes in the movies variable, it will re-render the component
  //When the data is retrived successfully from the api this function will be called
  //async functio is needed.Dont wanna block the UI thread while data is retrieved.
  const getMovies = async () => {
    try {
      const response = await axios.get('/api/v1/movies'); // Calls the backend route
      setMovies(response.data); // Update the state of the movies variable //Doent return nothing juat update the state of the movies variable.
      console.log(response.data); // Process the movie data here
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  };

  useEffect(() => {
    getMovies();
  }, []); // When app component first load, getMovies function will be called.This is what the empty array does.
          //When load always get data from the api and update the state of the movies variable(Always new data will be displayed) 
          //Make sure the updating(Calling the api will be done only once right after the app is loaded.The empty array does this)

  const getMovieData = async (movieId) => {

    try 
    {
        const response = await axios.get(`/api/v1/movies/${movieId}`);

        const singleMovie = response.data;

        setMovie(singleMovie);

        setReviews(singleMovie.reviews);
        

    } 
    catch (error) 
    {
      console.error(error);
    }

  }

  return (
    <div className='App'>
    <Header/>
 {/* Visiting /dashboard/overview renders the Layout component with the Overview component inside it.
 Visiting /dashboard/settings renders the Layout component with the Settings component inside it. <outlet/ kiyana thana>*/}
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Nested routes */}
          <Route path="/" element={<Home movies = {movies}/>}/>
          <Route path="/Trailer/:ytTrailerId" element={<Trailer/>}/>
          <Route path="/Reviews/:movieId" element ={<Reviews getMovieData = {getMovieData} movie={movie} reviews ={reviews} setReviews = {setReviews} />}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App
