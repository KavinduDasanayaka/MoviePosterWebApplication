package com.kavindu.movieDemo;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class MovieService {

    @Autowired
    private MovieRepository movieRepository;

    public Optional<Movie> getMovieByImdb(String imdbId) {
        return movieRepository.findMovieByimdbId(imdbId);
    }

    public List<Movie> allMovies(){

        return movieRepository.findAll(); //This method is in MongoRepository class.It returns lists ekt pass krl thiyana ek _ MongoRepository <Movie, ObjectId>.This passed Objects as list will be returned(Movie)
    }

    public Optional<Movie> getSingleMovie(ObjectId objectId) {
        return movieRepository.findById(objectId);
    }

}
