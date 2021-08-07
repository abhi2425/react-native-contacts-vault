import React, { useMemo, useState } from 'react'
import { Button, Text, TouchableOpacity, View } from 'react-native'
import { useForm } from 'react-hook-form'

import { colors } from '../../assets/themes/color'
import Container from '../../components/UI/Container/Container'
import Input from '../../components/UI/Input/Input'
import Loading from '../../components/UI/Loading/Loading'
import AuthHeader from '../../components/AuthHeader/AuthHeader'
import { REGISTER } from '../../constants/routeNames'
import { useGlobalContext } from '../../contexts/GlobalStore'
import { login } from '../../contexts/actions/Auth'
import Alert from '../../components/UI/Alert/Alert'
import AuthToggle from '../../components/AuthToggle/AuthToggle'
import { useAlert } from '../../hooks/useAlert'

const Login = () => {
  const [showPassword, setShowPassword] = useState(false)
  const {
    alert: { show, type, message },
    popAlert,
    closeAlert,
  } = useAlert()

  const {
    alert,
    authState: { loading, userData },
    closeAlert: close,
    dispatchAuth,
  } = useGlobalContext()

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const icon = useMemo(
    () => (
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => setShowPassword((prev) => !prev)}
      >
        <Text style={{ fontSize: 16 }}>{showPassword ? 'Hide' : 'Show'}</Text>
      </TouchableOpacity>
    ),
    [showPassword]
  )
  const onSubmit = async (data) => {
    const isLogin = await login(data, dispatchAuth)
    !isLogin && popAlert('Invalid credentials', 'danger')
  }
  return (
    <Container>
      <AuthHeader title='Login to your account' />
      {(show || alert.show) && (
        <Alert
          type={type || alert.type}
          message={message || alert.message}
          close={closeAlert || close}
        />
      )}
      <View style={{ marginTop: 50 }}>
        <Input
          label='Username'
          name='username'
          placeholder='Username'
          control={control}
          errors={errors}
          rules={{ required: { value: true, message: 'Username required!' } }}
        />
        <Input
          label='Password'
          name='password'
          secureTextEntry={showPassword ? false : true}
          placeholder='Password'
          control={control}
          errors={errors}
          icon={icon}
          iconPosition='left'
        />
        {loading ? (
          <Loading />
        ) : (
          <Button
            title={'Login'}
            titleStyle={{ fontSize: 20, color: 'black' }}
            color={colors.primary}
            onPress={handleSubmit(onSubmit)}
          />
        )}
      </View>
      <AuthToggle
        text='Need an Account? '
        button='Register'
        screen={REGISTER}
      />
    </Container>
  )
}

export default Login
