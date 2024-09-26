import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import quotesData from './quotes.json'; // Importa o arquivo JSON local

export default function App() {
  const [currentQuote, setCurrentQuote] = useState(null); // Estado para armazenar a citação atual

  useEffect(() => {
    getRandomQuote(); // Carrega uma citação inicial
  }, []);

  // Função para obter uma citação aleatória
  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotesData.length);
    setCurrentQuote(quotesData[randomIndex]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>QuotesApp</Text>

      {/* Exibe a citação atual e a imagem do autor */}
      {currentQuote && (
        <View style={styles.quoteContainer}>
          <Image source={{ uri: currentQuote.image }} style={styles.authorImage} />
          <Text style={styles.quoteText}>“{currentQuote.quote}”</Text>
          <Text style={styles.authorText}>- {currentQuote.author}</Text>
        </View>
      )}

      {/* Botão para gerar uma nova citação */}
      <TouchableOpacity style={styles.button} onPress={getRandomQuote}>
        <Text style={styles.buttonText}>Nova Citação</Text>
      </TouchableOpacity>
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
  quoteContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  authorImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 15,
  },
quoteText: {
    fontSize: 18,
    fontStyle: 'italic',
    textAlign: 'center',
    marginHorizontal: 20,
  },
  authorText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#008CBA',
    padding: 15,
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});