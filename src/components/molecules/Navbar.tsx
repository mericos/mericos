import { ArrowBackIcon } from "@chakra-ui/icons";
import { Flex, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import mericosLogoWhite from "../../assets/logo/only-logo-white.svg";
import mericosLogo from "../../assets/logo/only-logo.svg";
import { ButtonM } from "../atoms/ButtonM";
import { NavItem } from "../atoms/NaviItem";
import { HamburguerMenu } from "./HamburguerMenu";

interface NavbarProps {
	text?: string;
	type?: "primary" | "secondary";
	size: "phone" | "laptop" | "universal";
	navigationState: "authenticated" | "not_authenticated" | "goBack";
}

function getNavItems(navState: NavbarProps["navigationState"]) {
	const navItems = [
		{ name: "Menu", link: "" },
		{
			name: navState === "authenticated" ? "Encomenda" : "Login",
			link: "",
		},
		{
			name: navState === "authenticated" ? "Historico" : "Registro",
			link: "",
		},
	];

	return navItems.filter((navItem) => navItem.name);
}

function NavbarLeft({ properties }: { properties: { image: string, primaryColor: string} }) {
	return (
		<Flex direction={"row"} className="logo" alignItems="center" gap="0.625rem">
			<img src={properties.image} alt="mericos-logo" />
			<Text
				fontSize="card_heading_size"
				fontWeight="bold"
				color={properties.primaryColor}
			>
				Mericos
			</Text>
		</Flex>
	);
}

function NavbarRight({
	properties,
	navProps,
}: {
	properties: { background: string, primaryColor: string, buttonType: "primary" | "secondary" | undefined};
	navProps: NavbarProps;
}) {
	const { navigationState, size } = navProps;
	const isPhone = size === "phone";

	if (isPhone) {
		if (navigationState === "authenticated") {
			return (
				<HamburguerMenu
					color={properties.background}
					background_color={properties.primaryColor}
					options={getNavItems(navigationState)}
				/>
			);
		}

		return (
			<Flex direction="row" alignItems="center" gap={2}>
				<NavItem text="Menu" link="" color={properties.primaryColor} />
				<ButtonM text="Login" type={properties.buttonType} />
			</Flex>
		);
	}

	return (
		<Flex direction="row" alignItems="center" gap={10}>
			{getNavItems(navigationState).map((item) => (
				<NavItem
					key={item.name}
					text={item.name}
					link={item.link}
					color={properties.primaryColor}
				/>
			))}
		</Flex>
	);
}

export function Navbar(props: NavbarProps) {
	const { text, type, navigationState } = props
	const isPrimaryType = type === "primary" || type === undefined;

	const properties: { primaryColor: string, background: string, image: string, buttonType : "primary" | "secondary" | undefined} = {
		primaryColor: isPrimaryType ? "customColors.primary.500" : "white",
		background: isPrimaryType ? "white" : "customColors.primary.500",
		image: isPrimaryType ? mericosLogo : mericosLogoWhite,
		buttonType: type === "primary" ? "primary" : "secondary",
	};
	const navigate = useNavigate()
	function handleBack () {
		navigate(-1)
	}
	const backArrow = (
		<Flex justify={"flex-start"} alignItems={"center"} gap={4}>
			<ArrowBackIcon color={properties.primaryColor} boxSize={6} onClick={() => handleBack()}/>
			<Text
				fontSize="card_heading_size"
				fontWeight="bold"
				color={properties.primaryColor}
			>{text}</Text>
		</Flex>
	);

	return (
		<Flex
		direction={"column"}
		bg={properties.background}
		padding={2}
		align="center"
		width={"full"}
		position={"sticky"}
		zIndex={2}
		top={0}>
			<Flex
				padding="0.65rem"
				direction="row"
				alignItems="center"
				justifyContent="space-between"
				maxWidth={"7xl"}
			>
				{navigationState !== "goBack" ? (
					<Flex direction={"row"} justifyContent={"space-between"} w={"7xl"} maxWidth={"7xl"}>
						{/* logo and company name */}
						<NavbarLeft properties={properties} />
						{/* right side navbar part */}
						<NavbarRight properties={properties} navProps={props} />
					</Flex>
				) : (
					// go back Navbar
					backArrow
				)}
			</Flex>
		</Flex>
	);
}
