import { Image,Text, StyleSheet, Platform, ScrollView, SafeAreaView, StatusBar, TouchableOpacity } from 'react-native';
import JokesComponent from './../../components/JokesComponent';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function HomeScreen() {
  const endpoint = "https://api.chucknorris.io/jokes/random";
  const [joke, setJoke] = useState({ value: "" }); // Initialize with a matching structure
  const [loading, setLoading] = useState(true); // Track loading state
  const [error, setError] = useState(null); // Track errors

  // Fetch data from API on component mount
  useEffect(() => {
    
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const response = await axios.get(endpoint);
      setJoke(response.data); // Store the joke data
    } catch (err) {
      setError(err.message); // Handle errors
    } finally {
      setLoading(false); // Stop loading indicator
    }
  };
  if (loading) {
    return (
      <ThemedView style={styles.loadingContainer}>
        <ThemedText type="default">Loading...</ThemedText>
      </ThemedView>
    );
  }

  if (error) {
    return (
      <ThemedView style={styles.errorContainer}>
        <ThemedText type="default" style={styles.errorText}>
          Error: {error}
        </ThemedText>
      </ThemedView>
    );
  }

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Chuck Norris Jokes</ThemedText>
      </ThemedView>
      {/* Pass the joke to JokesComponent */}
      <JokesComponent joke={joke.value} />
      <TouchableOpacity onPress={fetchData} activeOpacity={0.5} style={styles.btn}>
        <Text>Next Joke</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  container: {
    marginTop: StatusBar.currentHeight,
    paddingTop:24
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    color: 'red',
    fontSize: 16,
    
  },
  btn:{
    backgroundColor:'cyan',
    width:'50%',
    textAlign:'center',
    height:30,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:10,
    marginTop:50,
  }
});
