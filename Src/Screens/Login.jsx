import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput, Image, Alert } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { myColors } from '../Utilities/Mycolors'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { useNavigation } from '@react-navigation/native'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { authentication } from '../../Firebase'



const Login = () => {
  const nav = useNavigation()
  const [isVisible, setisVisible] = useState(true)

  const [Loginuser, setLoginuser] = useState({
    email: '',
    password: ''
  });
  const { email, password } = Loginuser


  const loginuser = () => {
    const trimmedEmail = email.trim();
    if (!trimmedEmail || !password) {
      Alert.alert('Please enter both email and password.');
      return;
    }

    signInWithEmailAndPassword(authentication, trimmedEmail, password)
      .then(() => {
        nav.replace('Home')
      })
      .catch((error) => {
        Alert.alert(error.message);
      });
  };
  return (

    <SafeAreaView style={styles.MainParent}>
      <ScrollView style={styles.scrlview}>
        <Image style={styles.imgLogo} source={require('./../../assets/coconut-oil.png')} />
        <View style={{ paddingHorizontal: 20, marginTop: 50 }}>
          <Text style={styles.SinUpText}>Login</Text>
          <Text style={{ fontSize: 16, fontWeight: '400', color: 'gray', marginTop: 10 }}>Enter your emails and password</Text>

          <Text style={styles.inputlabel}>Email</Text>
          <TextInput value={email} onChangeText={(val) => setLoginuser({ ...Loginuser, email: val })} keyboardType='email-address' style={{ borderBottomWidth: 2, borderColor: '#E3E3E3', fontSize: 16, marginTop: 15 }} />


          <Text style={styles.inputlabel}>Password</Text>
          <View style={styles.passIconView}>

            <TextInput value={password} onChangeText={(val) => setLoginuser({ ...Loginuser, password: val })} secureTextEntry={isVisible} maxLength={6} keyboardType='ascii-capable' style={{ fontSize: 16, marginTop: 15, flex: 0.9 }} />
            <FontAwesome5 onPress={() => setisVisible(!isVisible)} name={isVisible ? 'eye-slash' : 'eye'} color={'black'} size={24} />
          </View>

          <Text style={styles.frgotpass}>
            Forgot Password?
          </Text>

          <TouchableOpacity onPress={loginuser} style={styles.Loginbtn}>
            <Text style={styles.Logintxt}>Log In</Text>
          </TouchableOpacity>
          <View style={styles.BottomView}>
            <Text style={{ fontSize: 16, }}>Don't have an account?</Text>
            <TouchableOpacity onPress={() => nav.navigate('Signup')}>
              <Text style={styles.sigupuptxt}>SignUp</Text>
            </TouchableOpacity>
          </View>

        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  MainParent: {
    flex: 1,
    backgroundColor: myColors.secondary
  },
  scrlview: {
    flex: 1,
    paddingTop: 30
  },
  imgLogo: {
    alignSelf: "center",
    height: 80,
    width: 80
  },
  SinUpText: {
    color: myColors.third,
    fontSize: 24,
    fontWeight: '500'
  },
  inputlabel: {
    fontSize: 16,
    fontWeight: '500',
    color: 'gray',
    marginTop: 40
  },
  passIconView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 2,
    borderColor: '#E3E3E3',
    alignItems: 'center'
  },
  frgotpass: {
    fontSize: 14,
    fontWeight: '400',
    color: 'black',
    marginTop: 15,
    textAlign: 'right'
  },
  Loginbtn: {
    backgroundColor: myColors.primary,
    marginTop: 30,
    height: 70,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  Logintxt: {
    fontSize: 19,
    color: myColors.secondary,
    fontWeight: '500'
  },
  BottomView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    gap: 5
  },
  sigupuptxt:{
    fontSize: 15, 
    color: myColors.primary, 
    fontWeight: '600'
  }
})
export default Login