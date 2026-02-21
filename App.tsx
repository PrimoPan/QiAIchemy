import React, { useState } from 'react';
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';

function App(): React.JSX.Element {
  return (
    <SafeAreaProvider>
      <StatusBar barStyle="dark-content" backgroundColor="#f6eddd" />
      <LoginScreen />
    </SafeAreaProvider>
  );
}

function LoginScreen(): React.JSX.Element {
  const insets = useSafeAreaInsets();
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  const onLogin = () => {
    Alert.alert('QiAlchemy', 'Login flow is ready for backend integration.');
  };

  return (
    <View style={styles.screen}>
      <View style={styles.inkHaloTop} />
      <View style={styles.inkHaloBottom} />

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={styles.flex}
      >
        <View
          style={[
            styles.content,
            {
              paddingTop: Math.max(insets.top + 18, 30),
              paddingBottom: Math.max(insets.bottom + 18, 24),
            },
          ]}
        >
          <View style={styles.titleBlock}>
            <View style={styles.seal} />
            <Text style={styles.cnTitle}>岐元灵术</Text>
            <Text style={styles.enTitle}>QiAlchemy</Text>
            <Text style={styles.subtitle}>AI-guided wellness rooted in traditional wisdom</Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.label}>Phone</Text>
            <TextInput
              autoCapitalize="none"
              keyboardType="phone-pad"
              placeholder="Enter mobile number"
              placeholderTextColor="#99866b"
              style={styles.input}
              value={phone}
              onChangeText={setPhone}
            />

            <Text style={styles.label}>Password</Text>
            <TextInput
              autoCapitalize="none"
              placeholder="Enter password"
              placeholderTextColor="#99866b"
              secureTextEntry
              style={styles.input}
              value={password}
              onChangeText={setPassword}
            />

            <Pressable style={styles.button} onPress={onLogin}>
              <Text style={styles.buttonText}>Login</Text>
            </Pressable>

            <Text style={styles.helperText}>For iPhone users participating in health study.</Text>
          </View>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  screen: {
    flex: 1,
    backgroundColor: '#f6eddd',
  },
  inkHaloTop: {
    position: 'absolute',
    top: -100,
    right: -50,
    width: 240,
    height: 240,
    borderRadius: 120,
    backgroundColor: 'rgba(176, 47, 36, 0.12)',
  },
  inkHaloBottom: {
    position: 'absolute',
    left: -70,
    bottom: -120,
    width: 260,
    height: 260,
    borderRadius: 130,
    backgroundColor: 'rgba(55, 28, 16, 0.08)',
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
    justifyContent: 'space-between',
  },
  titleBlock: {
    paddingTop: 8,
  },
  seal: {
    width: 38,
    height: 38,
    borderRadius: 4,
    marginBottom: 14,
    backgroundColor: '#a7342d',
  },
  cnTitle: {
    color: '#2f2115',
    fontSize: 34,
    letterSpacing: 2,
    fontFamily: Platform.OS === 'ios' ? 'STKaiti' : undefined,
  },
  enTitle: {
    marginTop: 8,
    color: '#6c4f34',
    fontSize: 24,
    fontWeight: '600',
  },
  subtitle: {
    marginTop: 8,
    color: '#7c664d',
    fontSize: 14,
    lineHeight: 20,
  },
  card: {
    borderWidth: 1,
    borderColor: 'rgba(94, 62, 32, 0.2)',
    borderRadius: 20,
    backgroundColor: 'rgba(255, 252, 246, 0.9)',
    paddingHorizontal: 18,
    paddingTop: 18,
    paddingBottom: 20,
  },
  label: {
    color: '#5f4227',
    fontSize: 13,
    fontWeight: '600',
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#d8c4a7',
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 16,
    color: '#2f2115',
    marginBottom: 16,
    backgroundColor: '#fffdf8',
  },
  button: {
    marginTop: 4,
    borderRadius: 12,
    paddingVertical: 13,
    alignItems: 'center',
    backgroundColor: '#b13c2f',
  },
  buttonText: {
    color: '#fff5ef',
    fontSize: 16,
    fontWeight: '700',
    letterSpacing: 0.3,
  },
  helperText: {
    marginTop: 12,
    color: '#8e7659',
    fontSize: 12,
    textAlign: 'center',
  },
});

export default App;
