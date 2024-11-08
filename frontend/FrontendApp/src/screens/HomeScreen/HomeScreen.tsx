import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import colors from '../../theme/colors';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    welcomeText: {
      fontSize: 24,
      fontWeight: 'bold',
      color: colors.text,
  },
});

export default HomeScreen;
