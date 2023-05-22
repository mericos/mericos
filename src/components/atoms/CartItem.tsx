import { Flex, Text } from "@chakra-ui/react"

export interface CartItemProp {
    name:string,
    amount: number,
    pricePerUnit: number,
    currency?: string,
}

export function CartItem({name: mealName, amount: quantity, pricePerUnit: price, currency="mzn"}: CartItemProp) {
    return (
        <Flex w={"full"} direction={"row"} justifyContent={"space-between"}>
            <Flex gap={2}>
                <Text>{mealName}</Text>
                <Text color={"GrayText"}>x{quantity}</Text>
            </Flex>
            <Flex color={"GrayText"} gap={2}>
                <Text>{price*quantity}</Text>
                <Text>{currency}</Text>
            </Flex>
        </Flex>
    )
}