import * as React from 'react'
import {View, Text, Image, StyleSheet, TouchableOpacity, Linking, ScrollView} from 'react-native'

export default class UserAlphaChrom extends React.Component{
    render(){
        return(
            <View>
                <ScrollView style={{width:'100%'}}>
                <TouchableOpacity>
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
          onPress={()=>{Linking.openURL('https://alphabiosolution.com/wp-content/uploads/2019/09/ALPHA-CHROM-FRONT-819x1024.jpg')}}
          >
          <Image
            style={{ width: 300, height: 400, marginLeft: 22, marginTop: 10 }}
            source={require('../assets/ALPHA-CHROM-FRONT-819x1024.jpg')}
          />
          </TouchableOpacity>
         
      
          <TouchableOpacity
          onPress={()=>{Linking.openURL('https://alphabiosolution.com/wp-content/uploads/2019/09/ALPHA-CHROM-BACK-819x1024.jpg')}}>

         
         
          <Image
            style={{ width: 300, height: 400, marginLeft: 22, marginTop: 10 }}
            source={require('../assets/ALPHA-CHROM-BACK-819x1024.jpg')}
          />
          </TouchableOpacity>
<Text style={styles.texta}>Main Points About AlphaChrom-C</Text>
<Text style={styles.textb}>1. AlphaChrom-C is a scientific combination of Chromium Amino acid chelate and is enriched with Natural Vitamin C and Antioxidant Bioflavonoids and is now with Osmolytic Power of Betaine.</Text>               </ScrollView>
<Text style={styles.textb}>2. Highly bio-available chromium amino acid chelate reduces blood cortisol level and controls protein catabolism, improves glucose, protein and lipid metabolism during stress.</Text>
<Text style={styles.textb}>3. Osmolytic Action of Betaine helps holding intracellular water and thus prevents cellular  dehydration during summer stress.</Text>
<Text style={styles.textb}>4. Osmolyte betaine reduces the body's reliance on energy and despite the heat stress more energy remains available for growth and production performance of birds.</Text> 
<Text style={styles.textb}>5. Natural and concentrated Bioflavonoids from Amla restores antioxidant status of the body. It prevents destruction of ascorbic acid and improves body's ability to hold and absorb Vitamin-C By 35% Extra</Text>
 <Text style={styles.texta}>Benefits Of Using Our Product</Text>
 <Text style={styles.textb}>1. To limit mortality due to climatic and other stress.</Text>
 <Text style={styles.textb}>2. To spare Vitamin-C from finished feed.</Text>
<Text style={styles.textb}>3. To maintain acid-base and electrolyte balance.</Text>
<Text style={styles.textb}>4. To limit cellular dehydration and osmotic cell death.</Text>
<Text style={styles.textb}>5. To improve livability & production performance.</Text>
<Text  style={styles.textb}>6. To optimize energy utilization during stressful conditions.</Text>
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