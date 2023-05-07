import { Box, Center, Flex, Text } from "@chakra-ui/react";
import { HamburgerIcon, ArrowBackIcon } from "@chakra-ui/icons";
import { NavItem } from "./atoms/NaviItem";

import mericosLogo from "../assets/logo/only-logo.svg";
import mericosLogoWhite from "../assets/logo/only-logo-white.svg";

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
        { name: "login", link: "" },
        { name: "registro", link: "" },
      ];
    default:
      return [];
  }
}

export function Navbar(props: NavbarProps) {
  const isPrimaryType = props.type === "primary";

  const properties = {
    primaryColor: isPrimaryType ? "customColors.primary.500" : "white",
    background: isPrimaryType ? "FFFFFF" : "customColors.primary.500",
    image: isPrimaryType ? mericosLogo : mericosLogoWhite,
  };

  const leftSide = (
    <Flex className="logo" alignItems="center" gap="0.625rem">
      <img src={properties.image} alt="mericos-logo" />
      <Text fontSize="1rem" color={properties.primaryColor}>
        Mericos
      </Text>
    </Flex>
  );

  const rightSide = (
    <Flex direction="row-reverse" alignItems="center" gap={10}>
      {getOptions(props.navigationState).map((item) => (
        <NavItem
          key={item.name}
          text={item.name}
          link={item.link}
          color={properties.primaryColor}
        />
      ))}
    </Flex>
  );

  const backArrow = (
    <ArrowBackIcon color={properties.primaryColor} boxSize={6} />
  );

  return (
    <Box bg={properties.background} padding={2}>
      <Flex
        padding="0.65rem"
        direction="row"
        alignItems="start"
        justifyContent="space-between"
        maxWidth={"8xl"}
      >
        {props.navigationState !== "goBack" ? (
          <>
            {/* logo and company name */}
            {leftSide}
            {/* nav items, depending on whether they are authenticated or not */}
            {props.size === "phone" ? (
              <HamburgerIcon
                color={properties.primaryColor}
                boxSize={6}
                cursor="pointer"
              />
            ) : (
              rightSide
            )}
          </>
        ) : (
          // go back Navbar
          backArrow
        )}
      </Flex>
    </Box>
  );
}
