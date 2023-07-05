import { Box, Divider, Flex, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import mericosLogoWhite from "../../assets/logo/only-logo-white.svg";
import mericosLogo from "../../assets/logo/only-logo.svg";
import { ButtonM } from "../atoms/ButtonM";
import { NavItem } from "../atoms/NaviItem";
import { HamburguerMenu } from "./HamburguerMenu";
import { DropDown } from "../atoms/DropDown";
import { authentication, size, useDeviceContext } from "../../contextProviders/DeviceProvider";

interface NavbarProps {
	text?: string;
	type?: "primary" | "secondary";
	children? : JSX.Element[];
}
interface PropertiesProps {
	primaryColor: string;
	background: string;
	image: string;
	buttonType: "primary" | "secondary";
}

function getNavItems(navState: authentication , size: size) {
	const navItems = [
		{
			name: "Home",
			link: "/home",
		},
		{ name: "Menu", link: "/menu" },
		{
			name: "Sobre nós",
			link: "/about",
		},
	];
	const items = navState == "authenticated" ? [
		
		{
			name: "Carrinha",
			link: "/cart",
		},
		{
			name: "Historico",
			link: "history",
		},] : size==="phone" ? [
			{
				name: "Login",
				link: "/login",
			},
			{
				name: "Registro",
				link: "register",
			},
	] : []
	for (const item of items) { (navItems.push(item))}


	return navItems.filter((navItem) => navItem.name);
}

function NavbarLeft({ navProps,properties }: { properties: PropertiesProps; navProps: {navigationState: authentication, size: size} }) {
	const { navigationState, size } = navProps;
	const options = getNavItems(navigationState, size);
	return (
		<Flex className="logo" alignItems="center" gap="0.5rem" direction={"row"}>
			<img src={properties.image} alt="mericos-logo" />
			<Text
				fontSize="card_heading_size"
				color={properties.primaryColor}
			>
				Mericos
			</Text>
			{size!=="phone" ? options.filter((item,index) => item === item && size === "laptop" || index < 2).map((item) => (
				<NavItem
					key={item.name}
					text={item.name}
					link={item.link}
					color={properties.primaryColor}
				/>
			)) : ""}
			{size === "tablet" && options.length > 1 ? <DropDown options={options.filter((item,index) =>  item === item && index >= 2)}/> :""}
		</Flex>
	);
}

function NavbarRight({
	properties,
	navProps,
}: {
	properties: PropertiesProps;
	navProps: {navigationState: authentication, size: size};
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
					options={getNavItems(navigationState, size)}
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
		<Flex direction="row" alignItems="center" gap={2}>
			<ButtonM text="Order" type={properties.buttonType} onClick={()=> navigate("/order")} />
		</Flex>
	);
}

export function Navbar(props: NavbarProps) {
	const { type } = props;
	const { size } = useDeviceContext();
	const navigationState = useDeviceContext().authentication
	const isPrimaryType = type === "primary" || type === undefined;

	const properties: PropertiesProps = {
		primaryColor: isPrimaryType ? "primary.500" : "white",
		background: isPrimaryType ? "white" : "primary.500",
		image: isPrimaryType ? mericosLogo : mericosLogoWhite,
		buttonType: type === "primary" ? "primary" : "secondary",
	};
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
				gap={2}
			>
				<Flex
					direction="row"
					width={"full"}
					justify={"space-between"}>
					<>
						{/* logo and company name */}
						<NavbarLeft properties={properties} navProps={{navigationState: navigationState, size: size}} />
						{/* right side navbar part */}
						<NavbarRight properties={properties} navProps={{navigationState: navigationState, size: size}} />
					</>
				</Flex>
				{props.children}
			</Flex>
			<Divider/>
		</Box>
	);
}
