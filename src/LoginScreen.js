import React, {useEffect} from 'react';
import {View, Button} from 'react-native';
import {GoogleSignin, statusCodes} from '@react-native-community/google-signin';
import {Text} from 'react-native';

const LoginScreen = () => {
  const [messagei, setUserInfo] = React.useState('Hello World');
  console.log('LoginScreen');
  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '1067109647596-h7n8dqp14ad0riqpkqft6a3eg8b4hegl.apps.googleusercontent.com', // Your Google API web client ID
      offlineAccess: true,
    });
  }, []);

  const handleGoogleSignIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log('User Info:', userInfo);
      setUserInfo(userInfo);
      // You can now use userInfo to authenticate the user in your app
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log('User cancelled the sign-in process');
        setUserInfo('User cancelled the sign-in process');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log('Sign-in is already in progress');
        setUserInfo('Sign-in is already in progress');
      } else {
        console.log('Error:', error.message);
        setUserInfo('Error:' + error.message);
      }
    }
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Button title="Sign in with Google" onPress={handleGoogleSignIn} />
      <Text>{messagei}</Text>
    </View>
  );
};

export default LoginScreen;
