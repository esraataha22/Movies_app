import axios from "axios"

export const MovieAction = (data) => (dispatch) => {
    return axios.get("https://api.themoviedb.org/3/movie/popular?api_key=9b743af1d4fde1d65af33c40dcccce87")
    .then((res) => dispatch({
        type: "MOVIES" ,
        payload: res.data.results
    }))
    .catch((err) => console.log(err))
}