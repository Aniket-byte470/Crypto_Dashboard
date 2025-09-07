import { Box, HStack, Stack, Icon, Text, Heading } from "@chakra-ui/react";
import { RxDashboard } from "react-icons/rx";
import { LuArrowDownUp } from "react-icons/lu";
import { BiSupport } from "react-icons/bi";

const Sidenav = () => {
  const navLinks = [
    { icon: RxDashboard, text: "Dashboard", link: "/" },
    { icon: LuArrowDownUp, text: "Transactions", link: "/transaction" },
  ];

  return (
    <Stack
      justify="space-between"
      boxShadow={{ base: "none", lg: "lg" }}
      w={{
        base: "full",
        lg: "16rem",
      }}
      h="100vh"
    >
      <Box>
        <Heading fontSize="20px" as="h1" pt="56px" textAlign="center">
          @CRYPTO_TRADING
        </Heading>
        <Box mt="9" mx="3">
          {navLinks.map((nav) => (
            <HStack
              key={nav.text}
              py="3"
              px="4"
              _hover={{
                bg: "#F3F3F7",
                color: "#171717",
              }}
              color="#797E82"
              borderRadius="10px"
            >
              <Icon as={nav.icon} />
              <Text fontSize="14px" fontWeight="medium">
                {nav.text}
              </Text>
            </HStack>
          ))}
        </Box>
      </Box>
      <Box mt="3" mx="3" mb="6">
        <HStack
          py="3"
          px="4"
          _hover={{
            bg: "#F3F3F7",
            color: "#171717",
          }}
          color="#797E82"
          borderRadius="10px"
        >
          <Icon as={BiSupport} />
          <Text fontSize="14px" fontWeight="medium">
            Support
          </Text>
        </HStack>
      </Box>
    </Stack>
  );
};
9;
export default Sidenav;
