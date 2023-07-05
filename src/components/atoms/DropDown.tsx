import { ChevronDownIcon } from '@chakra-ui/icons'
import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { NavItem } from './NaviItem'

interface DropDownProps {
    options: Array<{name: string, link: string}>
}

export function DropDown ({options}: DropDownProps) {
    return(
        <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />} bg={"inherit"} _active={{bg: "inherit"}} _hover={{bg: "inherit"}} color={"primary.500"}>
                Páginas
            </MenuButton>
            <MenuList>
                {options.map(option => <MenuItem as='a' href={option.link} color={"primary.500"}>{option.name}</MenuItem> )}
            </MenuList>
        </Menu>
    )
}