import { Flex, Heading, Image, Text } from "@chakra-ui/react";
import errorImage from "../assets/pictures/icecream.svg";
import { ButtonM } from "../components/atoms/ButtonM";

export function Error() {
    return (
        <Flex w="full"
         direction={"column"} justifyContent={"center"} alignItems={"center"} color={"primary.500"}>
            <Image src={errorImage} alt="error" maxW={"2xl"} />
            <Heading>404</Heading>
            <Text color={"GrayText"}>Parece que esta página foi devorada!</Text>
            <ButtonM text="go back"/>
        </Flex>
    );
}