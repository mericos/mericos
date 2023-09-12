import {
	Button,
	Divider,
	Flex,
	FormControl,
	FormErrorMessage,
	FormLabel,
	Heading,
	Image,
	Input,
	Text
} from "@chakra-ui/react";
import { useFormik } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import { ImFacebook } from "react-icons/im";
import { FcGoogle } from "react-icons/fc";
import Logo from "../assets/logo/logo2.svg";

export function Login() {
	const loginSchema = Yup.object().shape({
		email: Yup.string()
			.email("E-mail inválido")
			.required("Email é obrigatória"),
		password: Yup.string()
			.required("Palavra-passe é obrigatória")
			.min(8, "A palavra-passe deve ter pelo menos 8 caracteres")
			.matches(
				/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&.])[A-Za-z\d@$!%*#?&.]+$/,
				"A palavra-passe deve conter pelo menos uma letra, um número e um caractere especial"
			),
	});
	const {values, errors, touched, handleChange, handleSubmit} = useFormik({
		initialValues: {
			email:"",
			password:""
		},
		onSubmit: (values) => {
			alert(JSON.stringify(values, null, 2));
		},
		validationSchema: loginSchema
	})
	return (
		<Flex w={"full"} h={"100vh"}>
			<Flex flexDir={"column"} w={"full"}  maxW={"2xl"} width={["100%", "100%", "50%"]} padding={"0rem 4rem"} gap={"1rem"} margin={"auto"}>
				<Flex justifyContent={"center"}>
					<Image
							src={Logo}
							w={["30%", "15%", "15%"]}
							transition={"ease 0.3s"}
							css={{
								clipPath: "circle(50% at 50% 50%)"
							}}
						/>
				</Flex>
				<Flex flexDir={"column"} gap={"0.625rem"}>
					<Heading>Login</Heading>
					<Text color={"gray.400"}>Autentica-te para acessar ao site</Text>
				</Flex>
				<form onSubmit={handleSubmit}>
					<Flex flexDir={"column"} gap={"1rem"} alignItems={"end"}>
						<FormControl variant={"floating"} id="firstName" isRequired isInvalid={!!errors.email && touched.email}>
							<Input
								type="email"
								name="email"
								placeholder=""
								onChange={handleChange}
								value={values.email}
								/>
							<FormLabel>Email</FormLabel>
							<FormErrorMessage>{errors.email}</FormErrorMessage>
							</FormControl>

							<FormControl variant={"floating"} id="lastName" isInvalid={!!errors.password && touched.password} isRequired>
							<Input
								placeholder=""
								type="password"
								name="password"
								onChange={handleChange}
								value={values.password}
								/>
							<FormLabel>Palavra-passe</FormLabel>
							<FormErrorMessage>{errors.password}</FormErrorMessage>
							</FormControl>
						<Link to={"/new-password"}><Text fontSize={"sm"} color={"gray.500"}>Esqueceu a palavra-passe?</Text></Link>
						<Button type="submit" colorScheme="primary" w={"full"}>Login</Button>
					</Flex>
					</form>
					<Flex flexDir={"row"} alignItems={"center"} gap={"0.625rem"}>
						<Divider/>
						<Text whiteSpace="nowrap">ou autentica-te com</Text>
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
					<Flex justifyContent={"center"} wrap={"wrap"}>
						<Text textAlign={"center"}>Não tem uma conta?</Text>
						<Link to={"/register"}><Text color={"primary.500"}>Registra-te</Text></Link>
					</Flex>
			</Flex>
			<Flex  w={["0%","0%","50%"]}>
				<Image 
				background={"gray.100"}
				objectFit={"cover"}
				w={"full"}
				src="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg" 
				filter={"blur(0px)"}
				alt=""/>
			</Flex>
		</Flex>
	);
}
