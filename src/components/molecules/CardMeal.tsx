import {
	Button,
	Card,
	CardBody,
	CardHeader,
	CardProps,
	Heading,
	Image,
	Text,
} from "@chakra-ui/react";
import ImagePC from "../../assets/ImagePC.png";
interface CardMealProps extends CardProps {
	card_heading: string;
	card_caption: string;
}

export function CardMeal(props: CardMealProps) {
	return (
		<Card
			minWidth={"3xs"}
			display={"flex"}
			borderStartEndRadius={"lg"}
			borderStartStartRadius={"lg"}
			height={["xs", "fit-content", "fit-content"]}
			align={"center"}
		>
			<CardHeader padding={0} flexGrow={"2"} display={"flex"}>
				<Image
					src={ImagePC}
					borderRadius={"lg"}
					borderEndEndRadius={"none"}
					borderEndStartRadius={"none"}
					objectFit={"cover"}
				/>
			</CardHeader>
			<CardBody textAlign={"center"} m={0} p={"1rem 1.25rem"} w={"full"}>
					<Heading color={"black"} size={["xs", "sm"]}>
						{props.card_heading}
					</Heading>
					<Text size={["sm", "md"]}>{props.card_caption}</Text>
					<Button fontSize={"0.875rem"} colorScheme={"primary"} variant={"solid"} w={"full"} >
						Add to Cart
					</Button>
			</CardBody>
		</Card>
	);
}
