"use client";
import { useState } from "react";

import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  useSafeLayoutEffect,
} from "@chakra-ui/react";

import { registerAxios } from "../../../api/auth";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegisterSubmit = async () => {
    const result = await registerAxios(name, email, password);
    alert(JSON.stringify(result));
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex justify-center">
      <Card w={"40%"} className="">
        <CardHeader className="">
          <h3 className="text-2xl">Register</h3>
        </CardHeader>
        <hr></hr>

        <CardBody>
          <FormControl className="mb-5">
            <FormLabel> Name </FormLabel>
            <Input
              type="text"
              name="name"
              onChange={(e) => setName(e.target.value)}
            />
            <FormHelperText></FormHelperText>
          </FormControl>
          <FormControl className="mb-5">
            <FormLabel> Email </FormLabel>
            <Input
              type="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <FormHelperText></FormHelperText>
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
              onClick={() => handleRegisterSubmit()}
            >
              {" "}
              Register{" "}
            </Button>
          </FormControl>
        </CardBody>
      </Card>
    </div>
  );
}
