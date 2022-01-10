import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { IconBurgerMenu } from '../../../assets'
import { Gap } from '../../atoms'

const MainHeader = () => {
    return (
        <View style={styles.container}>
            <IconBurgerMenu style={styles.burgerMenu} />
            <Text style={styles.title}>Warung Rahmat Gas</Text>
        </View>
    )
}

export default MainHeader

const styles = StyleSheet.create({
    container: {
        paddingTop: 30,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        // marginHorizontal: 20
    },  
    burgerMenu: {
        width: 32,
        height: 32,
        marginRight: 30
    },
    title: {
        fontSize: 20,
        fontWeight: '500',
        color: '#232323'
    }
})
