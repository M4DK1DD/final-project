import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, SafeAreaView, Dimensions } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Dashboard = () => {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.menuButton}>
        <MaterialCommunityIcons name="menu" size={32} color="#333" />
      </TouchableOpacity>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 40 }}>
        
        <View style={styles.banner}>
          <Text style={styles.bannerGreeting}>Good afternoon, Sarah 👋</Text>
          <Text style={styles.bannerSub}>How can we help you today?</Text>
          <View style={styles.actionGrid}>
            <ActionIcon name="video" label="Video Consult" />
            <ActionIcon name="file-document" label="Medical Records" />
            <ActionIcon name="phone" label="Call Doctor" />
            <ActionIcon name="chat" label="Message" />
          </View>
        </View>

        <View style={[styles.whiteCard, styles.appointmentShadow]}>
          <View style={styles.tagRow}>
            <View style={styles.todayTag}><Text style={styles.todayText}>Today</Text></View>
            <Text style={styles.nextLabel}>Next Appointment</Text>
          </View>
          <View style={styles.apptMain}>
            <View>
              <Text style={styles.doctorName}>Dr. Sarah Johnson</Text>
              <Text style={styles.specialty}>Family Medicine</Text>
              <View style={styles.timeInfo}>
                 <MaterialCommunityIcons name="clock-outline" size={14} color="#00bcd4" />
                 <Text style={styles.timeText}> 2:30 PM</Text>
                 <MaterialCommunityIcons name="video-outline" size={14} color="#00bcd4" style={{marginLeft: 10}} />
                 <Text style={styles.timeText}> Video Consultation</Text>
              </View>
            </View>
            <TouchableOpacity style={styles.joinBtn}>
              <MaterialCommunityIcons name="video" size={18} color="white" />
              <Text style={styles.joinText}>Join Video Call</Text>
            </TouchableOpacity>
          </View>
        </View>

        <ActionRequiredCard 
          title="Pending Referrals - Action Required"
          mainTitle="Specialist Referral - Orthopedic Surgeon"
          subText="Referred by Dr. Sofia Lim (Cardiologist)"
          details={[
            { icon: 'account-outline', text: 'Reason: Knee pain after exercise' },
            { icon: 'calendar-outline', text: 'Referral Date: February 10, 2026' }
          ]}
          primaryBtn="Book Appointment"
          secondaryBtn="View Details"
        />

        <ActionRequiredCard 
          title="Pending Payments - Action Required"
          mainTitle="Consultation with Dr. Maria Santos"
          subText="Consultation Date: March 28, 2026"
          details={[
            { icon: 'link-variant', text: 'Medical Certificate: $350 (unpaid)' },
            { icon: 'link-variant', text: 'Medical Clearance: $450 (unpaid)' }
          ]}
          primaryBtn="Pay Now"
          secondaryBtn="View Invoice"
        />

        <Text style={styles.sectionHeader}>Health Overview</Text>
        <OverviewBar icon="link" label="3 Active Medications" />
        <OverviewBar icon="calendar-blank" label="2 Upcoming Appointments" />
        <OverviewBar icon="book-open-outline" label="1 New Lab Results" />

        <View style={styles.bottomRow}>
          <View style={{ flex: 2.2 }}>
            <View style={styles.rowBetween}>
                <Text style={styles.sectionHeaderSmall}>Prescriptions</Text>
                <TouchableOpacity style={styles.viewAllBtn}><Text style={styles.viewAllText}>View All</Text></TouchableOpacity>
            </View>
            <View style={styles.tealContainer}>
              <MedCard name="Lisinopril" dose="10mg" refill="5 days" due />
              <MedCard name="Metformin" dose="500mg" refill="30 days" />
            </View>
          </View>

          <View style={{ flex: 1 }}>
            <Text style={styles.sectionHeaderSmall}>Overview</Text>
            <View style={styles.tealContainer}>
              <OverviewSquare count="3" label="Active Medications" />
              <OverviewSquare count="2" label="Upcoming Appointments" />
              <OverviewSquare count="1" label="New Lab Results" />
            </View>
          </View>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
};

const ActionIcon = ({ name, label }) => (
  <View style={styles.actionItem}>
    <View style={styles.iconCircle}><MaterialCommunityIcons name={name} size={24} color="#00bcd4" /></View>
    <Text style={styles.actionLabel}>{label}</Text>
  </View>
);

