import React, { useState } from "react";
import { StyleSheet, Text, View } from 'react-native';
import CheckBox from 'expo-checkbox';
import { Octicons } from '@expo/vector-icons';

const Task = (props) => {

    const [isChecked, setChecked] = useState(false);

    return (
        <View style={styles.taskItem}>
            <View style={styles.itemLeft}>
                <CheckBox style={styles.checkBox} value={isChecked} onValueChange={setChecked} />
                <Text style={isChecked ? styles.taskText : styles.unCheckedTaskText}>{props.text}</Text>
            </View>
            <View >
                <Octicons name="trash" size={24} color="black" />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    taskItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
        padding: 15,
        borderRadius: 10,
        borderBottomWidth: 1,
        borderColor: 'eee',
    },
    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    checkBox: {
        marginRight: 15,
        borderColor: '#000',
    },
    taskText: {
        maxWidth: '80%',
        fontSize: 14,
        letterSpacing: 2,
        color: '#aaa', 
        textDecorationLine: 'line-through',
    },
    unCheckedTaskText: {
        maxWidth: '80%',
        fontSize: 15,
        letterSpacing: 2,
        color: '#000',
    }
});

export default Task;