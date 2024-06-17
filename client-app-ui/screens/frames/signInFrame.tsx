import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components/native';
import { useRouter } from 'expo-router';
import { signIn } from '../../redux/action/authSlice';
import { RootState, AppDispatch } from '../../redux/store/index';

// Define form input types
interface IFormInput {
  username: string;
  password: string;
}

const SigninFrame = () => {
  const { control, handleSubmit } = useForm<IFormInput>();
  const dispatch = useDispatch<AppDispatch>();
  const auth = useSelector((state: RootState) => state.auth);
  const router = useRouter();

  const handleLogin = async (data: { username: string; password: string }) => {
    const { username, password } = data;
    await dispatch(signIn(username, password));

    if (auth.isAuthenticated) {
      console.log("Authenticated");
      router.replace('/home-main');
    }
    else {
      console.log("Login failed");
    }
  };

  return (
    <SigninContainer>
      <SigninTitle>Login</SigninTitle>

      {/* Email Input */}
      <SigninUser>
        <SigninUserText>Email/Username</SigninUserText>
        <Controller
          name="username"
          control={control}
          defaultValue=""
          render={({ field: { onChange, onBlur, value } }) => (
            <UserInput
              placeholder="your username or username"
              placeholderTextColor="#888"
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              returnKeyType="done"
            />
          )}
        />
      </SigninUser>

      {/* Password Input */}
      <SigninPassword>
        <SigninUserText>Password</SigninUserText>
        <Controller
          name="password"
          control={control}
          defaultValue=""
          render={({ field: { onChange, onBlur, value } }) => (
            <PassInput
              placeholder="your password"
              placeholderTextColor="#888"
              secureTextEntry={true}
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              returnKeyType="done"
            />
          )}
        />
      </SigninPassword>

      {/* Forgot Password Link */}
      <SigninFogot>
        <ForgotPassText>Forgot password?</ForgotPassText>
      </SigninFogot>

      {/* Sign In Button */}
      <SigninButton onPress={handleSubmit(handleLogin)}>
        <SignInPress>Sign In</SignInPress>
      </SigninButton>
    </SigninContainer>
  );
};

export default SigninFrame;

const SigninContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 50px;
  background-color: #f5f5f5;
`;

const SigninTitle = styled.Text`
  font-size: 40px;
  font-weight: bold;
  color: #333;
  margin-bottom: 100px;
`;

const SigninUser = styled.View`
  width: 100%;
  margin-bottom: 50px;
`;

const SigninUserText = styled.Text`
  font-size: 16px;
  color: #666;
  margin-bottom: 8px;
`;

const UserInput = styled.TextInput`
  width: 100%;
  padding: 12px;
  border-radius: 8px;
  background-color: #fff;
  border: 1px solid #ddd;
`;

const SigninPassword = styled.View`
  width: 100%;
  margin-bottom: 16px;
`;

const PassInput = styled.TextInput`
  width: 100%;
  padding: 12px;
  border-radius: 8px;
  background-color: #fff;
  border: 1px solid #ddd;
`;

const SigninFogot = styled.View`
  width: 100%;
  align-items: flex-start;
  margin-bottom: 50px;
`;

const ForgotPassText = styled.Text`
  font-size: 14px;
  color: #888;
`;

const SigninButton = styled.TouchableOpacity`
  width: 50%;
  padding: 12px;
  border-radius: 8px;
  border-color: black;
  border-width: medium;
  align-items: center;
`;

const SignInPress = styled.Text`
  font-size: 18px;
  color: #333;
  font-weight: bold;
`;

