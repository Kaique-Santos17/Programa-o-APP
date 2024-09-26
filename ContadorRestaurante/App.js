import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  const [count, setCount] = useState(0); // Estado para armazenar o número de pessoas

  // Função para incrementar o número de pessoas
  const increment = () => {
    setCount(count + 1);
  };

  // Função para decrementar o número de pessoas
  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

return (
    <View style={styles.container}>
      <Text style={styles.title}>Contador Restaurante</Text>

      {/* Exibe o número atual de pessoas */}
      <Text style={styles.counter}>{count}</Text>

      {/* Botões para incrementar e decrementar */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={increment}>
          <Text style={styles.buttonText}>Entrar +</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={decrement}>
          <Text style={styles.buttonText}>Sair -</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
 title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  counter: {
    fontSize: 60,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
  },
  button: {
    backgroundColor: '#008CBA',
    padding: 15,
    borderRadius: 10,
    width: '40%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});