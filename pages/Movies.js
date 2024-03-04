import React, { useEffect, useState } from "react";
import { View, ScrollView, StyleSheet, Button } from "react-native";
import axios from "axios";
import { Card } from "@rneui/themed";
import { useSelector, useDispatch } from "react-redux";
import { AddToFav } from "../src/store/FavAction";
import { Counter } from "../src/store/CounterAction";
function Movies({ navigation }) {

    const add = useSelector((state) => state.favourits)
    // const myFav = useSelector((state) => state.addtofav)
    const dispatch = useDispatch()
    const addfav = (movie) => {
        const isadded = add.includes(movie)
        if (!isadded) {
            dispatch(AddToFav(add.push(movie)))
            dispatch(Counter(add.length))
        }
    }
    const [movies, setMovies] = useState([])
    useEffect(() => {
        axios.get("https://api.themoviedb.org/3/movie/popular?api_key=9b743af1d4fde1d65af33c40dcccce87")
            .then((res) => setMovies(res.data.results))
            .catch((err) => alert(err))
    }, [])

    return (
        <>
            <ScrollView>
                <View>
                    <Button onPress={()=>navigation.navigate('Favourite')} title= "Favourites"></Button>
                    {movies.map((movies, index) => {
                        return (
                            <Card key={index}>
                                <Card.Image style={style.img}
                                    source={{
                                        uri:
                                            `https://image.tmdb.org/t/p/w500${movies.poster_path}?api_key={movie.key}`
                                    }}
                                />
                                <Card.Title style={style.text}>
                                    {movies.original_title}
                                </Card.Title>
                                <Button onPress={() => addfav(movies)} title="add to fav"></Button>
                                    <br/>
                                <Button title="Show details" color={"peru"}
                                    onPress={() => navigation.navigate("MovieDetails", { id: movies.id })} />
                            </Card>
                        )
                    })}
                </View>
            </ScrollView>
        </>
    )
}
const style = StyleSheet.create({
    img: {
        height: 300,
        width: 250,
        justifyContent: 'space-around',
        marginLeft: '40%'
    },
    text: {
        fontSize: 20,
        color: 'brown'
    },
})
export default Movies



