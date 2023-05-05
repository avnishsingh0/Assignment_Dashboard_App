// Get the assignments from local storage or set to an empty array
let assignmentsLs = JSON.parse(localStorage.getItem("assignments")) || [];

// Get references to the HTML elements
let sprint1 = document.querySelector("#sprint-1");
let sprint2 = document.querySelector("#sprint-2");
let sprint3 = document.querySelector("#sprint-3");
let sprint4 = document.querySelector("#sprint-4");

let deleteAssignment = (assignment) => {
  // Find the index of the assignment in the assignments array
  let index = assignmentsLs.findIndex((a) => a.name === assignment.name);

  // If the assignment was found, remove it from the assignments array and from local storage
  if (index !== -1) {
    assignmentsLs.splice(index, 1);
    localStorage.setItem("assignments", JSON.stringify(assignmentsLs));
  }
};

// Render the assignments to the page
let renderAssignments = (assignments) => {
  // Clear the existing data in the sprints
  sprint1.innerHTML = "";
  sprint2.innerHTML = "";
  sprint3.innerHTML = "";
  sprint4.innerHTML = "";

  // Loop through the assignments and create the HTML elements for each one
  assignments.forEach((assignment, id) => {
    let div = document.createElement("div");
    let p1 = document.createElement("p");
    p1.innerText = assignment.name;
    let p2 = document.createElement("p");
    p2.innerText = assignment.desc;
    let p3 = document.createElement("p");
    p3.innerText = assignment.type;
    let p4 = document.createElement("p");
    p4.innerText = assignment.course;
    let p5 = document.createElement("p");
    p5.innerText = assignment.schedule;
    let p6 = document.createElement("p");
    p6.innerText = assignment.sprint;
    let button = document.createElement("button");
    button.innerText = "Delete";

    // Set up the delete button to remove the assignment when clicked
    button.addEventListener("click", () => {
      deleteAssignment(assignment);
      div.remove();
    });

    div.append(p1, p2, p3, p4, p5, p6,  button);

    // Append the assignment to the appropriate sprint section based on the sprint property
    if (assignment.sprint == "sprint-1") {
      sprint1.append(div);
    } else if (assignment.sprint == "sprint-2") {
      sprint2.append(div);
    } else if (assignment.sprint == "sprint-3") {
      sprint3.append(div);
    } else if (assignment.sprint == "sprint-4") {
      sprint4.append(div);
    }
  });
};

// Call the renderAssignments function to display the assignments on the page
renderAssignments(assignmentsLs);

// Set up the course select functionality
let courseSelect = document.querySelector("#course");

courseSelect.addEventListener("change", () => {
  let courseL = courseSelect.value;

  let filterData = assignmentsLs.filter((el) => {
    return courseL == el.course;
  });

  renderAssignments(filterData);
});
