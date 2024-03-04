import { Card } from "@rneui/themed";
import axios from "axios";
import React, { useEffect, useState } from "react";
import {Text, StyleSheet} from "react-native";

function MovieDetails({navigation, route}){
    const id = route.params.id;

    const [movie, setMovie] = useState({});

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=9b743af1d4fde1d65af33c40dcccce87`)
        .then((res) => setMovie(res.data))
        .catch((err) => alert(err))
    }, [])

    return(
        <Card> 
            <Card.Image style={style.img}
                source={{
                    uri:
                    `https://image.tmdb.org/t/p/w500${movie.poster_path}?api_key={movie.key}`

                    }}
                />
            <Text> {movie.overview}  </Text>
            <Card.Title style={style.text} > {movie.original_title}  </Card.Title>

        </Card>
    )
}

const style = StyleSheet.create({
    img: {
        height:300,
        width:250 ,
        justifyContent:'space-around' ,
        marginLeft: '40%'      
    },
    text:{
        fontSize:20,
        color: 'brown'
    },
})
export default MovieDetails















