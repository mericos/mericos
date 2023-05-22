import { SearchIcon } from "@chakra-ui/icons";
import {
	Flex,
	IconButton,
	Input,
	InputGroup,
	InputRightElement,
} from "@chakra-ui/react";
import { SetStateAction, useState } from "react";

import { HiEye, HiEyeOff } from "react-icons/hi";

interface InputMProps {
	text: string;
	typeB?: string;
	isSearchBar?: boolean;
}

export function InputM({ text, typeB, isSearchBar = false }: InputMProps) {
	const [value, setValue] = useState("");
	const handleChange = (event: {
		target: { value: SetStateAction<string> };
	}) => setValue(event.target.value);
	const [show, setShow] = useState(false);
	const handleClick = () => setShow(!show);
	return (
		<>
			<Flex direction={"row"} w={"full"}>
				{isSearchBar ? (
					<>
						<Input
							value={value}
							onChange={handleChange}
							focusBorderColor={"primary.500"}
							color={"primary.500"}
							variant="flushed"
							placeholder={text}
							width={"full"}
							border={8}
							borderEndRadius={isSearchBar ? 0 : 8}
						/>
						<IconButton
							_focus={{ bg: "primary.500", color: "white" }}
							color={"primary.500"}
							aria-label="Search database"
							icon={<SearchIcon />}
							borderStartRadius={0}
						/>
					</>
				) : typeB === "password" ? (
					<InputGroup size="md">
						<Input
							variant="flushed"
							focusBorderColor="primary.500"
							placeholder={text}
							borderColor={"gray"}
							width={"2xs"}
							pr="4.5rem"
							type={show ? "text" : "password"}
						/>
						<InputRightElement width="4.5rem">
							<IconButton
								aria-label={
									show ? "Hide password" : "Show password"
								}
								h="1.75rem"
								size="lg"
								onClick={handleClick}
								icon={show ? <HiEyeOff /> : <HiEye />}
							/>
						</InputRightElement>
					</InputGroup>
				) : (
					<Input
						variant="flushed"
						focusBorderColor="primary.500"
						placeholder={text}
						borderColor={"gray"}
						width={"2xs"}
					/>
				)}
			</Flex>
		</>
	);
}
