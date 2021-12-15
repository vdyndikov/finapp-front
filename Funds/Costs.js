import React, { useEffect, useState } from "react";
import { View, Text, SafeAreaView, ScrollView, FlatList } from 'react-native';

export const Costs = props => {
    const [costsArray, setCostsArray] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const renderItem = ({ item }) => (
            <Text>{item.id}-{item.title}</Text>
    )

    useEffect(() => {
        getPosts()
    }, [])
    
    const getPosts = () => {
        setIsLoading(true);
        let URL = 'https://jsonplaceholder.typicode.com/posts';
        fetch(URL).then(res => res.json()).then(res => {
            setCostsArray(res);
        }).finally(() => setIsLoading(false))
    }

    return (
        <SafeAreaView>
            <FlatList
                data={costsArray}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                onRefresh={getPosts}
                refreshing={isLoading}
            />
        </SafeAreaView>
    )
}
