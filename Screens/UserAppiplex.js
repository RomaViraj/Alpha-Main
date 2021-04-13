import * as React from 'react'
import {Text, View, StyleSheet, TouchableOpacity, Image, Linking, ScrollView} from 'react-native'

export default class Appiplex extends React.Component{
    render(){
        return(
            <View>
                <ScrollView style={{width:'100%'}}>
    <TouchableOpacity
        >
            <Image
              style={{
                width: 160,
                height: 105,
                marginLeft: 125,
                marginTop: 24,
              }}
              source={require('../assets/logo-1.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('UserProducts');
            }}>
            <Image
              style={{ width: 30, height: 30, marginLeft: 5 }}
              source={require('../assets/back.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity
          onPress={()=>{Linking.openURL('https://alphabiosolution.com/wp-content/uploads/2019/09/APPIPLEX-FRONT-801x1024.jpg')}}>
         
          <Image
            style={{ width: 300, height: 400, marginLeft: 22, marginTop: 10 }}
            source={require('../assets/APPIPLEX-FRONT-801x1024.jpg')}
          />
          </TouchableOpacity>
          <TouchableOpacity
          onPress={()=>{Linking.openURL('https://alphabiosolution.com/wp-content/uploads/2019/09/APPIPLEX-BACK-801x1024.jpg')}}>
          <Image
          style={{ width: 300, height: 400, marginLeft: 22, marginTop:10 }}
          source={require('../assets/APPIPLEX-BACK-801x1024.jpg')}
          />
          </TouchableOpacity>

          <Text style={styles.texta}>Main Points About Appiplex:-</Text>
          <Text style={styles.textb}>1. Appiplex is a unique blend of Fruit Nutrient Concentrates and selected phyto-extracts, designed for rapid growth and optimum production performance of poultry birds.</Text>
<Text style={styles.textb}>2. Appiplex optimises gut immunity and limits the load of pathogenic bacteria in gut.</Text>
<Text style={styles.textb}>3. Appiplex helps growth and multiplication of probiotic bacteria in gut and stimulates development of intestinal villi for better nutrient utilization.</Text>
<Text style={styles.textb}>4. Appiplex also optimises appetite, digestion and nutrient metabolization through improved liver function.</Text>
<Text style={styles.textb}>5. Appiplex supports haemoglobin synthesis and thus controls anaemia following viral infection coccidiosis.</Text>
<Text style={styles.textb}>6. Appiplex exerts favourable actions on appetite, digestion, absorption and nutrient utilization at multiple sites through unique mechanisms.</Text>
</ScrollView>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    texta:{
       fontSize:20,
        fontWeight:'bold'
    },
    textb:{
        fontSize:18,
        fontWeight:"400",
        marginTop:10
    }
})