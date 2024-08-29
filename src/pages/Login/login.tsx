import React from 'react';
import styles from './loginStyles';
import Input from '@/components/Input/input';
import Rectangle from '@/components/LoginConatiner/loginContainer';
import Icon from 'react-native-vector-icons/AntDesign';
import { themes } from '@/styles/theme/index';
import { View, Text, Image, KeyboardAvoidingView, ScrollView, Pressable } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { AuthStackParamList } from '@/routes/stackRoutes';
import { useAuth } from '@/context/authContext';

export default function Login() {
  const navigation = useNavigation<NavigationProp<AuthStackParamList>>();
  const { setSignedIn } = useAuth();
  const goToSignUp = () => {
    navigation.navigate('Cadastro');
  };

  const goHome = () => {
    setSignedIn(true);
  };

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.containter}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={{ width: '100%', backgroundColor: 'white', height: 30, justifyContent: 'center' }}>
          <TouchableOpacity onPress={() => {}}>
            <Icon name="arrowleft" size={30} color={themes.colors.blue[500]} style={{ height: 30, marginLeft: 15 }} />
          </TouchableOpacity>
        </View>
        <Image style={styles.logo} source={require('../../assets/images/logo2.png')} />
        <Rectangle style={{ height: '70%' }}>
          <Text style={styles.text}>Login</Text>
          <Input name="E-mail" icon="mail" isPassword={false} isEmail={true} />
          <Input name="Senha" icon="lock1" isPassword={true} isEmail={false} />
          <TouchableOpacity style={{ paddingTop: 20 }} onPress={goToSignUp}>
            <Text>Criar uma conta</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ paddingTop: 20 }}>
            <Text>Esqueci a senha</Text>
          </TouchableOpacity>
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
          <Pressable onPress={goHome} style={styles.buttonContainer}>
            <Text style={{ padding: '8%', color: themes.colors.white }}>Entrar</Text>
          </Pressable>
        </Rectangle>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
