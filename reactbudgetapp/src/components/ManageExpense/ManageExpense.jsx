import React from "react";
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
import {useSelector} from 'react-redux'

const ManageExpense = () => {



  let handleChange = (e) => {
    console.log(e.target.value);
  };


  let handleDelete = ()=>{

  }

  return (
    <div>
      <Filters />
      <TableContainer>
        <Table variant="simple">
          <TableCaption>Expense Calculator</TableCaption>
          <Thead>
            <Tr>
              <Th>S.No.</Th>
              <Th>Title</Th>
              <Th>Amount</Th>
              <Th>Expense Type</Th>
              <Th>Date</Th>
            </Tr>
          </Thead>
          <Tbody>
            {INITIAL_STORE.map((ele, i) => {
              return (
                <Tr>
                  <Td>{i+1}</Td>
                  <Td>{ele.title}</Td>
                  <Td> {ele.amount}</Td>
                  <Td> {ele.description}</Td>
                  <Td> {ele.type}</Td>
                  <Td> {ele.date}</Td>
                  <Td> <Button colorScheme='blue' m={3} onClick={handleDelete}>Delete</Button></Td>
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
