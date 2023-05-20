import { Button, IconButton, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { useState } from "react";
import open_eye_icon from "../../assets/icons/eye_opened.png"
import closed_eye_icon from "../../assets/icons/eye_closed.png";
import { HiEye, HiEyeOff } from "react-icons/hi";

interface InputMProps {
	text: string;
	typeB?: string;
}

export function InputM({ text, typeB }: InputMProps) {
	const [show, setShow] = useState(false);
	const handleClick = () => setShow(!show);
	return (
		<>
			{typeB === "password" ? (
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
		</>
	);
}

