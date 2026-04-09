import { Button } from 'react-native';

export default function Botao({ titulo, onPress }) {
  return <Button title={titulo} onPress={onPress} />;
}