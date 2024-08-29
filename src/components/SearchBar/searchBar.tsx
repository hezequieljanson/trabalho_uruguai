import React, { useState } from 'react';
import styles from './searchBarStyles';
import Icon from 'react-native-vector-icons/Ionicons';
import { TextInput, View } from 'react-native';
import { themes } from '@/styles/theme';

interface BarraPesquisaProps {
  placeholder: string;
  onSearch: (text: string) => void;
}

const BarraPesquisa: React.FC<BarraPesquisaProps> = ({ placeholder, onSearch }) => {
  const [searchText, setSearchText] = useState<string>('');

  const handleSearch = () => {
    if (onSearch) {
      onSearch(searchText);
    }
  };

  return (
    <View style={styles.container}>
      <Icon name="search" size={24} color={themes.colors.purple[500]} style={styles.icon} />
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        onChangeText={setSearchText}
        onSubmitEditing={handleSearch}
        value={searchText}
        placeholderTextColor={themes.colors.neutral[300]}
      />
    </View>
  );
};

export default BarraPesquisa;
