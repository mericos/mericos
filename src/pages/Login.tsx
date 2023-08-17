import {
	Box,
	Divider,
	Flex,
	FormControl,
	FormErrorMessage,
	FormLabel,
	Grid,
	Heading,
	Image,
	Show,
	Text,
	VStack,
} from "@chakra-ui/react";
import { Formik } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import { ImFacebook } from "react-icons/im";
import { FcGoogle } from "react-icons/fc";
import { InputM } from "../components/atoms/InputM";
import { ButtonM2 } from "../components/atoms/ButtonM2";
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
	return (
		<>
			<Grid
				width={"full"}
				className="form"
				h={"xl"}
				gridTemplateColumns={{
					md: "1fr 1fr",
				}}
			>
				<Flex
					flexDirection={"column"}
					alignItems={"center"}
					justifyContent={"center"}
					p={"20"}
					w="full"
				>
					<Image
						src={Logo}
						w={["30%", "30%", "20%"]}
						h={["", "50%", "20%"]}
					/>
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
								<VStack
									align="center"
									marginX={"auto"}
									minWidth="300px"
								>
									<Heading w={"full"} textAlign={"left"}>
										Login
									</Heading>
									<Text
										w={"full"}
										textAlign={"left"}
										color={"gray.500"}
									>
										Login to continue using the app
									</Text>
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
									<Text
										width={"full"}
										color="primary.500"
										align={"end"}
										fontSize={"xs"}
									>
										<Link to="/forgot-password">
											Forgot password?
										</Link>
									</Text>
									<ButtonM2
										width={"full"}
										variant={"primary"}
										text="Login"
									/>
									<Flex
										rounded={"md"}
										w={"full"}
										flexDir={"column"}
									>
										<Flex
											flexDirection={"row"}
											alignItems={"center"}
											justifyContent={"center"}
										>
											<Divider
												border={"1px"}
												w={["36", "", "full"]}
											/>
											<Text
												fontSize={"sm"}
												w={["fit-content", "", "full"]}
												textAlign={"center"}
											>
												Or login with
											</Text>
											<Divider
												border={"1px"}
												w={["36", "", "full"]}
											/>
										</Flex>
										<Flex
											align={"center"}
											justifyContent={"center"}
											gap={"1.5rem"}
										>
											<Box
												rounded={"md"}
												boxShadow={"customShadow"}
												_hover={{
													bgColor: "gray.300",
													cursor: "pointer",
												}}
											>
												<FcGoogle size={45} />
											</Box>
											<Box
												rounded={"md"}
												boxShadow={"customShadow"}
												_hover={{
													bgColor: "gray.300",
													cursor: "pointer",
												}}
											>
												<ImFacebook size={37} />
											</Box>
										</Flex>
										<Flex
											justifyContent={"center"}
											color={"primary.500"}
										>
											<Text>Don't have an accout? </Text>
											<Link
												to={"/register"}
												color={"primary.500"}
											>
												<Text
													textDecoration={"underline"}
												>
													{" "}
													Register
												</Text>
											</Link>
										</Flex>
									</Flex>
								</VStack>
							</form>
						)}
					</Formik>
				</Flex>
				<Show above="md">
					<Image
						// src={ Logo }
						src={
							"data:image/jpeg;base64,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"
						}
						h={"100%"}
						w={"100%"}
						objectFit={"cover"}
					/>
				</Show>
			</Grid>
		</>
	);
}
