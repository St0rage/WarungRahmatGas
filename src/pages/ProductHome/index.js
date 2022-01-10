import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { Gap, MainHeader, Search, CategoryButton, ProductInfo, Button, ProductItem, Drawer } from '../../components';

const ProductHome = ({navigation}) => {
    return (
        <View style={styles.container}>
            <MainHeader />
            <Gap height={24} />
            <Search />
            <Gap height={18} />
            <View style={styles.categories}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoriesWrapper}>
                    <CategoryButton label="Semua" active />
                    <CategoryButton label="Makanan" />
                    <CategoryButton label="Minuman" />
                    <CategoryButton label="Rokok" />
                    <CategoryButton label="Obat-obatan" />
                    <CategoryButton label="Obat-obatan" />
                    <CategoryButton label="Obat-obatan" />
                    <CategoryButton label="Obat-obatan" />
                    <CategoryButton label="Obat-obatan" />
                    <CategoryButton label="Obat-obatan" />
                </ScrollView>
            </View>
            <Gap height={22} />
            <ProductInfo />
            <Gap height={26} />
            <ScrollView showsVerticalScrollIndicator={false} style={styles.items}>
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
            </ScrollView>
        </View>
    )
}

export default ProductHome

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        display: 'flex',
        flexGrow: 1,
        backgroundColor: 'white'
    },
    categoriesWrapper: {
        display: 'flex',
        flexDirection: 'row',
    },
    items: {
        maxHeight: '55%'
    },
    drawer: {
        position: 'absolute',
        zIndex: 99
    }
})
