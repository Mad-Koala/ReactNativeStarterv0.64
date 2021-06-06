import {setIntroStatus} from 'actions/persistData';
import React, {useRef} from 'react';
import {Image, Text, View} from 'react-native';
// import AppIntroSlider from 'react-native-app-intro-slider';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import {useDispatch} from 'react-redux';
import * as IntroImages from './assets';

const AppIntro = () => {
  var introRef = useRef(null);

  let dispatch = useDispatch();

  const slides = [
    {
      key: 1,
      title: 'Chemical free farm products!',
      text: 'No chemicals are used while production and processing of food products.',
      image: IntroImages.SlideOne,
      backgroundColor: 'red',
    },
    {
      key: 2,
      title: '100% organic & Naturally',
      text: 'All the food products are produced under ecologically feasible conditions.',
      image: IntroImages.SlideTwo,
      backgroundColor: '#e4e4e4',
    },
    {
      key: 3,
      title: 'Timely Delivery',
      text: 'Get your deliverables to your doorstep at the provided time while ordering.',
      image: IntroImages.SlideThree,
      backgroundColor: '#ffffff',
    },
  ];

  const _renderItem = ({item}) => {
    let activeIndex = introRef.activeIndex;
    console.log(activeIndex, 'REFEEEEEE');

    return (
      <View
        style={{
          flex: 1,
          paddingHorizontal: RFValue(10),
          backgroundColor: 'green',
        }}>
        <View
          style={{
            flex: 0.2,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: RFValue(30),
              fontWeight: 'bold',
              textAlign: 'center',
            }}>
            {item.title}
          </Text>
        </View>
        <View
          style={{flex: 0.6, justifyContent: 'center', alignItems: 'center'}}>
          <Image
            source={item.image}
            style={{height: RFPercentage(80), width: RFPercentage(80)}}
            resizeMode="contain"
          />
        </View>
        <View
          style={{flex: 0.2, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{fontSize: RFValue(16), textAlign: 'center'}}>
            {item.text}
          </Text>
        </View>
      </View>
    );
  };

  const _onDone = () => {
    dispatch(setIntroStatus());
  };
  const _onSkip = () => {
    dispatch(setIntroStatus());
  };
  return (
    <View style={{flex: 1}}>
      {/* <AppIntroSlider
        ref={node => {
          introRef = node && node.state;
        }}
        renderItem={_renderItem}
        data={slides}
        onDone={_onDone}
        showSkipButton
        onSkip={_onSkip}
        activeDotStyle={{backgroundColor: 'grey'}}
      /> */}
    </View>
  );
};

export default AppIntro;
