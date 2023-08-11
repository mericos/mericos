import {
	Box,
	Divider,
	Flex,
	FormControl,
	FormErrorMessage,
	FormLabel,
	Heading,
	Image,
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
			<Flex
				width={["", "80%", "100%"]}
				py={"4rem"}
				
				alignItems={"center"}
				justifyContent={"center"}
				flexDir={"column"}
				gap={"1.5rem"}
				className="form"
			>
				<Image
					src={Logo}
					w={["30%", "30%", "20%"]}
					h={["", "50%", "20%"]}
					transition={"ease 0.3s"}
					css={{
						clipPath: "circle(50% at 50% 50%)",
					}}
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
								p={"12"}
								align="center"
								marginX={"auto"}
								w={["", "container.md", ""]}
								gap={"1.5rem"}
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
									isInvalid={!!errors.email && touched.email}
									isRequired
								>
									<FormLabel htmlFor="email">Email</FormLabel>
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
										!!errors.password && touched.password
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
									p={4}
									w={"full"}
									flexDir={"column"}
									gap={"1.5rem"}
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
											p={"1"}
											rounded={"md"}
											boxShadow={"dark-lg"}
											_hover={{
												bgColor: "gray.300",
												cursor: "pointer",
											}}
										>
											<FcGoogle size={45} />
										</Box>
										<Box
											p={"2"}
											rounded={"md"}
											boxShadow={"dark-lg"}
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
										gap={"2"}
									>
										<Text>Don't have an accout? </Text>
										<Link
											to={"/register"}
											color={"primary.500"}
										>
											<Text textDecoration={"underline"}>
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
			;
		</>
	);
}
