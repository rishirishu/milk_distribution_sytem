import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { FlatList } from 'react-native';
import { httpClient } from '../../components/httpclient';
import ProductCard from '../product/ProductCard';

const Home = () => {
  const [data,setData] = useState([
    {
        "id": 1,
        "created_by": "",
        "updated_by": "",
        "created_at": "2025-09-28T01:14:11.046055Z",
        "updated_at": "2025-09-28T01:14:11.046055Z",
        "name": "Mother Dairy",
        "quantity":2,
        "picture": null,
        "description": "Buffalo Milk",
        "price": "70.00",
        "fat_content": "20.00",
        "is_active": true
    },
    {
        "id": 2,
        "created_by": "7459922520",
        "updated_by": "7459922520",
        "created_at": "2025-09-28T01:49:05.540454Z",
        "updated_at": "2025-09-28T01:49:05.540454Z",
        "name": "Madhusudan",
        "quantity":4,
        "picture": null,
        "description": "Buffalo Milk",
        "price": "150.00",
        "fat_content": "20.00",
        "is_active": true
    },
    {
        "id": 3,
        "created_by": "7459922520",
        "updated_by": "7459922520",
        "created_at": "2025-09-29T14:52:01.267320Z",
        "updated_at": "2025-09-29T14:52:01.267320Z",
        "quantity":1,
        "name": "Amul",
        "picture": "http://10.131.46.155:8000/media/product_images/Screenshot_1.png",
        "description": "Cow Milk",
        "price": "90.00",
        "fat_content": "10.00",
        "is_active": false
    },
    {
        "id": 4,
        "created_by": "7459922520",
        "updated_by": "7459922520",
        "created_at": "2025-09-29T14:53:13.978416Z",
        "updated_at": "2025-09-29T14:53:13.978416Z",
        "name": "Ananda",
        "quantity":3,
        "picture": "http://10.131.46.155:8000/media/product_images/Screenshot_2025-05-04_205937.png",
        "description": "Full Cream Milk",
        "price": "35.00",
        "fat_content": "15.00",
        "is_active": false
    }
])
  console.log(data,"rishidata")
  const getData = ()=>{
    debugger
    console.log("api are hit")
    httpClient("get","product").then((resp)=>{
      setData(resp.data)
    }).catch((error)=>console.log(error))
  }

  // useEffect(()=>{
  //   getData()
  // },[])

  return (
    <SafeAreaView>
        <FlatList
        data={data}
        renderItem={({item}) =><ProductCard item={item}/>}
        keyExtractor={item => item.id}
           />
    </SafeAreaView>
  )
}

export default Home