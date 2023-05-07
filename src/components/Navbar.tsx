import mericos_logo from "../assets/logo/only-logo.svg";
import mericos_logo_white from "../assets/logo/only-logo-white.svg";
import { Box, Flex, Text } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

interface NavbarProps {
	type? : "primary" | "secondary",
	size: "phone" | "laptop" | "universal",
	navigationState: "authenticated" |"not_authenticated" | "goBack",
}

export function Navbar(props: NavbarProps) {
	const properties = {
		primaryColor: !props.type || props.type === "primary" ? "customColors.primary.500" : "white",
		background: !props.type || props.type === "primary"? "FFFFFF" : "customColors.primary.500",
		image: !props.type || props.type === "primary"? mericos_logo :  mericos_logo_white,
	}
	return (
		<Box bg={properties.background}>
			<Flex
				padding={"0.65rem"}
				direction={"row"}
				alignItems={"center"}
				justifyContent={"space-between"}
			>
				<Flex
					className="logo"
					alignItems={"center"}
					gap={"0.625rem"}
				>
					<img src={properties.image} alt="mericos-logo" />
					<Text fontSize={"1rem"} color={properties.primaryColor} >Mericos</Text>
				</Flex>
				<HamburgerIcon color={properties.primaryColor} boxSize={6}/>
			</Flex>
		</Box>
	);
}
