import {
	Flex,
	Heading,
	Hide,
	IconButton,
	Image,
	List, Show,
	UnorderedList
} from "@chakra-ui/react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Logo from "../../assets/logo/logo2.svg";
import { ButtonM2 } from "../atoms/ButtonM2";

import { useState } from "react";
import { Link } from "react-router-dom";

export function UnloggedNavbar() {
	const [display, changeDisplay] = useState("none");
	const nav_titles = [
		<Link key={""} to={"/home"}>
			Home
		</Link>,
		<Link key={""} to={""}>
			Favorites
		</Link>,
		<Link key={""} to={""}>
			Profile
		</Link>,
		<Link key={""} to={""}>
			Orders
		</Link>,
		<Link key={""} to={""}>
			Custom Support
		</Link>,
		<Link key={""} to={""}>
			About Us
		</Link>,
		<Link key={""} to={""}>
			Mericos Carrers
		</Link>,
	];

	return (
		<>
			<Flex
				color={"gray.500"}
				pt={"2"}
				alignItems={"center"}
				justifyContent={"space-between"}
			>
				<Image
					src={Logo}
					// minW={["15%", "15%", "5%"]}
				/>
				<Hide above="md">
					<IconButton
						backgroundColor={"white"}
						icon={<AiOutlineMenu size={30} />}
						aria-label="hamburguer_menu"
						onClick={() => changeDisplay("flex")}
					/>
				</Hide>

				<Flex
					flexDirection={"column"}
					alignItems={"center"}
					// justifyContent={"center"}
					w={"full"}
					h={"full"}
					zIndex={20}
					pos={"absolute"}
					bgColor={"gray.500"}
					opacity={"100%"}
					top={"0"}
					left={"0"}
					overflow={"auto"}
					color={"white"}
					display={display}
				>
					
					<Flex
						m={"2"}
						w={"100%"}
						p={"4"}
						alignItems={"center"}
						gap={"4"}
						justifyContent={"flex-start"}
					>
						<IconButton
							icon={<AiOutlineClose size={30} />}
							aria-label={"close_button"}
							onClick={() => changeDisplay("none")}
							backgroundColor={"transparent"}
							_hover={{backgroundColor:"primary.300"}}
						></IconButton>

						<Heading fontSize={"2xl"} color={"white"}>
							Mericos
						</Heading>
					</Flex>

					<UnorderedList w={"100%"}>
						{nav_titles.map((link) => (
							<List
								p={"3"}
								m={"4"}
								_hover={{ backgroundColor: "primary.300" }}
								rounded={"lg"}
								key={""}
							>
								{link}
							</List>
						))}
					</UnorderedList>
					<Flex
						flexDir={"column"}
						color={"white"}
						alignItems={"center"}
					></Flex>
				</Flex>

				<Show above="md">
					<Flex gap={3}>
						<ButtonM2 variant={"primary"} text={"Login"} />
						<ButtonM2
							color={"primary.500"}
							variant={"secondary"}
							text={"Sign Up"}
						/>
					</Flex>
				</Show>
			</Flex>
		</>
	);
}
