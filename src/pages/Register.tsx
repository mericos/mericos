import { Center, Flex, Link, Stack, Text } from "@chakra-ui/react";
import { useDeviceContext } from "../contextProviders/DeviceProvider";
import { InputM } from "../components/atoms/InputM";
import { Navbar } from "../components/molecules/Navbar";
import { ButtonM } from "../components/atoms/ButtonM";

export function Register() {
	const size = useDeviceContext();
	return (
		<>
			<Flex width={"full"} flexDirection={"column"}>
				<Navbar
					text="Register"
					size={size}
					navigationState={"goBack"}
				/>{" "}
				<Center>
					<Flex
						backgroundColor={"gray.100"}
						backgroundPosition={"center"}
						rounded={"md"}
						width={"fit-content"}
						padding={"40"}
						h="max-content"
						flexDirection={"column"}
					>
						<Stack spacing={"4"}>
							<Text
								fontSize="card_heading_size"
								fontWeight="bold"
								color={"primary.500"}
							>
								{" "}
								{/* Mericos */}{" "}
							</Text>{" "}
							<InputM text={"Email"}/>{" "}
							<InputM typeB="password" text={"Passoword"} />{" "}
							<InputM typeB="password" text={"Confirm Password"} />
							<Text
								color="primary.500"
								align={"right"}
								fontSize={"xs"}
							>
								Forgot?
							</Text>
							<Center>
								<ButtonM text={"REGISTER"} />
							</Center>
							<Text align={"center"} fontSize={"sm"}>
								{" "}
								Já tem uma conta?{" "}
								<Link color={"primary.500"}>Login</Link>
							</Text>
						</Stack>
					</Flex>
				</Center>
			</Flex>
		</>
	);
}
