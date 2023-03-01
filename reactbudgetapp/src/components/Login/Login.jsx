import React, { useState } from "react";
import {
  Card,
  Heading,
  CardBody,
  CardFooter,
  Text,
  CardHeader,
  Button
} from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (e) => {
 const {name, value}= e.target;

 (name=="email")? setEmail(value):setPassword(value)

   
  };

  let divStyle = {

    backgroundColor:"grey",
    padding:"20px",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    width:"100%",
    justifyContent:"center"
  }

  return (
    <div style={divStyle}>
      <Card>
        <CardHeader>
          <Heading size="md">Login</Heading>
        </CardHeader>

        <CardBody>
          <>
            <Text mb="8px">Email:</Text>
            <Input
              value={email}
              name="email"
              onChange={handleChange}
              placeholder="Enter Email"
              size="md"
            />
          </>
          <>
            <Text mb="8px">Password:</Text>
            <Input
              value={password}
              onChange={handleChange}
              placeholder="Enter Password"
              name="password"
              size="md"
            />
          </>
          <Button colorScheme='blue' m={3}>Login</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default Login;
