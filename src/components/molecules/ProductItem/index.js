import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { MiniCategory } from '../..'
import { DummyProducts1 } from '../../../assets'

const ProductItem = ({type}) => {
    if (type === 'large') {
        return (
        <View style={styles.container(type)}>
        <Image source={DummyProducts1} style={styles.image(type)} />
            <View style={styles.wrapper}>
                <Text style={styles.title}>Aqua 1.5 Liter</Text>
                <Text style={styles.price}>Rp 100.000</Text>
                <View style={styles.miniCategories}>
                    <MiniCategory label="Minuman" />
                    <MiniCategory label="Makanan" />
                    <MiniCategory label="Obat-obatan" />
                    <MiniCategory label="Rokok" />
                    <MiniCategory label="Rokok" />
                    <MiniCategory label="Rokok" />
                </View>
                <View style={styles.action}>
                    <View style={styles.button('update')}>
                        <Text style={styles.buttonLabel('update')}>Ubah</Text>
                    </View>
                    <View style={styles.button('delete')}>
                        <Text style={styles.buttonLabel('delete')}>Hapus</Text>
                    </View>
                </View>
            </View>
        </View>
        )
    }

    return (
        <View style={styles.container(type)}>
            <Image source={DummyProducts1} style={styles.image(type)} />
            <View style={styles.wrapper}>
                <Text style={styles.title}>Aqua 1.5 Liter</Text>
                <Text style={styles.price}>Rp 100.000</Text>
                <View style={styles.miniCategories}>
                    <MiniCategory label="Minuman" />
                    <MiniCategory label="Makanan" />
                    <MiniCategory label="Obat-obatan" />
                    <MiniCategory label="Rokok" />
                    <MiniCategory label="Rokok" />
                    <MiniCategory label="Rokok" />
                </View>
            </View>
        </View>
    )
}

export default ProductItem

const styles = StyleSheet.create({
    container: type => ({
        display: 'flex',
        flexDirection: 'row',
        height: type === 'large' ? 190 : 140,
        backgroundColor: '#EEEEEE',
        borderRadius: 10,
        marginTop: 18
    }),
    image: type => ({
        height: type === 'large' ? 190 : 140,
        width: 100,
        borderRadius: 10
    }),
    wrapper: {
        width: '65%',
        marginLeft: 16,
        paddingTop: 12
    },
    title: {
        fontSize: 15,
        fontWeight: '500',
        color: '#232323',
        marginBottom: 8
    },
    price: {
        fontSize: 11,
        fontWeight: '500',
        color: '#232323',
        marginBottom: 18
    },
    miniCategories: {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row'
    },
    action: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 13
    },
    button: type => ({
        paddingVertical: 6,
        paddingHorizontal: 11,
        backgroundColor: type === 'delete' ? '#E82D2D' : '#2DE834',
        borderRadius: 6,
        marginRight: 8
    }),
    buttonLabel: type => ({
        fontSize: 12,
        fontWeight: '500',
        color: type === 'delete' ? 'white' : 'black'
    })
})
