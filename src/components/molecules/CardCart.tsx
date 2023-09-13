import {
	Button,
	Card,
	CardBody,
	CardFooter,
	CardProps,
	Flex,
	HStack,
	Heading,
	IconButton,
	Image,
	Input,
	Stack,
	Text,
	useNumberInput,
} from "@chakra-ui/react";
import ImageT from "../../assets/ImagePC.png";
import { useState } from "react";
import { BsTrash } from "react-icons/bs";

interface CardMProps extends CardProps {
	card_heading: string;
	card_caption: string;
}

export function CardCart(props: CardMProps) {
	const [isClicked, setIsClicked] = useState(false);
	const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
		useNumberInput({
			step: 1,
			defaultValue: 0,
			min: 1,
			max: 100,
			precision: 0,
		});

	const inc = getIncrementButtonProps();
	const dec = getDecrementButtonProps();
	const input = getInputProps();

	function handleClick() {
		setIsClicked(!isClicked);
		console.log(isClicked);
	}
	return (
		<Card size={"sm"} flexGrow={1} flexDir={"row"} align={"center"}>
			<CardBody display={"flex"} gap={4} alignItems={"center"}>
				<Image
					src={ImageT}
					alt="Green double couch with wooden legs"
					borderRadius="full"
					w={"16"}
					h={"16"}
					objectFit={"cover"}
				/>
				<Stack spacing="2">
					<Heading color={"black"} fontSize={["sm", "md"]}>
						{props.card_heading}
					</Heading>
					<Text fontSize={["sm", "md"]}>{props.card_caption}</Text>
				</Stack>
			</CardBody>
			<CardFooter display={"flex"} flexDir={"column"}>
				<IconButton
					justifyContent={"flex-end"}
					color={isClicked ? "primary.500" : "gray.700"}
					bgColor={"white"}
					icon={<BsTrash size={24} />}
					aria-label="heart"
					onClick={handleClick}
					_hover={{ backgroundColor: "transparent" }}
				/>
				<Flex alignItems={"center"}>
					<Button borderRadius={"base"} {...dec}>
						-
					</Button>
					<Input
						_focus={{ border: "none" }}
						_active={{ border: "none" }}
						size={"sm"}
						w={"10"}
						border={"none"}
						{...input}
					/>
					<Button borderRadius={"base"} {...inc}>
						+
					</Button>
				</Flex>
			</CardFooter>
		</Card>
	);
}
