import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.logoTitle}>JanRaah <Text style={styles.logoSub}>AI</Text></Text>
          <Text style={styles.badge}>📍 Jabalpur, MP</Text>
        </View>

        {/* Hero Banner */}
        <View style={styles.heroCard}>
          <Text style={styles.heroHeading}>Sahi Raah, Sahi Hal</Text>
          <Text style={styles.heroSub}>Speak or type your problem to generate official RTI & complaint letters.</Text>
        </View>

        {/* Category Selection */}
        <Text style={styles.sectionTitle}>Select Issue Category</Text>
        <View style={styles.grid}>
          <TouchableOpacity style={styles.card}>
            <Text style={styles.cardIcon}>🗑️</Text>
            <Text style={styles.cardTitle}>Garbage</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.card}>
            <Text style={styles.cardIcon}>🛣️</Text>
            <Text style={styles.cardTitle}>Roads & Lights</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.card}>
            <Text style={styles.cardIcon}>🏥</Text>
            <Text style={styles.cardTitle}>Hospitals</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.card}>
            <Text style={styles.cardIcon}>👔</Text>
            <Text style={styles.cardTitle}>Staff Misconduct</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Floating Mic Button */}
      <TouchableOpacity style={styles.fab}>
        <Text style={styles.fabText}>🎙️ Speak Problem</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F8FAFC' },
  scroll: { padding: 20 },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 },
  logoTitle: { fontSize: 22, fontWeight: '900', color: '#1E3A8A' },
  logoSub: { fontWeight: '300', color: '#F97316' },
  badge: { backgroundColor: '#DBEAFE', color: '#1E40AF', paddingHorizontal: 10, paddingVertical: 4, borderRadius: 12, fontSize: 12, fontWeight: '600' },
  heroCard: { backgroundColor: '#1E3A8A', padding: 20, borderRadius: 16, marginBottom: 20 },
  heroHeading: { color: '#FFFFFF', fontSize: 24, fontWeight: 'bold' },
  heroSub: { color: '#93C5FD', fontSize: 13, marginTop: 6 },
  sectionTitle: { fontSize: 16, fontWeight: 'bold', color: '#0F172A', marginBottom: 12 },
  grid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' },
  card: { width: '48%', backgroundColor: '#FFFFFF', padding: 16, borderRadius: 12, borderWidth: 1, borderColor: '#E2E8F0', alignItems: 'center', marginBottom: 12 },
  cardIcon: { fontSize: 28, marginBottom: 8 },
  cardTitle: { fontSize: 13, fontWeight: 'bold', color: '#1E293B' },
  fab: { position: 'absolute', bottom: 20, alignSelf: 'center', backgroundColor: '#F97316', paddingVertical: 14, paddingHorizontal: 24, borderRadius: 30, elevation: 5 },
  fabText: { color: '#FFFFFF', fontWeight: 'bold', fontSize: 15 }
});
