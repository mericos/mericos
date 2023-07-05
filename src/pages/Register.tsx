import {
	Center,
	Flex,
	FormControl,
	FormErrorMessage,
	FormLabel,
	Heading,
	Link,
	Text,
	VStack
} from "@chakra-ui/react";
import { Formik } from "formik";
import * as Yup from "yup";
import { ButtonM } from "../components/atoms/ButtonM";
import { InputM } from "../components/atoms/InputM";
import { Navbar } from "../components/molecules/Navbar";

export function Register() {
	const RegisterSchema = Yup.object().shape({
		email: Yup.string()
			.email("E-mail inválido")
			.required("Email é obrigatória"),
		name: Yup.string()
		.required("nome é obrigatória")
		.min(3, "O nome deve ter pelo menos 3 caracteres"),
		password: Yup.string()
			.required("Palavra-passe é obrigatória")
			.min(8, "A palavra-passe deve ter pelo menos 8 caracteres")
			.matches(
				/^(?=.[A-Za-z])(?=.\d)(?=.[@$!%#?&.])[A-Za-z\d@$!%*#?&.]+$/,
				"A palavra-passe deve conter pelo menos uma letra, um número e um caractere especial"
			),
	});
	return (
		<>
			<Flex width={"full"} flexDirection={"column"}>
				<Navbar text="Mericos" />{" "}
				<Center>
					<Flex
						backgroundColor={"gray.50"}
						color={"GrayText"}
						backgroundPosition={"center"}
						width={"7xl"}
						// padding={"20"}
						rounded={"md"}
						// m={"1.5"}
						paddingY={"16"}
						paddingX={"32"}
						flexDirection={"column"}
						gap={4}
					>
						<Heading color={"primary.500"} marginX={"auto"}>Register</Heading>
						<Formik
							initialValues={{
								email: "",
								name: "",
								password: "",
								confirm_password: "",
							}}
							onSubmit={(values) => {
								alert(JSON.stringify(values, null, 2));
							}}
							validationSchema={RegisterSchema}
						>
							{({ handleSubmit, errors, touched }) => (
								<form onSubmit={handleSubmit}>
									<VStack spacing={4}  w="full" maxW={"xl"} marginX={"auto"}>
										<FormControl
											isInvalid={
												!!errors.email && touched.email
											}
											isRequired
										>
											<FormLabel htmlFor="email">
												Email
											</FormLabel>
											<InputM
												text="email"
												id="email"
												name="email"
												input_type="email"
											/>
											<FormErrorMessage>
												{errors.email}
											</FormErrorMessage>
										</FormControl>
										<FormControl isInvalid={!!errors.name} isRequired>
											<FormLabel htmlFor="name">
												Nome
											</FormLabel>
											<InputM
												text="nome"
												id="name"
												name="name"
												input_type="name"
											/>
											<FormErrorMessage>
												{errors.name}
											</FormErrorMessage>
										</FormControl>
										<FormControl
											isInvalid={
												!!errors.password &&
												touched.password
											}
											isRequired
										>
											<FormLabel htmlFor="password">
												Palavra-passe
											</FormLabel>
											<InputM
												text="password"
												id="password"
												name="password"
												input_type="password"
											/>
											<FormErrorMessage>
												{errors.password}
											</FormErrorMessage>
										</FormControl>
										<ButtonM isSubmit={true} text={"Registro"}/>
									</VStack>
								</form>
							)}
						</Formik>
						<Text align={"center"} fontSize={"sm"}>
							Já tem uma conta?{" "}
							<Link color={"primary.500"}>Login</Link>
							{" "}
						</Text>
					</Flex>
				</Center>
			</Flex>
		</>
	);
}