import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

// Frases de sorte armazenadas localmente
const fortunePhrases = [
  "A vida trará coisas boas se tiver paciência.",
  "Demonstre amor e alegria em todas as oportunidades.",
  "Não compense na ira o que lhe falta na razão.",
  "Defeitos e virtudes são apenas dois lados da mesma moeda.",
  "Acredite no amor e não nas palavras.",
  "O riso é a menor distância entre duas pessoas.",
  "Você é do tamanho dos seus sonhos.",
  "A maior barreira para o sucesso é o medo do fracasso."
];

export default function App() {
  const [isBroken, setIsBroken] = useState(false); // Controla se o biscoito foi quebrado
  const [fortune, setFortune] = useState(''); // Armazena a frase da sorte

  // Função para quebrar o biscoito e gerar uma frase aleatória
  const breakCookie = () => {
    const randomIndex = Math.floor(Math.random() * fortunePhrases.length);
    setFortune(fortunePhrases[randomIndex]);
    setIsBroken(true);
  };
// Função para reiniciar o estado do biscoito
  const resetCookie = () => {
    setIsBroken(false);
    setFortune('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>FortuneCookie App</Text>

      {/* Imagem do biscoito da sorte */}
      <Image
        source={{
          uri: isBroken
            ? 'https://pt.namequotes.com/biscoitos-da-sorte/biscoitos-da-sorte.jpg' // Imagem do biscoito quebrado
            : 'https://1.bp.blogspot.com/-734LuPB5HwE/UNMc6ENnliI/AAAAAAAADIE/6VBCFUYESbU/s1600/Fortune-cookie550.jpg' // Imagem do biscoito fechado
        }}
        style={styles.cookieImage}
      />

      {/* Botão para quebrar ou reiniciar o biscoito */}
      <TouchableOpacity style={styles.button} onPress={isBroken ? resetCookie : breakCookie}>
        <Text style={styles.buttonText}>{isBroken ? 'Abrir outro biscoito' : 'Quebrar biscoito'}</Text>
      </TouchableOpacity>
{/* Exibe a frase de sorte quando o biscoito é quebrado */}
      {isBroken && (
        <View style={styles.fortuneContainer}>
          <Text style={styles.fortuneText}>{fortune}</Text>
        </View>
      )}
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
  cookieImage: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
button: {
    backgroundColor: '#FFA500',
    padding: 15,
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  fortuneContainer: {
    marginTop: 20,
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#f0f0f0',
  },
  fortuneText: {
    fontSize: 16,
    fontStyle: 'italic',
    textAlign: 'center',
  },
});
