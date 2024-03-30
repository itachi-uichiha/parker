"use client";

import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
  FormErrorMessage,
} from "@chakra-ui/react";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { signUp } from "@/api";
import { useForm, FormProvider } from "react-hook-form";

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const methods = useForm({
    defaultValues: {
      first_name: "",
      second_name: "",
      email: "",
      password: "",
      mobile: "",
    },
  });

  const onSubmit = async (data) => {
    const res = await signUp(data);
    console.log("🚀 ~ onSubmit ~ res:", res);
  };
  return (
    <Stack w={"100vw"}>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <Flex
            minH={"100vh"}
            align={"center"}
            justify={"center"}
            bg={useColorModeValue("gray.50", "gray.800")}
          >
            <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
              <Stack align={"center"}>
                <Heading fontSize={"4xl"} textAlign={"center"}>
                  Sign up
                </Heading>
                <Text fontSize={"lg"} color={"gray.600"}>
                  to enjoy all of our cool features ✌️
                </Text>
              </Stack>
              <Box
                rounded={"lg"}
                bg={useColorModeValue("white", "gray.700")}
                boxShadow={"lg"}
                p={8}
              >
                <Stack spacing={4}>
                  <HStack>
                    <Box>
                      <FormControl id="firstName" isRequired>
                        <FormLabel>First Name</FormLabel>
                        <Input
                          type="text"
                          {...methods.register("first_name", {
                            required: "This field is required",
                          })}
                        />
                        <FormErrorMessage>
                          {methods.formState.errors.first_name &&
                            methods.formState.errors.first_name.message}
                        </FormErrorMessage>
                      </FormControl>
                    </Box>
                    <Box>
                      <FormControl id="lastName">
                        <FormLabel>Last Name</FormLabel>
                        <Input
                          type="text"
                          {...methods.register("second_name")}
                        />
                        <FormErrorMessage>
                          {methods.formState.errors.second_name &&
                            methods.formState.errors.second_name.message}
                        </FormErrorMessage>
                      </FormControl>
                    </Box>
                  </HStack>
                  <FormControl id="mobile" isRequired>
                    <FormLabel>Mobile</FormLabel>
                    <Input
                      type="number"
                      {...methods.register("mobile", {
                        required: "This field is required",
                      })}
                    />{" "}
                    <FormErrorMessage>
                      {methods.formState.errors.mobile &&
                        methods.formState.errors.mobile.message}
                    </FormErrorMessage>
                  </FormControl>
                  <FormControl id="email" isRequired>
                    <FormLabel>Email address</FormLabel>
                    <Input
                      type="email"
                      {...methods.register("email", {
                        required: "This field is required",
                      })}
                    />{" "}
                    <FormErrorMessage>
                      {methods.formState.errors.email &&
                        methods.formState.errors.email.message}
                    </FormErrorMessage>
                  </FormControl>
                  <FormControl id="password" isRequired>
                    <FormLabel>Password</FormLabel>
                    <InputGroup>
                      <Input
                        type={showPassword ? "text" : "password"}
                        {...methods.register("password", {
                          required: "This field is required",
                        })}
                      />
                      <InputRightElement h={"full"}>
                        <Button
                          variant={"ghost"}
                          onClick={() =>
                            setShowPassword((showPassword) => !showPassword)
                          }
                        >
                          {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                        </Button>
                      </InputRightElement>
                    </InputGroup>
                    <FormErrorMessage>
                      {methods.formState.errors.password &&
                        methods.formState.errors.password.message}
                    </FormErrorMessage>
                  </FormControl>
                  <Stack spacing={10} pt={2}>
                    <Button
                      loadingText="Submitting"
                      size="lg"
                      colorScheme="teal"
                      type="submit"
                    >
                      Sign up
                    </Button>
                  </Stack>
                  <Stack pt={6}>
                    <Text align={"center"}>
                      Already a user?{" "}
                      <Link href="/auth/sign-in" color={"blue.400"}>
                        Login
                      </Link>
                    </Text>
                  </Stack>
                </Stack>
              </Box>
            </Stack>
          </Flex>
        </form>
      </FormProvider>
    </Stack>
  );
}
