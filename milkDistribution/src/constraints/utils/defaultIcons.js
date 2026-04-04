import { AppRoutes } from "../../components/routes"

export const menuItems = [
    {"My Shopping":[
            {name:"Orders",icon:"shopping-cart",type:"lucide",path:AppRoutes.orders.path},
            {name:"Wishlist",icon:"shopping-cart",type:"lucide",path:AppRoutes.wishlist.path},
            {name:"Saved Addresses",icon:"shopping-cart",type:"lucide",path:AppRoutes.addresses.path},
        ]
    },
    {"Help Center":[
            {name:"Support",icon:"support-agent",type:"material",path:AppRoutes.support.path},
            {name:"FAQS",icon:"wechat",type:"material",path:AppRoutes.faqs.path},
        ]
    }
]

export const bottomItems = [
    {name:"Privacy Policy",path:AppRoutes.privacy_policy.path},
    {name:"Rate Us",path:AppRoutes.rate_us.path},
]


export const appIcons = { 
    home : {name:"home"},
    account : {name:"person-circle-outline",type:"ionicon"},
    tracker : {name:"assistant-navigation",type:"materialicons"},
    cart : {name:"shopping-cart",type:"lucide"},
    edit : {name:"edit",type:"font-awesome-5"},
    preview : {name:"preview",type:"materialicons"},
    
}

