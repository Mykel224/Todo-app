import { StyleSheet, View, SafeAreaView } from 'react-native';
import TodoScreen from "./src/screen/TodoScreen"

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>    
        <TodoScreen />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'white', // Set SafeAreaView background color
  },
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0', // Set container background color
    alignItems: 'center', // Center content horizontally
    justifyContent: 'center', // Center content vertically
  },
});
