<html>
	<head>
        <meta name="viewport" content="width=device-width, initial-scale=1">

		<link rel="stylesheet" href="style.css">
		<!-- bootstrap CSS -->
		<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
		<!-- Font Fonts -->
		<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossorigin="anonymous">
		<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Poppins">
		<!-- Bootrap JS & JQuery -->
<script src="https://code.jquery.com/jquery-3.1.1.min.js"></script>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"></script>
		<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
        <script src="main.js"></script>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
	</head>

    <body class="bg-light">
	<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  	<a class="navbar-brand" href="#">Navbar</a>
  	<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Filter
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          
          <a id="comp" class="filter dropdown-item" >COMP</a>
          <a id="binf" class="filter dropdown-item" >BINF</a>
          <a id="seng" class="filter dropdown-item" >SENG</a>
        </div>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#">Contact</a>
      </li>
    </ul>
    <form id="searchForm" class="form-inline my-2 my-lg-0" method="post" accept-charset="utf-8">
	<input id="searchField" name="searchfield" class="form-control mr-sm-2" type="text" placeholder="Course name / code">
					<button type="submit" id="searchButton" class="btn btn-light my-2 my-sm-0 mr-2">Search</button>
    </form>

  </div>
</nav>
	
<!--		<button data-placement="bottom" data-toggle="popover" data-title="" data-container="body" type="button" class="btn btn-light my-2 my-sm-0 mr-2" data-html="true" href="#" id="login">Login</button> -->
  	<div id="popover-content" class="hide">
    <form class="form-inline" role="form">
      <div class="form-group">
        <input id="username" placeholder="Email" class="form-control" type="text">
		<p>
        <input id="password" placeholder="Password" class="form-control" minlength="6" type="password">
        <button type="submit" class="btn btn-primary" id="loginButton">Login</button>
      </div>
    </form>
  </div>
		<main id="main_body" role="main" class="container">
        </main>
	</body>

</html>