const ActionRequiredCard = ({ title, mainTitle, subText, details, primaryBtn, secondaryBtn }) => (
  <View style={styles.actionRequiredWrapper}>
    <View style={styles.headerRow}>
      <View style={styles.orangeCircle}><Text style={styles.exclamation}>!</Text></View>
      <Text style={styles.headerTitle}>{title}</Text>
    </View>
    <View style={styles.actionCardBody}>
      <View style={styles.pendingBadge}><Text style={styles.pendingText}>Pending</Text></View>
      <Text style={styles.cardMainTitle}>{mainTitle}</Text>
      <Text style={styles.cardSubText}>{subText}</Text>
      
      <View style={styles.detailsAndButtons}>
        <View style={styles.detailsCol}>
          {details.map((d, i) => (
            <View key={i} style={styles.detailItem}>
               <MaterialCommunityIcons name={d.icon} size={14} color="#999" />
               <Text style={styles.detailText}>{d.text}</Text>
            </View>
          ))}
        </View>
        <View style={styles.buttonsCol}>
          <TouchableOpacity style={styles.orangeBtn}><Text style={styles.btnTextWhite}>{primaryBtn}</Text></TouchableOpacity>
          <TouchableOpacity style={styles.greyBtn}><Text style={styles.btnTextGrey}>{secondaryBtn}</Text></TouchableOpacity>
        </View>
      </View>
    </View>
  </View>
);

const OverviewBar = ({ icon, label }) => (
  <View style={styles.overviewBar}>
    <View style={styles.barIconBox}><MaterialCommunityIcons name={icon} size={20} color="#00bcd4" /></View>
    <Text style={styles.barLabel}>{label}</Text>
  </View>
);

const MedCard = ({ name, dose, refill, due }) => (
  <View style={styles.innerMedCard}>
    <View style={styles.rowBetween}>
      <View>
        <Text style={styles.medTitle}>{name}</Text>
        <Text style={styles.medDose}>{dose}</Text>
      </View>
      {due && <View style={styles.dueSoonBadge}><Text style={styles.dueText}>Due Soon</Text></View>}
    </View>
    <View style={[styles.rowBetween, {marginTop: 10}]}>
      <Text style={styles.refillCount}>Refill in {refill}</Text>
      <TouchableOpacity style={styles.refillBtn}><Text style={styles.refillBtnText}>Refill Now</Text></TouchableOpacity>
    </View>
  </View>
);

