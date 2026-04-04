import { Pressable, Text } from "react-native"
import { Icon } from '@rneui/themed';
import { Button } from '@rneui/base'


export const PressableButtons  = ({text,onPressFunction})=>{
   return (
    <Pressable onPress={onPressFunction} style={{ padding: 10 }}>
      <Text style={{ fontSize: 16, color: "blue" }}>{text}</Text>
    </Pressable>
  );
}

export const CustomButtons  = ({text,onPressFunction,color=null,IconName = null,buttonStyle = null})=>{
  return (
      <Button
        onPress={onPressFunction}
        title={text}
        buttonStyle={{...buttonStyle, backgroundColor:color|| "#841584"}}
        icon={IconName}
      />
    );
}
