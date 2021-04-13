import * as React from 'react'
import {Text, View, StyleSheet, TouchableOpacity, Image, ScrollView, Linking} from 'react-native'

export default class UserAnaecare extends React.Component{
    render(){
        return(
            <View>
   <ScrollView style={{backgroundColor:'white', marginHorizontal:20}}>
        <ScrollView 
        minimumZoomScale={1}
        maximumZoomScale={1}>
        <TouchableOpacity
        onPress={()=>{this.props.navigation.navigate('AboutUs')}}>

          <Image
            style={{ width: 160, height: 105, marginLeft: 125, marginTop: 24 }}
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
          onPress={()=>{Linking.openURL('https://alphabiosolution.com/wp-content/uploads/2019/09/ANAECARE-FRONT-822x1024.jpg')}}>
          <Image
            style={{ width: 300, height: 400, marginLeft: 22, marginTop: 10 }}
            source={require('../assets/ANAECARE-FRONT-822x1024.jpg')}
          />
          </TouchableOpacity>
       <TouchableOpacity
          onPress={()=>{Linking.openURL('https://alphabiosolution.com/wp-content/uploads/2019/09/ANACARE-BACK-822x1024.jpg')}}>
          <Image
            style={{ width: 300, height: 400, marginLeft: 22, marginTop: 10 }}
            source={require('../assets/ANACARE-BACK-822x1024.jpg')}
          />
</TouchableOpacity>
<Text style={styles.texta}>Main Points About Anaecare:-</Text>
<Text style={styles.textb}>1. ANAECARE is a unique combination of research based phyto-extracts with haem iron, Vitamin B12 and Folic acid.</Text>
<Text style={styles.textb}>2. Unique Phyto-Actives of ANAECARE stimulate bone marrow stem cells and help in the formation of RBC's and Haemoglobin, even in the cases of plastic Anaemia.</Text>
<Text style={styles.textb}>3. The Chlorophyllic Phytoactives of ANAECARE gives greater red cell stability and reduces the red cell destruction.</Text>
<Text style={styles.textb}>4. Unlike non-haem iron, haem iron in ANAECARE remains in active state and gets absorbed completely in the body. This iron helps in the formation of haemoglobin wehn RBC is produced from bone marrow stem cells under the influence of phyto-actives of ANAECARE.</Text>
<Text style={styles.textb}>5. Folic acid and Vitamin B-12 in Anaecare help proliferation and maturation of newly formed RBC's.</Text>
<Text style={styles.textb}>6. Besides CIA(Chicken Infectious Anaemia), ANAECARE can be used in growing chicks for better RBC and WBC formation, haemoglobin synthesis, immune functioning and tissue oxygenation, leading to optimum growth and livability.</Text>
<Text style={styles.textb}>7. ANAECARE improves blood formation in young chicks throgh stimulation of stem cells and thus improves nutrient supply to tissues and consequently growth is improved.</Text>

</ScrollView>
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