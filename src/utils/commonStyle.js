import { RFValue } from "react-native-responsive-fontsize";
import Colors from 'constants/color';
import Fonts from 'constants/fonts';
import {FlatList, Image, StyleSheet, Text, View} from 'react-native';

export const CommonStyle = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingHorizontal: 10,
    },
    cardStyle:{
        height: RFValue(180),
    width: '100%',
    backgroundColor: 'white',
    borderRadius: RFValue(10),
    // overflow: 'hidden',
    flexDirection: 'row',
    marginBottom: RFValue(5),
    marginTop: RFValue(10),
    shadowColor: 'black',
    shadowOpacity: 0.5,
    shadowOffset: {width: 0, height: 0},
    shadowRadius: 1,
    },
    nameText:{
        fontSize: RFValue(18), 
        fontFamily:Fonts.Medium,
        color:'black'
    },
    addressText:{
    fontSize: RFValue(14), 
    color: Colors.Gray,
    fontFamily:Fonts.Regular,
     width: '90%'  
    },
    tourPrice:{
        color: Colors.Red,
        fontSize: RFValue(14),
        fontFamily: Fonts.Bold,
      },
      image:{
          width:RFValue(42),
          height:RFValue(42),
          borderRadius:RFValue(21)
      },
      icon:{
        width: RFValue(14),
        height: RFValue(18),
        resizeMode: 'contain',
      }

});