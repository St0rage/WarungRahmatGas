import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const Button = ({label, pHorizontal, fSize, type, onPress}) => {
    return (
        <TouchableOpacity style={styles.wrapper(type, pHorizontal)} onPress={onPress}>
            <Text style={styles.label(fSize)}>{label}</Text>
        </TouchableOpacity>
    )
}

export default Button

const styles = StyleSheet.create({
    wrapper: (type, pHorizontal) => ({
        display: 'flex',
        alignSelf: type === 'short' ? 'flex-start' : 'stretch',
        backgroundColor: '#2D52E8',
        paddingHorizontal: pHorizontal ? pHorizontal : 0,
        paddingVertical: 11,
        borderRadius: 6,
        alignItems: 'center',
        justifyContent: 'center'
    }),
    label: (fSize) => ({
        fontSize: fSize,
        fontWeight: '500',
        color: 'white'
    })
})
