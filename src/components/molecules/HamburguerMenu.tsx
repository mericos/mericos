import { HamburgerIcon } from "@chakra-ui/icons"
import { useDisclosure, Button, Drawer, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody, Input, DrawerFooter, Radio, RadioGroup, Stack, Flex, Box } from "@chakra-ui/react"
import React from "react"
import { NavItem } from "../atoms/NaviItem";

interface HamburgerProps {
  color: string;
  background_color: string;
  options: Array<{name:string,link:string}>;
}

export function HamburguerMenu(props: HamburgerProps) {
  const [size, setSize] = React.useState('')
  const { isOpen, onOpen, onClose } = useDisclosure()




  return (
    <>
      <HamburgerIcon
                color={props.background_color}
                boxSize={6}
                cursor="pointer"
                onClick={() => onOpen()}
              />

      <Drawer onClose={onClose} isOpen={isOpen} size={"full"} >
        <DrawerContent color={props.color} bgColor={props.background_color} >
          <DrawerCloseButton />
          <DrawerHeader>Opções</DrawerHeader>
          <DrawerBody >
            <Flex direction={"column"} gap={"2"}>
              {props.options.map((option) => {
                return (
                  <NavItem text={option.name} link={option.link} color={props.color}/>
                )
              })}
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}