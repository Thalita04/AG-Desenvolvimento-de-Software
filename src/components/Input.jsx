import { TextInput } from 'react-native';

export default function Input({ valor, onChange, placeholder }) {
  return (
    <TextInput
      value={valor}
      onChangeText={onChange}
      placeholder={placeholder}
    />
  );
}