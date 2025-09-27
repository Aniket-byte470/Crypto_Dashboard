import { Button, Card, Flex, HStack, Icon, Tag } from "@chakra-ui/react";
import DashboardLayout from "../../components/DashboardLayout.jsx";
import { FaDownload } from "react-icons/fa";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  TabIndicator,
  Box,
} from "@chakra-ui/react";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import TransactionTable from "./components/TransactionTable.jsx";
import { IoIosSearch } from "react-icons/io";
const Transaction = () => {
  const tabs = [
    {
      name: "All",
      count: "349",
    },
    {
      name: "Deposit",
      count: "114",
    },
    {
      name: "Withdraw",
      count: "55",
    },
    {
      name: "Trade",
      count: "50",
    },
  ];

  return (
    <DashboardLayout>
      <Flex justify="end" mt="6" mb="3">
        <Button leftIcon={<Icon as={FaDownload} />}> Export CSV</Button>
      </Flex>
      <Card borderRadius="1rem">
        <Tabs defaultIndex={0} variant="unstyled" position="relative">
          {/* Tab headers */}
          <TabList
            bg="white"
            pt="4"
            display="flex"
            justifyContent="space-between"
          >
            <HStack>
              {tabs.map((tab) => (
                <Tab key={tab.name} display="flex" gap="2" pb="4">
                  {tab.name}{" "}
                  <Tag colorScheme="gray" borderRadius="full">
                    {" "}
                    {tab.count}
                  </Tag>
                </Tab>
              ))}
            </HStack>

            <InputGroup maxW="200px" pr="6">
              <InputLeftElement pointerEvents="none">
                <IoIosSearch />
              </InputLeftElement>
              <Input type="tel" placeholder="Search..." />
            </InputGroup>
          </TabList>

          {/* Indicator (like your v3 Tabs.Indicator) */}
          <TabIndicator
            mt="-2px"
            height="2px"
            bg="p.purple"
            borderRadius="lg"
          />

          {/* Tab content */}
          <TabPanels mt={4}>
            <TabPanel>
              <TransactionTable />
            </TabPanel>
            <TabPanel>
              <TransactionTable />
            </TabPanel>
            <TabPanel>
              <TransactionTable />
            </TabPanel>
            <TabPanel>
              <TransactionTable />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Card>
    </DashboardLayout>
  );
};

export default Transaction;
