import { Flex, Heading, Card, CardBody, Text, CardHeader } from "@chakra-ui/react";
import { OrderStatus } from "../atoms/OrderStatus";
import { getTimeAgoMessage } from "../../utils/getTimeAgo";
import { FcRightUp } from "react-icons/fc";
import { ArrowRightIcon } from "@chakra-ui/icons";
import { IoIosArrowForward } from "react-icons/io";

export interface cardOrderProps {
    id: string
    timestamp: string
    status: "preparing" | "travelling" | "in place" | "delivered" | "canceled"
    hideStatus?: boolean
}
export function CardOrder ({id, timestamp, hideStatus=false,status}: cardOrderProps) {
    return (
        <Card as={Flex} flexShrink={1} flexDir={"row"} justifyContent={"space-between"} alignItems={"center"} p={"0rem 1rem"} variant={"outline"} color={"gray.500"}>
            <CardHeader flexGrow={1} p={"1rem"} gap={"1rem"}>
                <Heading fontSize={"lg"}>Order {id}</Heading>
                <Text fontSize={"x-small"}>Ordered:</Text>
                <Text fontSize={"small"} whiteSpace={"normal"} overflow={"clip"} textOverflow={"ellipsis"}>{getTimeAgoMessage(timestamp)}</Text>
            </CardHeader>
            <CardBody as={Flex} justifyContent={"end"} p={"1rem"} display={["flex", hideStatus?"none":"flex", "none"]}>
                <OrderStatus status={status} text={status}/>
            </CardBody>
            <IoIosArrowForward  size={24}  />
        </Card>
    )
}