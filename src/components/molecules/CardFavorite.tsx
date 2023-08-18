import {
	Button,
	ButtonGroup,
	Card,
	CardBody,
	CardFooter,
	CardProps,
	Divider,
	Flex,
	Heading,
	IconButton,
	Image,
	Stack,
	Text,
} from "@chakra-ui/react";
import { SlArrowRight } from "react-icons/sl";
import { ButtonM2 } from "../atoms/ButtonM2";
import { BsCart } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";

interface CardMProps extends CardProps {
	card_heading: string;
	card_caption: string;
}

export function CardFavorite(props: CardMProps) {
	return (
		<Card maxW="sm" flexDir={"row"} align={"center"}>
			<CardBody display={"flex"} gap={4} alignItems={"center"}>
				<Image
					src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
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