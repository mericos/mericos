import {
	Card,
	CardBody,
	CardFooter,
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
			<Flex flexDir={"column"} p={"2"} mx={"2"} w={"full"}>
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
						src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600"
						alt="Green double couch with wooden legs"
						borderRadius="full"
						w={"24"}
						h={"24"}
					/>
					<Heading fontSize="md">Celio cumba</Heading>
					<Text fontSize="md">celio.joaquim.cumba@gmail.com</Text>
				</Flex>
				<Card
					maxW="full"
					mb={"4"}
					// minW={"sm"}
					flexDir={["column", "row", "row"]}
					align={"center"}
				>
					<CardBody
						display={"flex"}
						flexDir={["column", "row", "row"]}
						gap={4}
						alignItems={"center"}
					>
						<Image
							src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
							alt="Green double couch with wooden legs"
							borderRadius="full"
							w={"24"}
							h={"24"}
						/>
						<Stack spacing="3">
							<Heading fontSize="md">
								Invite friends and pay less
							</Heading>
							<Text fontSize="md">
								invite a friend and ear free credits with their
								first order
							</Text>
						</Stack>
					</CardBody>
					<CardFooter>
						<IconButton
							bgColor={"white"}
							icon={<IoIosArrowForward size={30} />}
							aria-label="heart"
						/>
					</CardFooter>
				</Card>
				<Text my={"2"} fontWeight={"bold"} color={"gray.500"}>
					General
				</Text>
				<ProfileMenu  />
			</Flex>
		</>
	);
}
