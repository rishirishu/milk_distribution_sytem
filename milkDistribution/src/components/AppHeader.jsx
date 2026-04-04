import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Icon } from '@rneui/base'
import { useNavigation } from '@react-navigation/native';

const AppHeader = ({text,iconName,type}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.header}>
       <Icon
        name = "arrow-back"
        type = "ionicons"
        color = '#00060bff'
        size={30}
        onPress={()=>navigation.goBack()}
       />
        <Text style={styles.headerText}>{text}</Text>
       <Icon
        name = {iconName}
        type = {type}
        color = '#00060bff'
        size={30}
       />
      </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
   header: {
    flexDirection: 'row',          // 👈 make items go in one line
    justifyContent: 'space-between', // 👈 equal space between left, middle, right
    alignItems: 'center',          // 👈 vertically center everything
    marginBottom: 10,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
});

export default AppHeader