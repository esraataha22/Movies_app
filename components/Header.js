import React, { useState } from "react";
import { View, Text , StyleSheet , Button } from "react-native";

import style from"./Styles";
// import { Button } from "@rneui/base";

function Header (props){
    const[title, setTitle] = useState("Hello")

    return(
        <View style={style.header}> 
            <Text style={style.myText}> {title} </Text> 
            <Text> {props.myTitle} </Text>
        </View>
    )

}
const style = StyleSheet.create({
    myText: {
      color: "red",
      fontSize: 20,
      fontWeight: "bold"
    },

    header: {
        backgroundColor: "#efefef", 
        alignItems: "center",
        justifyContent:  "center",
        height: 80
    }
})
export default Header;