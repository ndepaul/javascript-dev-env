import './index.css';
import {getUsers} from './api/userApi';

/* I should develop this with a framework like Angular or React, but will be vainilla JavaScript here */

// Populate table of users via API call.

getUsers().then(result => {
  let usersBody = "";

  result.forEach(user => {
    usersBody += `<tr>
        <td><a href="#"  data-id="${user.id}" class="deleteUser">Delete</a></td>
        <td>${user.id}</td>
        <td>${user.firstName}</td>
        <td>${user.lastName}</td>
        <td>${user.email}</td>
        </tr>`
  });

  global.document.getElementById('users').innerHTML = usersBody;
});


