import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Avatar, Icon, ListItem, Tile } from '@rneui/base'
import AppText from '../constraints/AppText'
import { useNavigation } from '@react-navigation/native';

const ListItemCard = ({title,data}) => {
  debugger
  const navigation = useNavigation()
  console.log(title,data,"rishfdifff")
  return (
    <>
    <AppText text={title} size={20} />
    {Object.keys(data).length>0 && Object.values(data).map((val,ind)=>(
      <ListItem key={ind}  bottomDivider>
        {/* <Avatar source={{uri: val.avatar_url}} /> */}
        <Icon name={val.icon} type={val.type}/>
      <ListItem.Content>
        <ListItem.Title onPress={() =>  navigation.navigate("login")}>{val.name}</ListItem.Title>
      </ListItem.Content>
      <ListItem.Chevron />
    </ListItem>
    ))}
    </>
  )
}

const styles = StyleSheet.create({})
export default ListItemCard
