import {
	Card,
	CardBody,
	CardFooter,
	CardProps,
	Heading,
	IconButton,
	Image,
} from "@chakra-ui/react";
import { IoIosArrowForward } from "react-icons/io";

interface CardMProps extends CardProps {
	card_heading: string;
	card_image: string;
	text_color: string;
}

export function CardProfile(props: CardMProps) {
	return (
		<Card
			{...props}
			borderBottom={"1px"}
			borderBottomRadius={"none"}
			borderBottomColor={"gray.300"}
			boxShadow={"none"}
			maxW="full"
			flexDir={"row"}
			align={"center"}
			cursor={"pointer"}
		>
			<CardBody display={"flex"} gap={4} alignItems={"center"}>
				<Image
					src={props.card_image}
					alt="Green double couch with wooden legs"
					borderRadius="full"
					w={"20"}
					h={"20"}
					objectFit={"cover"}
				/>
				<Heading color={props.text_color} fontSize="md">
					{props.card_heading}
				</Heading>
			</CardBody>
			<CardFooter>
				<IconButton
					color={"gray.500"}
					bgColor={"white"}
					icon={<IoIosArrowForward size={30} />}
					aria-label="heart"
				/>
			</CardFooter>
		</Card>
	);
}
