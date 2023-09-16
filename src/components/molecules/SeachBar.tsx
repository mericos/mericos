import { Flex, Button, Input, CheckboxGroup, Checkbox, Text, Select } from "@chakra-ui/react";
import { useAnimation, AnimatePresence, motion } from "framer-motion";
import { useState, useEffect } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BsFilter } from "react-icons/bs";

export function SearchBar() {
    const foodCategories = [
    { id: 1, name: "Pizza" },
    { id: 2, name: "Burgers" },
    { id: 3, name: "Sushi" },
    { id: 4, name: "Italian" },
    { id: 5, name: "Mexican" },
    { id: 6, name: "Chinese" },
    { id: 7, name: "Indian" },
    { id: 8, name: "Thai" },
    { id: 9, name: "Healthy" },
    // Add more categories as needed
  ];
  const [showFilter, setShowFilter] = useState(false);
  const animationControls = useAnimation();

  const toggleFilter = () => {
    setShowFilter(!showFilter);
  };

  useEffect(() => {
    if (showFilter) {
      animationControls.start({ opacity: 1, height: "auto" });
    } else {
      animationControls.start({ opacity: 0, height: 0 });
    }
  }, [animationControls, showFilter]);

  return (
    <Flex flexDir={"column"}>
      <Flex
        flexDir={"row"}
        w={"full"}
        borderRadius={"1rem"}
        backgroundColor={"light_surface.normal"}
        alignItems={"center"}
        gap={"0.25rem"}
        p={"0.25rem 0.25rem"}
      >
        <Button
          onClick={toggleFilter}
          colorScheme="primary"
          borderRadius={"6.25rem"}
        >
          <BsFilter size={24} />
        </Button>
        <Input
          border={"0"}
          focusBorderColor="white"
          placeholder="Search"
          _focus={{ backgroundColor: "white" }}
        />
        <Button colorScheme="primary" borderRadius={"6.25rem"}>
          <AiOutlineSearch size={24} />
        </Button>
      </Flex>

      <AnimatePresence>
        {showFilter && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={animationControls}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Flex
              backgroundColor="white"
              border="1px solid #E2E8F0"
              borderRadius="0 0 1rem 1rem"
              p="1rem"
              mt="1rem"
              boxShadow="md"
              justifyContent={"center"}
            >
              <Flex flexDir={"column"} gap={"1rem"}  maxW={"2xl"} >
                <Text>Filter by Category:</Text>
                <CheckboxGroup>
                    <Flex gap={"1rem"} flexWrap={"wrap"}>
                        {foodCategories.map(({name, id}) => (<Checkbox key={id} value={name}>{name}</Checkbox>))}
                    </Flex>
                  {/* Add more category options as needed */}
                </CheckboxGroup>

                <Text>Filter by Price Range:</Text>
                <Flex alignItems={"center"} gap={"1rem"}>
                    <Select placeholder=''>
                        <option value='option1'>Option 1</option>
                        <option value='option2'>Option 2</option>
                        <option value='option3'>Option 3</option>
                    </Select>
                </Flex>

                <Text >Maximum Distance (miles):</Text>
                <Select placeholder=''>
                    <option value='option1'>Option 1</option>
                    <option value='option2'>Option 2</option>
                    <option value='option3'>Option 3</option>
                </Select>
                <Flex w={"full"} flexDir={"row-reverse"} justifyContent={"end"}>
                    <Button colorScheme="primary" onClick={toggleFilter}>
                    Apply Filters
                    </Button>
                    <Button colorScheme="gray" onClick={toggleFilter}>
                    Clear Filters
                    </Button>
                </Flex>

              </Flex>
            </Flex>
          </motion.div>
        )}
      </AnimatePresence>
    </Flex>
  );
}
