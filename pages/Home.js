import React from "react";
import * as Yup from "yup";
import { Formik } from "formik";
import { Text, View, StyleSheet, Button, TextInput } from "react-native";


function Home({ navigation }) {
    
    return (
        <View style={style.header}> .
            <Text style={style.myText} >Welcome to Movies App </Text>
            <br/> 
            <br/>
            <br />
            <Formik
                initialValues={{ username: "", password: "" }}
                validationSchema={Yup.object({
                    username: Yup.string()
                        .min(2, 'Must be 2 characters or more')
                        .required('Required'),
                    password: Yup.string()
                        .min(8, 'Password must be 8 characters or more')
                        .required('Required'),
                })}
                onSubmit={(values) => 
                    navigation.navigate("Movies")} >                    
                {props => (

                    <View>
                        <TextInput style={style.txtbox} onChangeText={props.handleChange("username")} placeholder="  Enter username" />

                        {props.touched.username && props.errors.username ? (<Text style={{ color: "red", fontSize: 12 }}>{props.errors.username} </Text>) : null}
                        <br />
                        <TextInput style={style.txtbox} onChangeText={props.handleChange("password")} placeholder="  Enter password" />

                        {props.touched.password && props.errors.password ? (<Text style={{ color: "red", fontSize: 12 }}>{props.errors.password} </Text>) : null}
                        <br />

                        <Button title="Submit" onPress={props.handleSubmit} color={'peru'}>  </Button>
                    </View>
                )}
            </Formik>

            <br/>
            {/* <Button title="Show Movies" color={"peru"}
                onPress={() => navigation.navigate("Movies")} /> */}
        </View>


    )
}
const style = StyleSheet.create({
    myText: {
        color: "brown",
        fontSize: 30,
        fontWeight: "bold",
        textShadowRadius:10,
        textShadowColor: 'brown'
    },

    header: {
        // backgroundColor: "cornsilk",   
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
    },
    txtbox: {
            borderWidth: 1,
            height: 40,
            width: 300,
            borderRadius: 25,
            backgroundColor: 'lightyellow'
    
        }
    })
    

export default Home;