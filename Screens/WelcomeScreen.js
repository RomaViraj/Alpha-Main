import * as React from 'react'
import {Text, View, StyleSheet, TouchableOpacity, Image, TextInput} from 'react-native'


export default class WelcomeScreen extends React.Component{
    constructor(){
        super()
        this.state={
            email:'',
            password:''
        }
    }

    admin = () =>{
        if(this.state.email==="rajeevaggarwal5121001@alpha.com" && this.state.password==="NEELAM2020"){
            this.props.navigation.navigate('Userhome')
        }
    }
    render(){
        return(
            <View style={{backgroundColor:'#34ebcf'}}>
            
                 <Image
              style={{
                width: 160,
                height: 105,
                marginLeft: 125,
                marginTop: 28,
              }}
              source={require('../assets/logo-1.png')}
            />
<TextInput
style={styles.loginBox}
placeholder={"abc@example.com"}
keyboardType="email-address"
onChangeText={(text)=>{
    this.setState({
    email:text
    })
}}

/>
<TextInput
style={styles.loginBox}
placeholder={"password"}
secureTextEntry={true}
onChangeText={(text)=>{
    this.setState({
    password:text
    })
}}

/>
<TouchableOpacity
style={{borderRadius:3, borderColor:'black', width:150, height:30, borderWidth:2, marginLeft:60}}
onPress={()=>{this.admin()}}>
    <Text style={{textAlign:'center', alignContent:'center'}}>Login as Admin</Text>
</TouchableOpacity>
            <TouchableOpacity
            onPress={()=>{this.props.navigation.navigate('EmployeeSignIn')}}>
            <Text style={styles.texas2}>Are You An Employee Of Alpha Bio Solutions?</Text>
            </TouchableOpacity>
          <TouchableOpacity
          onPress={()=>{this.props.navigation.navigate('Userhome')}}>
              <Text style={styles.texas3}>Are You A User?</Text>
          </TouchableOpacity>

          <TouchableOpacity
          style={{marginTop:10000000}}>
              
          </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    texas:{
        marginTop:45,
        color:'#4263f5',
        fontSize:18,
fontStyle:'italic',
marginLeft:110
    },
    texas2:{
        marginTop:45,
        color:'#4263f5',
        fontSize:18,
fontStyle:'italic',
marginLeft:30
    },
    texas3:{
        marginTop:45,
        color:'#4263f5',
        fontSize:18,
fontStyle:'italic',
marginLeft:125
    },
        loginBox:{
          width:300,
          height:40,
          borderWidth:1.5,
          fontSize:20,
          margin:10,
          paddingLeft:10,
          borderRadius:4
        },
               buttonText:{
     color:'#ffff',
     fontWeight:'200',
     fontSize:20
   }
    
})
