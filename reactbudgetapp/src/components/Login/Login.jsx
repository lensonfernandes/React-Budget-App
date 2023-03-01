import React, { useState } from "react";
import {
  Card,
  Heading,
  CardBody,
  CardFooter,
  Text,
  CardHeader,
} from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <div>
      <Card>
        <CardHeader>
          <Heading size="md">Login</Heading>
        </CardHeader>

        <CardBody>
          <>
            <Text mb="8px">Email:</Text>
            <Input
              value={email}
              onChange={handleChange}
              placeholder="Enter Email"
              size="md"
            />
          </>
        </CardBody>
      </Card>
    </div>
  );
};

export default Login;
