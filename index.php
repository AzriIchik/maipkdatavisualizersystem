<!doctype html>
<html>
<head>
	
	<!-- before all prevent access on certain media -->
	<script>
		if (navigator.userAgent.match(/Android/i) ||
			navigator.userAgent.match(/webOS/i) ||
		  	navigator.userAgent.match(/iPhone/i) ||
		  	navigator.userAgent.match(/iPad/i) ||
		  	navigator.userAgent.match(/iPod/i) ||
		  	navigator.userAgent.match(/BlackBerry/i) ||
		  	navigator.userAgent.match(/Windows Phone/i) ||
			(navigator.appName == 'Microsoft Internet Explorer' ||  !!(navigator.userAgent.match(/Trident/) || navigator.userAgent.match(/rv:11/)) || (typeof $.browser !== "undefined" && $.browser.msie == 1))
		){ self.location = "errorPage.html"; } 
		
	</script>
	
    <meta charset="utf-8">
    <title>Sistem MAIPK</title>
    <link rel="icon" href="img/jais-icon.png">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!--Bootstrap-->
    <link rel="stylesheet" href="css/bootstrap.css" defer>

    <!--Jquery-->
    <script src="js/jquery.js" type="text/javascript" defer></script>

    <!-- validator -->
	
        
    <!--google font-->
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:600" rel="stylesheet" defer>

    <!--sweet alert 2-->
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@8"></script>	

    <!--Own style and script-->
    <link href="css/indexPage.css" rel="stylesheet" defer>
    <script src="js/indexPage.js" type="text/javascript" defer></script>

</head>


<body>

	<!-- whole container -->

	<div class="container-fluid main-background">
		<div class="container">

			<!-- logo container -->
			<div class="row">
				<div class="col-12 p-4">
					<img src="img/logo.png" class="img-fluid mx-auto d-block" alt="Logo">
				</div>
			</div>

            <!-- form container -->
			<div class="row py-5">


				<div id="LoginContainer" class="col-md-8 mx-auto rounded bg-light fadeIn">
					
					<div class="row justify-content-center py-3 border-bottom">
						<h2 class="responsive-text-30 font-weight-bolder">LOG MASUK</h2>
					</div>
					
					<div class="row p-3">
						<div class="col-12 mx-auto">
							<form id="LoginForm" class="container-fluid">

								<div class="form-group">
									<label for="loginEmail" class="font-weight-bolder responsive-text-15">Alamat Email</label>
									<input type="email" class="form-control" id="loginEmail" name="loginEmail" aria-describedby="emailHelp" placeholder="Masukkan Email">
								</div>

								<div class="form-group">
									<label for="loginPassword" class="font-weight-bolder responsive-text-15">katalaluan</label>
									<input type="password" class="form-control" id="loginPassword" name="loginPassword" placeholder="Katalaluan Anda">
								</div>

								<div class="form-group">
									<small id="loginErrorHelp" class="form-text text-danger d-none">Nama pengguna atau katalaluan salah</small>
								</div>

								<button type="button" id="BTNLogin" class="btn btn-success responsive-text-15">Log Masuk</button>

							</form>
						</div>
					</div>
					
				</div>

				
			</div>

			<!--footer container-->
			<div class="row justify-content-center">
				<h5 class="text-center responsive-text-12">Univerisiti Pendidikan Sultan Idris/hak cipta terpelihara @ 2017/19</h5>
			</div>

		</div>

	</div>

</body>

</html>

