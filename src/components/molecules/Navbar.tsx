import { ArrowBackIcon } from "@chakra-ui/icons";
import { Box, Divider, Flex, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import mericosLogoWhite from "../../assets/logo/only-logo-white.svg";
import mericosLogo from "../../assets/logo/only-logo.svg";
import { ButtonM } from "../atoms/ButtonM";
import { NavItem } from "../atoms/NaviItem";
import { HamburguerMenu } from "./HamburguerMenu";
import { DropdownList } from "./DropdownList";
import { DropDown } from "../atoms/DropDown";

interface NavbarProps {
	text?: string;
	type?: "primary" | "secondary";
	size: "phone" | "laptop" | "tablet" | "universal";
	navigationState: "authenticated" | "not_authenticated" | "goBack";
	children? : JSX.Element[];
}
interface PropertiesProps {
	primaryColor: string;
	background: string;
	image: string;
	buttonType: "primary" | "secondary";
}

function getNavItems(navState: NavbarProps["navigationState"]) {
	const navItems = [
		{ name: "Menu", link: "/menu" },
	];
	const items = navState == "authenticated" ? [
		{
			name: "Home",
			link: "/home",
		},
		{
			name: "Sobre nós",
			link: "/about",
		},
		{
			name: "Carrinha",
			link: "/cart",
		},
		{
			name: "Historico",
			link: "history",
		},] : [
			// {
			// 	name: "Login",
			// 	link: "/login",
			// },
			// {
			// 	name: "Registro",
			// 	link: "register",
			// },
	]
	for (const item of items) { (navItems.push(item))}


	return navItems.filter((navItem) => navItem.name);
}

function NavbarLeft({ properties, navProps }: { properties: PropertiesProps; navProps: NavbarProps }) {
	const { navigationState, size } = navProps;
	const options = getNavItems(navigationState);
	return (
		<Flex className="logo" alignItems="center" gap="0.5rem" direction={"row"}>
			<img src={properties.image} alt="mericos-logo" />
			<Text
				fontSize="card_heading_size"
				fontWeight="bold"
				color={properties.primaryColor}
			>
				Mericos
			</Text>
			{size!=="phone" ? getNavItems(navigationState).filter((item,index) => size === "laptop" || index < 2).map((item, key) => (
				<NavItem
					key={item.name}
					text={item.name}
					link={item.link}
					color={properties.primaryColor}
				/>
			)) : ""}
			{size === "tablet" && options.length > 1 ? <DropDown options={options.filter((item,index) => index >= 2)}/> :""}
		</Flex>
	);
}

function NavbarRight({
	properties,
	navProps,
}: {
	properties: PropertiesProps;
	navProps: NavbarProps;
}) {
	const { navigationState, size } = navProps;
	const isPhone = size === "phone";
	const navigate = useNavigate()

	if (isPhone) {
		return (
			<Flex direction={"row"} alignItems={"center"} gap={"4"}>
				{navigationState === "not_authenticated" ? <ButtonM text="Login" type={properties.buttonType} onClick={()=> navigate("/login")} /> : ""}
				<HamburguerMenu
					color={properties.background}
					background_color={properties.primaryColor}
					options={getNavItems(navigationState)}
				/>
			</Flex>
		);
	}
	if (navigationState === "not_authenticated") {

		return (
			<Flex direction="row" alignItems="center" gap={2}>
				<ButtonM text="Login" type={properties.buttonType} onClick={()=> navigate("/login")} />
				<ButtonM text="Register" type={properties.buttonType==="primary" ? "secondary" : "primary" } onClick={()=> navigate("/register")} />
			</Flex>
		);
	}

	return (
		<Flex direction="row" alignItems="center" gap={4}>
			buttons
		</Flex>
	);
}

export function Navbar(props: NavbarProps) {
	const { text, type, navigationState } = props;
	const isPrimaryType = type === "primary" || type === undefined;

	const properties: PropertiesProps = {
		primaryColor: isPrimaryType ? "primary.500" : "white",
		background: isPrimaryType ? "white" : "primary.500",
		image: isPrimaryType ? mericosLogo : mericosLogoWhite,
		buttonType: type === "primary" ? "primary" : "secondary",
	};
	const navigate = useNavigate();
	function handleBack() {
		navigate(-1);
	}
	const backArrow = (
		<Flex justify={"flex-start"} alignItems={"center"} gap={4}>
			<ArrowBackIcon
				background={properties.background}
				_hover={{
					background: properties.primaryColor,
					color: properties.background,
				}}
				_active={{
					background: properties.background,
					color: properties.primaryColor,
				}}
				color={properties.primaryColor}
				borderRadius={"full"}
				boxSize={6}
				onClick={() => handleBack()}
			/>
    
			<Text
				fontSize="card_heading_size"
				fontWeight="bold"
				color={properties.primaryColor}
			>{text ? text : "Mericos"}</Text>
		</Flex>
	);

	return (
		<Box
		bg={properties.background}
		width={"full"}
		position={"sticky"}
		zIndex={2}
		top={0}>
			<Flex
				padding="0.85rem"
				direction="column"
				alignItems="center"
				justifyContent="space-between"
				maxWidth={"7xl"}
				marginX={"auto"}

			>
				<Flex
					direction="row"
					width={"full"}
					justify={"space-between"}>
					{navigationState !== "goBack" ? (
						<>
							{/* logo and company name */}
							<NavbarLeft properties={properties} navProps={props} />
							{/* right side navbar part */}
							<NavbarRight properties={properties} navProps={props} />
						</>
					) : (
						// go back Navbar
						backArrow
					)}

				</Flex>
				{props.children}
			</Flex>
			<Divider/>
		</Box>
	);
}
