"use client";

import React, { useState } from "react";
import { useMutation } from "@tanstack/react-query";

import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
} from "@chakra-ui/react";

import { login } from "../../../api/auth";
import { redirect } from "next/navigation";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginMutation = useMutation({
    mutationFn: (data) => {
      login(data);
    },

    onSuccess: (data, variables, context) => {
      redirect("/");
    },
    onError: (error, variables, context) => {
      console.log(context);
      alert(JSON.stringify(error));
    },
  });

  const handleLoginSubmit = (e) => {
    loginMutation.mutate({
      email: email,
      password: password,
    });
  };

  return (
    <div className="flex justify-center items-center">
      <Card w={"40%"} className="max-w-1/2">
        <CardHeader className="">
          <h3 className="text-2xl">Login</h3>
        </CardHeader>
        <hr></hr>
        <CardBody>
          <FormControl className="mb-5">
            <FormLabel> Email </FormLabel>
            <Input
              type="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <FormHelperText>{email}</FormHelperText>
          </FormControl>
          <FormControl className="mb-5">
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <FormHelperText></FormHelperText>
          </FormControl>
          <FormControl className="text-center">
            <Button
              type="button"
              colorScheme="blue"
              className="w-full"
              onClick={() => handleLoginSubmit()}
            >
              {" "}
              Login{" "}
            </Button>
          </FormControl>
        </CardBody>
      </Card>
    </div>
  );
}
