
const form = document.querySelector('form');
  form.addEventListener('submit', function(event) {
    event.preventDefault(); 
    const name = document.querySelector('#name').value;
    const desc = document.querySelector('#desc').value;
    const type = document.querySelector('#type').value;
    const course = document.querySelector('#course').value;
    const sprint = document.querySelector('#sprint').value;
    const schedule = document.querySelector('#schedule').value;
    const assignment = {
      name: name,
      desc: desc,
      type: type,
      course: course,
      sprint: sprint,
      schedule: schedule
    };
    let assignments = JSON.parse(localStorage.getItem('assignments')) || [];
    assignments.push(assignment);
    localStorage.setItem('assignments', JSON.stringify(assignments));
    alert('Assignment created successfully!');
  });