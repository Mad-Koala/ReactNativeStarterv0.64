import * as Images from 'assets';
import {navigatorPop} from 'config/navigationOptions';
import Colors from 'constants/color';
import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
const Header = props => {
  const {componentId} = props;
  const _onBackPress = () => {
    navigatorPop({componentId});
  };

  return props.hasBack ? (
    <View
      style={{
        height: RFPercentage(18),
        backgroundColorL: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.Primary,
      }}>
      <TouchableOpacity
        onPress={_onBackPress}
        style={{position: 'absolute', left: RFValue(20)}}>
        <Image source={Images.Back} resizeMode="contain" />
      </TouchableOpacity>
      <Image
        source={Images.Logo}
        resizeMode="contain"
        style={{height: RFValue(150), width: RFValue(150)}}
      />
    </View>
  ) : (
    <View
      style={{
        height: RFPercentage(18),
        backgroundColorL: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.Primary,
      }}>
      <Image
        source={Images.Logo}
        resizeMode="contain"
        style={{height: RFValue(150), width: RFValue(150)}}
      />
    </View>
  );
};

export default Header;
