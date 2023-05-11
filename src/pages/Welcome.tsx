import { Navbar } from "../components/molecules/Navbar";
import { Box, Flex, HStack, Heading, Image, SimpleGrid, Text } from "@chakra-ui/react"
import { useDeviceContext } from "../contextProviders/DeviceProvider";
import { ButtonM } from "../components/atoms/ButtonM";
import { GiKnifeFork } from "react-icons/gi"
import { MealCard, MealCardProps } from "../components/molecules/MealCard";
import { MealsList } from "../components/organisms/MealsList";

export function Welcome() {
    const higlightedMeals: Array<MealCardProps> = [{
        mealName: "pizza",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Pizza-3007395.jpg/800px-Pizza-3007395.jpg",
        price: 25
    },{
        mealName: "Shawarma",
        url: "https://hips.hearstapps.com/hmg-prod/images/190130-chicken-shwarma-horizontal-1549421250.png?crop=1xw:0.843328335832084xh;center,top",
        price: 120
    },{
        mealName: "Hamburguer",
        url: "https://s2.glbimg.com/GRF9KCq-1hiz5uSs-xX9Go_KqIc=/0x0:2048x1365/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_d72fd4bf0af74c0c89d27a5a226dbbf8/internal_photos/bs/2022/p/X/eb4KQdToys327cGqnRGg/receita-ceboloni-bacon.jpg",
        price: 180
    },{
        mealName: "Bolo de chocolate",
        url: "https://thefirstyearblog.com/wp-content/uploads/2015/11/chocolate-chocolate-cake-1-500x500.png",
        price: 50
    },{
        mealName: "Gomas",
        url: "https://images.trustinnews.pt/uploads/sites/5/2019/10/se-gosta-de-gomas-e-gelatina-e-melhor-nao-ver-este-video-2-1024x576.jpg",
        price: 10
    }]
    const size = useDeviceContext();
    return(
        <Box width={"full"} align={"center"}>
            <Navbar size={size} navigationState={"not_authenticated"} type="primary"/>
            <Flex direction={"column"} maxW={"7xl"} padding={2} gap={8}>
                <SimpleGrid spacing={"2"} minChildWidth={"xs"}  >
                    <Flex justifyContent={"center"} alignItems={"start"} direction={"column"}>
                        <Heading color={"customColors.primary.500"}>Mericos</Heading>
                        <Text textAlign={"start"} color={"customColors.text_color_dark.normal"}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi veniam minus fugit enim excepturi impedit soluta sint eum omnis ea eveniet incidunt, nulla totam dolores illo asperiores eaque itaque deleniti.</Text>
                        <ButtonM text="Menu" icon={<GiKnifeFork/>}/>
                    </Flex>
                    <Box>
                        <Image boxSize={"full"} objectFit={"cover"} borderRadius={8} src="https://b.zmtcdn.com/data/pictures/chains/9/19912889/e9f25f9e9daf2e355e7c44b5877c46ba.jpg?output-format=webp"/>
                    </Box>
                </SimpleGrid>
                <Flex direction={"column"} alignItems={"start"}>
                    <Heading color={"customColors.primary.500"}> Refeições em destaque</Heading>
                    <MealsList meals={higlightedMeals}/>
                </Flex>
            </Flex>
        </Box>
    )
}