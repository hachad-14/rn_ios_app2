import { StatusBar } from 'expo-status-bar';
import { Button } from 'react-native';
import { StyleSheet, Text, View, Alert } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={{
        top: -320,
        width: "100%",
        height: 120,
        backgroundColor: "#535353",
        borderRadius: 20,
      }}>
        <Text style={{
          fontSize: 20,
          textAlign: 'center',
          top:80,
          color: "#fff",
          fontWeight: "bold",
        }}>Bienvenue Saad.</Text>
      </View>
      <Text style={{
        color: "#fff",
        fontSize: 20,
        textAlign: 'center',
        paddingBottom: 100,
      }}>Avant d'appuyer sur le boutton est tu sur de ton choix ?</Text>
      <Button
        onPress={() => Alert.alert('Votre choix à été la cause de la mort de 30K de vies.')}
        title="Activer"
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
