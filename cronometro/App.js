import React, { useState, useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const App = () => {
  // Estado para armazenar o tempo decorrido
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  
  // Referência do intervalo do cronômetro
  const intervalRef = useRef(null);

  // Função para formatar o tempo em minutos, segundos e milissegundos
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60000);
    const seconds = Math.floor((time % 60000) / 1000);
    const milliseconds = Math.floor((time % 1000) / 10);
    
    return (
      `${minutes < 10 ? '0' + minutes : minutes}:` +
      `${seconds < 10 ? '0' + seconds : seconds}:` +
      `${milliseconds < 10 ? '0' + milliseconds : milliseconds}`
    );
  };

  // Função para iniciar o cronômetro
  const startTimer = () => {
    if (!isRunning) {
      setIsRunning(true);
      intervalRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    }
  };

  // Função para pausar o cronômetro
  const pauseTimer = () => {
    if (isRunning) {
      setIsRunning(false);
      clearInterval(intervalRef.current);
    }
  };

  // Função para reiniciar o cronômetro
  const resetTimer = () => {
    setIsRunning(false);
    clearInterval(intervalRef.current);
    setTime(0);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.timerText}>{formatTime(time)}</Text>
      
      <View style={styles.buttonContainer}>
        {!isRunning ? (
          <TouchableOpacity style={styles.button} onPress={startTimer}>
            <Text style={styles.buttonText}>Iniciar</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={styles.button} onPress={pauseTimer}>
            <Text style={styles.buttonText}>Pausar</Text>
          </TouchableOpacity>
        )}

        <TouchableOpacity style={styles.button} onPress={resetTimer}>
          <Text style={styles.buttonText}>Reiniciar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

// Estilos do aplicativo
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  timerText: {
    fontSize: 48,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 10,
    margin: 5,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default App;

