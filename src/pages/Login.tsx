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
			<Flex flexDir={"column"} w={"full"}  maxW={"2xl"} width={["100%", "100%", "50%"]} padding={"8rem 4rem"} gap={"1rem"} margin={"auto"}>
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
					<Flex flexDir={"column"} gap={"1rem"} alignItems={"end"}>
						<FormControl variant={"floating"} id="firstName">
							<Input
								type="email"
								name="email"
								placeholder=""
								/>
							<FormLabel>Email</FormLabel>
							</FormControl>

							<FormControl variant={"floating"} id="lastName">
							<Input
								placeholder=""
								type="password"
								name="password"
								/>
							<FormLabel>Password</FormLabel>
							</FormControl>
						<Link to={"/new-password"}><Text fontSize={"sm"} color={"gray.500"}>Forgot Password?</Text></Link>
						<Button colorScheme="primary" w={"full"}>Login</Button>
					</Flex>
					</form>
					<Flex flexDir={"row"} alignItems={"center"} gap={"0.625rem"}>
						<Divider/>
						<Text whiteSpace="nowrap">or login with</Text>
						<Divider/>
					</Flex>
					<Flex flexDir={"row"} gap={"1.5rem"} justifyContent={"center"}>
							<Button borderRadius={"1rem"} variant={"solid"} colorScheme={"google"} boxShadow={"lg"}>
								<FcGoogle size={24} />
							</Button>
							<Button borderRadius={"1rem"} variant={"solid"} colorScheme={"facebook"} boxShadow={"lg"}>
								<ImFacebook size={24} />
							</Button>
					</Flex>
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
