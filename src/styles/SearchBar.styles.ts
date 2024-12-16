import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#DDD',
    paddingHorizontal: 10,
    height: 50,
    position: 'relative',
  },
  input: {
    flex: 1,
    paddingLeft: 30,
    fontSize: 14,
    color: '#333',
  },
  icon: {
    position: 'absolute',
    left: 10,
    top: '50%',
    transform: [{ translateY: -10 }],
  },
  sortButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: 'transparent',
    borderRadius: 5,
    marginLeft: 5,
  },
  sortButtonText: {
    fontSize: 16,
    fontWeight: 500,
    color: '#FF5722',
    marginRight: 3,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 20,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: '#333',
  },
  optionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
  },
  circle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    marginRight: 10,
  },
  circleSelected: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: '#FF5722',
    borderRadius: 10,
    position: 'relative',
  },
  circleInner: {
    width: 12,
    height: 12,
    borderRadius: 8,
    backgroundColor: '#FF5722',
    position: 'absolute',
    top: 2,
    left: 2,                         
  },
  circleUnselected: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#FF5722',
  },
  optionText: {
    fontSize: 16,
    color: '#333',
  },

});
