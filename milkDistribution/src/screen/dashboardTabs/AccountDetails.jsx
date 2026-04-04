import { View, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import AppHeader from './../../components/AppHeader';
import ListItemCard from './../../components/ListItemCard';
import { SafeAreaView } from 'react-native-safe-area-context';
import { appIcons, bottomItems, menuItems } from '../../constraints/utils/defaultIcons';
import { color, Icon, ListItem } from '@rneui/base';
import { AppDivider } from './../../constraints/utils/commonAttributes';
import { CustomButtons } from '../../components/buttons';
import { useDispatch, useSelector } from 'react-redux';
import AppText from '../../constraints/AppText';
import { useNavigation } from '@react-navigation/native';
import { logout } from '../../redux/userSlice';

const AccountDetails = () => {
  const {user} = useSelector((state)=>state.user);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  console.log(user,"dfsfsfsf")
  return (
    <SafeAreaView style={{padding:10}}>
    <AppHeader text="Account Detail" />
         <ListItem>
        <Icon {...appIcons.account}/>
        <ListItem.Title onPress={() =>  navigation.navigate("edit/profile")}>
           <View style={{
            display:'flex',
            justifyContent:'space-between',
            flexDirection:'row',
            width:"100%",
            paddingRight:"35"
  }}>
        <AppText   text={`${user?.first_name || ''} ${user?.last_name || ''}`}  size={20} />
          <Icon {...appIcons.preview} size={20} color={"grey"}/>
      </View>

    </ListItem.Title>
        <ListItem.Chevron />
      </ListItem>
    <FlatList
      data={menuItems}
      renderItem={({ item }) => {
          const [key, value] = Object.entries(item)[0]; // 👈 get key & value pair
          return <ListItemCard title={key} data={value} />;
        }}
        keyExtractor={(item) => Object.keys(item)[0]} 
    />
      <AppDivider />
      <View>
        {
          bottomItems.map((item, i) => (
            <ListItem key={i} bottomDivider>
              <ListItem.Content>
                <ListItem.Title>{item.name}</ListItem.Title>
              </ListItem.Content>
              <ListItem.Chevron />
            </ListItem>
          ))
        }
      </View>
      <CustomButtons text={"Log out"} onPressFunction={()=>{
        dispatch(logout());
        navigation.navigate("login");
      }}/>
    </SafeAreaView>
  )
}

export default AccountDetails