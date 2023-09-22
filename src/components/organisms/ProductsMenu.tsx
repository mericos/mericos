import {  Divider, Flex, Tab, TabList, TabPanel, TabPanels, Tabs} from "@chakra-ui/react";
import { products_types } from "../../utils/productTypes";

import { useState } from "react";
import { CardMeal } from "../molecules/CardMeal";


export function ProductsMenu() {
	const [selectedType, setSelectedType] = useState("Bread");

	const handleTypeClick = (type: string) => {
		setSelectedType(type);
	};

	const [ tabIndex, setTabIndex ] = useState(0);

	const handleTabsChange = (index: number) => {
		setTabIndex(index);
	}
	return (
		<Tabs index={tabIndex} onChange={handleTabsChange} as={Flex} flexDir={"column"} w={"full"}>
			<Flex flexDir={"column"} justifyContent={"left"}>
				<TabList>
					{products_types.map((type) => (
						<Tab
							borderBottom={0}
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
						</Tab>
					))}
				</TabList>
				<Divider />
			</Flex>

			<TabPanels
			>
				{products_types.map(() => (
					<TabPanel as={Flex}
						pt={3}
						gap={2}
						overflow={"auto"}>
						<CardMeal
							heading={"Card heading"}
							caption={"Card caption"} image={""}				/>
						<CardMeal
							heading={"Card heading"}
							caption={"Card caption"} image={""}				/>
						<CardMeal
							heading={"Card heading"}
							caption={"Card caption"} image={""}				/>
						<CardMeal
							heading={"Card heading"}
							caption={"Card caption"} image={""}				/>
						<CardMeal
							heading={"Card heading"}
							caption={"Card caption"} image={""}				/>
					</TabPanel>
				))}
			</TabPanels>
		</Tabs>
	);
}
