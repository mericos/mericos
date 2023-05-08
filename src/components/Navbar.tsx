import { Box, Flex, Text } from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { NavItem } from "./atoms/NaviItem";

import mericosLogo from "../assets/logo/only-logo.svg";
import mericosLogoWhite from "../assets/logo/only-logo-white.svg";
import { ButtonM } from "./atoms/ButtonM";
import { HamburguerMenu } from "./molecules/HamburguerMenu";

interface NavbarProps {
  type?: "primary" | "secondary";
  size: "phone" | "laptop" | "universal";
  navigationState: "authenticated" | "not_authenticated" | "goBack";
}

function getOptions(navState: NavbarProps["navigationState"]) {
  switch (navState) {
    case "authenticated":
      return [
        { name: "Menu", link: "" },
        { name: "Encomenda", link: "" },
        { name: "Historico", link: "" },
      ];
    case "not_authenticated":
      return [
        { name: "Menu", link: "" },
        { name: "Login", link: "" },
        { name: "Registro", link: "" },
      ];
    default:
      return [];
  }
}

export function Navbar(props: NavbarProps) {
  const isPrimaryType = props.type === "primary";
  // color properties
  const properties = {
    primaryColor: isPrimaryType ? "customColors.primary.500" : "white",
    background: isPrimaryType ? "white" : "customColors.primary.500",
    image: isPrimaryType ? mericosLogo : mericosLogoWhite,
  };
  //left side of the navbar
  const leftSide = (
    <Flex className="logo" alignItems="center" gap="0.625rem">
      <img src={properties.image} alt="mericos-logo" />
      <Text fontSize="card_heading_size" fontWeight={"bold"} color={properties.primaryColor} >
        Mericos
      </Text>
    </Flex>
  );
    //right side of the navbar
  const rightSide = (
    props.size === "phone" ? (
              /* nav items, depending on whether they are authenticated or not */
              props.navigationState === "authenticated" ?(
              <HamburguerMenu
                color={properties.background}
                background_color={properties.primaryColor}
                options={getOptions(props["navigationState"])}
              />) :(
                <Flex 
                direction={"row"}  
                alignItems={"center"} 
                gap={"2"}>
                  <NavItem text="Menu" link="" color={properties.primaryColor}/>
                  <ButtonM text="Login" type={props.type === "primary" ? "primary" : "secondary"}/>
                </Flex>
              )
            ) : (
              <Flex direction="row" alignItems="center" gap={10}>
                {getOptions(props.navigationState).map((item) => (
                  <NavItem
                    key={item.name}
                    text={item.name}
                    link={item.link}
                    color={properties.primaryColor}
                  />
                ))}
              </Flex>
            )
  );

  const backArrow = (
    <ArrowBackIcon color={properties.primaryColor} boxSize={6} />
  );

  return (
    <Box bg={properties.background} padding={2}>
      <Flex
        padding="0.65rem"
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        maxWidth={"7xl"}
      >
        {props.navigationState !== "goBack" ? (
          <>
            {/* logo and company name */}
            {leftSide}
            
            {rightSide}
          </>
        ) : (
          // go back Navbar
          backArrow
        )}
      </Flex>
    </Box>
  );
}
