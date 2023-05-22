import { CheckIcon } from "@chakra-ui/icons";
import {
	Button,
	Center,
	Flex,
	FormControl,
	FormErrorMessage,
	FormLabel,
	Heading,
	Input,
	InputGroup,
	InputRightElement,
	Text,
	VStack
} from "@chakra-ui/react";
import { Field, Formik } from "formik";
import React from "react";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import { ButtonM } from "../components/atoms/ButtonM";
import { Navbar } from "../components/molecules/Navbar";
import { useDeviceContext } from "../contextProviders/DeviceProvider";


export function Login() {
	const loginSchema = Yup.object().shape({
	email: Yup.string()
		.email('E-mail inválido')
		.required('Email é obrigatória'),
	password: Yup.string()
		.required('Palavra-passe é obrigatória')
		.min(8, 'A palavra-passe deve ter pelo menos 8 caracteres')
		.matches(
		/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&.])[A-Za-z\d@$!%*#?&.]+$/,
		'A palavra-passe deve conter pelo menos uma letra, um número e um caractere especial'
		),
	});
	const size = useDeviceContext();
	const [show, setShow] = React.useState(false)
	return (
		<>
			<Flex width={"full"} flexDirection={"column"}>
				<Navbar text="Mericos" size={size} navigationState={"goBack"} />{" "}
				<Center>
					<Flex
						backgroundColor={"gray.50"}
						color={"Gray"}
						backgroundPosition={"center"}
						rounded={"md"}
						width={"7xl"}
						paddingY={"8"}
						paddingX={"8"}
						direction={"column"}
						gap={8}
						height={"xl"}
					>
						<Heading color={"primary.500"} marginX={"auto"}>Login</Heading>
						<Formik
							initialValues={{
								email: "",
								password: "",
							}}
							onSubmit={(values) => {
								alert(JSON.stringify(values, null, 2));
							}}
							validationSchema={loginSchema}
							>
							{({ handleSubmit, errors, touched }) => (
								<form onSubmit={handleSubmit}>
								<VStack spacing={4} align="center" marginX={"auto"} w="full" maxW={"xl"}  >
									<FormControl isInvalid={!!errors.email && touched.email} isRequired>
									<FormLabel htmlFor="email">Email</FormLabel>
									<InputGroup>
										<Field
											as={Input}
											id="email"
											name="email"
											type="email"
											variant={"filled"}
										/>
										<InputRightElement width='4.5rem'>
											{ !errors.email && touched.email ? <CheckIcon color='green.500' />: "" }
										</InputRightElement>
									</InputGroup>
									<FormErrorMessage>{errors.email}</FormErrorMessage>
									</FormControl>
									<FormControl isInvalid={!!errors.password && touched.password} isRequired>
									<FormLabel htmlFor="password">Palavra-passe</FormLabel>
									<InputGroup>
										<Field
											as={Input}
											id="password"
											name="password"
											type={show ? 'text' : 'password'}
											variant="filled"
										/>
										<InputRightElement width='4.5rem' paddingRight={"0.1rem"}>
											{ !errors.password &&  touched.password ? <CheckIcon color='green.500' />:""}
											<Button h='1.75rem' size='sm' onClick={() => setShow(!show)}>
											{show ? 'Hide' : 'Show'}
											</Button>
										</InputRightElement>
									</InputGroup>
									<FormErrorMessage>{errors.password}</FormErrorMessage>
									</FormControl>
									<Text
										width={"full"}
										color="primary.500"
										align={"end"}
										fontSize={"xs"}
									>
										<Link to="/forgot-password">Forgot password?</Link>
									</Text>
									<ButtonM isSubmit={true} text={"Login"}/>
									<Flex  rounded={"md"} p={4} gap={2} justifyContent={"end"}>
										<Text fontSize={"sm"} gap={2}>
											Não possui uma conta?
										</Text>
										<Text color={"primary.500"}>
											<Link to={"/register"} color={"primary.500"}>Registre-se</Link>
										</Text>
									</Flex>
								</VStack>
								</form>
							)}
							</Formik>
					</Flex>
				</Center>
			</Flex>
		</>
	);
}
