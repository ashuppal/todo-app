#### lab 31
Author: Ashwini Uppal

#### To-do list

This is a to-do list application that allows users to create a list of tasks to complete. The Admin can add, edit, update and delete tasks. The user can also filter the list of tasks by difficulty but cannot delete a task or mark it complete.

#### Technical Requirements / Notes

implement the React context API for defining settings across the entire application.
  Create React Context for managing application display settings and provide this at the application level.
  Add the following defaults to the context provider’s state, they will not be changeable in this lab.
  Display three items.
  Hide completed items using a boolean.
  Define “difficulty” as a default sort word to optionally use in the stretch goal.


Consume and utilize context values throughout your components.
  Show a maximum of three items per screen by default in the <List /> component.
  Use the Mantine <Pagination /> component to allow users to navigate a list of items.
  Hide completed items in the list by default (the ability to show will be added in a later lab).

### Documentation

  - Global state is consumed by the components by using the useContext() hook. The useContext() hook is used to access the global state. The useContext() hook takes in a context object (the object returned from React.createContext) and returns the current context value for that context. The current context value is determined by the value prop of the nearest <MyContext.Provider> above the calling component in the tree.


  - The useForm() hook is used to create a form. The useForm() hook takes in an object and returns an array. The first item in the array is the state of the form. The second item in the array is an object with methods to update the state of the form. The useForm() hook takes in an object with the following properties:
    - initialFormState: an object with the initial state of the form.
    - initialFormError: an object with the initial state of the form errors.
    - callback: a function to be called when the form is submitted.




![UML](./src/assets/UML.png)


![Login page](./src/assets/1.png)

![todo page](./src/assets/2.png)

![list page](./src/assets/3.png)

![setting page](./src/assets/4.png)


