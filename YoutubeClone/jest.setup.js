import { jest } from '@jest/globals';

jest.mock('react-native-vector-icons/Ionicons', () => {
  return {
    default: ({ name, size, color }) => null, 
  };
});

jest.mock('react-native', () => {
  const RN = jest.requireActual('react-native');
  return {
    ...RN,
    Image: () => null, 
    ScrollView: ({ children }) => children, 
    TouchableOpacity: ({ children }) => children, 
    SafeAreaView: ({ children }) => children, 
    StatusBar: () => null, 
    View: ({ children }) => children, 
    Text: ({ children }) => children, 
  };
});