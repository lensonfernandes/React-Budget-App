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
} from "@chakra-ui/react";
import { Select } from "@chakra-ui/react";
import Filters from "./Filters";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import { INITIAL_STORE } from "../../store";
import {useSelector, useDispatch} from 'react-redux'
import uniqid from "uniqid"
import { DELETE_EXPENSE } from "../../action";

const ManageExpense = () => {
  const store = useSelector(state => state)
  console.log(store)

  const [expenses, setExpenses] = useState(store);
  const [filteredExpenses, setFilteredExpenses] = useState(store)



  let handleChange = (e) => {
    console.log(e.target.value);
  };




  const dispatch = useDispatch();

  let handleDelete = (id)=>{
    console.log("Delete")
    dispatch({type:DELETE_EXPENSE, id:id})
  }



  return (
    <div>
      <Filters filteredExpenses={filteredExpenses} setFilteredExpenses={setFilteredExpenses}/>
      <TableContainer>
        <Table variant="simple">
          <TableCaption>Expense Calculator</TableCaption>
          <Thead>
            <Tr>
              <Th>S.No.</Th>
              <Th>Title</Th>
              <Th>Amount</Th>
              <Th>Description</Th>
              <Th>Expense Type</Th>
              <Th>Date</Th>
              <Th>Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            {filteredExpenses.map((ele, i) => {
              return (
                <Tr key={uniqid()}>
                  <Td>{i+1}</Td>
                  <Td>{ele.title}</Td>
                  <Td> {ele.amount}</Td>
                  <Td> {ele.description}</Td>
                  <Td> {ele.type}</Td>
                  <Td> {ele.date}</Td>
                  <Td> <Button colorScheme='blue' m={3} onClick={()=>{handleDelete(ele.id)}}>Delete</Button></Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default ManageExpense;
