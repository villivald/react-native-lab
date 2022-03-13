import React from 'react';
import {Button, View, Text, StyleSheet, Dimensions} from 'react-native';

const NavBtn = ({view, select}) => {
  return (
    <Button
      onPress={() => select(view.key)}
      title={view.symbol + ' ' + view.key}
    />
  );
};

export const SideNav = props => {
  return (
    <View style={styles.main}>
      <View>
        <Text style={styles.title}>SideNav</Text>
        <View>
          {props.views.map(v => (
            <NavBtn key={v.key} view={v} select={props.selectView} />
          ))}
        </View>
      </View>
      <Text style={styles.footer}>About</Text>
    </View>
  );
};

export const sidenavWidth = 120;

const styles = StyleSheet.create({
  main: {
    backgroundColor: 'peru',
    position: 'absolute',
    width: sidenavWidth,
    height: '100vh',
    justifyContent: 'space-between',
  },
});

export default SideNav;
