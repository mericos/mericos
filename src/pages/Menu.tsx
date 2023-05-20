import { Box, Flex, HStack, Icon } from "@chakra-ui/react"
import { useDeviceContext } from "../contextProviders/DeviceProvider"
import { Navbar } from "../components/molecules/Navbar"
import { InputM } from "../components/atoms/InputM"
import { CategoriesList } from "../components/organisms/CategoriesList"
import { BiDish } from "react-icons/bi"
import { MenuList } from "../components/organisms/MenuList"
import { CardMProps } from "../components/molecules/CardM"

export function Menu () {
    const categories = [
        { name:"cat1", icon:<Icon boxSize={"8"} as={BiDish}/> },
        { name:"cat2", icon:<Icon boxSize={"8"} as={BiDish}/> },
        { name:"cat3", icon:<Icon boxSize={"8"} as={BiDish}/> },
        { name:"cat4", icon:<Icon boxSize={"8"} as={BiDish}/> },
        { name:"cat5", icon:<Icon boxSize={"8"} as={BiDish}/> },
        { name:"cat6", icon:<Icon boxSize={"8"} as={BiDish}/> },
        { name:"cat7", icon:<Icon boxSize={"8"} as={BiDish}/> },
        { name:"cat8", icon:<Icon boxSize={"8"} as={BiDish}/> },
        { name:"cat9", icon:<Icon boxSize={"8"} as={BiDish}/> }
    ]
    const menuItems: Array<CardMProps> = [
        {
            name: "pizza",
            image:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Pizza-3007395.jpg/800px-Pizza-3007395.jpg",
            type: "meal",
        },
        {
            name: "Shawarma",
            image: "https://hips.hearstapps.com/hmg-prod/images/190130-chicken-shwarma-horizontal-1549421250.png?crop=1xw:0.843328335832084xh;center,top",
            type: "meal",
        },
        {
            name: "Hamburguer",
            image: "https://s2.glbimg.com/GRF9KCq-1hiz5uSs-xX9Go_KqIc=/0x0:2048x1365/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_d72fd4bf0af74c0c89d27a5a226dbbf8/internal_photos/bs/2022/p/X/eb4KQdToys327cGqnRGg/receita-ceboloni-bacon.jpg",
            type: "meal",
        },
        {
            name: "Bolo de chocolate",
            image: "https://thefirstyearblog.com/wp-content/uploads/2015/11/chocolate-chocolate-cake-1-500x500.png",
            type: "meal",
        },

        {
            name: "pizza",
            image:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Pizza-3007395.jpg/800px-Pizza-3007395.jpg",
            type: "meal",
        },
        {
            name: "Shawarma",
            image: "https://hips.hearstapps.com/hmg-prod/images/190130-chicken-shwarma-horizontal-1549421250.png?crop=1xw:0.843328335832084xh;center,top",
            type: "meal",
        },
        {
            name: "Hamburguer",
            image: "https://s2.glbimg.com/GRF9KCq-1hiz5uSs-xX9Go_KqIc=/0x0:2048x1365/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_d72fd4bf0af74c0c89d27a5a226dbbf8/internal_photos/bs/2022/p/X/eb4KQdToys327cGqnRGg/receita-ceboloni-bacon.jpg",
            type: "meal",
        },
        {
            name: "Bolo de chocolate",
            image: "https://thefirstyearblog.com/wp-content/uploads/2015/11/chocolate-chocolate-cake-1-500x500.png",
            type: "meal",
        },

        {
            name: "pizza",
            image:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Pizza-3007395.jpg/800px-Pizza-3007395.jpg",
            type: "meal",
        },
        {
            name: "Shawarma",
            image: "https://hips.hearstapps.com/hmg-prod/images/190130-chicken-shwarma-horizontal-1549421250.png?crop=1xw:0.843328335832084xh;center,top",
            type: "meal",
        },
        {
            name: "Hamburguer",
            image: "https://s2.glbimg.com/GRF9KCq-1hiz5uSs-xX9Go_KqIc=/0x0:2048x1365/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_d72fd4bf0af74c0c89d27a5a226dbbf8/internal_photos/bs/2022/p/X/eb4KQdToys327cGqnRGg/receita-ceboloni-bacon.jpg",
            type: "meal",
        },

        {
            name: "Bolo de chocolate",
            image: "https://thefirstyearblog.com/wp-content/uploads/2015/11/chocolate-chocolate-cake-1-500x500.png",
            type: "meal",
        },
        {
            name: "pizza",
            image:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Pizza-3007395.jpg/800px-Pizza-3007395.jpg",
            type: "meal",
        },
        {
            name: "Shawarma",
            image: "https://hips.hearstapps.com/hmg-prod/images/190130-chicken-shwarma-horizontal-1549421250.png?crop=1xw:0.843328335832084xh;center,top",
            type: "meal",
        },
        {
            name: "Hamburguer",
            image: "https://s2.glbimg.com/GRF9KCq-1hiz5uSs-xX9Go_KqIc=/0x0:2048x1365/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_d72fd4bf0af74c0c89d27a5a226dbbf8/internal_photos/bs/2022/p/X/eb4KQdToys327cGqnRGg/receita-ceboloni-bacon.jpg",
            type: "meal",
        },
        {
            name: "Bolo de chocolate",
            image: "https://thefirstyearblog.com/wp-content/uploads/2015/11/chocolate-chocolate-cake-1-500x500.png",
            type: "meal",
        },

        {
            name: "pizza",
            image:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Pizza-3007395.jpg/800px-Pizza-3007395.jpg",
            type: "meal",
        },
        {
            name: "Shawarma",
            image: "https://hips.hearstapps.com/hmg-prod/images/190130-chicken-shwarma-horizontal-1549421250.png?crop=1xw:0.843328335832084xh;center,top",
            type: "meal",
        },
        {
            name: "Hamburguer",
            image: "https://s2.glbimg.com/GRF9KCq-1hiz5uSs-xX9Go_KqIc=/0x0:2048x1365/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_d72fd4bf0af74c0c89d27a5a226dbbf8/internal_photos/bs/2022/p/X/eb4KQdToys327cGqnRGg/receita-ceboloni-bacon.jpg",
            type: "meal",
        },
        {
            name: "Bolo de chocolate",
            image: "https://thefirstyearblog.com/wp-content/uploads/2015/11/chocolate-chocolate-cake-1-500x500.png",
            type: "meal",
        },
        
        {
            name: "pizza",
            image:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Pizza-3007395.jpg/800px-Pizza-3007395.jpg",
            type: "meal",
        },
        {
            name: "Shawarma",
            image: "https://hips.hearstapps.com/hmg-prod/images/190130-chicken-shwarma-horizontal-1549421250.png?crop=1xw:0.843328335832084xh;center,top",
            type: "meal",
        },
        {
            name: "Hamburguer",
            image: "https://s2.glbimg.com/GRF9KCq-1hiz5uSs-xX9Go_KqIc=/0x0:2048x1365/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_d72fd4bf0af74c0c89d27a5a226dbbf8/internal_photos/bs/2022/p/X/eb4KQdToys327cGqnRGg/receita-ceboloni-bacon.jpg",
            type: "meal",
        },
        {
            name: "Bolo de chocolate",
            image: "https://thefirstyearblog.com/wp-content/uploads/2015/11/chocolate-chocolate-cake-1-500x500.png",
            type: "meal",
        },

    ]

    const size = useDeviceContext()
    return (
        <Flex width={"full"} direction={"column"} justifyContent={"center"} alignItems={"center"}paddingX={2}>
            <Navbar size={size} navigationState={"goBack"} text="Menu"/>
            <Flex w={"full"} maxW={"7xl"} direction={"column"}>
                <InputM text="search" isSearchBar></InputM>
            </Flex>
            <CategoriesList categories={categories}/>
            <MenuList menuItems={menuItems} />
        </Flex>
    )
}