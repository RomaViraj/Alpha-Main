import * as React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image, ScrollView, Linking } from 'react-native'
export default class Userhome extends React.Component{
    render(){
        return(
            <View>
            <ScrollView style={{width:'100%', marginHorizontal:10}}>
         <Image
              style={{
                width: 160,
                height: 105,
                marginLeft: 125,
                marginTop: 28,
              }}
              source={require('../assets/logo-1.png')}
            />
  <TouchableOpacity
              onPress={()=>{this.props.navigation.navigate('UserMenu')}}>
<Image
     style={{ width: 60, height: 60, marginLeft: 5, marginTop:50 }}
     source={require('../assets/images.png')}/>
              </TouchableOpacity>
              <Text style={styles.ext}>Today's Tip For Poultry Health
              </Text>
              <Text style={styles.ext2}>For A Disease Free Flock Of Birds Keep The Water Source Clean, Fresh And Change The Water Daily.</Text>
              <Text style={styles.ext3}>The Founding Partners Of Alpha Bio Solutions, Mr Rajeev Aggarwal And Dr Subir Chatterjee, Are In The Field Of Poultry Buisness For More Than Two Decades. Mr Rajeev Looks After The Marketing While Dr Subir Looks After The Technical Things In Alpha Bio Solutions.</Text>
                <Text style={styles.ext4}>Our Corporate Film</Text>
<TouchableOpacity
onPress={()=>{Linking.openURL('https://www.youtube.com/watch?v=0yb4rSVlXSM')}}>
          <Image
             style={{
                width: 260,
                height: 205,
                marginLeft: 65,
                marginTop: 28,
              }}
              source={require('../assets/S1.png')}
              />    
              </TouchableOpacity>
            
              </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
  ext:{
    color:'#626962',
    fontSize:20,
    marginLeft:70,
  marginTop:10
  },
  ext2:{
    color:'#070708',
    fontSize:20,
    marginLeft:10,
    fontStyle:"italic",
    marginTop:30
  },
 ext4:{
    color:'#070708',
    fontSize:20,
    marginLeft:110,
    fontStyle:"italic",
    marginTop:30
  },
  ext3:{
    color:'#024d45',
    fontSize:25,
    marginLeft:5,
    fontStyle:"italic",
    marginTop:30
  },
})
