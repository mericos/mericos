import {
	Box,
	Card,
	CardBody,
	CardProps,
	Flex,
	Heading,
	Image,
	Stack,
	Text,
} from "@chakra-ui/react";
import { SlArrowRight } from "react-icons/sl";
import { ButtonM2 } from "../atoms/ButtonM2";
import ImagePC from "../../assets/ImagePC.png";
interface CardMealProps extends CardProps {
	card_heading: string;
	card_caption: string;
}

export function CardMeal(props: CardMealProps) {
	return (
		<Flex flexDir={"column"}>
			<Image
				src={ImagePC}
				borderRadius={"lg"}
				borderEndEndRadius={"none"}
				borderEndStartRadius={"none"}
				w={"full"}
				h={"2xs"}
				objectFit={"cover"}
			/>
			<Card
				borderStartEndRadius={"none"}
				borderStartStartRadius={"none"}
				maxW="sm"
				align={"center"}
			>
				<CardBody textAlign={"center"}>
					<Stack>
						<Heading color={"black"} size={["sm", "md"]}>
							{props.card_heading}
						</Heading>
						<Text size={["sm", "md"]}>{props.card_caption}</Text>
						<ButtonM2
							size={["sm", "md"]}
							rightIcon={<SlArrowRight />}
							text={"Add to Cart"}
							variant={"primary"}
						></ButtonM2>
					</Stack>
				</CardBody>
			</Card>
		</Flex>
	);
}
