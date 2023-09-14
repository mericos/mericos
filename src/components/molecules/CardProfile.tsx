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
			padding={"0.5rem 1rem"}
		>
			<CardBody display={"flex"} gap={2} p={0}
				alignItems={"center"}>
				<Image
					src={props.card_image}
					alt="Green double couch with wooden legs"
					borderRadius="full"
					w={"3.75rem"}
					h={"3.75rem"}
					objectFit={"cover"}
				/>
				<Heading color={props.text_color} fontSize="0.875rem">
					{props.card_heading}
				</Heading>
			</CardBody>
			<CardFooter p={0}>
				<IconButton
					color={props.text_color}
					bgColor={"transparent"}
					icon={<IoIosArrowForward size={"1rem"} />}
					aria-label="heart"
				/>
			</CardFooter>
		</Card>
	);
}
