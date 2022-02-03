import React, { useState, useEffect } from "react";
import { Text, View } from "react-native";
import { Accelerometer } from "expo-sensors";

const OrientationComponent = () => {
  const [data, setData] = useState({ x: 0, y: 0, z: 0 });

  Accelerometer.setUpdateInterval(1000);
  useEffect(() => {
    const subscription = Accelerometer.addListener((orientationData) =>
      setData(orientationData)
    );
    return () => subscription.remove();
  }, []);

  return (
    <View>
      <Text>Orientation</Text>
      <Text>x: {data.x}</Text>
      <Text>y: {data.y}</Text>
      <Text>z: {data.z}</Text>
    </View>
  );
};

export default OrientationComponent;
