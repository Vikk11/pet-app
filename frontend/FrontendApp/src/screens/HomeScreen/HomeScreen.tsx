import { View, Image, Text, TextInput, Pressable, ScrollView } from 'react-native';
import React from 'react';
import styles from './homeScreenStyle';

const HomeScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerTop}>
          <Image style={styles.logo} source={require('../../assets/images/money.png')}  />
          <Text style={styles.welcomeText}>Welcome Back!</Text>
        </View>

        <View style={styles.searchContainer}>
          <TextInput style={styles.searchInput} placeholder="Search" />
          <Pressable style={styles.searchButton}>
            <Image style={styles.searchIcon} source={require('../../assets/images/money.png')} />
          </Pressable>
        </View>
      </View>

      <View style={styles.buttonRow}>
        {['1', '2', '3', '4', '5', '6'].map((item, index) => (
          <Pressable key={index} style={styles.redButton}>
            <Image style={styles.searchIcon} source={require('../../assets/images/money.png')} />
          </Pressable>
        ))}
      </View>

      <View style={styles.cardsContainer}>
        {['Card 1', 'Card 2', 'Card 3'].map((card, index) => (
          <View key={index} style={styles.card}>
            <View style={styles.cardContent}>
              <View style={styles.iconContainer}>
                <Image style={styles.logo} source={require('../../assets/images/money.png')} />
              </View>
              <View style={styles.cardText}>
                <Text style={styles.cardTitle}>{card}</Text>
                <Text style={styles.cardDescription}>Description for {card}</Text>
              </View>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
