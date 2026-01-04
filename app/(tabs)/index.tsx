import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { GoldFrame } from '@/components/GoldFrame';
import { COLORS } from '@/constants/colors';

export default function DashboardScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Kollective Brain Command Center</Text>
        <Text style={styles.subtitle}>"Started from the bottom, now the whole team here"</Text>

        <GoldFrame>
          <Text style={styles.sectionTitle}>Active Operations</Text>
          <Text style={styles.text}>All systems operational. No alerts detected.</Text>
        </GoldFrame>

        <GoldFrame>
          <Text style={styles.sectionTitle}>Brand Metrics</Text>
          <Text style={styles.text}>Pinky Promise: 🟢 Active</Text>
          <Text style={styles.text}>Umbrella Group: 🟢 Active</Text>
          <Text style={styles.text}>Sole Exchange: 🟢 Active</Text>
        </GoldFrame>

        <GoldFrame>
          <Text style={styles.sectionTitle}>System Commands</Text>
          <Text style={styles.text}>Tap any metric to drill down into operations</Text>
        </GoldFrame>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.black,
  },
  content: {
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: COLORS.moltenGold,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: COLORS.gray,
    fontStyle: 'italic',
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: COLORS.moltenGold,
    marginBottom: 12,
  },
  text: {
    fontSize: 16,
    color: COLORS.white,
    marginBottom: 8,
  },
});
