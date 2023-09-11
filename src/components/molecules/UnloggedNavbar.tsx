import {
	Flex,
	Heading,
	Hide,
	IconButton,
	Image,
	Link,
	Show,
	UnorderedList
} from "@chakra-ui/react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Logo from "../../assets/logo/logo2.svg";
import { ButtonM2 } from "../atoms/ButtonM2";

import { useState } from "react";
import { nav_titles } from "../../utils/nav_titles";

export function UnloggedNavbar() {
	const [display, changeDisplay] = useState("none");

	return (
		<>
			<Flex
				color={"gray.500"}
				pt={"2"}
				alignItems={"center"}
				justifyContent={"space-between"}
			>
				<Image src={Logo} />
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
					w={"full"}
					h={"full"}
					zIndex={20}
					pos={"absolute"}
					backgroundColor={"white"}
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
							_hover={{
								backgroundColor: "primary.300",
								color: "white",
							}}
						></IconButton>

						<Heading fontSize={"2xl"} color={"white"}>
							Mericos
						</Heading>
					</Flex>

					<UnorderedList w={"100%"}>
						{nav_titles.map(({name, path}) => (
							<Link
							margin={"4"}
								p={"3"}
								_hover={{
									backgroundColor: "primary.300",
									color: "white",
								}}
								rounded={"lg"}
								key={""}
								href={path}
							>
								{name}
							</Link>
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
