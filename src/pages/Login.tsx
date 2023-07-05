import {
	Center,
	Flex,
	FormControl,
	FormErrorMessage,
	FormLabel,
	Heading,
	Text,
	VStack
} from "@chakra-ui/react";
import { Formik } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import { ButtonM } from "../components/atoms/ButtonM";
import { InputM } from "../components/atoms/InputM";
import { Navbar } from "../components/molecules/Navbar";


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
	return (
		<>
			<Flex width={"full"} flexDirection={"column"}>
				<Navbar text="Mericos" />
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
									<InputM
										text="email"
										id="email"
										name="email"
										input_type="email"
									/>
									<FormErrorMessage>{errors.email}</FormErrorMessage>
									</FormControl>
									<FormControl isInvalid={!!errors.password && touched.password} isRequired>
									<FormLabel htmlFor="password">Palavra-passe</FormLabel>
										<InputM
											text="password"
											id="password"
											name="password"
											input_type="password"
										/>
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
