import React from 'react';
import {StyleSheet, View} from 'react-native';
import TabSwitcher, {TabPanel} from 'components/common/tabSwitcher';
import TabBar from 'components/common/tabBar';

const Dashboard = props => {
  return (
    <TabSwitcher>
      <TabPanel whenActive="Home">
        <View style={{flex: 1, backgroundColor: 'red'}}></View>
      </TabPanel>
      <TabPanel whenActive="Shortlist">
        <View style={{flex: 1, backgroundColor: 'pink'}}></View>
      </TabPanel>
      <TabPanel whenActive="Search">
        <View style={{flex: 1, backgroundColor: 'green'}}></View>
      </TabPanel>
      <TabPanel whenActive="History">
        <View style={{flex: 1, backgroundColor: 'purple'}}></View>
      </TabPanel>
      <TabPanel whenActive="Profile">
        <View style={{flex: 1, backgroundColor: 'grey'}}></View>
      </TabPanel>
      <TabBar />
    </TabSwitcher>
  );
};
const styles = StyleSheet.create({
  forgotPassword: {
    width: '100%',
    alignItems: 'flex-end',
    marginBottom: 24,
  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  label: {},
  link: {
    fontWeight: 'bold',
  },
});

export default Dashboard;
