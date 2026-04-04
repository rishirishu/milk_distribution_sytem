/* eslint-disable no-unused-vars */
import Login from "../screen/Login";
import Signup from "../screen/Signup";
import DashBoardTabNavigation from '../navigations/DashBoardTabNavigation';
import EditProfile from './../screen/user/EditProfile';
import Orders from './../screen/shopping/Orders';
import WishList from './../screen/shopping/WishList';
import SavedAddressess from './../screen/shopping/SavedAddressess';

export const AppRoutes = {
    signup:{
        path:"signup",
        component:Signup,
        headerShown:false, //optional
        title:"Signup" // optional give when headerShown are true
    },
    login:{
        path:"login",
        component:Login,
    },
    reset_password:{
        path:"reset/password",
        component:Login,
    },
    dashboard:{
        path:"dashboard",
        component:DashBoardTabNavigation,
    },
    edit:{
        path:"edit/profile",
        component:EditProfile,
    },
    orders:{
        path:"orders",
        component:Orders,
    },
    wishlist:{
        path:"wishlist",
        component:WishList,
    },
    addresses:{
        path:"addresses",
        component:SavedAddressess,
    },
    support:{
        path:"support",
        component:EditProfile,
    },
    faqs:{
        path:"faqs",
        component:EditProfile,
    },
    privacy_policy:{
        path:"privacy/policy",
        component:EditProfile,
    },
    rate_us:{
        path:"rateUs",
        component:EditProfile,
    }
}