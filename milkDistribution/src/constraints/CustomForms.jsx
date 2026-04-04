import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { SafeAreaView } from 'react-native-safe-area-context'
import { staticText } from './utils/staticText'
import {filedsValidations} from './utils/inputFieldValidation'
import FontAwesome6 from '@react-native-vector-icons/fontawesome6'



const CustomForms = ({fileds,onSubmit,button_name,hideField = null}) => {
  const { control, handleSubmit, formState: { errors },watch  } = useForm();
  const [visibility,setVisibility] = useState(true)
   // Watch password field for confirm password validation
  const passwordValue = watch("password");

  const togglePasswordVisibility = ()=>{
      setVisibility(!visibility)
  }

  return (
    <SafeAreaView>
      <>
      {
       fileds && fileds.map((item,index)=>(
        <>
          <Controller
          control={control}
          name={item}
          rules={{ 
            required: `${item} ${staticText.is_required}`, 
            ...filedsValidations(item),
            ...(item === "confirm password"
                  ? {
                      validate: (value) =>
                        value === passwordValue || "Confirm Password must be same as Password",
                    }
                  : {}),
            }}
          render={({ field: { onChange, value } }) => (
            <>
            <View style={styles.inputContainer}>
            <TextInput
              key={index} 
              style={styles.input}
              placeholder= {`${staticText.enter} ${item}`}
              secureTextEntry = {(item===hideField)?visibility:false}
              value={value}
              onChangeText={onChange}
            />
            {
              item === hideField &&(
             <TouchableOpacity onPress={togglePasswordVisibility}>
              {/* <Fontisto 
                name={visibility ? 'eye' : 'eye-off'} // Changes icon based on showPassword state
                size={24} 
                color="gray" 
              /> */}
              <FontAwesome6 name={visibility?"eye-slash":"eye"} size={25} color="gray" />;

            </TouchableOpacity>
              )
            }
            </View>
            </>
            
          )}
        />
         {errors[item] && (
              <Text style={styles.error}>{errors[item]?.message}</Text>
            )}

        </>
      ))
      }
      </>
      <Button title={`${button_name}`} onPress={handleSubmit(onSubmit)} />

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: "center" },
  // input: { borderWidth: 1, padding: 10, marginBottom: 10, borderRadius: 8 },
  error: { color: "red", marginBottom: 10 },
  inputContainer: {
  flexDirection: "row",
  alignItems: "center",
  borderWidth: 1,
  borderRadius: 8,
  marginBottom: 10,
  paddingHorizontal: 10,
},

input: {
  flex: 1,
  paddingVertical: 10,
  paddingRight: 35, // extra space so text doesn’t overlap icon
},

eyeIcon: {
  position: "absolute",
  right: 15,
},
});

export default CustomForms