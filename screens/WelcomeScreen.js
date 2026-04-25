import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, Pressable } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const ActionCard = ({ icon, title, subtitle }) => (
  <View style={styles.card}>
    <View style={styles.iconContainer}>
      <MaterialCommunityIcons name={icon} size={28} color="#00bcd4" />
    </View>
    <Text style={styles.cardTitle}>{title}</Text>
    <Text style={styles.cardSubtitle}>{subtitle}</Text>
  </View>
);

const WelcomeScreen = ({navigation}) => {
  const [step, setStep] = useState(1);

  const handlePress = () => {
    if (step < 3) setStep(step + 1);
  };

  const OverviewSquare = ({ count, label }) => (
  <View style={styles.overviewSquare}>
    <Text style={styles.squareCount}>{count}</Text>
    <Text style={styles.squareLabel}>{label}</Text>
  </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Pressable style={styles.touchTarget} onPress={handlePress}>
        <View style={styles.content}>
          <Text style={styles.greeting}>Good afternoon, Sarah 👋</Text>

          {step >= 2 && (
            <Text style={styles.question}>How can we help you today?</Text>
          )}

          {step === 3 && (
            <>
              <View style={styles.grid}>
                <ActionCard icon="video-outline" title="Video Consult" subtitle="Connect with a doctor" />
                <ActionCard icon="file-document-outline" title="Medical Records" subtitle="View your health history" />
                <ActionCard icon="phone-outline" title="Call Doctor" subtitle="Speak to a physician" />
                <ActionCard icon="chat-outline" title="Message" subtitle="Chat with your care team" />
              </View>

              <TouchableOpacity 
                style={styles.button} activeOpacity={0.8}
                onPress={() => navigation.navigate('Dashboard')}>
                <Text style={styles.buttonText}>Proceed</Text>
              </TouchableOpacity>
            </>
          )}
        </View>
      </Pressable>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#319795',
  },
  touchTarget: {
    flex: 1,
    justifyContent: 'center',
  },
  content: {
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  greeting: {
    fontSize: 26,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 8,
    textAlign: 'center',
  },
  question: {
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.8)',
    marginBottom: 40,
    textAlign: 'center',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 12,
    marginBottom: 40,
    width: '100%',
  },
  card: {
    width: '45%',
    aspectRatio: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 16,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
  },
  iconContainer: {
    width: 44,
    height: 44,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  cardTitle: {
    color: 'white',
    fontWeight: '700',
    fontSize: 14,
    textAlign: 'center',
  },
  cardSubtitle: {
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: 10,
    textAlign: 'center',
    marginTop: 2,
  },
  button: {
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    paddingVertical: 14,
    paddingHorizontal: 60,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },

  prescriptionsRow: {
    flexDirection: 'row',
    paddingHorizontal: 15,
    marginTop: 20,
    gap: 12,
  },
  prescriptionsContainer: { flex: 2.5 },
  sidebarContainer: { flex: 1 },
  sectionHeaderRow: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    marginBottom: 10 
  },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', color: '#333', marginBottom: 10 },
  viewAllBtn: { backgroundColor: '#64d2e1', paddingHorizontal: 12, paddingVertical: 4, borderRadius: 12 },
  viewAllText: { color: 'white', fontSize: 10, fontWeight: '600' },
  tealBox: { 
    backgroundColor: '#64d2e1', 
    borderRadius: 20, 
    padding: 12, 
    gap: 10,
    borderWidth: 1,
    borderColor: '#319795'
  },
  tealSidebar: {
    backgroundColor: '#64d2e1',
    borderRadius: 20,
    padding: 10,
    gap: 8,
    flex: 1,
  },
  medCard: {
    backgroundColor: '#fffcf5',
    borderRadius: 15,
    padding: 12,
  },
  medHeader: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 12 },
  medName: { fontSize: 16, fontWeight: 'bold', color: '#333' },
  medDosage: { fontSize: 12, color: '#999' },
  dueSoonTag: { backgroundColor: '#ffe3b3', paddingHorizontal: 10, paddingVertical: 4, borderRadius: 10 },
  dueSoonText: { color: '#f5a623', fontSize: 10, fontWeight: 'bold' },
  medFooter: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  refillText: { fontSize: 11, color: '#999' },
  refillBtn: { backgroundColor: '#e8e6df', paddingHorizontal: 12, paddingVertical: 6, borderRadius: 12 },
  refillBtnText: { fontSize: 10, fontWeight: '600', color: '#666' },
  overviewSquare: {
    backgroundColor: 'white',
    borderRadius: 12,
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
  },
  squareCount: { fontSize: 24, fontWeight: 'bold', color: '#333' },
  squareLabel: { fontSize: 8, color: '#999', textAlign: 'center' },

});

export default WelcomeScreen;