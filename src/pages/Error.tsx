import { Flex, Heading, Image, Text } from "@chakra-ui/react";
import errorImage from "../assets/pictures/icecream.svg";
import { ButtonM } from "../components/atoms/ButtonM";
import { useNavigate } from "react-router-dom";

export function Error() {
    const navigate = useNavigate()
    const hasHistory = window.history.length !== 2

    const handleClick = () => {
        hasHistory ? navigate(-1) : navigate("/");
    }
    return (
        <Flex w="full"
         direction={"column"} justifyContent={"center"} alignItems={"center"} color={"primary.500"} gap={4}>
            <Image src={errorImage} alt="error" maxW={"2xl"} />
            <Heading>404</Heading>
            <Text color={"GrayText"}>Parece que esta página foi devorada!</Text>
            <ButtonM text={hasHistory ? "Voltar" :"Ir para a página  inicial"} onClick={() => handleClick()}/>
        </Flex>
    );
}