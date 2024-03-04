import { useDispatch, useSelector} from "react-redux";
import { Remove } from "../src/store/RemoveAction";
import {Counter} from "../src/store/CounterAction";
import { ScrollView , StyleSheet , Text ,Button} from "react-native-web";
import { Card } from "@rneui/themed";

function Favourite(){
    const add = useSelector((state) => state.favourits)

    const dispatch = useDispatch()

    const remove =(movie) => {
        const index=add.findIndex (item=>item.id == movie.id) 
        console.log(movie)
        if(index > -1)
        {
            dispatch(Remove(add.splice (index, 1)))
            dispatch(Counter(add.length-1))
        }
    }
    return(
        <>
        <ScrollView>

        {add.map((myMovie) => {
            return (
                <>
                    <Card key={myMovie.id}>
                        <Card.Image style={style.img}
                            source={{
                                uri:
                                    `https://image.tmdb.org/t/p/w500${myMovie.poster_path}?api_key={movie.key}`

                            }}
                        />
                        <Text> {myMovie.overview}  </Text>
                        <Card.Title style={style.text} > {myMovie.original_title}  </Card.Title>
                        <br/>
                        <Button onPress={() => remove(myMovie)} title="Delete"></Button>
                    </Card>
            </>
            )
       } )} 
     </ScrollView>

        </>
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
export default Favourite