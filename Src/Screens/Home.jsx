import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Homeicon from '../Components/Homeicon'
import Homesearch from '../Components/Homesearch'
import HomeBanner from '../Components/HomeBanner'
import ProductsTitle from '../Components/ProductsTitle'
import ProductCards from '../Components/ProductCards'

const Home = () => {
  return (

    <SafeAreaView style={{ flex: 1, backgroundColor: 'white',  }}>
      <ScrollView showsVerticalScrollIndicator={false} style={{flex:1, paddingHorizontal: 20, paddingTop: 10}}>
        <View style={{gap: 20,paddingBottom:20}}>
          <Homeicon />
          <Homesearch />
          <HomeBanner />
          <ProductsTitle title='Exclusive Offer' />
          <ProductCards />
          <ProductsTitle title='Best Selling' />
          <ProductCards />
        </View>
      </ScrollView>

    </SafeAreaView>

  )
}

export default Home