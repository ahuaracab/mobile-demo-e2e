import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  const [name, setName] = useState('');
  const [greeting, setGreeting] = useState('');
  const [counter, setCounter] = useState(0);

  const handleGreet = () => {
    if (name.trim()) {
      setGreeting(`Hola ${name}!`);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title} accessibilityLabel="main-title">Demo E2E Mobile</Text>

      <View style={styles.section}>
        <Text style={styles.label}>Nombre:</Text>
        <TextInput
          style={styles.input}
          accessibilityLabel="name-input"
          placeholder="Escribi tu nombre"
          value={name}
          onChangeText={setName}
        />
        <TouchableOpacity
          style={styles.button}
          accessibilityLabel="greet-button"
          onPress={handleGreet}
        >
          <Text style={styles.buttonText}>Saludar</Text>
        </TouchableOpacity>
        {greeting ? (
          <Text style={styles.greeting} accessibilityLabel="greeting-text">{greeting}</Text>
        ) : null}
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>Contador:</Text>
        <Text style={styles.counter} accessibilityLabel="counter-value">{counter}</Text>
        <View style={styles.counterRow}>
          <TouchableOpacity
            style={styles.button}
            accessibilityLabel="decrement-button"
            onPress={() => setCounter(c => c - 1)}
          >
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            accessibilityLabel="increment-button"
            onPress={() => setCounter(c => c + 1)}
          >
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 40,
    color: '#333',
  },
  section: {
    marginBottom: 30,
    alignItems: 'center',
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
    color: '#555',
  },
  input: {
    width: '80%',
    height: 44,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 12,
    fontSize: 16,
    backgroundColor: '#fff',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#4A90D9',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginHorizontal: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  greeting: {
    fontSize: 22,
    marginTop: 15,
    color: '#2E7D32',
    fontWeight: 'bold',
  },
  counter: {
    fontSize: 48,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  counterRow: {
    flexDirection: 'row',
    gap: 20,
  },
});
