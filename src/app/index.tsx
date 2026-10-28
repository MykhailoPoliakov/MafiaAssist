import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Pressable style={styles.button} onPress={() => console.log('pressed')}>
        <Text style={styles.label}>button</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#208AEF',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  label: {
    color: 'white',
    fontSize: 18,
  },
});