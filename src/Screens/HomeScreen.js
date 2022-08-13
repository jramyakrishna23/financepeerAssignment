import { Text, ImageBackground, StyleSheet,ScrollView ,View,Image } from "react-native";

function HomeScreen() {
  return (
    <ImageBackground source={require('../assets/background.jpeg')} resizeMode="cover" style={styles.image}>
    <ScrollView style={{flex:1,margin:10}}>
        <Image source={require('../assets/bg1.jpeg')} style={styles.imageStyle}/>
        <Image source={require('../assets/bg1.jpeg')} style={styles.imageStyle}/>
        <Image source={require('../assets/bg1.jpeg')} style={styles.imageStyle}/>
        <Image source={require('../assets/bg1.jpeg')} style={styles.imageStyle}/>
        <Image source={require('../assets/bg1.jpeg')} style={styles.imageStyle}/>
        <Image source={require('../assets/bg1.jpeg')} style={styles.imageStyle}/>
    </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: "center",
  },
  imageStyle:{
    marginBottom:15,
    width:'100%',
    borderRadius:10,
  }

});


export default HomeScreen;
