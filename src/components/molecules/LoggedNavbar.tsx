import {
	Divider,
	Flex,
	Heading,
	Hide,
	IconButton,
	Image,
	Link,
	Show,
	Text,
	UnorderedList,
} from "@chakra-ui/react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Logo from "../../assets/logo/logo2.svg";

import { useState } from "react";
import { nav_titles } from "../../utils/nav_titles";
import { BsCart } from "react-icons/bs";

interface Navbar {
	page_title?: string;
}

export function LoggedNavbar({ page_title }: Navbar) {
	const [display, changeDisplay] = useState("none");
	// const [selectedType, setSelectedType] = useState("Home");

	// const handleTypeClick = (type: string) => {
	// 	setSelectedType(type);
	// };
	return (
		<>
			<Flex
				pt={2}
				color={"gray.500"}
				alignItems={"center"}
				justifyContent={[
					"space-between",
					"space-between",
					"flex-start",
				]}
			>
				<Hide above="md">
					<Flex w={"full"} alignItems={"center"}>
						<Image src={Logo} alt="Mericos logo" boxSize={"2rem"} />
						<Heading size={"md"}>Mericos</Heading>
						<Text fontSize={"0.75rem"} alignSelf={"end"}>{page_title}</Text>
					</Flex>
					<Flex w={"full"} justifyContent={"end"} alignItems={"center"} gap={"1rem"}>
						<BsCart size={24} />
						<IconButton
							backgroundColor={"white"}
							icon={<AiOutlineMenu size={24} color={"gray.500"} />}
							aria-label="hamburguer_menu"
							onClick={() => changeDisplay("flex")}
						/>
					</Flex>
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
					gap={"2rem"}
				>
					<Flex
						w={"full"}
						flexDir={"row"}
						alignItems={"center"}
						gap={"4"}
						justifyContent={"flex-start"}
						padding={"0.5rem 1rem"}
					>
						<Heading flexGrow={1} fontSize={"2xl"} color={"primary.500"}>
							Mericos
						</Heading>
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
					</Flex>

					<Flex flexDir={"column"} w={"full"} padding={"0rem 1rem"} gap={"1rem"}>
						{nav_titles.map(({name, path}) => (
								<Link
									w={"full"}
									href={path}
									p={"1rem"}
									color={"gray.500"}
									_hover={{
										backgroundColor: "primary.300",
										color: "white",
									}}
									rounded={"lg"}
									key={""}
									fontSize={"0.875rem"}
								>
									{name}
								</Link>
						))}
					</Flex>
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
								{nav_titles.map(({name, path}) => (
									<Link
										href={path}
										fontSize={["md"]}
										m={"4"}
										color="gray.500"
										pos={"relative"}
										// onClick={() =>
										// 	handleTypeClick(link.props.children)
										// }
										_after={{
											content: '""',
											position: "absolute",
											width: "100%",
											transform: "scaleX(0)",
											// transform: `${
											// 	selectedType ===
											// 	link.props.children
											// 		? "scaleX(1)"
											// 		: "scaleX(0)"
											// }`,
											height: "2px",
											bottom: "0",
											left: "0",
											backgroundColor: "primary.500",
											transformOrigin: "bottom right",
											transition:
												"transform 0.25s ease-out",
										}}
										_hover={{
											textDecoration: "none",
											_after: {
												transform: "scaleX(1)",
												transformOrigin: "bottom left",
											},
										}}
										key={""}
										
									>
										{name}
									</Link>
								))}
							</UnorderedList>
						}
					</Flex>
				</Show>
			</Flex>
			<Divider mb={4} />
		</>
	);
}
