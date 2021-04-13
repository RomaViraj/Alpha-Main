import * as React from 'react'
import {Text, View, StyleSheet, TextInput, Alert, Image, TouchableOpacity} from 'react-native'
import firebase from 'firebase'
export default class WelcomeScreen extends React.Component{
constructor(){
    super();
    this.state={
        emailId:'',
        password:''
    }
}
login=async(email,password)=>{
    if (email && password){
      try{
        const response = await firebase.auth().signInWithEmailAndPassword(email,password)
       if(response){
         this.props.navigation.navigate('Userhome')
       }
      }
      catch(error){
        switch (error.code) {
          case 'auth/user-not-found':
            Alert.alert("user dosen't exists")
            console.log("doesn't exist")
            break
          case 'auth/invalid-email':
            Alert.alert('incorrect email or password')
            console.log('invaild')
            break
        }
      }
    }
    else{
        Alert.alert('enter email and password');
    }
  }
  render(){
      return(
          <View>
                <Image
              style={{
                width: 160,
                height: 105,
                marginLeft: 95,
                marginTop: 28,
              }}
              source={require('../assets/logo-1.png')}
            />
<TextInput
style={styles.loginBox}
placeholder={"abc@example.com"}
keyboardType='email-address'
onChangeText={(text)=>{
  this.setState({
    emailId:text
  })
}}
/>
<TextInput
style={styles.loginBox}
placeholder={"enter password"}
secureTextEntry={true}
onChangeText={(text)=>{
  this.setState({
    password:text
  })
}}
/>
<TouchableOpacity
style={{height:30, width:90, borderWidth:1, marginTop:20, paddingTop:5, borderRadius:8, marginLeft:150}}
onPress={()=>{this.login(this.state.emailId, this.state.password)}}>
<Text style={{textAlign:"center"}}>Login</Text>
</TouchableOpacity>

          </View>
      )
  }
}

const styles = StyleSheet.create({
    loginBox:{
      width:300,
      height:40,
      borderWidth:1.5,
      fontSize:20,
      margin:10,
      paddingLeft:10,
      borderRadius:8
    }
  })