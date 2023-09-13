import {
	Card,
	CardBody,
	Flex,
	Heading,
	IconButton,
	Text,
	Image,
	Stack,
} from "@chakra-ui/react";
import { ProfileMenu } from "../components/organisms/ProfileMenu";
import { IoIosArrowForward } from "react-icons/io";
import { LoggedNavbar } from "../components/molecules/LoggedNavbar";
import { InviteCard } from "../components/atoms/InviteCard";

export function Profile() {
	
	return (
		<>
			<Flex flexDir={"column"} w={"full"} maxW={"6xl"} padding={"0rem 1rem"}>
				<LoggedNavbar />
				<Flex flexDir={"column"} maxW={["full","full","sm"]}>
					<Flex
						width={"full"}
						flexDir={"column"}
						justifyContent={"center"}
						alignItems={"center"}
						p={"4"}
						gap={"2"}
					>
						<Image
							src="https://media.licdn.com/dms/image/D4E35AQFcqa-onK48xQ/profile-framedphoto-shrink_200_200/0/1691481683569?e=1694674800&v=beta&t=t_BqY-HO7ZKS4zjwoOTQu5AGV9GfZCrCHILPPDyYw2g"
							alt="Green double couch with wooden legs"
							borderRadius="full"
							w={"32"}
							h={"32"}
							objectFit={"cover"}
						/>
						<Heading color={"black"} fontSize="md">Celio Cumba</Heading>
						<Text fontSize="md">celio.joaquim.cumba@gmail.com</Text>
					</Flex>
					<InviteCard/>
					<Text my={"2"} fontWeight={"bold"} color={"gray.500"}>
						General
					</Text>
					<ProfileMenu />
				</Flex>
			</Flex>
		</>
	);
}
