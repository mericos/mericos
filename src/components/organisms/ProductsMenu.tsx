import { Button, Divider, Flex, Grid} from "@chakra-ui/react";
import { products_types } from "../../utils/productTypes";

import { useState } from "react";
import { CardMeal } from "../molecules/CardMeal";


export function ProductsMenu() {
	const [selectedType, setSelectedType] = useState("Bread");

	const handleTypeClick = (type: string) => {
		setSelectedType(type);
		
		
	};
	return (
		<Flex flexDir={"column"} w={"full"}>
			<Flex flexDir={"column"} justifyContent={"left"}>
				<Flex>
					{products_types.map((type) => (
						<Button
							borderRadius={"none"}
							fontWeight={"500"}
							backgroundColor={"transparent"}
							fontSize={"0.875rem"}
							color={
								selectedType === type ? "primary.500" : "gray"
							}
							onClick={() => handleTypeClick(type)}
							key={type}
							_hover={{
								backgroundColor: "gray.100",
								borderRadius: "none",
							}}
							pos={"relative"}
							_after={{
								content: '""',
								position: "absolute",
								width: "50%",
								transform: `${
									selectedType === type
										? "scaleX(1)"
										: "scaleX(0)"
								}`,
								height: "4px",
								roundedTopEnd: "5rem",
								roundedTopStart: "5rem",
								bottom: "0",
								backgroundColor: "primary.500",
								// transformOrigin: "bottom left",
								transition: "transform 0.25s ease-out",
							}}
						>
							{type}
						</Button>
					))}
				</Flex>
				<Divider />
			</Flex>

			<Flex
				pt={3}
				gap={2}
				overflow={"auto"}
			>
				<CardMeal
					card_heading={"Card heading"}
					card_caption={"Card caption"}
				/>
				<CardMeal
					card_heading={"Card heading"}
					card_caption={"Card caption"}
				/>
				<CardMeal
					card_heading={"Card heading"}
					card_caption={"Card caption"}
				/>
				<CardMeal
					card_heading={"Card heading"}
					card_caption={"Card caption"}
				/>
				<CardMeal
					card_heading={"Card heading"}
					card_caption={"Card caption"}
				/>
			</Flex>
		</Flex>
	);
}
