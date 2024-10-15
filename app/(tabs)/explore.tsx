import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Image, Platform,Text, ScrollView, StatusBar } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function TabTwoScreen() {
  return (
    <ScrollView style={{
      marginTop: StatusBar.currentHeight,
      paddingTop:12
    }}>

      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">About</ThemedText>
      </ThemedView>
      <ThemedText>This section contains info about the developer.</ThemedText>
      <Collapsible title="Developer">
        <ThemedText>
          My name is onesmus bett, i love coding.
        </ThemedText>
        <ExternalLink href="https://github.com/onesmuskipchumba0">
          <ThemedText type="link">Learn more on github</ThemedText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="Skills">
        <ThemedText>
          I am good in python - Django , Html, css , and es6 javascript - React
        </ThemedText>
      </Collapsible>
      <Collapsible title="Images">
        <Image source={require('@/assets/images/img.jpg')} style={{ alignSelf: 'center',width:120,height:120, borderRadius:50 }} />
      </Collapsible>
      <Collapsible title="Contacts">
        <ThemedText>
          <ThemedText>
            onesmuskipchumba5@gmail.com
          </ThemedText>
          <Text>        </Text>
          <ThemedText>
            0792400709
          </ThemedText>
        </ThemedText>
      </Collapsible>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
