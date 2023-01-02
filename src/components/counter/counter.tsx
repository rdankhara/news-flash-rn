import React, { useState } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export const Counter: React.FC = (props) => {
    const [count, setCount] = useState(1);

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={[styles.button, styles.orange]} 
                onPress={() => setCount(prev => prev - 1)}
                >
                    <Text>Decrement</Text>
                </TouchableOpacity>
                <View style={styles.counter}>
                    <Text style={styles.countText}>{count}</Text>
                </View>
            <TouchableOpacity 
                style={[styles.button, styles.green]}
                onPress={() => setCount(prev => prev + 1)}>
                <Text>Increment</Text>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    red: {backgroundColor: 'red'},
    button: {height: 30, alignItems: 'center', justifyContent: 'center', color: 'red', fontWeight: 'bold'},
    green: {backgroundColor: 'green'},
    orange: {backgroundColor: 'orange'},
    counter: {alignSelf: 'center', height: 30, justifyContent: 'center', },
    countText: {color: "blue", fontSize: 16, fontWeight: '800'}
})