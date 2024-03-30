"use client";

import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
} from "@chakra-ui/react";

export default function SignIn() {
  const containerBackground = useColorModeValue("gray.50", "gray.800");
  const boxackground = useColorModeValue("white", "gray.700");
  return (
    <Stack w="100vw">
      <Flex
        bg={containerBackground}
        minH={"100vh"}
        align={"center"}
        justify={"center"}
      >
        <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
          <Stack align={"center"}>
            <Heading fontSize={"4xl"}>Sign in to your account</Heading>
            {/* <Text fontSize={"lg"} color={"gray.600"}>
              to enjoy all of our cool <Text color={"blue.400"}>features</Text>{" "}
              ✌️
            </Text> */}
          </Stack>
          <Box rounded={"lg"} bg={boxackground} boxShadow={"lg"} p={8}>
            <Stack spacing={4}>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input type="email" />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input type="password" />
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: "column", sm: "row" }}
                  align={"start"}
                  justify={"space-between"}
                >
                  <Checkbox>Remember me</Checkbox>
                  <Text color={"blue.400"}>Forgot password?</Text>
                </Stack>
                <Button colorScheme="teal">Log In</Button>
              </Stack>
              <Stack>
                <Text align={"center"}>
                  Don't have an account
                  <Link href="/auth/sign-up" ml={2} color={"blue.400"}>
                    Create account
                  </Link>
                </Text>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </Stack>
  );
}
