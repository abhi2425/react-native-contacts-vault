import React, { memo, useState } from 'react'
import { View, Text, TextInput } from 'react-native'
import { styles } from './styles'
import { useController } from 'react-hook-form'
import { colors } from '../../../assets/themes/color'
import { utility } from '../../../styles/stylesUtilities'

const Input = ({
  label,
  icon,
  iconPosition,
  control,
  name,
  errors,
  rules,
  ...props
}) => {
  const { field } = useController({
    control,
    name,
    defaultValue: '',
    rules,
  })
  const [focus, setFocus] = useState(false)
  return (
    <View style={styles.inputContainer}>
      {label && <Text style={styles.label}>{label}</Text>}
      <View
        style={[
          styles.formControl,
          { flexDirection: iconPosition === 'left' ? 'row-reverse' : 'row' },
        ]}
      >
        {icon && <View style={styles.icon}>{icon}</View>}

        <TextInput
          {...props}
          value={field.value}
          onChangeText={field.onChange}
          onBlur={() => setFocus(false)}
          onFocus={() => setFocus(true)}
          style={[
            styles.textInput,
            focus && { borderColor: colors.primary },
            errors[name] && { borderColor: colors.danger },
          ]}
        />
      </View>
      {errors[name] && (
        <Text style={utility.error}>{errors[name]?.message}</Text>
      )}
    </View>
  )
}

export default memo(Input)
