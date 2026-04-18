import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';

// Fila reutilizable para la sección "User info"
const InfoRow = ({ label, value, isLast }) => (
  <View style={[styles.infoRow, !isLast && styles.infoRowBorder]}>
    <Text style={styles.infoLabel}>{label}</Text>
    <Text style={styles.infoValue}>{value}</Text>
  </View>
);

// Componente de estrellas
const Stars = ({ count = 3, total = 5 }) => (
  <View style={styles.starsContainer}>
    {Array.from({ length: total }).map((_, i) => (
      <Text key={i} style={i < count ? styles.starFilled : styles.starEmpty}>
        ★
      </Text>
    ))}
  </View>
);

const UserProfileCard = () => {
  const userInfo = [
    { label: 'Biografia',      value: "Ingeniero de Software" },
    { label: 'Edad',      value: '21 años' },
    { label: 'Genero',   value: 'Masculino' },
    { label: 'Fecha de registro',   value: '20 de diciembre, 2023' },
    { label: 'Localidad', value: 'Lima, Perú' },
  ];

  return (
    <ScrollView contentContainerStyle={styles.screen}>
      <View style={styles.card}>

        {/* ── Header ── */}
        <View style={styles.header}>
          <Text style={styles.screenTitle}>Perfil de usuario</Text>

          {/* Avatar */}
          <View style={styles.avatarCircle}>
            <Text style={styles.avatarEmoji}>🧑</Text>
          </View>

          <Text style={styles.name}>Ramiro Huaman Santos</Text>
          <Text style={styles.age}>21 años</Text>

          {/* Botones */}
          <TouchableOpacity style={styles.btnOutline}>
            <Text style={styles.btnOutlineText}>Conocer</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btnGreen}>
            <Text style={styles.btnGreenText}>Invitar a tu equipo</Text>
          </TouchableOpacity>
        </View>

        {/* ── Información ── */}
        <View style={styles.infoSection}>
          <Text style={styles.infoTitle}>Informacion del usuario</Text>

          {userInfo.map((item, index) => (
            <InfoRow
              key={item.label}
              label={item.label}
              value={item.value}
              isLast={false}
            />
          ))}

          {/* Fila de Reviews con estrellas */}
          <View style={[styles.infoRow, styles.infoRowLast]}>
            <Text style={styles.infoLabel}>Reviews</Text>
            <Stars count={4} total={5} />
          </View>
        </View>

      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flexGrow: 1,
    backgroundColor: '#F2F2F7',
    alignItems: 'center',
    paddingVertical: 40,
    paddingHorizontal: 16,
  },
  card: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 4,
  },

  header: {
    alignItems: 'center',
    paddingTop: 24,
    paddingBottom: 20,
    paddingHorizontal: 20,
    borderBottomWidth: 0.5,
    borderBottomColor: '#E0E0E0',
  },
  screenTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1C1C1E',
    marginBottom: 16,
    letterSpacing: 0.3,
  },
  avatarCircle: {
    width: 88,
    height: 88,
    borderRadius: 44,
    backgroundColor: '#EAF4FF',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#D0E8FF',
  },
  avatarEmoji: {
    fontSize: 50,
  },
  name: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1C1C1E',
    marginBottom: 4,
  },
  age: {
    fontSize: 13,
    color: '#8E8E93',
    marginBottom: 16,
  },

  // ── Botones ──
  btnOutline: {
    width: '100%',
    paddingVertical: 11,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#C7C7CC',
    alignItems: 'center',
    marginBottom: 10,
  },
  btnOutlineText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1C1C1E',
  },
  btnGreen: {
    width: '100%',
    paddingVertical: 11,
    borderRadius: 10,
    backgroundColor: '#1DB954',
    alignItems: 'center',
  },
  btnGreenText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#FFFFFF',
  },

  // ── Información ──
  infoSection: {
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 8,
  },
  infoTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: '#1C1C1E',
    marginBottom: 8,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: '#E0E0E0',
  },
  infoRowBorder: {
    borderBottomWidth: 0.5,
  },
  infoRowLast: {
    borderBottomWidth: 0,
  },
  infoLabel: {
    fontSize: 13,
    color: '#8E8E93',
  },
  infoValue: {
    fontSize: 13,
    color: '#1C1C1E',
    textAlign: 'right',
    flex: 1,
    marginLeft: 12,
  },

  // ── Estrellas ──
  starsContainer: {
    flexDirection: 'row',
  },
  starFilled: {
    color: '#FFA500',
    fontSize: 16,
  },
  starEmpty: {
    color: '#D1D1D6',
    fontSize: 16,
  },
});

export default UserProfileCard;