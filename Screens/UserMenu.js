import * as React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native'

export default class UserMenu extends React.Component{
    render(){
        return(
            <View>
                  <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('Userhome');
            }}>
            <Image
            style={{height:30,width:30, marginLeft:20, marginTop:30}}
            source={require('../assets/back.png')} />
          </TouchableOpacity>
<TouchableOpacity
style={{marginLeft:10, marginTop:20, backgroundColor:'#e3d5d5'}}
onPress={()=>{this.props.navigation.navigate('Userhome')}}>
    <Text style={styles.buttonText}>Home</Text>
</TouchableOpacity>
<TouchableOpacity
style={{marginLeft:10, marginTop:20, backgroundColor:'#e3d5d5'}}
onPress={()=>{this.props.navigation.navigate('UserProducts')}}>
    <Text style={styles.buttonText}>Products</Text>
</TouchableOpacity>
<TouchableOpacity
style={{marginLeft:10, marginTop:20, backgroundColor:'#e3d5d5'}}>
    <Text style={styles.buttonText}>Our Website</Text>
</TouchableOpacity>
<TouchableOpacity
style={{marginLeft:10, marginTop:20, backgroundColor:'#e3d5d5'}}>
    <Text style={styles.buttonText}>Articles</Text>
</TouchableOpacity>
<TouchableOpacity
style={{marginLeft:10, marginTop:20, backgroundColor:'#e3d5d5'}}>
    <Text style={styles.buttonText}>Literatures</Text>
</TouchableOpacity>
<TouchableOpacity
style={{marginLeft:10, marginTop:20, backgroundColor:'#e3d5d5'}}>
    <Text style={styles.buttonText}>About Us</Text>
</TouchableOpacity>
<TouchableOpacity
style={{marginLeft:10, marginTop:20, backgroundColor:'#e3d5d5'}}>
    <Text style={styles.buttonText}>Want to apply for Job?</Text>
</TouchableOpacity>
<TouchableOpacity
style={{marginLeft:10, marginTop:20, backgroundColor:'#e3d5d5'}}>
    <Text style={styles.buttonText}>Our Team</Text>
</TouchableOpacity>
<TouchableOpacity
style={{marginLeft:10, marginTop:20, backgroundColor:'#e3d5d5'}}>
    <Text style={styles.buttonText}>Videos</Text>
</TouchableOpacity>
<TouchableOpacity
style={{marginLeft:10, marginTop:20, backgroundColor:'#e3d5d5'}}>
    <Text style={styles.buttonText}>Mention Query</Text>
</TouchableOpacity>
<TouchableOpacity
style={{marginLeft:10, marginTop:20, backgroundColor:'#e3d5d5'}}>
    <Text style={styles.buttonText}>Developer Of This App.</Text>
</TouchableOpacity>
<TouchableOpacity
style={{marginLeft:10, marginTop:20, backgroundColor:'#e3d5d5'}}
onPress={()=>{this.props.navigation.navigate('WelcomeScreen')}}>
    <Text style={styles.buttonText}>Log Out</Text>
</TouchableOpacity>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    buttonText:{
color:'#615350',
fontStyle:"normal",
fontWeight:"bold",
fontSize:25
    }
})