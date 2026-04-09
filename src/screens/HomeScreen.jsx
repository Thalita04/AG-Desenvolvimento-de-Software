import { View, Text, Button } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View>
      <Text>Bem-vindo!</Text>

      <Button
        title="Ir para cadastro"
        onPress={() => navigation.navigate('Cadastro')}
      />
    </View>
  );
}