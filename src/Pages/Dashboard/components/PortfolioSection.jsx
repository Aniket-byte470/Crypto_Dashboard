import { Button, HStack, Icon, Stack, Tag, Text } from "@chakra-ui/react";
import { BsInfoCircleFill } from "react-icons/bs";
import { FaArrowDown } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa";

const PortfolioSection = () => {
  return (
    <HStack
      justify="space-between"
      bg="white"
      borderRadius="xl"
      p="6"
      flexDir={{
        base: "column",
        xl: "row",
      }}
      align={{
        base: "flex-start",
        xl: "center",
      }}
    >
      <HStack
        spacing={{
          base: 0,
          xl: 16,
        }}
        flexDir={{
          base: "column",
          xl: "row",
        }}
        align={{
          base: "flex-start",
          xl: "center",
        }}
      >
        <Stack>
          <HStack color="black.80">
            <Text fontSize="sm">Total Portfolio Value</Text>
            <Icon as={BsInfoCircleFill} />
          </HStack>
          <Text textStyle="h2" fontWeight="medium">
            ₹ 112,312.24
          </Text>
        </Stack>

        <Stack>
          <HStack color="black.80">
            <Text fontSize="sm">Wallet Balance</Text>
          </HStack>
          <HStack spacing={4}>
            <HStack>
              <Text textStyle="h2" fontWeight="medium">
                22.39401000
              </Text>{" "}
              <Tag colorScheme="gray">BTC</Tag>
            </HStack>
            <HStack>
              <Text textStyle="h2" fontWeight="medium">
                ₹ 1,300.00
              </Text>{" "}
              <Tag colorScheme="gray">INR</Tag>
            </HStack>
          </HStack>
        </Stack>
      </HStack>

      <HStack>
        <Button leftIcon={<Icon as={FaArrowDown} />}>Deposit</Button>
        <Button leftIcon={<Icon as={FaArrowUp} />}>WithDraw</Button>
      </HStack>
    </HStack>
  );
};

export default PortfolioSection;
