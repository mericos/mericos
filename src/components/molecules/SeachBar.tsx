import { Flex, Input } from "@chakra-ui/react";
import { AiOutlineSearch } from "react-icons/ai";
import { BsFilter } from "react-icons/bs";
import { Icon } from "../atoms/Icon";

export function SearchBar(){
    return (
        <Flex
            borderRadius={"lg"}
            p={"1"}
            backgroundColor={"light_surface.normal"}
            alignItems={"center"}
            gap={"0.25rem"}
        >
            <Icon  icon={<BsFilter size={24}  />} />
            <Input
                border={"0"}
                focusBorderColor="white"
                placeholder="Search"
                _focus={{backgroundColor: "white"}}
            />
            <Icon icon={<AiOutlineSearch size={24}  />} />
        </Flex>
    )
}