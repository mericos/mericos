import { Flex, Stack, Heading, Card, CardBody, IconButton, Image, Text, CardHeader } from "@chakra-ui/react";
import { OrderStatus } from "../atoms/OrderStatus";
import { getTimeAgoMessage } from "../../utils/getTimeAgo";

export interface cardOrderProps {
    id: string
    timestamp: string
    status: "preparing" | "travelling" | "in place" | "delivered" | "canceled"
}
export function CardOrder ({id, timestamp, status}: cardOrderProps) {
    return (
        <Card as={Flex} flexDir={"row"} justifyContent={"space-between"} alignItems={"center"} p={"0rem"} variant={"outline"}>
            <CardHeader p={"1rem"} gap={"1rem"}>
                <Heading fontSize={"lg"}>Order {id}</Heading>
                <Text fontSize={"x-small"}>Ordered:</Text>
                <Text fontSize={"small"}>{getTimeAgoMessage(timestamp)}</Text>
            </CardHeader>
            <CardBody as={Flex} justifyContent={"end"} p={"1rem"}>
                <OrderStatus status={status} text={status}/>
            </CardBody>
        </Card>
    )
}