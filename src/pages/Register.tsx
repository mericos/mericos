import {
	Divider,
	Flex,
	FormControl,
	FormErrorMessage,
	FormLabel,
	Heading,
	Text,
	Image,
	Button,
	Input,
	useToast,
	InputGroup,
	InputRightElement,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import Logo from "../assets/logo/logo2.svg";
import * as Yup from "yup";


import { FcGoogle } from "react-icons/fc";
import { ImFacebook } from "react-icons/im";
import { Link, Navigate, redirect, useNavigate } from "react-router-dom";
import { useState } from "react";

export function Register() {
	const registerSchema = Yup.object().shape({
		username: Yup.string()
			.required("Nome é obrigatória")
			.min(3, "O nome deve ter pelo menos 3 caracteres"),
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
	const toast = useToast()
	const navigate = useNavigate()
	const [show, setShow] = useState(false)
	const handleShow = () => setShow(!show)
	const {values, errors, touched, handleChange, handleSubmit} = useFormik({
		initialValues: {
			username:"",
			email:"",
			password:""
		},
		onSubmit: (values) => {
			toast({
				title: "Sucesso",
				description: "Conta registrada com sucesso",
				status: "success",
				duration: 3000,
				isClosable: true
			})
			navigate("/home")

		},
		validationSchema: registerSchema
	})
	return (
		<Flex w={"full"} h={"100vh"} flexDir={"row-reverse"}>
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
					<Heading>Register</Heading>
					<Text color={"gray.400"}>Registra-te a nossa família da Mericos</Text>
				</Flex>
				<form onSubmit={handleSubmit}>
					<Flex flexDir={"column"} gap={"1rem"} alignItems={"end"}>
						<FormControl variant={"floating"} id="firstName" isRequired isInvalid={!!errors.username && touched.username}>
							<Input
								type="text"
								name="username"
								placeholder=""
								onChange={handleChange}
								value={values.username}
								/>
							<FormLabel>Nome</FormLabel>
							<FormErrorMessage>{errors.username}</FormErrorMessage>
							</FormControl>
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
							<InputGroup>
									<Input
										placeholder=""
										type={show? "text" : "password"}
										name="password"
										onChange={handleChange}
										value={values.password}
										/>
										<FormLabel>Palavra-passe</FormLabel>
										<InputRightElement>
											<Button variant={"ghost"} size={"sm"} onClick={handleShow} borderRadius={"0.5rem"}>
												<Text>
													{show ? 'Hide' : 'Show'}
												</Text>
											</Button>
										</InputRightElement>
								</InputGroup>
							<FormErrorMessage>{errors.password}</FormErrorMessage>
							</FormControl>
						<Button type="submit" colorScheme="primary" w={"full"}>Registrar</Button>
					</Flex>
					</form>
					<Flex flexDir={"row"} alignItems={"center"} gap={"0.625rem"}>
						<Divider/>
						<Text whiteSpace="nowrap">ou registrar com</Text>
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
						<Text textAlign={"center"}>Já tem uma conta?</Text>
						<Link to={"/login"}><Text color={"primary.500"}>Login</Text></Link>
					</Flex>
			</Flex>
			<Flex  w={["0%","0%","50%"]}>
				<Image 
				background={"gray.100"}
				objectFit={"cover"}
				w={"full"}
				src="https://images.pexels.com/photos/1653877/pexels-photo-1653877.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
				filter={"blur(0px)"}
				alt=""/>
			</Flex>
		</Flex>
	);
}
