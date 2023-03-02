import React, { useState } from "react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Text,
  Input,
  Button,
  Select,
} from "@chakra-ui/react";
import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { DELETE_EXPENSE, ADD_EXPENSE } from "../../action";

const AddExpense = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    type: "",
    amount: "",
    date: "",
  });

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    if(name!="date")
     setFormData({ ...formData, [name]: value });
    console.log(name)
  };

  let handleSubmit = () => {
    dispatch({});
  };

  return (
    <div>
      <Card>
        <CardBody>
          <FormControl>
            <FormLabel>Title</FormLabel>
            <Input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
            />
            {/* <FormHelperText>We'll never share your email.</FormHelperText> */}
          </FormControl>

          <FormControl>
            <FormLabel>Description</FormLabel>
            <Input
              type="text"
              name="description"
              value={formData.description}
              onChange={handleChange}
            />
            {/* <FormHelperText>We'll never share your email.</FormHelperText> */}
          </FormControl>

          <FormControl>
            <FormLabel>Expense Type</FormLabel>
            <Select
              name="type"
              placeholder="Select option"
              onChange={handleChange}
              value={formData.type}
            >
              <option value="EXPENSE">Expense</option>
              <option value="INCOME">Income</option>
            </Select>
          </FormControl>

          <FormControl>
            <FormLabel>Amount</FormLabel>
            <Input
              type="number"
              name="amount"
              value={formData.amount}
              onChange={handleChange}
            />
            {/* <FormHelperText>We'll never share your email.</FormHelperText> */}
          </FormControl>

          <FormControl>
            <FormLabel>Date</FormLabel>
            <Input
              placeholder="Select Date and Time"
              size="md"
              name="date"
              value={formData.date}
              type="date"
              onChange={handleChange}
            />
          </FormControl>

          <FormControl>
            <Button colorScheme="blue" m={3} onClick={handleSubmit}>
              Add
            </Button>
          </FormControl>
        </CardBody>
      </Card>
    </div>
  );
};

export default AddExpense;
