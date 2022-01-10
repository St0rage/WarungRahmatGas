import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button } from '../..'

const ProductInfo = ({type}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>Total Produk : 102</Text>
            {
                type !== 'no-button' && (
                    <Button pHorizontal={10} type="full" label="Tambah Produk" fSize={10} />
                )
            }
        </View>
    )
}

export default ProductInfo

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    label: {
        fontSize: 12,
        fontWeight: '500',
        color: 'black'
    }
})
