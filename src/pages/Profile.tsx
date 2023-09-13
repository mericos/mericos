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

export function Profile() {
	
	return (
		<>
			<Flex flexDir={"column"} w={"full"} maxW={"6xl"} padding={"1rem"}>
				<LoggedNavbar />
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
				<Card
					maxW="full"
					mb={"4"}
					flexDir={["column", "row", "row"]}
					align={"center"}
					_hover={{ cursor: "pointer", backgroundColor: "gray.50" }}
					
				>
					<CardBody
						display={"flex"}
						flexDir={"row"}
						alignItems={"center"}
						justifyContent={"space-between"}
						w={"full"}
					>
						<Flex gap={4}>
							<Image
								src="https://img2.gratispng.com/20200625/pzy/transparent-friendship-friends-5ef56cb6b9f165.7293367915931424547616.jpg"
								alt="Green double couch with wooden legs"
								borderRadius="full"
								maxW={"28"}
								h={"auto"}
							/>
							<Stack spacing="3">
								<Heading fontSize={["sm", "sm", "md"]}>
									Invite friends and pay less
								</Heading>
								<Text fontSize={["sm", "sm", "md"]}>
									invite a friend and ear free credits with
									their first order
								</Text>
							</Stack>
						</Flex>
						<IconButton
							bgColor={"white"}
							icon={<IoIosArrowForward size={30} />}
							aria-label="heart"
						/>
					</CardBody>
				</Card>
				<Text my={"2"} fontWeight={"bold"} color={"gray.500"}>
					General
				</Text>
				<ProfileMenu />
			</Flex>
		</>
	);
}
