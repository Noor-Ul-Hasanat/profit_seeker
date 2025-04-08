import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';

const ProductDetail = () => {
  // Sample data
  const offers = [
    { new: 523, used: 415, fba: 615 },
    { new: 525, used: 417, fba: 627 }];

  return (
    <ScrollView style={styles.container}>
      {/* Product Header */}
      <View style={styles.section}>
        <Text style={styles.title}>
          HP 15.6 inch Windows Laptop Intel Core i7-N305 8GB RAM 256GB SSD Natural Silver
        </Text>
        <View style={styles.details}>
          <Text style={styles.detailText}>UPC: 8025792823972197</Text>
          <Text style={styles.detailText}>Dimensions (L x W x H): 11 × 2201 × 10.98 inches</Text>
          <Text style={styles.price}>Price: $592.00</Text>
        </View>
      </View>

      {/* WFS Calculator */}
      <View style={[styles.section, styles.card]}>
        <Text style={styles.sectionTitle}>WFS Calculator</Text>
        <View style={styles.grid}>
          {[
            ['Dimension', '7.41', 'In', 'Referral Fees', '$5.29'],
            ['Unit Weight', '5.32', 'LD', 'Fulfillment Fees', '$5.77'],
            ['Selling Price', '61.98', '$', 'Storage Fee', '$0.37'],
            ['Buy Cost', '30.35', '$', 'Net Profit', '$28.80'],
            ['Inbound Shipping', '0.50', '$', 'Net Margin RXN', '68.60%']].map((row, index) => (
            <View key={index} style={styles.gridRow}>
              <Text style={styles.gridLabel}>{row[0]}</Text>
              <Text style={styles.gridValue}>{row[1]}</Text>
              <Text style={styles.gridUnit}>{row[2]}</Text>
              <Text style={styles.gridLabel}>{row[3]}</Text>
              <Text style={styles.gridValue}>{row[4]}</Text>
            </View>
          ))}
        </View>
      </View>

      {/* Offers Section */}
      <View style={[styles.section, styles.card]}>
        <Text style={styles.sectionTitle}>4 Offers</Text>
        <View style={styles.table}>
          <View style={styles.tableHeader}>
            <Text style={styles.headerText}>New</Text>
            <Text style={styles.headerText}>Used</Text>
            <Text style={styles.headerText}>FBA</Text>
          </View>
          {offers.map((offer, index) => (
            <View key={index} style={styles.tableRow}>
              <Text style={styles.cell}>${offer.new}</Text>
              <Text style={styles.cell}>${offer.used}</Text>
              <Text style={styles.cell}>${offer.fba}</Text>
            </View>
          ))}
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.primaryButton}>
            <Text style={styles.buttonText}>ADD</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.secondaryButton}>
            <Text style={styles.buttonText}>SEARCH</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7fafc',
    padding: 16,
  },
  section: {
    marginBottom: 24,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1a202c',
    marginBottom: 12,
  },
  details: {
    gap: 8,
  },
  detailText: {
    fontSize: 14,
    color: '#4a5568',
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#38a169',
    marginTop: 8,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#2d3748',
    marginBottom: 16,
  },
  grid: {
    gap: 12,
  },
  gridRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  gridLabel: {
    flex: 2,
    fontSize: 14,
    color: '#4a5568',
  },
  gridValue: {
    flex: 1,
    fontSize: 14,
    fontWeight: '500',
    color: '#2d3748',
    textAlign: 'right',
  },
  gridUnit: {
    flex: 1,
    fontSize: 14,
    color: '#718096',
    textAlign: 'center',
  },
  table: {
    marginBottom: 16,
  },
  tableHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#edf2f7',
    padding: 12,
    borderRadius: 6,
    marginBottom: 8,
  },
  headerText: {
    flex: 1,
    fontWeight: '600',
    color: '#2d3748',
  },
  tableRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#e2e8f0',
  },
  cell: {
    flex: 1,
    fontSize: 14,
    color: '#4a5568',
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 16,
    marginTop: 16,
  },
  primaryButton: {
    backgroundColor: '#4299e1',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 6,
    flex: 1,
  },
  secondaryButton: {
    backgroundColor: '#e2e8f0',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 6,
    flex: 1,
  },
  buttonText: {
    color: 'white',
    fontWeight: '600',
    textAlign: 'center',
  },
});

export default ProductDetail;


