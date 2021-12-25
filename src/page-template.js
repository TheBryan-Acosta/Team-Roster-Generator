employeeBox = (employee) => {
	const { name, id, email, role, ...special } = employee;
	const specialVal = special[Object.keys(special)[0]];

	if (role === "Intern") {
		var roleUnique = `School: ${specialVal}`;
		var position = role;
		var icon = `<i class="fas fa-user-graduate"></i>`;
	} else if (role === "Engineer") {
		var roleUnique = `Github: <a href="https://github.com/${specialVal}" target="_blank" rel="noopener noreferrer">${specialVal}</a>`;
		var position = role;
		var icon = `<i class="fas fa-glasses"></i>`;
	} else if (role === "Manager") {
		var roleUnique = `Office Number: ${specialVal}`;
		var position = role;
		var icon = `<i class="fas fa-mug-hot"></i>`;
	} else {
		var roleUnique = `Office Number: ${specialVal}`;
		var position = "Manager";
		var icon = `<i class="fas fa-mug-hot"></i>`;
	}

	return `<div class="card border-0 m-3" style="width: 18rem;">
  <div class="card-body">
    <h4 class="card-title">${name}</h5>
    <h5 class="card-title">${icon} ${position}</h5>
  </div>
  <div class="card-footer">
    <ul class="list-group list-group-flush">
      <li class="list-group-item">ID: ${id}</li>
      <li class="list-group-item">Email: <a href = "mailto: ${email}">${email}</a></li>
      <li class="list-group-item">${roleUnique}</li>
    </ul>
  </div>
</div>`;
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

  <script src="https://kit.fontawesome.com/182d834665.js" crossorigin="anonymous"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/js/bootstrap.min.js"></script>  </html>`;
};
