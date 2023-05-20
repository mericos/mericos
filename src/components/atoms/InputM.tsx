import { SearchIcon } from "@chakra-ui/icons";
import { Flex, IconButton, Input } from "@chakra-ui/react";
import { SetStateAction, useState } from "react";

interface InputMProps {
    text: string;
	isSearchBar?: boolean
}

export function InputM({text, isSearchBar=false}:InputMProps) {
	const [value, setValue] = useState('')
  const handleChange = (event: { target: { value: SetStateAction<string>; }; }) => setValue(event.target.value)

    return (
		<Flex direction={"row"} w={"full"}>
			<Input value={value} onChange={handleChange}
			focusBorderColor={"primary.500"} color={"primary.500"} variant="filled" placeholder={text}  width={"full"} border={8} borderEndRadius={isSearchBar? 0 : 8}/>
			{isSearchBar?<IconButton _focus={{bg:"primary.500", color:"white"}} color={"primary.500"}     aria-label='Search database' icon={<SearchIcon />} borderStartRadius={0} />: ""}
		</Flex>
	);
}