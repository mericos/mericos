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
import { BsCart } from "react-icons/bs";

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
				<Hide above="md">
					<BsCart size={24} />
					<IconButton
						backgroundColor={"white"}
						icon={<AiOutlineMenu size={24} />}
						aria-label="hamburguer_menu"
						onClick={() => changeDisplay("flex")}
					/>
				</Hide>

				<Flex
					flexDirection={"column"}
					textColor={"gray.500"}
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
							icon={<AiOutlineClose size={24} />}
							color={"gray.500"}
							aria-label={"close_button"}
							onClick={() => changeDisplay("none")}
							backgroundColor={"transparent"}
							_hover={{
								backgroundColor: "primary.300",
								color: "white",
							}}
						></IconButton>

						<Heading fontSize={"2xl"} color={"gray.500"}>
							Mericos
						</Heading>
					</Flex>

					<UnorderedList w={"100%"}>
						{nav_titles.map((link) => (
							<>
								<List
									p={"3"}
									m={"4"}
									color={"gray.500"}
									_hover={{
										backgroundColor: "primary.300",
										color: "white",
									}}
									rounded={"lg"}
									key={""}
								>
									{link}
								</List>
							</>
						))}
					</UnorderedList>
				</Flex>

				<Show above="md">
					<Image src={Logo} />
					<Flex gap={3}>
						{
							<UnorderedList
								display={"flex"}
								justifyContent={"flex-start"}
								w={"100%"}
							>
								{nav_titles.map((link) => (
									<List
										m={"4"}
										color="gray.500"
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
