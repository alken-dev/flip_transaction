import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
    marginVertical: 4,
    borderRadius: 8,
    backgroundColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    overflow: 'hidden',
    flexDirection: 'row',
  },
  statusIndicator: {
    width: 5,
    backgroundColor: '#1EC15F',
  },
  pending: {
    backgroundColor: '#FF5722',
  },
  content: {
    flex: 1,
    padding: 12,
    paddingTop: 15,
    paddingBottom: 15,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  bankText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    textTransform: 'uppercase',
  },
  statusBadge: {
    position: 'absolute',
    top: '100%',
    right: 0,
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 4,
    
  },
  statusBadgeText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 13,
    padding: 2,
  },
  statusBadgeTextPending: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 13,
    padding: 2,
  },
  beneficiaryName: {
    fontSize: 16,
    color: '#000',
    fontWeight: '400',
    textTransform: 'uppercase',
  },
  detailText: {
    fontSize: 16,
    color: '#000',
    fontWeight: '400',
    marginTop: 4,
  },
});
