import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const MiniCategory = ({label}) => {
    return (
        <View style={styles.wrapper}>
            <Text style={styles.label}>{label}</Text>
        </View>
    )
}

export default MiniCategory

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: '#2D52E8',
        display: 'flex',
        alignSelf: 'flex-start',
        paddingHorizontal: 5,
        paddingVertical: 3,
        borderRadius: 10,
        marginRight: 5,
        marginBottom: 8,
        alignItems: 'center',
        justifyContent: 'center'
    },
    label: {
        fontSize: 10,
        fontWeight: '500',
        color: 'white',
    }
})
