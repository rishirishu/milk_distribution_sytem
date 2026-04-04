import React, { use, useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomForms from "../../constraints/CustomForms";
import { staticText } from "../../constraints/utils/staticText";
import CustomFormsTwo from './../../constraints/CustomFormsTwo';
import AppHeader from "../../components/AppHeader";
import { useSelector } from "react-redux";
import { httpClient } from "../../components/httpclient";

const EditProfile = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [edit,setEdit] = useState(false);
  const {user} = useSelector((state)=>state.user)
  console.log(user,"rishiuser")

  console.log(edit,"edit")

  const onSubmit = async(data) => {
    debugger
    console.log(data,"formData")
    const addressDetails = {
      // user :user.id,
      name:data.name,
      email:data.email,
      address_line:data.address,
      pincode:data.pincode,
      landmark:data.landmark?data.landmark:null,
      communication_phone:data.communication_phone,
      is_default:1

    }
    const resp = await httpClient("patch",`user/users/${user.id}/`,addressDetails)
    if (resp.status){
      console.log(resp)
    }
    console.log(data,"sfsfsfsfsffff")

  }
  const handleEdit = () =>{
    debugger
     setEdit(!edit)

  }

  return (
    <SafeAreaView style={styles.container}>
      <>
    <AppHeader text={edit?"Edit Profile":"Profile Details"} />
        <View style={styles.profileContainer}>
          {/* Profile Image */}
          <Image
            style={styles.profileImage}
            source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
          />
        </View>
          <CustomFormsTwo
            fileds={["name","email","communication_phone", "address","landmark","pincode"]}
            onSubmit={edit?onSubmit:handleEdit}
            button_name={edit?staticText.update:staticText.edit}
            defaultValues={ {
              name: `${user.first_name} ${user.last_name}`,
              email: user.email || "",
              "communication_phone": user.mobile_no,
              address: user.Address || "",
              pincode:user.Pincode || "",
              landmark:user.Landmark || ""
            }}
            btnColor={edit?"green":null}
            editable={edit}
          />
      </>
    </SafeAreaView>
  )
};

export default EditProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
  },
  profileContainer: {
    alignItems: "center",
  },
  profileImage: {
    width: 90,
    height: 90,
    borderRadius: 45,
    marginBottom: 20,
    paddingTop: 10,
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
