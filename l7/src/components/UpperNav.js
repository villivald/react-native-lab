import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const NavBtn = ({view, select}) => {
  return <Button onPress={() => select(view.key)} title={view.symbol} />;
};

export const UpperNav = props => {
  return (
    <View style={styles.main}>
      {props.views.map(v => (
        <NavBtn key={v.key} view={v} select={props.selectView} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    backgroundColor: 'tomato',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default UpperNav;
