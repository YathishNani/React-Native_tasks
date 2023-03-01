import { ScrollView } from 'react-native-gesture-handler';
import React, { useState, useEffect, lazy } from 'react';
import {SafeAreaView,StyleSheet,View,Text,TextInput,ImageBackground,FlatList,Dimensions,TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import places from '../data/Places';

const {width} = Dimensions.get('screen');

const HomeScreen = ({navigation}) => {
  const [search, setSearch] = useState('');
  const [filteredDataSource, setFilteredDataSource] = useState([]);
  const [masterDataSource, setMasterDataSource] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((responseJson) => {
        setFilteredDataSource(responseJson);
        setMasterDataSource(responseJson);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const searchFilterFunction = (text) => {
    if (text) {
      const newData = masterDataSource.filter(
        function (item) {
          const itemData = item.title
            ? item.title.toUpperCase()
            : ''.toUpperCase();
          const textData = text.toUpperCase();
          return itemData.indexOf(textData) > -1;
      });
      setFilteredDataSource(newData);
      setSearch(text);
    } else {
      setFilteredDataSource(masterDataSource);
      setSearch(text);
    }
  };

  const ItemView = ({item}) => {
    return (
      <Text
        onPress={() => getItem(item)}>
        {item.id}
        {'.'}
        {item.title.toUpperCase()}
      </Text>
    );
  };

  const ItemSeparatorView = () => {
    return (
      <View
        style={{
          height: 0.5,
          width: '100%',
          backgroundColor: '#C8C8C8',
        }}
      />
    );
  };

   /* const Card = ({place}) => {
        return (
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.navigate('DetailsScreen', place)}>
            <ImageBackground 
              style={style.cardImage} source={place.image} />
            <Text 
              style={{
                color: 'black',
                fontSize: 19, 
                fontWeight: 'bold',
                marginLeft: 10
              }}>
                {masterDataSource.name}
            </Text>
            <View style={{flexDirection: 'row',marginLeft:10}}>
              <Icon name="place" size={20} color= 'red'/>
              <Text style={{marginLeft: 5,marginTop:3, color: 'black'}}>
                {masterDataSource.location}
              </Text>
            </View>
          </TouchableOpacity>
        );
      };
      */

      return (
        <SafeAreaView style={{flex: 1, backgroundColor: 'orange',elevation:20}}>
          <View style={{flex:0,margin:10}}>
            <View style={style.header}>
              <Icon name="notifications-none" size={28} color='red' />
            </View>
            <ScrollView showsVerticalScrollIndicator={false} >
              <View style={{ height: 120, paddingHorizontal: 20, margin:10, marginBottom:-10}}>
              <View style={{flex: 1}}>
                  <Text style={style.headerTitle}>Find your</Text>
                  <Text style={style.headerTitle}> product</Text>
                 
              </View>
              </View>
              <View style={{backgroundColor:'#EEEDE7',flexDirection:'row', borderRadius:10, justifyContent:'space-between', margin:15, elevation:20}}>          
                  <TextInput 
                      value={search} 
                      placeholder="Search" 
                      onChangeText={(text) => searchFilterFunction(text)}
                      style={{color: 'black', marginLeft:10}} 
                      
                  />
                  <Icon name="search" size={28} style={{marginRight:30, marginTop:5}} />
              </View>
              <Text style={style.sectionTitle}>Most popular products</Text>

            
            <View style={{elevation:30, backgroundColor:'white', marginRight:15, marginLeft:15, borderRadius:10}}>
                  <FlatList
                      contentContainerStyle={{paddingLeft: 3}}
                      numColumns={'2'}
                      showsHorizontalScrollIndicator={false}
                      data={filteredDataSource}
                      keyExtractor={(item, index) => index.toString()}
                      ItemSeparatorComponent={ItemSeparatorView}
                      renderItem={ItemView} 
                  />
              </View>
              </ScrollView>
            </View>
        </SafeAreaView>
      );
}

const style = StyleSheet.create({
    header: {
      paddingVertical: 20,
      paddingHorizontal: 20,
      flexDirection: 'row',
      display:'flex',
      justifyContent:'flex-end',
      textAlign:'right',
      borderColor:'black',
      margin:-10,
      elevation:10
    },
    headerTitle: {
      color: 'blue',
      fontWeight: 'bold',
      fontSize: 28,
      fontFamily:'Helvetica'
    },
    sectionTitle: {
      fontWeight: 'bold',
      fontSize: 18,
      marginTop:10,
      marginBottom:10,
      textAlign:'center'
    },
    cardImage: {
      height: 160,
      width: width / 2.5,
      padding: 20,
      overflow: 'hidden',
      borderRadius: 10,
      margin:10,
      marginLeft:5,
      elevation:20
    }
  });

  export default HomeScreen;
