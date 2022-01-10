import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const CategoryButton = ({label, active}) => {
    return (
        <TouchableOpacity style={styles.wrapper(active)}>
            <Text style={styles.label}>{label}</Text>
        </TouchableOpacity>
    )
}

export default CategoryButton

const styles = StyleSheet.create({
    wrapper: active => ({
        backgroundColor: active ? '#2D52E8' : '#E82D2D',
        paddingVertical: 11,
        paddingHorizontal: 12,
        borderRadius: 10,
        marginRight: 5,
        height: 45
    }),
    label: {
        fontSize: 15,
        fontWeight: '500',
        color: 'white',
        textAlign: 'center'
    }
})
