import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 20,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    borderBottomWidth: 2,
    borderBottomColor: '#f3f3f3',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 15,
  },
  copyIcon: {
    color: '#FF5733',
    padding: 5,
    marginLeft: 2,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#A9A9A9',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 15,
  },
  sectionTitle: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#333',
  },
  detailContainer: {
    marginTop: 5,
    padding: 15,
    borderRadius: 10,
  },
  bankSection: {
    marginBottom: 15,
  },
  bankTransfer: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#333',
    textTransform: 'uppercase',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  column: {
    flex: 1,
  },
  label: {
    fontSize: 16,
    color: '#333',
    fontWeight: '600',
    marginBottom: 2,
    textTransform: 'uppercase',
  },
  value: {
    fontSize: 16,
    fontWeight: '400',
    color: '#333',
  },
  labelRight: {
    fontSize: 16,
    color: '#333',
    fontWeight: '600',
    marginBottom: 2,
    paddingLeft: 40,
    textTransform: 'uppercase',
  },
  valueRight: {
    fontSize: 16,
    fontWeight: '400',
    color: '#333',
    paddingLeft: 40,
  },
  loadingText: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 50,
  },
  closeButton: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  closeButtonText: {
    color: '#FF5733',
    fontSize: 18,
    fontWeight: '400',
  },
});