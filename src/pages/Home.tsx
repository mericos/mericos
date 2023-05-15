import { Navbar } from "../components/molecules/Navbar";
import { Box, Flex, Heading, Icon, Image, SimpleGrid, Text } from "@chakra-ui/react"
import { useDeviceContext } from "../contextProviders/DeviceProvider";
import { ButtonM } from "../components/atoms/ButtonM";
import { GiKnifeFork, GiPuzzle, GiRotaryPhone } from "react-icons/gi"
import { MealCardProps } from "../components/molecules/MealCard";
import { MealsList } from "../components/organisms/MealsList";
import { CharacteristicsList } from "../components/organisms/CharacteristicsList";
import { Ri24HoursFill } from "react-icons/ri";
import { MdFastfood } from "react-icons/md";

export function Welcome() {
    const higlightedMeals: Array<MealCardProps> = [{
        mealName: "pizza",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Pizza-3007395.jpg/800px-Pizza-3007395.jpg",
        price: 25
    },{
        mealName: "Shawarma",
        imageUrl: "https://hips.hearstapps.com/hmg-prod/images/190130-chicken-shwarma-horizontal-1549421250.png?crop=1xw:0.843328335832084xh;center,top",
        price: 120
    },{
        mealName: "Hamburguer",
        imageUrl: "https://s2.glbimg.com/GRF9KCq-1hiz5uSs-xX9Go_KqIc=/0x0:2048x1365/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_d72fd4bf0af74c0c89d27a5a226dbbf8/internal_photos/bs/2022/p/X/eb4KQdToys327cGqnRGg/receita-ceboloni-bacon.jpg",
        price: 180
    },{
        mealName: "Bolo de chocolate",
        imageUrl: "https://thefirstyearblog.com/wp-content/uploads/2015/11/chocolate-chocolate-cake-1-500x500.png",
        price: 50
    },{
        mealName: "Gomas",
        imageUrl: "https://images.trustinnews.pt/uploads/sites/5/2019/10/se-gosta-de-gomas-e-gelatina-e-melhor-nao-ver-este-video-2-1024x576.jpg",
        price: 10
    }]
    const characteristics = [
		{
		heading: "Integridade",
		description: "A empresa zela pela cuidadosa seleção de fornecedores e ingredientes, assegurando a alta qualidade e segurança dos produtos comercializados.",
		icon: <Icon as={GiPuzzle}/>
		},
		{
		heading: "Diversidade",
		description: "A empresa oferece uma ampla diversidade de alimentos, atendendo a diferentes preferências e necessidades dos clientes.",
		icon: <Icon as={MdFastfood}/>
		},
		{
		heading: "Disponibilidade",
		description: "A empresa, garante a disponibilidade dos melhores produtos alimentícios para os nossos clientes, comprometendo-nos a manter nossas prateleiras abastecidas com uma ampla variedade de alimentos de alta qualidade",
		icon: <Icon as={Ri24HoursFill}/>
		},
		{
		heading: "Atendimento",
		description: "A empresa oferece um excelente atendimento ao cliente, orientando sobre os produtos, tirando dúvidas e garantindo a satisfação dos consumidores.",
		icon: <Icon as={GiRotaryPhone}/>
		},
	]
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
                <Flex direction={"column"} alignItems={"start"} width={"full"}>
                    <Heading color={"customColors.primary.500"}> Nossos valores</Heading>
                    <CharacteristicsList characteristics={characteristics} />
                </Flex>
                <Flex direction={"column"} alignItems={"start"} width={"full"}>
                    <Heading color={"customColors.primary.500"}> Acesse a Mericos</Heading>
                    <Flex direction={"row"} gap={2} justify={"center"} width={"full"}>
                        <ButtonM text="Entrar" type="secondary"/>
                        <ButtonM text="Registrar"/>
                    </Flex>
                </Flex>
            </Flex>
            <Flex color={"white"} bg={"customColors.primary.500"} direction={"column"} justifyContent={"center"} padding={4} alignItems={"center"} gap={2}>
                <Text>You can find us at:</Text>
                <Flex direction={"row"} gap={2}>
                    LINKS TO ADD
                </Flex>
                <Text>Mericos - change the way we eat</Text>
                <Text>@copyright-2023</Text>

            </Flex>
        </Box>
    )
}