import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Text,
  Input,
  Button,
  Flex,
  Select,
} from "@chakra-ui/react";

const Filters = () => {
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [type, setType] = useState("");

  let handleChange = (e) => {
    console.log(e.target.name, e.target.value);

    const {name, value} = e.target;

    if(name=="month")
      setMonth(value);
    else if(name=='year')
      setYear(value)
    else
      setType(value)

  };

  return (
    <div>
      <Card>
        <CardBody>
          <Text>Filter your expenses</Text>
          <br></br>
          <Flex>
            <Text mb="8px">Month:</Text>
            <Input
              value={month}
              name="month"
              onChange={handleChange}
              placeholder="Enter Month"
              size="md"
            />

            <>
              <Text mb="8px">Year</Text>
              <Input
                value={year}
                onChange={handleChange}
                placeholder="Enter Year"
                name="year"
                size="md"
              />
              <>
                {" "}
                <Select name="type" placeholder="Select option" onChange={handleChange} value={type}>
                  <option value="EXPENSE">Expense</option>
                  <option value="INCOME">Income</option>
                </Select>
              </>
            </>
            <Button colorScheme="blue" m={3} onClick={""}>
              Search
            </Button>
          </Flex>
        </CardBody>
      </Card>
    </div>
  );
};

export default Filters;
