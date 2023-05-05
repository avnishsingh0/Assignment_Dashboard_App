Assignment Dashboard App
This is a simple Assignment Dashboard App that allows you to add and manage your assignments in an organized way.

Table of Contents
Technologies Used
Usage
Home Page
Dashboard Page
Local Storage
Layout and Responsiveness
Deleting Assignments
Technologies Used
HTML
CSS
JavaScript
Usage
Home Page
The home page (index.html) contains a form with input fields and a select tag for adding new assignments.

The fields in the form are:

Name: Text input field for the name of the assignment.
Description: Textarea field for the description of the assignment.
Type: Select dropdown menu for selecting the type of assignment.
Course: Select dropdown menu for selecting the course of the assignment.
Sprint: Select dropdown menu for selecting the sprint of the assignment.
Schedule: Input field for setting the due date of the assignment.
On submitting the form, the data is stored in the browser's local storage with the key assignments.

Note: The data is stored as a JSON string, so when retrieving the data from local storage, it needs to be parsed back to an object using JSON.parse().

Dashboard Page
The dashboard page (dashboard.html) displays all the assignments that are stored in local storage.

The assignments are displayed in the form of small cards, with each card containing the following information:

Name: Name of the assignment.
Description: Description of the assignment.
Type: Type of assignment.
Course: Course of the assignment.
Schedule: Due date of the assignment.
Sprint: Sprint of the assignment.
Select: Select dropdown menu for changing the sprint of the assignment.
Delete button: Button for deleting the assignment.
The assignments are displayed in 4 columns based on their sprint value, with each column having a heading of the sprint name.

The dashboard page also contains a select dropdown menu with id course, which allows the user to filter the assignments by course. By default, the value of this select dropdown menu is JS101.

On changing the value of the course select dropdown menu, the assignments are filtered based on the selected course and displayed accordingly.

Local Storage
The assignments are stored in the browser's local storage with the key assignments. The assignments are stored as an array of objects, with each object representing an assignment.

When a new assignment is added, the assignment is pushed to the array and then stored back in local storage as a JSON string using JSON.stringify().

Layout and Responsiveness
The layout of the dashboard page is designed using flex properties. The assignments are displayed in 4 columns based on their sprint value, with each column having a width of 25%.

When the screen size is less than or equal to 900px, the flex-direction is set to column and the assignments are displayed in a single column.

Deleting Assignments
Each assignment card has a delete button that allows the user to delete the assignment from both the DOM and local storage.

On clicking the delete button, the assignment is removed from the array and the local storage using splice() and localStorage.setItem() respectively. Finally, the card is removed from the DOM using remove().




