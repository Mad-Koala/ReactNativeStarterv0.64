import React, {useState} from 'react';
import {View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native';
import {RFValue, RFPercentage} from 'react-native-responsive-fontsize';
import colors from 'constants/color';
import * as Images from 'assets';
import Fonts from 'constants/fonts';
import {Tab} from 'components/common/tabSwitcher';
import IconsFa from 'react-native-vector-icons/FontAwesome';

const Home = props => {
  const {onTabPress, userPresent, completedServiceStatus} = props;
  const [selectedTab, setSelectedTab] = useState('Search');
  const homeTab = selectedTab == 'Home';
  const shortListTab = selectedTab == 'Shortlist';
  const searchTab = selectedTab == 'Search';
  const historyTab = selectedTab == 'History';
  const profileTab = selectedTab == 'Profile';
  return (
    <View style={styles.container}>
      <View
        style={[
          styles.tabs,
          {
            borderTopWidth: homeTab ? 3 : 0,
            borderTopColor: colors.Primary,
            backgroundColor: homeTab ? colors.Lblue : colors.White,
          },
        ]}>
        <Tab
          userPresent={userPresent}
          onTabPress={onTabPress}
          id="Home"
          tabSelected={() => {
            setSelectedTab('Home');
          }}>
          <View
            style={[
              styles.selectedTab,
              {
                width: homeTab ? RFValue(45) : '100%',
                borderRadius: homeTab ? RFPercentage(20) : 0,
              },
            ]}>
            <IconsFa
              name={'home'}
              size={RFValue(20)}
              color={homeTab ? Colors.Primary : 'black'}
            />

            <Text
              style={{
                fontSize: RFValue(10),
                color: homeTab ? Colors.Primary : 'black',
                fontFamily: Fonts.REGULAR,
              }}>
              Home
            </Text>
          </View>
        </Tab>
      </View>
      <View
        style={[
          styles.tabs,
          {
            borderTopWidth: shortListTab ? 3 : 0,
            backgroundColor: shortListTab ? colors.Lblue : colors.White,
            borderTopColor: colors.Primary,
          },
        ]}>
        <Tab
          userPresent={userPresent}
          onTabPress={onTabPress}
          id="Shortlist"
          tabSelected={() => {
            setSelectedTab('Shortlist');
          }}>
          <View
            style={[
              styles.selectedTab,
              {
                width: shortListTab ? RFValue(45) : '100%',
                borderRadius: shortListTab ? RFPercentage(20) : 0,
              },
            ]}>
            <IconsFa
              name={'bookmark'}
              size={RFValue(20)}
              color={shortListTab ? Colors.Primary : 'black'}
            />

            <Text
              style={{
                fontSize: RFValue(10),
                color: shortListTab ? Colors.Primary : 'black',
                fontFamily: Fonts.REGULAR,
              }}>
              Order
            </Text>
          </View>
        </Tab>
      </View>
      <View
        style={[
          {
            alignSelf: 'center',
            height: RFValue(65),
            width: RFValue(65),
            borderRadius: RFPercentage(100),
            borderWidth: 3,
            borderColor: 'white',
          },
        ]}></View>
      <View
        style={[
          styles.tabs,
          {
            borderTopWidth: historyTab ? 3 : 0,
            borderTopColor: colors.Primary,
            backgroundColor: historyTab ? colors.Lblue : colors.White,
          },
        ]}>
        <Tab
          userPresent={userPresent}
          onTabPress={onTabPress}
          completedServiceStatus={completedServiceStatus}
          id="History"
          tabSelected={() => {
            setSelectedTab('History');
          }}>
          <View
            style={[
              styles.selectedTab,
              {
                width: historyTab ? RFValue(45) : '100%',
                borderRadius: historyTab ? RFPercentage(20) : 0,
              },
            ]}>
            <Image
              resizeMode={'contain'}
              source={historyTab ? Images.Bhistory : Images.History}
              style={styles.image}
            />

            <Text
              style={{
                fontSize: RFValue(10),
                color: historyTab ? Colors.Primary : 'black',
                fontFamily: Fonts.REGULAR,
              }}>
              Offer
            </Text>
          </View>
        </Tab>
      </View>
      <View
        style={[
          styles.tabs,
          {
            borderTopWidth: profileTab ? 3 : 0,
            borderTopColor: colors.Primary,
            backgroundColor: profileTab ? colors.Lblue : colors.White,
          },
        ]}>
        <Tab
          userPresent={userPresent}
          onTabPress={onTabPress}
          id="Profile"
          tabSelected={() => {
            setSelectedTab('Profile');
          }}>
          <View
            style={[
              styles.selectedTab,
              {
                width: profileTab ? RFValue(45) : '100%',

                borderRadius: profileTab ? RFPercentage(20) : 0,
              },
            ]}>
            <IconsFa
              name={'user'}
              size={RFValue(20)}
              color={profileTab ? Colors.Primary : 'black'}
            />
            <Text
              style={{
                fontSize: RFValue(10),
                color: profileTab ? Colors.Primary : 'black',
                fontFamily: Fonts.REGULAR,
              }}>
              More
            </Text>
          </View>
        </Tab>
      </View>
      <View
        style={[
          {
            backgroundColor: colors.Primary,
            position: 'absolute',
            bottom: RFValue(30),
            alignSelf: 'center',
            height: RFValue(65),
            width: RFValue(65),
            borderRadius: RFPercentage(100),
            borderWidth: 5,
            borderColor: 'white',
          },
        ]}>
        <Tab
          userPresent={userPresent}
          onTabPress={onTabPress}
          id="Search"
          tabSelected={() => {
            setSelectedTab('Search');
          }}>
          <View
            style={{
              width: '100%',
              height: '100%',
              borderRadius: RFPercentage(100),
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              resizeMode={'contain'}
              source={Images.Searchwhite}
              style={styles.image}
            />
          </View>
        </Tab>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: RFPercentage(10),
    flexDirection: 'row',
    backgroundColor: colors.White,

    justifyContent: 'center',
  },
  selectedTab: {
    height: RFValue(45),
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {tintColor: colors.Black},
  tabs: {
    flex: 0.25,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default Home;
