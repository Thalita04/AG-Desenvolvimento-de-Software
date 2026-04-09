import { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';

export default function CadastroScreen() {
  const [nome, setNome] = useState('');

  function salvar() {
    if (nome === '') {
      Alert.alert('Erro', 'O nome é obrigatório!');
      return;
    }

    Alert.alert('Sucesso', 'Produto cadastrado!');
  }

  return (
    <View>
      <Text>Cadastro</Text>

      <TextInput
        placeholder="Nome do produto"
        value={nome}
        onChangeText={setNome}
      />

      <Button title="Salvar" onPress={salvar} />
    </View>
  );
}