package com.kavindu.movieDemo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.DocumentReference;

import java.util.List;

@Document(collection = "movies")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Movie {

    @Id
    private ObjectId id;
    private String imdbId;

    private String title;

    private String releaseDate;

    private String trailerLink;

    private List<String> genres;

    private String poster;

    private List<String> backdrops;

    @DocumentReference //Only save the review Ids..There are many ways to do this.Research
    private List<Review> reviewIds;
}
