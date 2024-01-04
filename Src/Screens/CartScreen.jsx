import { View, Text, Image, TouchableOpacity, FlatList, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import AntDesign from 'react-native-vector-icons/AntDesign'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { myColors } from '../Utilities/Mycolors'
import { useDispatch, useSelector } from 'react-redux'
import { decrementsQuantity, incrementsQuantity, removeFrom } from '../../Redux/CartSlice'

const CartScreen = () => {
    const storeData = useSelector((state) => state.CartSlice);
    const dispatch = useDispatch()

    let amount=0
    storeData.forEach(element=>{
        amount+=element.price
    });
    return (
        <SafeAreaView style={{ flex: 1, paddingHorizontal: 10, backgroundColor: 'white', gap: 15 }}>
            <Text style={{ textAlign: 'center', fontSize: 24, fontWeight: '500' }}>My Cart</Text>
            <View style={{flex:0.9}}>
                <FlatList
                   showsVerticalScrollIndicator={false}
                    style={{}}
                    data={storeData}
                    renderItem={({ item, index }) => (
                        <View style={{ height: responsiveHeight(18), borderBottomColor: '#E3E3E3', borderBottomWidth: 2, flexDirection: 'row' }}>
                            <View style={{ flex: 0.35, alignItems: 'center', justifyContent: 'center' }}>
                                <Image style={{ height: 120, width: 120, resizeMode: 'contain' }} source={{ uri: item.img }} />
                            </View>
                            <View style={{ flex: 0.7, paddingHorizontal: 10, paddingVertical: 20 }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{item.name}</Text>
                                    <AntDesign name='close' color={'gray'} size={24} onPress={() => { dispatch(removeFrom(item)) }} />
                                </View>
                                <Text style={{ color: 'gray', fontSize: 17, marginTop: 5 }}>{item.pieces}, price</Text>
                                <View style={{ alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', marginTop: 10 }}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10, }}>
                                        <FontAwesome5 onPress={() => { dispatch(decrementsQuantity(item)) }} name='minus-circle' size={28} color={myColors.primary} />
                                        <Text style={{ fontSize: 17, }}>{item.quantity}</Text>
                                        <FontAwesome5 onPress={() => {
                                            if (item.quantity == 7) {

                                            } else {
                                                dispatch(incrementsQuantity(item))
                                            }
                                        }} name='plus-circle' size={28} color={myColors.primary} />
                                    </View>
                                    <Text style={{ fontSize: 22, fontWeight: '600' }}>{'\u20B9'}{item.quantity * item.price}</Text>
                                </View>
                            </View>
                        </View>
                    )}
                />
            </View>
            <View >
                <TouchableOpacity onPress={() => { }} activeOpacity={0.8} style={styles.basketbtn}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 30 }}>
                        <Text style={styles.basketText}>Go To Checkout</Text>
                        <Text style={{ fontSize: 17, fontWeight: '500', color: 'white' }}>{amount}</Text>

                    </View>
                </TouchableOpacity>
            </View>






        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    basketbtn: {
        backgroundColor: myColors.primary,
        borderRadius: 10,
        height: 70,
        justifyContent: 'center',
        alignItems: 'center',
    },
    basketText: {
        fontSize: 18,
        color: 'white',
        fontWeight: '700'
    }
})
export default CartScreen