const OverviewSquare = ({ count, label }) => (
  <View style={styles.ovSquare}>
    <Text style={styles.ovCount}>{count}</Text>
    <Text style={styles.ovLabel}>{label}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fcfcfc' },
  menuButton: { padding: 20 },
  banner: { backgroundColor: '#00bcd4', marginHorizontal: 15, borderRadius: 15, padding: 20 },
  bannerGreeting: { color: 'white', fontSize: 22, fontWeight: 'bold' },
  bannerSub: { color: 'white', fontSize: 14, marginBottom: 20 },
  actionGrid: { flexDirection: 'row', justifyContent: 'space-between' },
  actionItem: { alignItems: 'center', width: '23%' },
  iconCircle: { backgroundColor: 'rgba(255,255,255,0.3)', padding: 12, borderRadius: 12, marginBottom: 8 },
  actionLabel: { color: 'white', fontSize: 10, fontWeight: '600', textAlign: 'center' },
  whiteCard: { backgroundColor: 'white', margin: 15, padding: 15, borderRadius: 15 },
  appointmentShadow: { borderBottomWidth: 3, borderBottomColor: '#00bcd4' },
  tagRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 12 },
  todayTag: { backgroundColor: '#008ba3', paddingHorizontal: 10, paddingVertical: 4, borderRadius: 10 },
  todayText: { color: 'white', fontSize: 10, fontWeight: 'bold' },
  nextLabel: { marginLeft: 10, color: '#999', fontSize: 11 },
  apptMain: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  doctorName: { fontSize: 16, fontWeight: 'bold', color: '#333' },
  specialty: { fontSize: 12, color: '#999' },
  timeInfo: { flexDirection: 'row', marginTop: 8, alignItems: 'center' },
  timeText: { fontSize: 10, color: '#666' },
  joinBtn: { backgroundColor: '#008ba3', flexDirection: 'row', padding: 10, borderRadius: 8, alignItems: 'center' },
  joinText: { color: 'white', fontSize: 12, fontWeight: 'bold', marginLeft: 5 },
  actionRequiredWrapper: { marginHorizontal: 15, marginBottom: 20 },
  headerRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 8 },
  orangeCircle: { width: 24, height: 24, backgroundColor: '#f5a623', borderRadius: 12, alignItems: 'center', justifyContent: 'center' },
  exclamation: { color: 'white', fontWeight: 'bold' },
  headerTitle: { marginLeft: 10, fontWeight: 'bold', color: '#444' },
  actionCardBody: {
    backgroundColor: '#fffcf5',
    padding: 15,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#ffeaa7', 
    
    borderBottomWidth: 4, 
    borderBottomColor: '#f5a623', 
    borderLeftWidth: 6,
    borderLeftColor: '#f5a623',

    shadowColor: '#f5a623',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5, 
    marginBottom: 15,
  },
  pendingBadge: { backgroundColor: '#ffeaa7', alignSelf: 'flex-start', paddingHorizontal: 10, paddingVertical: 2, borderRadius: 10, marginBottom: 8 },
  pendingText: { color: '#d48806', fontSize: 10, fontWeight: 'bold' },
  cardMainTitle: { fontSize: 14, fontWeight: 'bold', color: '#333' },
  cardSubText: { fontSize: 11, color: '#999', marginBottom: 10 },
  detailsAndButtons: { flexDirection: 'row', justifyContent: 'space-between' },
  detailsCol: { flex: 1.5 },
  buttonsCol: { flex: 1, alignItems: 'flex-end', gap: 5 },
  detailItem: { flexDirection: 'row', alignItems: 'center', marginBottom: 4 },
  detailText: { fontSize: 9, color: '#999', marginLeft: 5 },
  orangeBtn: { backgroundColor: '#f5a623', paddingVertical: 6, paddingHorizontal: 12, borderRadius: 10, width: '100%', alignItems: 'center' },
  greyBtn: { backgroundColor: '#e9ecef', paddingVertical: 6, paddingHorizontal: 12, borderRadius: 10, width: '100%', alignItems: 'center' },
  btnTextWhite: { color: 'white', fontSize: 10, fontWeight: 'bold' },
  btnTextGrey: { color: '#666', fontSize: 10 },
  sectionHeader: { marginHorizontal: 15, fontSize: 16, fontWeight: 'bold', color: '#333', marginTop: 10, marginBottom: 10 },
  overviewBar: { backgroundColor: 'white', marginHorizontal: 15, marginBottom: 10, padding: 12, borderRadius: 12, flexDirection: 'row', alignItems: 'center' },
  barIconBox: { backgroundColor: '#e0f7fa', padding: 8, borderRadius: 8, marginRight: 15 },
  barLabel: { fontSize: 14, color: '#444', fontWeight: '500' },
  bottomRow: { flexDirection: 'row', marginHorizontal: 15, gap: 12, marginTop: 10 },
  sectionHeaderSmall: { fontSize: 14, fontWeight: 'bold', color: '#333', marginBottom: 10 },
  tealContainer: { backgroundColor: '#64d2e1', padding: 10, borderRadius: 20, gap: 10 },
  viewAllBtn: { backgroundColor: '#64d2e1', paddingHorizontal: 10, paddingVertical: 4, borderRadius: 10 },
  viewAllText: { color: 'white', fontSize: 10, fontWeight: 'bold' },
  rowBetween: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  innerMedCard: { backgroundColor: '#fffcf5', padding: 12, borderRadius: 12 },
  medTitle: { fontWeight: 'bold', fontSize: 14 },
  medDose: { fontSize: 11, color: '#999' },
  dueSoonBadge: { backgroundColor: '#ffe3b3', paddingHorizontal: 8, paddingVertical: 2, borderRadius: 8 },
  dueText: { color: '#f5a623', fontSize: 10, fontWeight: 'bold' },
  refillCount: { fontSize: 10, color: '#999' },
  refillBtn: { backgroundColor: '#e8e6df', paddingHorizontal: 10, paddingVertical: 5, borderRadius: 10 },
  refillBtnText: { fontSize: 10, color: '#666', fontWeight: 'bold' },
  ovSquare: { backgroundColor: 'white', borderRadius: 12, aspectRatio: 1, justifyContent: 'center', alignItems: 'center', padding: 5 },
  ovCount: { fontSize: 24, fontWeight: 'bold', color: '#333' },
  ovLabel: { fontSize: 8, color: '#999', textAlign: 'center' }
});

export default Dashboard;