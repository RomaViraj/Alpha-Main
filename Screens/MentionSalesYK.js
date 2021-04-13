import * as React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, TextInput} from 'react-native'
import db from '../config'
import firebase from 'firebase'
export default class MentionSalesYK extends React.Component{
  constructor(){
    super()
    this.state={
      date:'',
      product:'',
      sales:'',
      passKey:''
    }
  }

  addSales = () =>{
    db.collection("Yogesh").add({
      'Sales':this.state.sales,
      'Date':this.state.date,
      'Product':this.state.product
    })
  }
  render(){
    return(
      <View>
<TextInput
style={styles.loginBox}
placeholder={"Date"}
onChangeText={(text)=>{
  this.setState({
    date:text
  })
}}
/>
<TextInput
style={styles.loginBox}
placeholder={"PassKey"}
onChangeText={(text)=>{
  this.setState({
    passKey:text
  })
}}
/>
<TextInput
style={styles.loginBox}
placeholder={"Product Name"}
onChangeText={(text)=>{
  this.setState({
    product:text
  })
}}
/>

<TextInput
style={styles.loginBox}
placeholder={"How Much Sale"}
onChangeText={(text)=>{
  this.setState({
    sales:text
  })
}}
/>
<TouchableOpacity
onPress={()=>{this.addSales()}}>
<Text>gO</Text>
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
    paddingLeft:10
  }
})