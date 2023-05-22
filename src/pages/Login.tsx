import {
	Center,
	Flex,
	FormControl,
	FormErrorMessage,
	FormLabel,
	Heading,
	Input,
	Text,
	VStack
} from "@chakra-ui/react";
import { Field, Formik } from "formik";
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
						paddingY={"16"}
						paddingX={"32"}
						direction={"column"}
						alignItems={"center"}
						gap={8}
					>
						<Heading color={"primary.500"}>Login</Heading>
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
								<VStack spacing={4} align="center" w={"7xl"} maxWidth={"xl"}>
									<FormControl isInvalid={!!errors.email && touched.email}>
									<FormLabel htmlFor="email">Email</FormLabel>
									<Field
										as={Input}
										id="email"
										name="email"
										type="email"
										variant="filled"
									/>
									<FormErrorMessage>{errors.email}</FormErrorMessage>
									</FormControl>
									<FormControl isInvalid={!!errors.password && touched.password}>
									<FormLabel htmlFor="password">Palavra-passe</FormLabel>
									<Field
										as={Input}
										id="password"
										name="password"
										type="password"
										variant="filled"
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
