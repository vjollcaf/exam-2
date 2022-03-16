
  statuses = {
    1: 'Working',
    2: 'Student',
    3: 'Parent',
    4: 'Rather Not Say'
  };

  occupations = {
    1: 'Teacher',
    2: 'Software Developer',
    3: 'Photographer',
    // 4: 'Accountant',
    // 5: 'Doctor',
    // 6: 'Flight attendant',
    // 7: 'Chef',
    // 8: 'Lawyer'
  };

function createUser(){
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const status = document.getElementById('status').value;
  const occupation =document.getElementById('occupation').value;

  const user = {
    name:name,
    email:email,
    status:statuses[status],
    occupation: occupations[occupation]
  }

  console.log(user);
  const showingUser = showUsers(user);
  console.log(showingUser);
  document.getElementById('showUsers').appendChild(showingUser);
  
}


function showUsers(user){
  userHtml = document.createElement('div');
  userHtml.classList.add('user__info');
  html = `
      <h2>Username: ${user.name}</h1>
      <h2>Email: ${user.email}</h2>
      <h2>Status: ${user.status}</h3>
      <h2 id="occupation--active">Occupation: ${user.occupation}</h4>
    `;
    userHtml.innerHTML = html;

    let  activate = document.getElementById('showUsers');
    activate.classList.add('active');
    return userHtml;
}

let form = document.getElementById("form--user");
function handleForm(event) { event.preventDefault(); } 
form.addEventListener('submit', handleForm);