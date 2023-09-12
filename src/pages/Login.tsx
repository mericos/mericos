import {
	Box,
	Button,
	Divider,
	Flex,
	FormControl,
	FormErrorMessage,
	FormLabel,
	Grid,
	Heading,
	Image,
	Input,
	Show,
	Text
} from "@chakra-ui/react";
import { Formik } from "formik";
import { Form, Link } from "react-router-dom";
import * as Yup from "yup";
import { ImFacebook } from "react-icons/im";
import { FcGoogle } from "react-icons/fc";
import { InputM } from "../components/atoms/InputM";
import { ButtonM2 } from "../components/atoms/ButtonM2";
import Logo from "../assets/logo/logo2.svg";

export function Login() {
	// const loginSchema = Yup.object().shape({
	// 	email: Yup.string()
	// 		.email("E-mail inválido")
	// 		.required("Email é obrigatória"),
	// 	password: Yup.string()
	// 		.required("Palavra-passe é obrigatória")
	// 		.min(8, "A palavra-passe deve ter pelo menos 8 caracteres")
	// 		.matches(
	// 			/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&.])[A-Za-z\d@$!%*#?&.]+$/,
	// 			"A palavra-passe deve conter pelo menos uma letra, um número e um caractere especial"
	// 		),
	// });
	return (
		<Flex w={"full"} h={"100vh"}>
			<Flex flexDir={"column"} w={"full"} width={["100%", "100%", "50%"]} padding={"8rem 4rem"} gap={"1rem"}>
				<Flex justifyContent={"center"}>
					<Image
							src={Logo}
							w={["30%", "30%", "15%"]}
							transition={"ease 0.3s"}
							css={{
								clipPath: "circle(50% at 50% 50%)"
							}}
						/>
				</Flex>
				<Flex flexDir={"column"} gap={"0.625rem"}>
					<Heading>Login</Heading>
					<Text color={"gray.400"}>Login to continue using the app</Text>
				</Flex>
				<form>
					<Flex flexDir={"column"} gap={"0.625rem"} alignItems={"end"}>
						<FormControl id="firstName">
							<FormLabel>First Name</FormLabel>
							<Input
								type="text"
								name="firstName"
							/>
							</FormControl>

							<FormControl id="lastName">
							<FormLabel>Last Name</FormLabel>
							<Input
								type="text"
								name="lastName"
							/>
							</FormControl>

							<FormControl id="email">
							<FormLabel>Email</FormLabel>
							<Input
								type="email"
								name="email"
							/>
						</FormControl>
						<Link to={"/new-password"}><Text fontSize={"sm"}>Forgot Password?</Text></Link>
						<Button colorScheme="primary" w={"full"}>Login</Button>
					</Flex>
					</form>
			</Flex>
				<Flex  w={["0%","0%","50%"]}>
					<Image 
					background={"gray.100"}
					objectFit={"cover"}
					src="https://storage.googleapis.com/proudcity/mebanenc/uploads/2021/03/placeholder-image.png" 
					alt=""/>
				</Flex>
		</Flex>
	);
}
