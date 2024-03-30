"use client";

import { signIn } from "@/api";
import { sendNotification } from "@/utils/helpers";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
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
  FormErrorMessage,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";

export default function SignIn() {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter()
  const methods = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const containerBackground = useColorModeValue("gray.50", "gray.800");
  const boxackground = useColorModeValue("white", "gray.700");

  const onSubmit = async (data: any) => {
    const res = await signIn(data) as any;
    if(res?.status === 200){
      sendNotification('success', res.message);
      router.push('/');
    } else {
      sendNotification('error', res.message);
    }
  };

  return (
    <Stack w="100vw">
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
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
                  <Stack spacing={10}>
                    <Stack
                      direction={{ base: "column", sm: "row" }}
                      align={"start"}
                      justify={"space-between"}
                    >
                      <Checkbox>Remember me</Checkbox>
                      <Text color={"blue.400"}>Forgot password?</Text>
                    </Stack>
                    <Button loadingText="logging In..." colorScheme="teal" type="submit">Log In</Button>
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
        </form>
      </FormProvider>
    </Stack>
  );
}
