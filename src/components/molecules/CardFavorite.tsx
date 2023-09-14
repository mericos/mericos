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
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import ImageT from "../../assets/ImagePC.png"
import { useState } from "react";


interface CardMProps extends CardProps {
	heading: string;
	caption: string;
	liked: boolean;
}

export function CardFavorite({heading, caption, liked}: CardMProps) {
	const [like, setLike] = useState(liked)
	const handleLike = ()=>{
		setLike(like => !like)
	}
	return (
		<Card variant={"outline"} flexGrow={1} flexDir={"row"} justifyContent={"center"} p={"0.5rem 1rem"} maxW={"md"} >
			<CardBody display={"flex"} gap={4} alignItems={"center"} p={0}>
				<Image
					src={ImageT}
					alt="heading"
					borderRadius="full"
					w={"12"}
					h={"12"}
					objectFit={"cover"}
				/>
				<Stack spacing="2">
					<Heading color={"black"} fontSize={"1rem"}>{heading}</Heading>
					<Text fontSize={"0.875rem"}>{caption}</Text>
				</Stack>
			</CardBody>
			<CardFooter p={"0"} >
				<IconButton
					onClick={handleLike}
					bgColor={"white"}
					color={like? "red.400" :"gray.500"}
					icon={like ? <AiFillHeart size={24}/> : <AiOutlineHeart size={24} />}
					aria-label="heart"
				/>
			</CardFooter>
		</Card>
	);
}