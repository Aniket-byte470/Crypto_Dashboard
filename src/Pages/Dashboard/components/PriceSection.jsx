import {
  Button,
  Flex,
  HStack,
  Icon,
  Image,
  Stack,
  Tag,
  Text,
} from "@chakra-ui/react";
import {
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  TabIndicator,
  Box,
} from "@chakra-ui/react";
import { LuFolder, LuSquareCheck, LuUser } from "react-icons/lu";
import { CustomCard } from "../../../chakra/CustomCard";
import { FaArrowTrendUp } from "react-icons/fa6";
import { FaPlusCircle } from "react-icons/fa";
import { FaMinusCircle } from "react-icons/fa";

const PriceSection = () => {
  const timestamps = ["7:15 PM", "7:55 PM", "8:55 PM", "9:55 PM", "10:55 PM"];

  return (
    <CustomCard>
      <Flex justify="space-between" align="start">
        {" "}
        <Stack>
          <HStack color="black.80">
            <Text fontSize="sm">Current Prize</Text>
          </HStack>
          <HStack spacing={4}>
            <HStack>
              <Text textStyle="h2" fontWeight="medium">
                22.39401000
              </Text>{" "}
              <HStack fontWeight="medium" color="green.500">
                <Icon as={FaArrowTrendUp} />
                <Text fontSize="sm" fontWeight="medium">
                  22%
                </Text>{" "}
              </HStack>
            </HStack>
          </HStack>
        </Stack>
        <HStack>
          <Button leftIcon={<Icon as={FaPlusCircle} />}>BUY</Button>
          <Button leftIcon={<Icon as={FaMinusCircle} />}>SELL</Button>
        </HStack>
      </Flex>
      <Tabs defaultIndex={0} variant="unstyled" mt="20px">
        {/* Tab headers */}
        <Flex justify="end">
          <Box bg="gray.100" rounded="lg" p={1} maxWidth="250px">
            <TabList>
              <HStack spacing={1}>
                {["1H", "1D", "1W", "1M"].map((tab) => (
                  <Tab key={tab} display="flex" alignItems="center" gap={2}>
                    {tab}
                  </Tab>
                ))}
              </HStack>
            </TabList>

            {/* Indicator */}
            <TabIndicator mt="-1.5px" height="2px" bg="blue.500" rounded="md" />
          </Box>
        </Flex>

        {/* Tab content */}
        <TabPanels>
          <TabPanel>
            <Image w="100%" src="/Graph.png" mt="48px" />

            <HStack justify="space-between">
              {timestamps.map((timestamp) => (
                <Text key={timestamp} fontSize="sm" color="black.80">
                  {timestamp}
                </Text>
              ))}
            </HStack>
          </TabPanel>
          <TabPanel>
            <Image w="100%" src="/Graph.png" mt="48px" />

            <HStack justify="space-between">
              {timestamps.map((timestamp) => (
                <Text key={timestamp} fontSize="sm" color="black.80">
                  {timestamp}
                </Text>
              ))}
            </HStack>
          </TabPanel>
          <TabPanel>
            <Image w="100%" src="/Graph.png" mt="48px" />

            <HStack justify="space-between">
              {timestamps.map((timestamp) => (
                <Text key={timestamp} fontSize="sm" color="black.80">
                  {timestamp}
                </Text>
              ))}
            </HStack>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </CustomCard>
  );
};

export default PriceSection;
