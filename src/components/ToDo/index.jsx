import React, { useEffect, useState, useContext, useCallback } from 'react';
import useForm from '../../hooks/form.js';
import Header from '../Header';
import Footer from '../Footer';
import List from '../List';
import { AuthContext } from '../../Context/Auth/index.jsx';
import { v4 as uuid } from 'uuid';
import { When } from 'react-if';
import useAxios from '../../hooks/axios.js';
import { Button, Card, createStyles, Grid, Slider, Text, TextInput } from '@mantine/core';
import { createUseStyles } from '@mantine/styles';




const useStyles = createStyles((theme) => ({
  formHeading: {
    fontSize: theme.fontSizes.lg,
    fontWeight: 'bold',
    color: theme.colors.gray[9],
    marginBottom: theme.spacing.md,


  },
}));

const ToDo = () => {

  const { classes } = useStyles();

  const { makeRequest, response } = useAxios();

  const { can } = useContext(AuthContext);
  const [defaultValues] = useState({
    difficulty: 4,
  });
  const [list, setList] = useState([]);
  const { handleChange, handleSubmit } = useForm(addItem, defaultValues);
  const[incomplete, setIncomplete] = useState([]);

  function addItem(item) {
    const options = {
      method: 'post',
      baseURL: 'https://api-js401.herokuapp.com/api/v1',
      url: '/todo',
      data: item,
    };
    makeRequest(options);
  }

  function deleteItem(id) {
    const options = {
      method: 'delete',
      baseURL: 'https://api-js401.herokuapp.com/api/v1',
      url: `/todo/${id}`,
    };
    makeRequest(options);
  }

  function updateItem(id, data) {
    const updatedItems = list.map(item => item.id === id ? { ...item, ...data } : item)
    setList(updatedItems)
  }

  function toggleComplete(id) {
    const item = list.filter(i => i._id === id)[0] || {};

    if (item._id) {
      const options = {
        method: 'put',
        baseURL: 'https://api-js401.herokuapp.com/api/v1',
        url: `/todo/${id}`,
        data: { ...item, complete: !item.complete },
      };
      makeRequest(options);
    }

  }

  const getToDoList = useCallback(async () => {
    const options = {
      baseURL: 'https://api-js401.herokuapp.com/api/v1',
      url: '/todo',
      method: 'get',
    };
    makeRequest(options);

  }, [makeRequest]);

  // useEffect(() => {
  //   let incompleteCount = list.filter(item => !item.complete).length;
  //   setIncomplete(incompleteCount);
  //   document.title = `To Do List: ${incomplete}`;
  // }, [list]);

  useEffect(() => {
    if (response.results) {
      setList(response.results);
    }
    else {
      getToDoList();
    }
  }, [response, getToDoList]);

  useEffect(() => {
    getToDoList();
  }, [getToDoList]);


  useEffect(() => {
    let incompleteCount = list.filter(item => !item.complete).length;
    setIncomplete(incompleteCount);
    document.title = `To Do List: ${incomplete}`;
    // linter will want 'incomplete' added to dependency array unnecessarily. 
    // disable code used to avoid linter warning 
    // eslint-disable-next-line react-hooks/exhaustive-deps 
  }, [list]);

  return (
    <>
      <header incomplete={incomplete} />
      <Grid style={{ width: '80%', margin: 'auto' }}>
        <Grid.Col xs={12} sm={4}>
          <Card withBorder p="xs">
            <Text className={classes.formHeading}>Add To Do Item</Text>

            <form onSubmit={handleSubmit}>

              <TextInput
                placeholder="Item Details"
                name="text"
                onChange={handleChange}
                label="To Do Item"
              />

              <TextInput
                placeholder="Assignee Name"
                name="assignee"
                onChange={handleChange}
                label="Assigned To"
              />

              <Text>Difficulty</Text>
              <Slider
                onChange={handleChange}
                defaultValue={defaultValues.difficulty}
                min={0}
                max={5}
                step={1}
                name="difficulty"
                type="range"
                mb="lg"
              />

              <Button type="submit">Add Item</Button>


            </form>
          </Card>
        </Grid.Col>
        <Grid.Col xs={12} sm={8}>
          <List list={list} toggleComplete={toggleComplete} deleteItem = {deleteItem} updateItem={updateItem}/>
        </Grid.Col>
      </Grid>
      
      <Footer />
    </>
  );
};

export default ToDo;