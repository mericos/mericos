import { Divider, Flex, Heading, Link, Text } from "@chakra-ui/react";
import { useDeviceContext } from "../../contextProviders/DeviceProvider";
import { CartItem, CartItemProp } from "../atoms/CartItem";
import { Link as ReactRouterLink } from "react-router-dom";

export function CartInfoContainer() {
	const itemsInfo:CartItemProp[] = [
		{name: "pizza", amount: 2, pricePerUnit: 500, currency: "mzn"},
		{name: "shawarma", amount: 1, pricePerUnit: 120, currency: "mzn"},
		{name: "gomas", amount: 10, pricePerUnit: 10, currency: "mzn"},
		{name: "bolo de chocolate", amount: 1, pricePerUnit: 50, currency: "mzn"},
    ]
	let total = 0
	for ( const item of itemsInfo) {
		total += item.pricePerUnit*item.amount
	}
	const size = useDeviceContext()

	const phoneContainer = (<Flex borderRadius={8} width={"full"} bg={"primary.500"} color={"white"} padding={"8"} justify={"space-between"}>
			<Text>Items | 0 Mzn</Text>
			<Link as={ReactRouterLink} to="/cart">Ver carrinho</Link>
		</Flex>)
	const laptopContainer = (
		<Flex
		direction={"column"}
		width={"full"}
		bg={"white"}
		color={"primary.500"}
		padding={8}
		border={"1px solid"}
		borderRadius={"8"}
		gap={4}
		alignItems={"center"} justifyContent={"space-between"}>
				<>
					<Heading>Carrinha</Heading>
					{itemsInfo.map(item => <CartItem key={item.name} {...item} />)}
					<Divider color={"GrayText"}/>
					<Flex w={"full"} direction={"row"} justifyContent={"space-between"}>
						<Flex gap={2}>
							<Text>Total</Text>
						</Flex>
						<Flex color={"GrayText"} gap={2}>
							<Text>{total}</Text>
							<Text>{"mzn"}</Text>
						</Flex>
					</Flex>
				</>
				{phoneContainer}
		</Flex>
	)
    return (
		<>
			{size === "phone" ? phoneContainer : laptopContainer}
		</>
	);
}