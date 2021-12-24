employeeBox = (employee) => {
	const { name, id, email, role, ...special } = employee;
	const specialVal = special[Object.keys(special)[0]];

	if (role === "Manager") {
		var specialname = "Office Number:";
	} else if (role === "Engineer") {
		var specialname = "Github:";
	} else {
		var specialname = "School:";
	}

	return `
   <div class="card border-0 m-3" style="width: 18rem;">
    <div class="card-body">
      <h4 class="card-title">${name}</h5>
      <h5 class="card-title">${role}</h5>
    </div>
    <div class="card-footer">
      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${id}</li>
        <li class="list-group-item">Email: ${email}</li>
        <li class="list-group-item">${specialname} ${specialVal}</li>
      </ul>
    </div>
  </div>
`;
};

module.exports = (employees) => {
	return `<!DOCTYPE html>
  <html lang="en">
  
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Our Team</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css">
    <link rel="stylesheet" href="style.css">
  </head>
  
    <body>
  
      <div class="container-fluid">
        <div class="row headerbar">
          <h1>My Team</h1>
        </div>
        <div class="row theTeam">
        ${employees.map((employee) => employeeBox(employee)).join("")}
        </div>
      </div>

    </body>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/js/bootstrap.min.js"></script>  </html>
  `;
};
