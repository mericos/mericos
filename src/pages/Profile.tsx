import {
	Flex,
	Heading,
	Text,
	Image,
} from "@chakra-ui/react";
import { ProfileMenu } from "../components/organisms/ProfileMenu";
import { LoggedNavbar } from "../components/molecules/LoggedNavbar";
import { InviteCard } from "../components/atoms/InviteCard";

export function Profile() {
	return (
		<>
			<Flex flexDir={"column"} w={"full"} maxW={"6xl"} padding={"0rem 1rem"}>
				<LoggedNavbar />
				<Flex flexDir={"column"} maxW={["full","full","sm"]} gap={"0.625rem"}>
					<Flex
						width={"full"}
						flexDir={"column"}
						justifyContent={"center"}
						alignItems={"center"}
						gap={"2"}
					>
						<Image
							src="https://camo.githubusercontent.com/c6fe2c13c27fe87ac6581b9fe289d2f071bd1b4ef6f3e3c5fc2aba0bbc23fd88/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f372f37632f50726f66696c655f6176617461725f706c616365686f6c6465725f6c617267652e706e67"
							alt="Green double couch with wooden legs"
							borderRadius="full"
							w={"7rem"}
							h={"7rem"}
							objectFit={"cover"}
						/>
						<Heading color={"black"} fontSize="0.75rem">Celio Cumba</Heading>
						<Text fontSize="0.6875rem">celio.joaquim.cumba@gmail.com</Text>
					</Flex>
					<InviteCard/>
					<Flex flexDir={"column"}>
						<Text my={"2"} fontWeight={"500"} fontSize={"0.875rem"} color={"gray.500"}>
							General
						</Text>
						<ProfileMenu />
					</Flex>
				</Flex>
			</Flex>
		</>
	);
}
