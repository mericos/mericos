import { MinusIcon } from "@chakra-ui/icons";
import { Card, Flex, Text } from "@chakra-ui/react";
import { BsCheck } from "react-icons/bs";
import { HiLocationMarker } from "react-icons/hi";
import { MdDeliveryDining, MdOutlineCancel } from "react-icons/md";

interface orderStatusProps {
    status: "preparing"|"travelling"|"in place"|"delivered"|"canceled"
    text: string
}

export function OrderStatus({status, text}:orderStatusProps) {
    let bgColor = ""
    let icon = null
    if( status === "canceled") {
        bgColor = "red.100"
        icon = <MdOutlineCancel boxSize={4}/>
    } else if( status === "preparing") {
        bgColor = "light_surface.normal"
        icon = <MinusIcon boxSize={4}/>
    }
    else {
        bgColor = "primary.300"
        if (status === "travelling") {
            icon = <MdDeliveryDining boxSize={4}/>
        }
        if (status === "in place") {
            icon = <HiLocationMarker boxSize={4}/>
            bgColor="primary.500"
        }
        if (status === "delivered") {
            icon = <BsCheck boxSize={4}/>
        }
    }
    return(
        <Card flexGrow={[0,1,1]} color={status === "canceled" ? "red.400" : "primary.600"} bg={bgColor} variant={"outline"} w={"min-content"} as={Flex} flexDir={"row"} padding={"0.375rem 1rem"} gap={"0.5rem"} alignItems={"center"} justifyContent={"center"}>
            {icon}
            <Text color={status ==="canceled"?"red.400":"gray.700"} fontSize={"sm"} whiteSpace={"nowrap"}>{text}</Text>
        </Card>
    )
}