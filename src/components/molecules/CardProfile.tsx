import {
    Card,
    CardBody,
    CardFooter,
    CardProps, Heading,
    IconButton,
    Image
} from "@chakra-ui/react";
import { IoIosArrowForward } from "react-icons/io";

interface CardMProps extends CardProps {
	card_heading: string;
}

export function CardProfile(props: CardMProps) {
	return (
		<Card boxShadow={"none"} maxW="full" flexDir={"row"} align={"center"}>
			<CardBody display={"flex"} gap={4} alignItems={"center"}>
				<Image
					src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
					alt="Green double couch with wooden legs"
					borderRadius="full"
					w={"24"}
					h={"24"}
				/>
				<Heading fontSize="md">{props.card_heading}</Heading>
			</CardBody>
			<CardFooter>
				<IconButton
					bgColor={"white"}
					icon={<IoIosArrowForward size={30} />}
					aria-label="heart"
				/>
			</CardFooter>
		</Card>
	);
}
