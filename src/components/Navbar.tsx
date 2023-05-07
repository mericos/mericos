import mericosLogo from "../assets/logo/only-logo.svg";
import mericosLogoWhite from "../assets/logo/only-logo-white.svg";
import { Box, Flex, Text } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { NavItem } from "./atoms/NaviItem";

interface NavbarProps {
	type? : "primary" | "secondary",
	size: "phone" | "laptop" | "universal",
	navigationState: "authenticated" |"not_authenticated" | "goBack",
}

export function Navbar(props: NavbarProps) {
	const isPrimaryType = props.type === "primary";
	const properties = {
	primaryColor: isPrimaryType ? "customColors.primary.500" : "white",
	background: isPrimaryType ? "FFFFFF" : "customColors.primary.500",
	image: isPrimaryType ? mericosLogo : mericosLogoWhite,
	};
	const rightSide = props.size === "phone" ? (<HamburgerIcon color={properties.primaryColor} boxSize={6}/>) : "under construction"
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
				{/* {rightSide} */}
				<NavItem text="Menu" link="" color={properties.primaryColor}/>
			</Flex>
		</Box>
	);
}
