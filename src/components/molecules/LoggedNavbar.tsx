import {
	Flex,
	Heading,
	Hide,
	IconButton,
	Image,
	List,
	Show,
	UnorderedList,
} from "@chakra-ui/react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Logo from "../../assets/logo/logo2.svg";

import { useState } from "react";
import { nav_titles } from "../../utils/nav_titles";

export function LoggedNavbar() {
	const [display, changeDisplay] = useState("none");
	

	return (
		<>
			<Flex
				color={"gray.500"}
				pt={"2"}
				alignItems={"center"}
				justifyContent={[
					"space-between",
					"space-between",
					"flex-start",
				]}
			>
				<Image
					src={Logo}
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
							_hover={{ backgroundColor: "primary.300" }}
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
						{
							<UnorderedList
								display={"flex"}
								justifyContent={"flex-start"}
								w={"100%"}
							>
								{nav_titles.map((link) => (
									<List
										// p={"3"}
										m={"4"}
										color="black"
										pos={"relative"}
										_after={{
											content: '""',
											position: "absolute",
											width: "100%",
											transform: "scaleX(0)",
											height: "2px",
											bottom: "0",
											left: "0",
											backgroundColor: "primary.500",
											transformOrigin: "bottom right",
											transition:
												"transform 0.25s ease-out",
										}}
										_hover={{
											_after: {
												transform: "scaleX(1)",
												transformOrigin: "bottom left",
											},
										}}
										// rounded={"lg"}
										key={""}
									>
										{link}
									</List>
								))}
							</UnorderedList>
						}
					</Flex>
				</Show>
			</Flex>
		</>
	);
}
