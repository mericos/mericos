import { Divider, Flex, Heading, IconButton, Link } from "@chakra-ui/react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

import { nav_titles } from "../../utils/nav_titles";
import { useState } from "react";

export function SideNavBar() {
	const [display, changeDisplay] = useState("none");
	return (
		<>
			<IconButton
				backgroundColor={"white"}
				icon={<AiOutlineMenu size={24} color={"gray.500"} />}
				aria-label="hamburguer_menu"
				onClick={() => changeDisplay("flex")}
			/>
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
				// gap={"2rem"}
			>
				<Flex
					w={"full"}
					flexDir={"row"}
					alignItems={"center"}
					gap={"4"}
					justifyContent={"flex-start"}
					padding={"0.5rem 1rem"}
				>
					<Heading
						flexGrow={1}
						fontSize={"2xl"}
						color={"primary.500"}
					>
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
				<Flex flexDir={"column"} w={"full"} padding={"0rem 1rem"}>
					{nav_titles.map(({ name, path }) => (
						<>
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
							>
								{name}
							</Link>
							<Divider />
						</>
					))}
				</Flex>
			</Flex>
		</>
	);
}
