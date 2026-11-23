
import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  StatusBar,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const temas = [
  { emoji: '🧬', nome: 'Genética', descricao: 'DNA, genes e hereditariedade' },
  { emoji: '🔬', nome: 'Citologia', descricao: 'Células e suas estruturas' },
  { emoji: '🌱', nome: 'Ecologia', descricao: 'Meio ambiente e seres vivos' },
  { emoji: '🫀', nome: 'Anatomia', descricao: 'Corpo humano e sistemas' },
];

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>

          {/* CABEÇALHO */}
          <View style={styles.header}>
            <View>
              <Text style={styles.logo}>Bio<Text style={styles.logoGreen}>Vest</Text></Text>
              <Text style={styles.subtitle}>SEU UNIVERSO DE BIOLOGIA</Text>
            </View>

            <View style={styles.profile}>
              <Text style={styles.profileEmoji}>🧑‍🎓</Text>
            </View>
          </View>

          {/* BOAS-VINDAS */}
          <View style={styles.welcome}>
            <Text style={styles.welcomeSmall}>OLÁ, ESTUDANTE! 👋</Text>
            <Text style={styles.welcomeTitle}>
              Aprenda Biologia{'\n'}
              de um jeito <Text style={styles.highlight}>simples.</Text>
            </Text>
            <Text style={styles.welcomeDescription}>
              Explore conteúdos, estude para vestibulares
              e teste seus conhecimentos.
            </Text>

            <View style={styles.decorative}>
              <Text style={styles.decorativeEmoji}>🧬</Text>
              <Text style={styles.decorativeEmoji}>🌿</Text>
              <Text style={styles.decorativeEmoji}>🔬</Text>
            </View>
          </View>

          {/* CONTEÚDOS */}
          <View style={styles.sectionHeader}>
            <View>
              <Text style={styles.sectionTitle}>Explore os conteúdos</Text>
              <Text style={styles.sectionSubtitle}>
                Escolha um assunto para estudar
              </Text>
            </View>
          </View>

          <View style={styles.grid}>
            {temas.map((tema, index) => (
              <View key={index} style={styles.card}>
                <Text style={styles.cardEmoji}>{tema.emoji}</Text>
                <Text style={styles.cardTitle}>{tema.nome}</Text>
                <Text style={styles.cardDescription}>
                  {tema.descricao}
                </Text>
              </View>
            ))}
          </View>

          {/* VESTIBULARES */}
          <View style={styles.examCard}>
            <Text style={styles.examEmoji}>📚</Text>
            <View style={styles.examText}>
              <Text style={styles.examTitle}>Prepare-se para o vestibular!</Text>
              <Text style={styles.examDescription}>
                Pratique com questões e revise seus conhecimentos.
              </Text>
            </View>
          </View>

          {/* RODAPÉ */}
          <Text style={styles.footer}>
            BIOVEST • APRENDA, PRATIQUE E EVOLUA 🌱
          </Text>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F5F9F5',
  },
  container: {
    padding: 22,
    paddingBottom: 35,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 28,
  },
  logo: {
    fontSize: 29,
    fontWeight: '900',
    color: '#183D2B',
  },
  logoGreen: {
    color: '#36A66A',
  },
  subtitle: {
    fontSize: 9,
    letterSpacing: 2,
    color: '#789080',
    fontWeight: '700',
  },
  profile: {
    backgroundColor: '#DCEFE1',
    width: 48,
    height: 48,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileEmoji: {
    fontSize: 25,
  },
  welcome: {
    backgroundColor: '#1F6542',
    borderRadius: 24,
    padding: 23,
    marginBottom: 30,
    overflow: 'hidden',
  },
  welcomeSmall: {
    color: '#B9E5C6',
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 1.5,
    marginBottom: 12,
  },
  welcomeTitle: {
    color: '#FFFFFF',
    fontSize: 29,
    fontWeight: '900',
    lineHeight: 37,
  },
  highlight: {
    color: '#A9E6B8',
  },
  welcomeDescription: {
    color: '#E0F1E4',
    fontSize: 13,
    lineHeight: 21,
    marginTop: 12,
  },
  decorative: {
    flexDirection: 'row',
    marginTop: 22,
    gap: 12,
  },
  decorativeEmoji: {
    fontSize: 25,
    backgroundColor: '#FFFFFF20',
    padding: 10,
    borderRadius: 13,
  },
  sectionHeader: {
    marginBottom: 17,
  },
  sectionTitle: {
    color: '#183D2B',
    fontSize: 20,
    fontWeight: '800',
  },
  sectionSubtitle: {
    color: '#829187',
    fontSize: 12,
    marginTop: 5,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 13,
  },
  card: {
    width: '48%',
    flexGrow: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 19,
    padding: 16,
    minHeight: 145,
    borderWidth: 1,
    borderColor: '#E5EEE6',
  },
  cardEmoji: {
    fontSize: 29,
    marginBottom: 12,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '800',
    color: '#254B34',
  },
  cardDescription: {
    fontSize: 11,
    color: '#87958B',
    marginTop: 6,
    lineHeight: 17,
  },
  examCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E4F1E6',
    padding: 17,
    borderRadius: 19,
    marginTop: 25,
    gap: 13,
  },
  examEmoji: {
    fontSize: 32,
  },
  examText: {
    flex: 1,
  },
  examTitle: {
    fontSize: 14,
    fontWeight: '800',
    color: '#24563A',
  },
  examDescription: {
    fontSize: 11,
    color: '#668171',
    marginTop: 5,
    lineHeight: 17,
  },
  footer: {
    textAlign: 'center',
    color: '#9AA99D',
    fontSize: 9,
    fontWeight: '700',
    letterSpacing: 1,
    marginTop: 30,
  },
});