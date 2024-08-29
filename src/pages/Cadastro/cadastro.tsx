import React from 'react';
import styles from './cadastroStyles';
import Rectangle from '@/components/LoginConatiner/loginContainer';
import Input from '@/components/Input/input';
import Icon from 'react-native-vector-icons/AntDesign';
import { View, Text, KeyboardAvoidingView, Image, Pressable, ScrollView } from 'react-native';
import { themes } from '@/styles/theme/index';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { AuthStackParamList } from '@/routes/stackRoutes';
import { useNavigation, NavigationProp } from '@react-navigation/native';

export default function Cadastro() {
  const navigation = useNavigation<NavigationProp<AuthStackParamList>>();
  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={{ width: '100%', backgroundColor: 'white', height: 30, justifyContent: 'center' }}>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
          >
            <Icon name="arrowleft" size={30} color={themes.colors.blue[500]} style={{ height: 30, marginLeft: 15 }} />
          </TouchableOpacity>
        </View>
        <Image style={styles.logo} source={require('../../assets/images/logo2.png')} />
        <Rectangle style={{ height: '70%' }}>
          <Text style={styles.text}>Inscreva-se</Text>
          <Input name="Nome de usuário" icon="user" isPassword={false} isEmail={false} />
          <Input name="E-mail" icon="mail" isPassword={false} isEmail={true} />
          <Input name="Senha" icon="lock1" isPassword={true} isEmail={false} />
          <Input name="Confirmar senha" icon="lock1" isPassword={true} isEmail={false} />
          <View style={styles.thirdPartners}>
            <TouchableOpacity onPress={() => {}}>
              <Icon name="google" size={30} color={themes.colors.blue[500]} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Icon name="twitter" size={30} color={themes.colors.blue[500]} style={{ paddingHorizontal: 20 }} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Icon name="facebook-square" size={30} color={themes.colors.blue[500]} />
            </TouchableOpacity>
          </View>
          <Pressable onPress={() => {}} style={styles.buttonContainer}>
            <Text style={{ padding: '8%', color: themes.colors.white }}>Cadastrar</Text>
          </Pressable>
        </Rectangle>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
