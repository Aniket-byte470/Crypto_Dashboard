import { Box, HStack, Stack, Icon, Text, Heading } from "@chakra-ui/react";
import { RxDashboard } from "react-icons/rx";
import { LuArrowDownUp } from "react-icons/lu";
import { BiSupport } from "react-icons/bi";
import { Link, useLocation } from "react-router-dom";

const Sidenav = () => {
  const location = useLocation();

  const isActiveLink = (link) => {
    return location.pathname === link;
  };

  const navLinks = [
    { icon: RxDashboard, text: "Dashboard", link: "/" },
    { icon: LuArrowDownUp, text: "Transactions", link: "/Transaction" },
  ];

  return (
    <Stack
      bg="white"
      justify="space-between"
      boxShadow={{ base: "none", lg: "lg" }}
      w={{
        base: "full",
        lg: "16rem",
      }}
      h="full"
    >
      <Box>
        <Heading fontSize="20px" as="h1" pt="56px" textAlign="center">
          @CRYPTO_TRADING
        </Heading>
        <Box mt="9" mx="3">
          {navLinks.map((nav) => (
            <Link to={nav.link} key={nav.text}>
              <HStack
                py="3"
                px="4"
                _hover={{
                  bg: "#F3F3F7",
                  color: "#171717",
                }}
                bg={isActiveLink(nav.link) ? "#F3F3F7" : "transparent"}
                color={isActiveLink(nav.link) ? "#797E82" : "transparent"}
                color="#797E82"
                borderRadius="10px"
              >
                <Icon as={nav.icon} />
                <Text fontSize="14px" fontWeight="medium">
                  {nav.text}
                </Text>
              </HStack>
            </Link>
          ))}
        </Box>
      </Box>
      <Box mt="3" mx="3" mb="6">
        <Link to="/Support">
          <HStack
            py="3"
            px="4"
            bg={isActiveLink("/support") ? "#F3F3F7" : "transparent"}
            color={isActiveLink("/support") ? "#171717" : "transparent"}
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
        </Link>
      </Box>
    </Stack>
  );
};
export default Sidenav;
