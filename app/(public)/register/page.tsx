"use client";

import CustomContainer from "@/app/_components/CustomContainer";
import {
  Button,
  Divider,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  InputGroup,
} from "@chakra-ui/react";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useUserService } from "@/app/_services/useUserService";

type Inputs = {
  username: string;
  password: string;
};

export default function Page() {
  const { register, handleSubmit, formState } = useForm<Inputs>();
  const { errors } = formState;
  const { data: session } = useSession();
  const userService = useUserService();

  useEffect(() => {
    if (session) {
      redirect("/");
    }
  }, [session]);

  const fields = {
    username: register("username", {
      required: "Username is required.",
    }),
    password: register("password", { required: "Password is required." }),
  };

  const onSubmit = async (data: Inputs) => {
    await userService.register(data);
  };

  return (
    <CustomContainer maxW="md">
      <Heading>Register</Heading>
      <Divider mb={8} mt={2} />

      <form onSubmit={handleSubmit(onSubmit)}>
        <Flex direction="column" gap={2}>
          <FormControl isInvalid={errors.username != undefined}>
            <FormLabel>Username</FormLabel>
            <Input type="text" {...fields.username} />
            <FormErrorMessage>
              {errors.username && errors.username.message}
            </FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={errors.password != undefined} mb={4}>
            <FormLabel>Password</FormLabel>
            <InputGroup>
              <Input type="password" {...fields.password} />
            </InputGroup>
            <FormErrorMessage>
              {errors.password && errors.password.message}
            </FormErrorMessage>
          </FormControl>
          <Button bg="brand.500" type="submit">
            Register
          </Button>
        </Flex>
      </form>
    </CustomContainer>
  );
}
