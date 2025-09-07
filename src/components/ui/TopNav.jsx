import { Box, Container, Flex, Heading, HStack, Icon } from "@chakra-ui/react";
import {
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
} from "@chakra-ui/react";
import { FaUserCircle } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";

const TopNav = ({ title, onOpen }) => {
  return (
    <Box boxShadow="xl" px="4">
      <HStack maxW="70rem" mx="auto" h="16" justify="space-between">
        <Icon
          as={IoMenu}
          onClick={onOpen}
          display={{
            base: "block",
            lg: "none",
          }}
        />
        <Heading fontSize="28px" fontWeight="medium">
          {title}
        </Heading>
        <Menu>
          <MenuButton
            as={Button}
            variant="outline"
            size="lg"
            px="40px"
            cursor="pointer"
          >
            <Icon as={FaUserCircle} fontSize="24px" />
          </MenuButton>
          <MenuList>
            <MenuItem>LogOut</MenuItem>
            <MenuItem>Fourum</MenuItem>
          </MenuList>
        </Menu>
      </HStack>
    </Box>
  );
};

export default TopNav;
