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
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { PATHS } from "../../paths";

const Filters = ({ filteredExpenses, setFilteredExpenses }) => {
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [type, setType] = useState("");

  const store = useSelector((state) => state);

  let handleChange = (e) => {
    console.log(e.target.name, e.target.value);

    const { name, value } = e.target;

    if (name == "month") setMonth(value);
    else if (name == "year") setYear(value);
    else setType(value);
  };

  let handleFilters = () => {
    const newData = store.filter((ele) => {
      if (ele.type == type) return ele;
    });
    console.log(newData)

    setFilteredExpenses(newData);
  };

  const navigate = useNavigate();

  let handleLogout = () => {
    window.localStorage.clear();
    navigate(PATHS.LOGIN)
    
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
                <Select
                  name="type"
                  placeholder="Select option"
                  onChange={handleChange}
                  value={type}
                >
                  <option value="EXPENSE">Expense</option>
                  <option value="INCOME">Income</option>
                </Select>
              </>
            </>
            <Button colorScheme="blue" m={3} onClick={handleFilters}>
              Search
            </Button>
          </Flex>
        </CardBody>
        <Button colorScheme="blue" m={3} onClick={handleLogout}>
          Logout
        </Button>
      </Card>
    </div>
  );
};

export default Filters;
