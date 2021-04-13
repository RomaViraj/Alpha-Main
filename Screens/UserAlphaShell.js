import * as React from 'react'
import {Text, View, ScrollView, StyleSheet, TouchableOpacity, Linking, Image} from 'react-native'

export default class UserAlphaShell extends React.Component{
    render(){
        return(
            <View>
                <ScrollView style={{width:'100%'}}>
                <TouchableOpacity
>
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
          onPress={()=>{Linking.openURL('https://alphabiosolution.com/wp-content/uploads/2019/09/ALPHA-SHALL-D-SUPREME-FRONT-822x1024.jpg'
          )}}>
             <Image
            style={{ width: 300, height: 400, marginLeft: 22, marginTop: 10 }}
            source={require('../assets/ALPHA-SHALL-D-SUPREME-FRONT-822x1024.jpg')}
          />
          </TouchableOpacity>
          <TouchableOpacity
          onPress={()=>{Linking.openURL(
            'https://alphabiosolution.com/wp-content/uploads/2019/09/ALPHA-SHALL-D-SUPREME-BACK-822x1024.jpg'

          )}}>
          <Image
            style={{ width: 300, height: 400, marginLeft: 22, marginTop: 10 }}
            source={require('../assets/ALPHA-SHALL-D-SUPREME-BACK-822x1024.jpg')}
          />
          </TouchableOpacity>
<Text style={styles.texta}>Main Points About AlphaShell-D Supreme</Text>
<Text style={styles.textb}>1. AlphaShell-D Supreme is enriched with Enzyme Activators, Organic Zinc, Organic Manganese, Organic Copper, Estrogenic Phyto-Activ, Active Vitamin-D.</Text>
<Text style={styles.textb}>2. AlphaShell-D Supreme is a complete nutritional package for strong eggshell and optimum hatchability. </Text>
<Text style={styles.textb}>3. Natural Enzyme Activators present in AlphaShell-D Supreme ensure efficient relase of bi-carbonate, synthesis of muco-polysaccharide components and protein matrix and thus helps in the formation of strong eggshell. </Text>
<Text style={styles.textb}>4. Minerals in glycinate form present in AlphaShell-D Supreme ensure optimum bio-availibility and hence highest efficacy.</Text>
<Text style={styles.textb}>5. Organic Zinc is associated with high activity of carbonic anhydrase and improves shell quality through generation of bi-carbonate.</Text>
<Text style={styles.textb}>6. Presence of organic copper induces the enzyme Lysyl Oxidase for synthesis of bone and eggshell matrix.</Text>
<Text style={styles.textb}>7. Organic manganese activates alkaline phosphatase and acts as a enzyme co-factor in synthesis of mucopolysaccharides, the organic matter in eggshell for the deposition of calcium carbonate. </Text>
<Text style={styles.textb}>8. Phyto-Estrogenic extract and Vitamin-D, in AlphaShell-D Supreme optimizes calcium absorption.</Text>
<Text style={styles.texta}>Benefits Of AlphaShell-D :-</Text>
<Text style={styles.textb}>1. Improves eggshell thickness, minimizes egg breakage in commercial layers and breeders</Text>
<Text style={styles.textb}>2. Improves skeletal integrity, growth and calcium reserve in grower chicks.</Text>
<Text style={styles.textb}>3. Improves growth in broiler and hatchability in breeders.</Text>
<Text style={styles.textb}>4. Prevents leg weakness and lameness in broilers.</Text>
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