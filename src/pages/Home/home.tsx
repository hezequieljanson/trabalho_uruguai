import React from 'react';
import styles from './homeStyles';
import Header from '@/components/Header/header';
import BarraPesquisa from '@/components/SearchBar/searchBar';
import PillsMenu from '@/components/PillsMenu/pillsMenu';
import MasonryLayout from '@/components/MasonryLayout/masonry';
import { View, Text } from 'react-native';

const Home = () => {
  const options = ['Todas', 'Quadra', 'Basquete', 'Dança', 'Tênis', 'Futebol', 'Vôlei'];

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <Text style={styles.text1}>
          <Text style={styles.textBlack}>Olá </Text>
          <Text style={styles.textPurple}>Camila!</Text>
        </Text>
        <Text style={styles.text2}>Escolha sua próxima atividade</Text>
        <View style={styles.barraPesquisaContainer}>
          <BarraPesquisa placeholder="Pesquisar Modalidade" onSearch={(text) => console.log(text)} />
        </View>
        <View style={styles.pillsMenuContainer}>
          <PillsMenu options={options} />
        </View>
        <View style={styles.masonryContainer}>
          <MasonryLayout />
        </View>
      </View>
    </View>
  );
};

export default Home;
