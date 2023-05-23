import { SearchIcon } from "@chakra-ui/icons";
import {
	Flex,
	IconButton,
	Input,
	InputGroup,
	InputRightElement,
} from "@chakra-ui/react";
import { Field } from "formik";
import { ChangeEventHandler, SetStateAction, useState } from "react";

import { HiEye, HiEyeOff } from "react-icons/hi";

interface InputMProps {
	text: string;
	typeB?: string;
	isSearchBar?: boolean;
	id?: string;
	name?: string;
	type?: string;
	input_type?: string;
	// onChange: ChangeEvent<HTMLInputElement>;
	onChange?: ChangeEventHandler<HTMLInputElement>;
	value?: string;
}

export function InputM({
	text,
	isSearchBar = false,
	name,
	id,
	input_type,
}: InputMProps) {
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
				) : input_type === "password" ? (
					<InputGroup width={"full"} size="md">
						<Field
							focusBorderColor="primary.500"
							as={Input}
							id={id}
							name={name}
							borderColor="black"
							// type={input_type}
							type={show ? "text" : "password"}
							variant="flushed"
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
					<>
						<Field
							focusBorderColor="primary.500"
							borderColor="black"
							as={Input}
							id={id}
							name={name}
							type={input_type}
							variant="flushed"
						/>
					</>
				)}
			</Flex>
		</>
	);
}
