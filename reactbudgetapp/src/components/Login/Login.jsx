import React, { useState } from "react";
import {
  Card,
  Heading,
  CardBody,
  CardFooter,
  Text,
  CardHeader,
  Button,
} from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import { client } from "../../client";
import { useNavigate } from "react-router-dom";
import { PATHS } from "../../paths";
import budgetLogin from '../Login/budgetLogin.svg'

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;

    name == "email" ? setEmail(value) : setPassword(value);
  };

  let handleLogin = () => {
    let body = {
      email,
      password,
    };

    client
      .post("/login", body)
      .then((res) => {
        window.localStorage.setItem("token", res.data.token);
        navigate(PATHS.MANAGE_EXPENSE);
      })
      .catch((e) => console.log(e));
  };

  let divStyle = {
    backgroundColor: "#003D48",
    padding: "20px",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    width: "100%",
    justifyContent: "center",
  };

  return (
    <div style={divStyle}>
      <img src={budgetLogin} style={{width:"50%"}}></img>
      <Card style={{width:"50%", backgroundColor: "#003D48", color:"white", fontWeight:"600"}}>
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
          <Button colorScheme="blue" m={3} onClick={handleLogin}>
            Login
          </Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default Login;
