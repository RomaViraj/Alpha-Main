import * as React from 'react'
import {TouchableOpacity, Text, View, StyleSheet, Image, ScrollView} from 'react-native'

export default class UserProducts extends React.Component{
  render(){
    return(
      <View>
      <ScrollView style={{width:'100%'}}>
               <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('Userhome');
            }}>
            <Image
            style={{height:30,width:30, marginLeft:20, marginTop:30}}
            source={require('../assets/back.png')} />
          </TouchableOpacity>
<TouchableOpacity
style={styles.box}
onPress={()=>{this.props.navigation.navigate('UserAnaecare')}}>
<Text style={styles.buttonText}>Anaecare</Text>
</TouchableOpacity>

<TouchableOpacity
style={styles.box}
onPress={()=>{this.props.navigation.navigate('UserAlphaShell')}}>
<Text style={styles.buttonText}>Alphashell-D Supreme </Text>
</TouchableOpacity>

<TouchableOpacity
style={styles.box}
onPress={()=>{this.props.navigation.navigate('UserAlphaChrom')}}>
<Text style={styles.buttonText}>Alphachrom-C</Text>
</TouchableOpacity>

<TouchableOpacity
style={styles.box}
onPress={()=>{this.props.navigation.navigate('UserAppiplex')}}>
<Text style={styles.buttonText}>Appiplex</Text>
</TouchableOpacity>

<TouchableOpacity
style={styles.box}>
<Text style={styles.buttonText}>Ascoferrum-NM</Text>
</TouchableOpacity>

<TouchableOpacity
style={styles.box}>
<Text style={styles.buttonText}>Citrisal-C</Text>
</TouchableOpacity>

<TouchableOpacity
style={styles.box}>
<Text style={styles.buttonText}>Eucasense</Text>
</TouchableOpacity>

<TouchableOpacity
style={styles.box}>
<Text style={styles.buttonText}>Nutri-Met</Text>
</TouchableOpacity>

<TouchableOpacity
style={styles.box}>
<Text style={styles.buttonText}>Nutri-Met Concentrate</Text>
</TouchableOpacity>

<TouchableOpacity
style={styles.box}>
<Text style={styles.buttonText}>Nutrimet Supreme</Text>
</TouchableOpacity>

<TouchableOpacity
style={styles.box}>
<Text style={styles.buttonText}>Ovatone Gold</Text>
</TouchableOpacity>

<TouchableOpacity
style={styles.box}>
<Text style={styles.buttonText}>Ovatone VM</Text>
</TouchableOpacity>

<TouchableOpacity
style={styles.box}>
<Text style={styles.buttonText}>Phytomix</Text>
</TouchableOpacity>

<TouchableOpacity
style={styles.box}>
<Text style={styles.buttonText}>Respoclean</Text>
</TouchableOpacity>

<TouchableOpacity
style={styles.box}>
<Text style={styles.buttonText}>Spermogen</Text>
</TouchableOpacity>

<TouchableOpacity
style={styles.box}>
<Text style={styles.buttonText}>Stimmune-X</Text>
</TouchableOpacity>

<TouchableOpacity
style={styles.box}>
<Text style={styles.buttonText}>Ocimax-ZN</Text>
</TouchableOpacity>

<TouchableOpacity
style={styles.box}>
<Text style={styles.buttonText}>Fertimax</Text>
</TouchableOpacity>
</ScrollView>
      </View>
    )
  }
}
const styles = StyleSheet.create({
box:{
borderWidth:2,
borderRadius:3,
borderColor:'black',
width:240,
height:40,
marginTop:20,
backgroundColor:'#03fcdb',
marginLeft:50
  },
  buttonText:{
    textAlign:'center',
    justifyContent:'center',
    alignItems:'center',
    alignSelf:'center',
    alignContent:'center',
    color:'black',
    marginTop:8
  }
})