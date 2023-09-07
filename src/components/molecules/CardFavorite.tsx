import {
	Card,
	CardBody,
	CardFooter,
	CardProps,
	Heading,
	IconButton,
	Image,
	Stack,
	Text,
} from "@chakra-ui/react";
import { AiOutlineHeart } from "react-icons/ai";
import ImageT from "../../assets/ImagePC.png"


interface CardMProps extends CardProps {
	card_heading: string;
	card_caption: string;
}

export function CardFavorite(props: CardMProps) {
	return (
		<Card maxW="sm" flexDir={"row"} align={"center"}>
			<CardBody display={"flex"} gap={4} alignItems={"center"}>
				<Image
					src={ImageT}
					alt="Green double couch with wooden legs"
					borderRadius="full"
					w={"24"}
					h={"24"}
				/>
				<Stack spacing="3">
					<Heading fontSize="md">{props.card_heading}</Heading>
					<Text fontSize="md">{props.card_caption}</Text>
				</Stack>
			</CardBody>
			<CardFooter>
				<IconButton
					bgColor={"white"}
					icon={<AiOutlineHeart size={30} />}
					aria-label="heart"
				/>
			</CardFooter>
		</Card>
	);
}