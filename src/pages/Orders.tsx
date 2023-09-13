import {
    Divider,
	Flex,
    Text
} from "@chakra-ui/react";

import { LoggedNavbar } from "../components/molecules/LoggedNavbar";
import { InviteCard } from "../components/atoms/InviteCard";
import { CardOrder, cardOrderProps } from "../components/molecules/CardOrder";


export function Orders() {
    const foodOrders: Array<cardOrderProps> = [
  {
    id: "1",
    timestamp: "2023-09-13T12:00:00Z",
    status: "preparing",
  },
  {
    id: "2",
    timestamp: "2023-09-13T12:30:00Z",
    status: "travelling",
  },
  {
    id: "3",
    timestamp: "2023-09-13T13:00:00Z",
    status: "in place",
  },
  {
    id: "4",
    timestamp: "2023-09-13T13:45:00Z",
    status: "delivered",
  },
  {
    id: "5",
    timestamp: "2023-09-13T14:15:00Z",
    status: "canceled",
  },
    ];
    const done = ["canceled", "delivered"];
    const inProgress = ["preparing", "travelling", "in place"];
	return (
		<Flex w={"full"} maxW={"6xl"} paddingX={"1rem"} flexDir={"column"}>
			<LoggedNavbar />
            {/* body */}
            <Flex flexDir={"column"} padding={"2rem 0rem"} gap={"0.625rem"}>
                <InviteCard/>
                {/* In progress */}
                <Flex alignItems={"center"} gap={"0.625rem"}>
                    <Divider/>
                    <Text whiteSpace={"nowrap"}>Em Andamento</Text>
                    <Divider/>
                </Flex>
                {foodOrders.filter(({status}) => inProgress.includes(status)).map(({id, timestamp, status}) => (
                    <CardOrder key={id} id={id} timestamp={timestamp} status={status}/>
                ))}
                <Flex alignItems={"center"} gap={"0.625rem"}>
                    <Divider/>
                    <Text whiteSpace={"nowrap"}>histórico </Text>
                    <Divider/>
                </Flex>
                {foodOrders.filter(({status}) => done.includes(status)).map(({id, timestamp, status}) => (
                    <CardOrder key={id} id={id} timestamp={timestamp} status={status}/>
                ))}
            </Flex>


		</Flex>
	);
}
