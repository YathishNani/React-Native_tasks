import React from 'react';
import {ImageBackground,SafeAreaView,StyleSheet,View,Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const DetailsScreen = ({navigation, route}) => {
  const place = route.params;
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'yellow',margin:5}}>
      <ImageBackground style={{flex: 0.6}} source={place.image}>
        <View style={style.header}>
          <Icon name="arrow-back-ios" size={28} color='#FFF'onPress={navigation.goBack}/>
          <Icon name="more-vert" size={28} color='#FFF' />
        </View>
      </ImageBackground>

      <View style={style.detailsContainer}>
        <View style={{flexDirection: 'row', marginTop: 10}}>
         <View style={style.imageDetails}>
            <Text style={{ width: '70%',fontSize: 30, fontWeight: 'bold',color:'blue'}}>
                {place.name}
            </Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Icon name="place" size={28} color='red' style={{marginLeft:10}}/>
            <Text style={{ marginTop:8,marginLeft: 5,fontSize: 15}}>
              {place.location}
            </Text>
          </View>
        </View>
        <Text style={{marginTop: 10, lineHeight: 20}}>{place.details}</Text>
        {/* <Text style={{marginTop: 25, fontSize:15, fontWeight:'bold'}}> PHOTOS </Text> */}
      </View>
    </SafeAreaView>
  );
};
const style = StyleSheet.create({
  detailsContainer: {
    top: -30,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 40,
    paddingHorizontal: 20,
    backgroundColor: 'yellow',
    flex: 0.3,
  },
  header: {
    marginTop: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,

  },
  imageDetails: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    position: 'absolute',
    bottom: 20,
    marginLeft:-10,
    marginTop:20
  },
});

export default DetailsScreen;
