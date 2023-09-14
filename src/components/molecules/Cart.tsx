import { Flex, Heading, IconButton } from "@chakra-ui/react";
import { useState } from "react";
import { BsCart } from "react-icons/bs";
import { IoIosArrowBack } from "react-icons/io";
import { CartMenu } from "../organisms/CartMenu";

export function Cart() {
	const [displayCart, changeDisplayCart] = useState("none");
	return (
		<>
			<IconButton
				backgroundColor={"white"}
				icon={<BsCart size={24} />}
				aria-label="cart_icon"
				onClick={() => changeDisplayCart("flex")}
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
				display={displayCart}
				gap={"2rem"}
			>
				<Flex
					w={"full"}
					flexDir={"row"}
					alignItems={"center"}
					justifyContent={"flex-start"}
					padding={"0.5rem 1rem"}
				>
					<Heading
						flexGrow={1}
						fontSize={"2xl"}
						color={"primary.500"}
						textAlign={"center"}
					>
						Cart
					</Heading>
					<IconButton
						icon={<IoIosArrowBack size={30} />}
						color={"gray.500"}
						aria-label={"close_button"}
						onClick={() => changeDisplayCart("none")}
						backgroundColor={"transparent"}
						_hover={{
							backgroundColor: "primary.300",
							color: "white",
						}}
					></IconButton>
				</Flex>
				<Flex
					flexDir={"column"}
					w={"full"}
					padding={"0rem 1rem"}
					gap={"1rem"}
				>
					<CartMenu />
				</Flex>
			</Flex>
		</>
	);
}
