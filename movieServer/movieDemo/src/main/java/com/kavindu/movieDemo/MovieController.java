package com.kavindu.movieDemo;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
    @RequestMapping("/api/v1/movies")
public class MovieController {

    @Autowired
    private MovieService movieService;
    @GetMapping
    public ResponseEntity<List<Movie>> getAllMovies(){
        return new ResponseEntity<List<Movie>>(movieService.allMovies(),HttpStatus.OK);
    }

//    @GetMapping("/{id}")
//    public ResponseEntity<Optional<Movie>> getMovie(@PathVariable("id") ObjectId objectId){
//        return new ResponseEntity<Optional<Movie>>(movieService.getSingleMovie(objectId),HttpStatus.OK);//Optional danne,Samaharavita database eke nathi objectid ekk avoth null wena nisa
//    }

    @GetMapping("/{imdb}")
    public ResponseEntity<Optional<Movie>> getMovieImdb(@PathVariable("imdb") String imdbId){
        return new ResponseEntity<Optional<Movie>>(movieService.getMovieByImdb(imdbId),HttpStatus.OK);
    }


}
