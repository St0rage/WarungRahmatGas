import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'

const Search = () => {
    return (
        <View>
            <TextInput 
                style={styles.input}
                placeholder='Cari Barang...'
            />
        </View>
    )
}

export default Search

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderRadius: 14,
        borderColor: '#D5D5D5',
        paddingVertical: 8,
        paddingHorizontal: 10
    }
})
