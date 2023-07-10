import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { MemberProvider } from './src/context/MemberContext'
import Routes from './src/routes';

export default function App() {
  return (
    <MemberProvider>
      <Routes />
    </MemberProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
