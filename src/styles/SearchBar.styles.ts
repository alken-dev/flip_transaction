import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: { 
    padding: 10, 
    backgroundColor: '#F9F9F9' 
  },
  input: {
    paddingLeft: 35,
    height: 40,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    paddingHorizontal: 10,
    fontSize: 14,
    borderWidth: 1,
    borderColor: '#DDD',
  },
  icon: {
    position: 'absolute',
    left: 15,
    top: '60%',
    transform: [{ translateY: -10 }],
  },
});