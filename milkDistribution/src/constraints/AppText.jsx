import { View, Text } from 'react-native'
import React from 'react'

const AppText = ({text,size=30,color=null}) => {
  return (
    <View>
      <Text style = {{fontSize:size, color:color}}>{text}</Text>
    </View>
  )
}

export default AppText