import {
    Divider,
	Flex,
    Text
} from "@chakra-ui/react";

import { LoggedNavbar } from "../components/molecules/LoggedNavbar";
import { InviteCard } from "../components/atoms/InviteCard";
import { CardOrder, cardOrderProps } from "../components/molecules/CardOrder";
import { OrderStatus } from "../components/atoms/OrderStatus";


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
  {
    id: "6",
    timestamp: "2023-09-13T13:00:00Z",
    status: "in place",
  },
    ];
    const done:Array<cardOrderProps["status"]> = [ "delivered", "canceled"];
    const inProgress:Array<cardOrderProps["status"]> = ["preparing", "travelling", "in place"];
	return (
		<Flex w={"full"} maxW={"6xl"} paddingX={"1rem"} flexDir={"column"}>
      
			<LoggedNavbar />
            {/* body */}
            <Flex flexDir={"column"} padding={"0rem 0rem"} gap={"0.625rem"}>
                <InviteCard/>
                {/* In progress */}
                <Flex alignItems={"center"} gap={"0.625rem"}>
                    <Divider/>
                    <Text whiteSpace={"nowrap"}>Pendente</Text>
                    <Divider/>
                </Flex>
                <Flex flexDir={["column","row","row"]} gap={"0.625rem"} flexShrink={2}>
                  {inProgress.map(
                    (Mstatus)=>
                      {return(
                        <Flex flexDir={"column"} gap={"0.625rem"} flexGrow={"1"}>
                          <Flex display={["none","flex","flex"]}>
                            <OrderStatus status={Mstatus} text={Mstatus}/>
                          </Flex>
                          {foodOrders.filter(
                          ({status}) => status === Mstatus).map(
                            ({id, timestamp, status}) =>(<CardOrder hideStatus={true} key={id} id={id} timestamp={timestamp} status={status}/>)
                          )}
                        </Flex>
                        )
                      }
                  )}
                </Flex>
                <Flex alignItems={"center"} gap={"0.625rem"}>
                    <Divider/>
                    <Text whiteSpace={"nowrap"}>Histórico </Text>
                    <Divider/>
                </Flex>
                <Flex flexDir={["column","column","row"]} gap={"0.625rem"}>
                  {done.map(
                    (Mstatus)=>
                        {return(
                          <Flex flexDir={"column"} gap={"0.625rem"} flexGrow={"1"}>
                            <Flex display={["none","none","flex"]}>
                              <OrderStatus status={Mstatus} text={Mstatus}/>
                            </Flex>
                            {foodOrders.filter(
                            ({status}) => status === Mstatus).map(
                              ({id, timestamp, status}) =>(<CardOrder  key={id} id={id} timestamp={timestamp} status={status}/>)
                            )}
                          </Flex>
                          )
                        }
                  )}
                </Flex>
            </Flex>


		</Flex>
	);
}
