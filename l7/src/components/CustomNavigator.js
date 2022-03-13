import React, {useState, useEffect} from 'react';
import {View, Text, Button, StyleSheet, Dimensions} from 'react-native';
import {UpperNav} from './UpperNav';
import {SideNav, sidenavWidth} from './SideNav';

const DisplayView = props => {
  return <View>{props.component()}</View>;
};

export const CustomNavigator = ({views}) => {
  const [currentView, setCurrentView] = useState(views[0]);
  const [isWide, setIsWide] = useState(false);

  useEffect(() => {
    const subscription = Dimensions.addEventListener('change', ({window}) => {
      window.width < 700 ? setIsWide(false) : setIsWide(true);
    });
    return () => subscription?.remove();
  }, []);

  const selectView = key => {
    setCurrentView(views.find(v => v.key === key));
  };

  return (
    <View>
      {isWide ? (
        <SideNav views={views} selectView={selectView} />
      ) : (
        <UpperNav views={views} selectView={selectView} />
      )}
      <View style={[isWide ? styles.wide : styles.narrow, styles.generic]}>
        <DisplayView {...currentView} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  generic: {
    backgroundColor: 'grey',
  },
  wide: {
    marginLeft: sidenavWidth,
  },
  narrow: {
    marginLeft: 0,
  },
});
