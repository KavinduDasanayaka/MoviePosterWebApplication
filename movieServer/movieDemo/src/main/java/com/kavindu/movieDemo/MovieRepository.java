package com.kavindu.movieDemo;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface MovieRepository extends MongoRepository <Movie, ObjectId>{

    Optional<Movie> findMovieByimdbId(String imdbId);    //FrameWork ek dannawa imdb eken ganna mongodb ekenn //Model Movie class eke thiyana ona property ekakin mehema karanna puluwan..
}
