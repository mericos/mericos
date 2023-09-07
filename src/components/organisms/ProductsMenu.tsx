import { Button, Divider, Flex, Grid} from "@chakra-ui/react";
import { products_types } from "../../utils/productTypes";
import { CardM2 } from "../molecules/CardM2";
import { useState } from "react";


export function ProductsMenu() {
	const [selectedType, setSelectedType] = useState("Bread");

	const handleTypeClick = (type: string) => {
		setSelectedType(type);
	};
	return (
		<>
			<Flex flexDir={"column"} justifyContent={"left"}>
				<Flex>
					{products_types.map((type) => (
						<Button
							fontWeight={"medium"}
							backgroundColor={"transparent"}
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

			<Grid
				pt={3}
				gap={2}
				templateColumns={[
					"repeat(2, 1fr)",
					"repeat(3, 1fr)",
					"repeat(5, 1fr)",
				]}
			>
				<CardM2
					card_heading={"Card heading"}
					card_caption={"Card caption"}
				/>
				<CardM2
					card_heading={"Card heading"}
					card_caption={"Card caption"}
				/>
				<CardM2
					card_heading={"Card heading"}
					card_caption={"Card caption"}
				/>
				<CardM2
					card_heading={"Card heading"}
					card_caption={"Card caption"}
				/>
				<CardM2
					card_heading={"Card heading"}
					card_caption={"Card caption"}
				/>
			</Grid>
		</>
	);
}
