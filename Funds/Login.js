import React, { Component, useState } from "react";
import { StyleSheet, Text, SafeAreaView, TextInput, Button } from 'react-native';
import  AsyncStorage  from "@react-native-async-storage/async-storage";

export default function Login() {
    const [userName, sestUserName] = useState('');
    const [password, sestpassword] = useState('');

    const storeToken = async (value) => {
        try {
            await AsyncStorage.setItem('token', value)
        } catch (error) {
            console.log('cant save token');
        }
    }

    async function clearToken() {
        AsyncStorage.removeItem('token');
    }

    async function submitHandler() {
        const requestOptions = {
            method: 'POST',
            Headers: {

            },
            body: JSON.stringify({
                "Username": userName,
                "Password": password
            })
        }
        fetch('http://localhost:7000/login').then(res => res.json()).then(res => {
            if (res !== '' && res !== 'error') {
                storeToken(res).then();
            } else {
                console.log('GDR ERROR or EMPTY RESULT');
            }
        }).catch((error) => console.log('GDR ERROR or EMPTY RESULT'));
    }
    return (
        <SafeAreaView style = {styles.container}>
            <TextInput
                defaultValue={userName}
                onChangeText={text => setUserName(text)}
                placeholder={"username"}
                style={styles.input}
            />
            <TextInput
                defaultValue={password}
                onChangeText={pass => setPassword(pass)}
                placeholder={"password"}
                style={styles.input}
                secureTextEntry={true}
            />
            <Button
                title={'login'}
                style={styles.button}
                onPress={submitHandler}
            />
            <Button
                title={'log out'}
                style={styles.button}
                onPress={clearToken}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        width: 300,
        height: 48,
        padding: 10,
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 10
    },
    button: {
        margin: 20
    }
})
