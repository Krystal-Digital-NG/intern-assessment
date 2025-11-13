

# **Frontend Intern Assessment \- Todo App**

## **Overview**

Build a simple Todo application using vanilla JavaScript, HTML, and tailwind CSS. The application should allow users to manage their tasks with full CRUD (Create, Read, Update, Delete) functionality, with all data persisted in the browser's local storage.

## **Requirements**

Use video attached for design reference and implement to detail while making additions where necessary.

### **Core Functionality**

1. **Add Todo**

   * Users should be able to add new todo items when they click on “New Task” with a form appearing below the card  
   * Each todo should have a title and datetime  
   * Newly added todos should appear in the list immediately  
2. **Display Todos**

   * Show all todos in a list format as shown in the design  
   * The date and time of the todo should appear below the title in smaller font and the format should be yyyy-mm-dd hh:mm  
   * When a task is hovered, a delete icon (as shown) and toggle icon (not shown) should appear at the end of the task line.  
3. **Mark as Complete/Incomplete**

   * Users should be able to toggle the completion status of any todo  
   * When the task is toggled on, a strikethrough should appear on the task title and the toggle icon state should differ.  
   * Completed todos can be unmarked back to incomplete  
4. **Edit Todo**

   * Users should be able to edit the title and the date-time of existing todos by clicking on the task.  
   * When clicked, a form should appear below the card with the todo details to be edited.  
   * Changes should be saved immediately or with a save button  
5. **Delete Todo**

   * Users should be able to delete individual todos using the delete icon  
   * Add a confirmation before deletion  
6. **Data Persistence**

   * All todos must be saved to browser's local storage  
   * Todos should persist even after the browser is closed and reopened  
   * Any changes (add, edit, delete, toggle) should immediately update local storage

### **Technical Requirements**

* **HTML/TailwindCSS/JavaScript only**   
* Use `localStorage`  for data persistence  
* Clean, readable code with proper formatting  
* Responsive design that works on mobile and desktop

**NOTE:**

1. Ensure all design additions not given by the video are aesthetically pleasing.  
2. This project has been set up with laravel but you will be required to work on only the frontend.   
3. Clone the repository and complete your task by pushing to your own branch  
4. Make a PR to the main branch when you’re done.

Link to Design Video Guide: https://photos.app.goo.gl/cPQrZpY4LPkcw7sM9

