import React, { useState } from 'react';
import { Text, TouchableOpacity, FlatList } from 'react-native';
import styles from './pillsMenuStyles';

interface PillsMenuProps {
  options: string[];
}

const PillsMenu: React.FC<PillsMenuProps> = ({ options }) => {
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const renderItem = ({ item }: { item: string }) => {
    const isSelected = selectedOption === item;
    return (
      <TouchableOpacity style={[styles.pill, isSelected ? styles.selectedPill : {}]} onPress={() => setSelectedOption(item)}>
        <Text style={[styles.pillText, isSelected ? styles.selectedPillText : {}]}>{item}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      data={options}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.container}
      keyExtractor={(item) => item}
      renderItem={renderItem}
    />
  );
};

export default PillsMenu;
