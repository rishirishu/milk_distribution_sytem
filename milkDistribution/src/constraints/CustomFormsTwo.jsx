import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { SafeAreaView } from 'react-native-safe-area-context'
import { staticText } from './utils/staticText'
import {filedsValidations} from './utils/inputFieldValidation'
import FontAwesome6 from '@react-native-vector-icons/fontawesome6'
import { color } from '@rneui/base'



const CustomFormsTwo = ({fileds,onSubmit,button_name,defaultValues = {},editable=false, btnColor=null}) => {
  const { control, handleSubmit, formState: { errors } } = useForm({
  defaultValues: defaultValues
});
debugger
  const [visibility,setVisibility] = useState(true)

  const togglePasswordVisibility = ()=>{
      setVisibility(!visibility)
  }

  return (
    <>
      {
       fileds && fileds.map((item,index)=>(
        <>
          <Controller
          control={control}
          name={item}
          rules={{ required: `${item} ${staticText.is_required}`, ...filedsValidations(item)}}
          render={({ field: { onChange, value } }) => (
            <>
       <View style={styles.infoContainer}>
            <View style={styles.infoRow}>
                <Text style={styles.label}>{item}</Text>
                <TextInput
                key={index} 
                style={styles.input}
                value={value}
                onChangeText={onChange}
                placeholder= {`${staticText.enter} ${item}`}
                placeholderTextColor="#aaa"
                editable = {editable}
                />
          </View>
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
        <Button   
        key={editable ? "green" : null}  
        title={`${button_name}`} 
        onPress={editable?handleSubmit(onSubmit):onSubmit} 
        color={btnColor} 
        />
      </>
  )
}

export default CustomFormsTwo

const styles = StyleSheet.create({
  error: { color: "red", marginBottom: 10 },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingTop: 30,
  },
  profileContainer: {
    alignItems: "center",
  },
  profileImage: {
    width: 90,
    height: 90,
    borderRadius: 45,
    marginBottom: 20,
  },
  infoContainer: {
    width: "100%",
  },
  infoRow: {
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    paddingBottom: 8,
  },
  label: {
    color: "#999",
    fontSize: 14,
    marginBottom: 4,
  },
  input: {
    fontSize: 16,
    color: "#000",
    fontWeight: "500",
    paddingVertical: 4,
  },
});