import { Box, Divider, Flex, HStack, Heading, Image, SimpleGrid, Text } from "@chakra-ui/react";
import { BsCart } from "react-icons/bs";
import { useParams } from "react-router-dom";
import { ButtonM } from "../components/atoms/ButtonM";
// import { RatingsIcons } from "../components/atoms/Ratings";
import { CartInfoContainer } from "../components/molecules/CartInfoContainer";
import { MealCardProps } from "../components/molecules/MealCard";
import { Navbar } from "../components/molecules/Navbar";
import { useDeviceContext } from "../contextProviders/DeviceProvider";
import { Meals } from "../utils/Meals";
import { Error } from "./Error";
import { CardIngredient } from "../components/molecules/CardIngredient";
import { CardSupplier } from "../components/molecules/CardSupplier";


interface ingredient {
    name: string, 
    image: string
}
interface producer {
    name: string, 
    avatar: string
}
export interface DetailedMealCardProps extends MealCardProps {
    description: string,
    rating: number,
    ingredients: Array<ingredient>,
    producer: producer
}

export function Meal () {
    const {size} = useDeviceContext()
    const { id } = useParams()
    if (!id) return null
    const meal = new Meals().getMeal(id)
    if (!meal) return (<Error/>)
    const { mealName, image, description, ingredients, producer } = meal

    const ingredientsList = ingredients.map((ingredient) => {
        return (<CardIngredient key={ingredient.name} image={ingredient.image}name={ingredient.name}/>)
    })

    return (
        <div>Hello</div>
        // <Flex width={"full"} maxWidth={"7xl"} direction={"column"} align={"center"} margin={2} color={"text_color_dark.normal"} gap={4}>
        //     <Navbar/>
        //     <SimpleGrid columns={size === "phone" ? 1 : 2} spacingX={4} bg={"white"} gap={8} alignItems={"center"}>
        //         <Flex direction={"column"} gap={"8"} alignItems={"center"}>
        //             <Heading textAlign={"start"} w={"full"} fontWeight={"bold"} textTransform={"capitalize"} borderRadius={"full"}>{mealName}</Heading>
        //             <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non cupiditate vitae dolorum consequuntur quis deserunt ratione quibusdam eum corrupti, voluptates iste omnis harum? Asperiores iste cumque corrupti commodi! Deleniti, at!</Text>
        //             <Flex direction={"row"}  gap={"4"}>
        //                 <Text>preço</Text>
        //                 <Heading>25MZN</Heading>
        //             </Flex>
        //             <ButtonM text={"Adicione a carrinha"} icon={<BsCart/>}/>
        //         <Divider/>
        //         </Flex>
        //         <Image 
        //         top={0}
        //         src={image}
        //         alt={mealName}
        //         w={"inherit"} 
        //         objectFit="cover" 
        //         borderRadius={8} />
                
        //         <Flex direction={"column"} align="center" paddingTop={4} gap={4}>
        //             <Heading>Sobre a refeição</Heading>
        //             <Flex direction={"column"} alignItems={"end"} >
        //                 <Text>
        //                     {description}
        //                 </Text>
        //                 {/* <RatingsIcons rating={rating}/> */}
        //             </Flex>
        //             <Divider/>
        //             <Heading fontSize={"heading_for_pages_size"} color={"primary.500"}>Ingredientes</Heading>
        //             <HStack overflowX={"scroll"} width={"full"} height={"-webkit-fit-content"} paddingY={"8"} paddingX={2} spacing={4} alignItems={"center"}>
        //                 {ingredientsList}
        //             </HStack>
        //             <Divider/>
        //             <Heading fontSize={"heading_for_pages_size"} color={"primary.500"}>Fornecedor</Heading>
        //             <Flex>
        //                 <CardSupplier name={producer.name} image={producer.avatar}/>
        //             </Flex>
        //         </Flex>
        //         <Flex direction={"column"} h={"full"} gap={4}>
        //             <CartInfoContainer/>
        //             <Box border={"3px dashed"} paddingY={"56"} color={"primary.500"} textAlign={"center"}>
        //                 <Text>Comment Section TODO</Text>
        //             </Box>
        //             {/* <CommentSection/> */}
        //         </Flex>
        //     </SimpleGrid>
        // </Flex>
    )
}
