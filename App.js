import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';

const SkincareApp = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Perawatan Kulit</Text>
      <TouchableOpacity style={styles.card}>
        <Image
          source={require('./src/pages/cleanser.jpeg')}
          style={styles.image}
        />
        <Text style={styles.cardTitle}>Cleanser</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.card}>
        <Image
          source={require('./src/pages/moisturizer.jpeg')}
          style={styles.image}
        />
        <Text style={styles.cardTitle}>Moisturizer</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.card}>
        <Image
          source={require('./src/pages/sunscreen.jpeg')}
          style={styles.image}
        />
        <Text style={styles.cardTitle}>Sunscreen</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  card: {
    width: 200,
    padding: 10,
    backgroundColor: 'lightblue',
    borderRadius: 10,
    alignItems: 'center',
    margin: 10,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 10,
  },
  cardTitle: {
    fontSize: 18,
    marginTop: 10,
  },
});

export default SkincareApp;
