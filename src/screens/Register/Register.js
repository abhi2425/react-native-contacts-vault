import { useNavigation } from '@react-navigation/core'
import React, { useMemo, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Button, Text, TouchableOpacity, View } from 'react-native'
import { colors } from '../../assets/themes/color'
import AuthHeader from '../../components/AuthHeader/AuthHeader'
import AuthToggle from '../../components/AuthToggle/AuthToggle'
import Alert from '../../components/UI/Alert/Alert'
import Container from '../../components/UI/Container/Container'
import Input from '../../components/UI/Input/Input'
import Loading from '../../components/UI/Loading/Loading'
import { LOGIN } from '../../constants/routeNames'
import { register } from '../../contexts/actions/Auth'
import { useGlobalContext } from '../../contexts/GlobalStore'

const Register = ({ navigation }) => {
  const [showPassword, setShowPassword] = useState(false)
  const {
    authState: { loading, userData },
    alert: { show, message, type },
    popAlert,
    closeAlert,
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
        activeOpacity={0.7}
        onPress={() => setShowPassword((prev) => !prev)}
      >
        <Text style={{ fontSize: 16 }}>{showPassword ? 'Hide' : 'Show'}</Text>
      </TouchableOpacity>
    ),
    [showPassword]
  )

  const onSubmit = async (data) => {
    const result = await register(data, dispatchAuth)

    if (result === 'success') {
      const message = 'Registered Successfully.Plz Login to continue.'
      navigation.push(LOGIN)
      popAlert(message, 'success')
    } else {
      typeof result === 'string' && popAlert(result, 'danger')

      if (typeof result === 'object') {
        let message = []
        for (const key in result) {
          message = message.concat(result[key][0])
        }
        message = message.join('\n')
        popAlert(message, 'danger')
      }
    }
  }
  return (
    <Container>
      <AuthHeader title='Create new account' />
      {show && <Alert type={type} message={message} close={closeAlert} />}
      <View style={{ marginTop: 30 }}>
        <Input
          label='Username'
          name='username'
          placeholder='Username'
          control={control}
          errors={errors}
          rules={{
            required: { value: true, message: 'Username required!' },
          }}
        />
        <Input
          label='Firstname'
          name='first_name'
          placeholder='Firstname'
          control={control}
          errors={errors}
          rules={{ required: { value: true, message: 'Firstname required!' } }}
        />
        <Input
          label='Lastname'
          name='last_name'
          placeholder='Lastname'
          control={control}
          errors={errors}
          rules={{ required: { value: true, message: 'Lastname required!' } }}
        />
        <Input
          label='Email'
          name='email'
          placeholder='Email'
          control={control}
          errors={errors}
          rules={{ required: { value: true, message: 'Email required!' } }}
        />
        <Input
          label='Password'
          name='password'
          secureTextEntry={showPassword ? false : true}
          placeholder='Password'
          control={control}
          errors={errors}
          rules={{
            required: { value: true, message: 'Password required!' },
            minLength: { value: 8, message: 'Weak Password!' },
          }}
          icon={icon}
          iconPosition='left'
        />
        {loading ? (
          <Loading />
        ) : (
          <Button
            title={'Register'}
            titleStyle={{ fontSize: 20, color: 'black' }}
            color={colors.primary}
            onPress={handleSubmit(onSubmit)}
          />
        )}
      </View>
      <AuthToggle
        text='Already have an Account? '
        button='Login'
        screen={LOGIN}
      />
    </Container>
  )
}

export default Register
