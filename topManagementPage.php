<?php	include('phphandler/checkIfUserIsLogged.php');	?>

<!doctype html>

<html>

<head>

<meta charset="utf-8">

<title>Sistem MAIAPK</title>

<link rel="icon" href="img/jais-icon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<!-- Bootstrap CSS -->
<link rel="stylesheet" href="css/bootstrap.css" defer>

<!-- Bootstrap Jquery -->
<script src="https://code.jquery.com/jquery-3.4.1.js" integrity="sha256-WpOohJOqMqqyKL9FccASB9O0KwACQJpFTUBLTYOVvVU=" crossorigin="anonymous" defer></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous" defer></script>
<script src="js/bootstrap.js" defer></script>

<!-- Font Awesome JS -->
<script defer src="https://use.fontawesome.com/releases/v5.0.13/js/solid.js" integrity="sha384-tzzSw1/Vo+0N5UhStP3bvwWPq+uvzCMfrN1fEFe+xBmv1C/AtVX5K0uZtmcHitFZ" crossorigin="anonymous" defer></script>
<script defer src="https://use.fontawesome.com/releases/v5.0.13/js/fontawesome.js" integrity="sha384-6OIrr52G08NpOFSZdxxz1xdNSndlD4vdcf/q2myIUVO0VsqaGHJsB0RaBE01VTOY" crossorigin="anonymous" defer></script>

<!--Jquery Alert Box-->
<link rel="stylesheet" href="css/jquery-confirm.min.css" defer>
<script src="js/jquery-confirm.min.js" defer></script>

<!--Jquery Toast-->
<script src="js/jquery.toast.js" defer></script>	
<link rel="stylesheet" href="css/jquery.toast.css" defer>

<!-- validator -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-validator/0.5.3/js/bootstrapValidator.js" type="text/javascript" defer></script>

<!--chart.js-->
<script src="js/Chart.bundle.js" defer></script>
<link rel="stylesheet" href="css/Chart.css" defer>

<!-- navigation bar-->
<link rel="stylesheet" href="css/navbarstyle.css" defer>
<script src="js/navigationbar.js" defer></script>

<!-- boxes -->
<link rel="stylesheet" href="css/boxes.css" defer>
<script src="js/boxes.js" defer></script>

<!--Own style and script-->
<script src="js/graphScript.js" defer></script>

<!-- form validation -->
<script src="js/form.handler.js" defer></script>
	
<!-- for table color (to lazy to create another css file :p)-->
<style>


	.bg-td-min{

		background-color: #FFA7A9;

	}

	

	.bg-td-average{

		background-color:#BEFFFD;

	}

	

	.bg-td-max{

		background-color:#C7FFC9;

	}

	

	.help-block{

		color: #FF0004;

		display: block;

	}

	

</style>
</head>


<body>

    

    <div class="wrapper">

        <!-- Sidebar  -->

        <nav id="sidebar" class="sticky-top">

            <div class="sidebar-header">

                

                <!-- things to be shown when active -->

                <h6 class="text-center header-role" data-boxtext-type="userrole">Pengurus Atasan</h6>

                <img class="img-fluid rounded-circle p-3" src="img/userimage.png" data-boxtext-type="userimg">

                <h6 class="text-center header-name" data-boxtext-type="username"></h6>

                

                <!--things not to be shown when active-->

                <p style="font-size: 12px;" class="text-center font-weight-bold">MAIAMP</p> 

                

            </div>



            <ul class="list-unstyled components p-2">

				

                <li class="navLinks" data-target-tabcontent="#page1">

                    <a href="#" class="rounded">

                        <i class="fas fa-home fa-sm"></i>

                        <span class="ml-3">Dashboard</span>

                    </a>

                </li>

				

                <li class="navLinks" data-target-tabcontent="#page2">

                    <a href="#" class="rounded">

                        <i class="fas fa-chart-area fa-sm"></i>

                        <span class="ml-3">Graf Ramalan</span>

                    </a>

                </li>

				

                <li class="navLinks" data-target-tabcontent="#page3">

                    <a href="#" class="rounded">

                        <i class="fas fa-table fa-sm"></i>

                        <span class="ml-3">Laporan Penuh</span>

                    </a>

                </li>

				

				<li class="navLinks" data-target-tabcontent="#page5">

                    <a href="#" class="rounded">

                        <i class="fas fa-question"></i>

                        <span class="ml-3">FAQ</span>

                    </a>

                </li>

				

				<li class="navLinks" data-target-tabcontent="#page6">

                    <a href="#" class="rounded">

                        <i class="fas fa-user"></i>

                        <span class="ml-3">Profile pengguna</span>

                    </a>

                </li>

				

                <li>

                    <a id="sidebarCollapse" href="#" class="rounded">

                        <i class="fas fa-list-ul fa-sm"></i>

                        <span class="ml-3">Kecilkan Naviagsi</span> 

                    </a>

                </li>

				

                <li>

                    <a id="logOut" href="#" class="rounded">

                        <i class="fas fa-sign-out-alt fa-sm"></i>

                        <span class="ml-3">Log Keluar</span>

                    </a>

                </li>

            </ul>

        </nav>



        <!-- Page Content  -->

        <div id="content" style="background-color:#FFFFFF"> 

            

            <div id="page1" class="container-fluid page" style="min-height: 0px;">

                

				<!-- emblem row -->

                <div class="row" style="min-height: 0px">

					

                    <div class="mx-auto col-md-6 p-1">

						<div class="container-fluid p-3 text-center" style="min-height:0px;">

							<img src="img/logo.png" alt="logo" class="img-fluid">

						</div>

                    </div>

					

                </div>

				

				<!-- welcome row -->

                <div class="row" style="min-height: 0px">

					

                    <div class="col-md-12 p-1">

						<div class="container-fluid border p-3 shadow rounded" style="min-height:0px;background-color: #FFFFFF">

							<span> Selamat Datang, <span data-boxtext-type="username"></span>  </span>

							<span style="font-size: 10px;" class="text-muted d-block"> Overview Report</span>

						</div>

                    </div>

					

                </div>

				

				<!-- welcome row -->

                <div class="row" style="min-height: 0px">

					

                    <div class="col-md-12 p-1">

						<div class="container-fluid border p-3 shadow rounded" style="min-height:0px;background-color: #FFFFFF">

							<span id="welcomeText"> Profile </span>

							<span style="font-size: 11px;" class="d-block text-muted">NAMA: <span data-boxtext-type="username">Nama</span> </span>

							<span style="font-size: 11px;" class="d-block text-muted">E-MAIL: <span data-boxtext-type="useremail">Azriperisiben96@gmail.com</span> </span>

							<span style="font-size: 11px;" class="d-block text-muted">NO TELEFON: <span data-boxtext-type="userphone">014-6511665</span>

							</span>

							<span style="font-size: 11px;" class="d-block text-muted">ID: <span data-boxtext-type="userstaffno">014-6511665</span>

							</span>

						</div>

                    </div>

					

                </div>

				

				<!-- graph row -->

                <div class="row" style="min-height: 0px">

					

					<div class="col-md-6 p-1 box-container">

						<div class="container-fluid border p-3 shadow rounded position-relative" style="min-height:0px;background-color: #FFFFFF">

							<span style="font-size: 12px">Kutipan Zakat</span>

							<span style="font-size: 10px;" class="text-muted d-block mb-2">Laporan 5 tahun semasa</span>

							<canvas class="container-fluid" data-zakatType="KUTIPAN" data-zakatPurpose="actual"></canvas>

							<i class="fas fa-expand-arrows-alt position-absolute text-muted m-2 box-button" data-box-button-type="zoom"  data-toggle="tooltip" data-placement="left" title="Besarkan Graf"></i>

						</div>

						

                    </div>

					

                </div>

                

            </div>

            

			<div id="page2" class="container-fluid page" style="min-height: 0px;display: none">

                				

				<!-- welcome row -->

                <div class="row" style="min-height: 0px">

					

                    <div class="col-md-12 p-1">

						<div class="container-fluid border p-3 shadow rounded" style="min-height:0px;background-color: #FFFFFF">

							<span id="welcomeText"> Ramalan Kutipan Zakat </span>

							<span style="font-size: 10px;" class="text-muted d-block"> anggaran 5 tahun</span>

						</div>

                    </div>



                </div>

				

				<!-- graph row (Kutipan) -->

                <div class="row" style="min-height: 0px">

					

					<div class="col-md-6 p-1 box-container">

						<div class="container-fluid border p-3 shadow rounded position-relative" style="min-height:0px;background-color: #FFFFFF">

							<span style="font-size: 12px">Kutipan Zakat</span>

							<span style="font-size: 10px;" class="text-muted d-block mb-2">Nilai sebenar</span>

							<canvas class="container-fluid" data-zakatType="KUTIPAN" data-zakatPurpose="actual"></canvas>

							<i class="fas fa-expand-arrows-alt position-absolute text-muted m-2 box-button" data-box-button-type="zoom"  data-toggle="tooltip" data-placement="left" title="Besarkan Graf"></i>

						</div>

						

                    </div>

					

					<div class="col-md-6 p-1 box-container">

						<div class="container-fluid border p-3 shadow rounded position-relative" style="min-height:0px;background-color: #FFFFFF">

							<span style="font-size: 12px">Kutipan Zakat</span>

							<span style="font-size: 10px;" class="text-muted d-block mb-2">Nilai Ramalan</span>

							<canvas class="container-fluid" data-zakatType="KUTIPAN" data-zakatPurpose="forecast"></canvas>

							<i class="fas fa-expand-arrows-alt position-absolute text-muted m-2 box-button" data-box-button-type="zoom"  data-toggle="tooltip" data-placement="left" title="Besarkan Graf"></i>

						</div>

                    </div>

					

                </div>

				

				<!-- graph row (Peniagaan) -->

                <div class="row" style="min-height: 0px">

					

					<div class="col-md-6 p-1 box-container">

						<div class="container-fluid border p-3 shadow rounded position-relative" style="min-height:0px;background-color: #FFFFFF">

							<span style="font-size: 12px">Zakat Perniagaan</span>

							<span style="font-size: 10px;" class="text-muted d-block mb-2">Nilai sebenar</span>

							<canvas class="container-fluid" data-zakatType="PERNIAGAAN" data-zakatPurpose="actual"></canvas>

							<i class="fas fa-expand-arrows-alt position-absolute text-muted m-2 box-button" data-box-button-type="zoom"  data-toggle="tooltip" data-placement="left" title="Besarkan Graf"></i>

						</div>

						

                    </div>

					

					<div class="col-md-6 p-1 box-container">

						<div class="container-fluid border p-3 shadow rounded position-relative" style="min-height:0px;background-color: #FFFFFF">

							<span style="font-size: 12px">Zakat Perniagaan</span>

							<span style="font-size: 10px;" class="text-muted d-block mb-2">Nilai Ramalan</span>

							<canvas class="container-fluid" data-zakatType="PERNIAGAAN" data-zakatPurpose="forecast"></canvas>

							<i class="fas fa-expand-arrows-alt position-absolute text-muted m-2 box-button" data-box-button-type="zoom"  data-toggle="tooltip" data-placement="left" title="Besarkan Graf"></i>

						</div>

                    </div>

					

                </div>

				

				<!-- graph row (Fitrah) -->

                <div class="row" style="min-height: 0px"> 

					

					<div class="col-md-6 p-1 box-container">

						<div class="container-fluid border p-3 shadow rounded position-relative" style="min-height:0px;background-color: #FFFFFF">

							<span style="font-size: 12px">Zakat Fitrah</span>

							<span style="font-size: 10px;" class="text-muted d-block mb-2">Nilai sebenar</span>

							<canvas class="container-fluid" data-zakatType="FITRAH" data-zakatPurpose="actual"></canvas>

							<i class="fas fa-expand-arrows-alt position-absolute text-muted m-2 box-button" data-box-button-type="zoom"  data-toggle="tooltip" data-placement="left" title="Besarkan Graf"></i>

						</div>

						

                    </div>

					

					<div class="col-md-6 p-1 box-container">

						<div class="container-fluid border p-3 shadow rounded position-relative" style="min-height:0px;background-color: #FFFFFF">

							<span style="font-size: 12px">Zakat Fitrah</span>

							<span style="font-size: 10px;" class="text-muted d-block mb-2">Nilai Ramalan</span>

							<canvas class="container-fluid" data-zakatType="FITRAH" data-zakatPurpose="forecast"></canvas>

							<i class="fas fa-expand-arrows-alt position-absolute text-muted m-2 box-button" data-box-button-type="zoom"  data-toggle="tooltip" data-placement="left" title="Besarkan Graf"></i>

						</div>

                    </div>

					

                </div>

				

				<!-- graph row (Harta) -->

                <div class="row" style="min-height: 0px"> 

					

					<div class="col-md-6 p-1 box-container">

						<div class="container-fluid border p-3 shadow rounded position-relative" style="min-height:0px;background-color: #FFFFFF">

							<span style="font-size: 12px">Zakat Harta</span>

							<span style="font-size: 10px;" class="text-muted d-block mb-2">Nilai sebenar</span>

							<canvas class="container-fluid" data-zakatType="HARTA" data-zakatPurpose="actual"></canvas>

							<i class="fas fa-expand-arrows-alt position-absolute text-muted m-2 box-button" data-box-button-type="zoom"  data-toggle="tooltip" data-placement="left" title="Besarkan Graf"></i>

						</div>

						

                    </div>

					

					<div class="col-md-6 p-1 box-container">

						<div class="container-fluid border p-3 shadow rounded position-relative" style="min-height:0px;background-color: #FFFFFF">

							<span style="font-size: 12px">Zakat Harta</span>

							<span style="font-size: 10px;" class="text-muted d-block mb-2">Nilai Ramalan</span>

							<canvas class="container-fluid" data-zakatType="HARTA" data-zakatPurpose="forecast"></canvas>

							<i class="fas fa-expand-arrows-alt position-absolute text-muted m-2 box-button" data-box-button-type="zoom"  data-toggle="tooltip" data-placement="left" title="Besarkan Graf"></i>

						</div>

                    </div>

					

                </div>

                

				<!-- graph row (Tanaman) -->

                <div class="row" style="min-height: 0px"> 

					

					<div class="col-md-6 p-1 box-container">

						<div class="container-fluid border p-3 shadow rounded position-relative" style="min-height:0px;background-color: #FFFFFF">

							<span style="font-size: 12px">Zakat Tanaman</span>

							<span style="font-size: 10px;" class="text-muted d-block mb-2">Nilai sebenar</span>

							<canvas class="container-fluid" data-zakatType="TANAMAN" data-zakatPurpose="actual"></canvas>

							<i class="fas fa-expand-arrows-alt position-absolute text-muted m-2 box-button" data-box-button-type="zoom"  data-toggle="tooltip" data-placement="left" title="Besarkan Graf"></i>

						</div>

						

                    </div>

					

					<div class="col-md-6 p-1 box-container">

						<div class="container-fluid border p-3 shadow rounded position-relative" style="min-height:0px;background-color: #FFFFFF">

							<span style="font-size: 12px">Zakat Tanaman</span>

							<span style="font-size: 10px;" class="text-muted d-block mb-2">Nilai Ramalan</span>

							<canvas class="container-fluid" data-zakatType="TANAMAN" data-zakatPurpose="forecast"></canvas>

							<i class="fas fa-expand-arrows-alt position-absolute text-muted m-2 box-button" data-box-button-type="zoom"  data-toggle="tooltip" data-placement="left" title="Besarkan Graf"></i>

						</div>

                    </div>

					

                </div>

				

				<!-- graph row (Keuntungan bank dan pendapatan lain) -->

                <div class="row" style="min-height: 0px"> 

					

					<div class="col-md-6 p-1 box-container">

						<div class="container-fluid border p-3 shadow rounded position-relative" style="min-height:0px;background-color: #FFFFFF">

							<span style="font-size: 12px">Zakat Keuntungan bank dan pendapatan lain</span>

							<span style="font-size: 10px;" class="text-muted d-block mb-2">Nilai sebenar</span>

							<canvas class="container-fluid" data-zakatType="KEUNTUNGAN_BANK_DAN_PENDAPATAN_LAIN" data-zakatPurpose="actual"></canvas>

							<i class="fas fa-expand-arrows-alt position-absolute text-muted m-2 box-button" data-box-button-type="zoom"  data-toggle="tooltip" data-placement="left" title="Besarkan Graf"></i>

						</div>

						

                    </div>

					

					<div class="col-md-6 p-1 box-container">

						<div class="container-fluid border p-3 shadow rounded position-relative" style="min-height:0px;background-color: #FFFFFF">

							<span style="font-size: 12px">Zakat Keuntungan bank dan pendapatan lain</span>

							<span style="font-size: 10px;" class="text-muted d-block mb-2">Nilai Ramalan</span>

							<canvas class="container-fluid" data-zakatType="KEUNTUNGAN_BANK_DAN_PENDAPATAN_LAIN" data-zakatPurpose="forecast"></canvas>

							<i class="fas fa-expand-arrows-alt position-absolute text-muted m-2 box-button" data-box-button-type="zoom"  data-toggle="tooltip" data-placement="left" title="Besarkan Graf"></i>

						</div>

                    </div>

					

                </div>

				

				<!-- graph row (Emas dan Perak) -->

                <div class="row" style="min-height: 0px"> 

					

					<div class="col-md-6 p-1 box-container">

						<div class="container-fluid border p-3 shadow rounded position-relative" style="min-height:0px;background-color: #FFFFFF">

							<span style="font-size: 12px">Zakat Emas dan Perak</span>

							<span style="font-size: 10px;" class="text-muted d-block mb-2">Nilai sebenar</span>

							<canvas class="container-fluid" data-zakatType="EMAS_DAN_PERAK" data-zakatPurpose="actual"></canvas>

							<i class="fas fa-expand-arrows-alt position-absolute text-muted m-2 box-button" data-box-button-type="zoom"  data-toggle="tooltip" data-placement="left" title="Besarkan Graf"></i>

						</div>

						

                    </div>

					

					<div class="col-md-6 p-1 box-container">

						<div class="container-fluid border p-3 shadow rounded position-relative" style="min-height:0px;background-color: #FFFFFF">

							<span style="font-size: 12px">Zakat Emas dan Perak</span>

							<span style="font-size: 10px;" class="text-muted d-block mb-2">Nilai Ramalan</span>

							<canvas class="container-fluid" data-zakatType="EMAS_DAN_PERAK" data-zakatPurpose="forecast"></canvas>

							<i class="fas fa-expand-arrows-alt position-absolute text-muted m-2 box-button" data-box-button-type="zoom"  data-toggle="tooltip" data-placement="left" title="Besarkan Graf"></i>

						</div>

                    </div>

					

                </div>

				

				<!-- graph row (Simpanan) -->

                <div class="row" style="min-height: 0px"> 

					

					<div class="col-md-6 p-1 box-container">

						<div class="container-fluid border p-3 shadow rounded position-relative" style="min-height:0px;background-color: #FFFFFF">

							<span style="font-size: 12px">Zakat Simpanan</span>

							<span style="font-size: 10px;" class="text-muted d-block mb-2">Nilai sebenar</span>

							<canvas class="container-fluid" data-zakatType="SIMPANAN" data-zakatPurpose="actual"></canvas>

							<i class="fas fa-expand-arrows-alt position-absolute text-muted m-2 box-button" data-box-button-type="zoom"  data-toggle="tooltip" data-placement="left" title="Besarkan Graf"></i>

						</div>

						

                    </div>

					

					<div class="col-md-6 p-1 box-container">

						<div class="container-fluid border p-3 shadow rounded position-relative" style="min-height:0px;background-color: #FFFFFF">

							<span style="font-size: 12px">Zakat Simpanan</span>

							<span style="font-size: 10px;" class="text-muted d-block mb-2">Nilai Ramalan</span>

							<canvas class="container-fluid" data-zakatType="SIMPANAN" data-zakatPurpose="forecast"></canvas>

							<i class="fas fa-expand-arrows-alt position-absolute text-muted m-2 box-button" data-box-button-type="zoom"  data-toggle="tooltip" data-placement="left" title="Besarkan Graf"></i>

						</div>

                    </div>

					

                </div>

				

            </div>

			

			<div id="page3" class="container-fluid page" style="min-height: 0px;display: none;">

                				

				<!-- welcome row -->

                <div class="row" style="min-height: 0px">

					

                    <div class="col-md-12 p-1">

						<div class="container-fluid border p-3 shadow rounded" style="min-height:0px;background-color: #FFFFFF">

							<span id="welcomeText"> Laporan Penuh </span>

							<span style="font-size: 10px;" class="text-muted d-block"> perinician data ramalan </span>

						</div>

                    </div>



                </div>

				

				<!-- zakat Type -->

                <div class="row" style="min-height: 0px">

					

                    <div class="col-md-12 p-1">

						<div class="container-fluid border p-3 shadow rounded" style="min-height:0px;background-color: #FFFFFF">

							<span class="text-muted d-block"> Sila pilih jenis zakat: </span>

								

								<div class="form-group">

									<select id="JenisZakatGraph" class="form-control">

										<option>KUTIPAN</option>

										<option>PERNIAGAAN</option>

										<option>FITRAH</option>

										<option>TANAMAN</option>

										<option>HARTA</option>

										<option>KEUNTUNGAN BANK DAN PENDAPATAN LAIN</option>

										<option>EMAS DAN PERAK</option>

										<option>SIMPANAN</option>

									</select>

								</div>

							

						</div>

                    </div>



                </div>

				

				<!-- graph row (Laporan penuh) -->

                <div class="row" style="min-height: 0px">

					

					<div class="col-md-12 p-1 box-container">

						<div class="container-fluid border p-3 shadow rounded position-relative" style="min-height:0px;background-color: #FFFFFF">

							<span style="font-size: 12px">Graf</span>

							<span style="font-size: 10px;" class="text-muted d-block mb-2" data-box-button-type="report">Nilai sebenar dan ramalan</span>

							<canvas class="container-fluid"></canvas>

						</div>

						

                    </div>

					

                </div>

				

				<!-- table row (Laporan penuh) -->

                <div class="row" style="min-height: 0px">

					

					<div class="col-md-12 p-1 box-container">

						<div class="container-fluid border p-3 shadow rounded position-relative" style="min-height:0px;background-color: #FFFFFF">

							<span style="font-size: 12px">Jadual</span>

							<span style="font-size: 10px;" class="text-muted d-block mb-2">Nilai sebenar dan ramalan</span>

							

							<table id="reportTableActual" class="table table-bordered">

								<thead>

									<tr>

										<th scope="col">Tahun</th>

										<th scope="col">Nilai Sebenar</th>

									</tr>

								</thead>

								<tbody>

									<tr>

										<td>Otto</td>

										<td>@mdo</td>

									</tr>

									<tr>

										<td>Thornton</td>

										<td>@fat</td>

									</tr>

									<tr>

										<td>Thornton</td>

										<td>@fat</td>

									</tr>

								</tbody>

								

							

							</table>



							<table id="reportTableForecast" class="table table-bordered">

								<thead>

									<tr>

										<th scope="col">Tahun</th>

										<th scope="col">Nilai Ramalan Min</th>

										<th scope="col">Nilai Ramalan Purata</th>

										<th scope="col">Nilai Ramalan Max</th>

									</tr>

								</thead>

								<tbody>

									<tr>

										<td>Otto</td>

										<td class="bg-td-min">@mdo</td>

										<td class="bg-td-average">@mdo</td>

										<td class="bg-td-max">@mdo</td>

									</tr>

								</tbody>

								

							

							</table>

							

						</div>

						

                    </div>

					

                </div>

				

            </div>

			

			<div id="page5" class="container-fluid page" style="min-height: 0px;display: none;">

                				

				<!-- welcome row -->

                <div class="row" style="min-height: 0px">

					

                    <div class="col-md-12 p-1">

						<div class="container-fluid border p-3 shadow rounded" style="min-height:0px;background-color: #FFFFFF">

							<span id="welcomeText"> FAQ </span>

							<span style="font-size: 10px;" class="text-muted d-block"> perincian perincian pengunaan sistem ini </span>

						</div>

                    </div>



                </div>

				

				<!-- FAQ info row -->

                <div class="row" style="min-height: 0px">

					

                    <div class="col-md-3 p-1">

						<div class="container-fluid border p-3 shadow rounded" style="min-height:0px;background-color: #FFFFFF">

							<span class="mb-2 d-block"> Info </span>

							<div class="btn-group-vertical mr-2" role="group" aria-label="First group">

								<button type="button" class="btn btn-light box-info-button" data-infopurpose="graf-ramalan">Graf Ramalan</button>

								<button type="button" class="btn btn-light box-info-button" data-infopurpose="laporan-penuh">Laporan Penuh</button>

								<button type="button" class="btn btn-light box-info-button" data-infopurpose="penyuntingan-profil">Penyuntingan Profil</button>

								<button type="button" class="btn btn-light box-info-button" data-infopurpose="penyuntingan-data">Pennyuntingan Data</button>
			

							</div>

						</div>

                    </div>

					

					<div class="col-md-9 p-1">

						<div class="container-fluid border p-3 shadow rounded info-list" style="min-height:50vh;background-color: #FFFFFF">

							<span class="info-title mb-2"> Info </span>

							<span class="info-paragraph d-block" style="font-size: 11px;" class="text-muted d-block"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque recusandae, voluptatibus accusantium vel repudiandae commodi tempore odio explicabo aliquam autem tenetur itaque quibusdam pariatur quis ipsa obcaecati minima excepturi. Illo culpa sint esse omnis harum quos rem consectetur voluptatum animi suscipit cumque voluptatem, labore porro quia veritatis, ex nobis. Soluta. </span>

						</div>

                    </div>



                </div>

				

				

            </div>

			

			<div id="page6" class="container-fluid page" style="min-height: 0px;display: none;">

                				

				<!-- welcome row -->

                <div class="row" style="min-height: 0px">

					

                    <div class="col-md-12 p-1">

						<div class="container-fluid border p-3 shadow rounded" style="min-height:0px;background-color: #FFFFFF">

							<span id="welcomeText"> Profile </span>

							<span style="font-size: 10px;" class="text-muted d-block"> perincian perincian maklumat pengguna </span>

						</div>

                    </div>



                </div>

				

				<!-- profile row -->

                <div class="row" style="min-height: 0px">

					

                    <div class="col-md-12 p-1">

						

						<div class="container-fluid border p-3 shadow rounded" style="min-height:0px;background-color: #FFFFFF">

							<span id="welcomeText"> Profile </span>

							<form id="profileeditfrom">

								<table class="table table-bordered mt-2">

									<tbody>

										<tr>

											<td width="20">GAMBAR PROFIL</td>

											<td colspan="4">

												<img data-boxtext-type="userimg" class="rounded formcaption" src="img/userimage.png" data-boxtext-type="userimage" width="100px" >

												<input style="display:none" type="file" class="form-control forminput" name="userimageinput" aria-describedby="emailHelp" placeholder="Nama">

											</td>

										</tr>

										<tr>

											<td width="20">NAMA</td>

											<td colspan="4">

												<span data-boxtext-type="username" class="formcaption">Nama</span>

												<input style="display:none" type="text" class="form-control forminput" name="usernameinput" aria-describedby="emailHelp" placeholder="Nama">

											</td>

										</tr>

										<tr>

											<td width="20">ID</td>

											<td colspan="4">

												<span data-boxtext-type="userstaffno">014-6511665</span>

											</td>

										</tr>

										<tr>

											<td width="20">E-MAIL</td>

											<td colspan="4">

												<span data-boxtext-type="useremail" class="formcaption">Azriperisiben96@gmail.com</span>

												<input style="display:none" type="email" class="form-control forminput" name="useremailinput" aria-describedby="emailHelp" placeholder="E-Mail">

											</td>

										</tr>

										<tr>

											<td width="20">NO TELEFON</td>

											<td colspan="4">

												<span data-boxtext-type="userphone" class="formcaption">014-6511665</span>

												<input style="display:none" type="text" class="form-control forminput" name="userphoneinput" aria-describedby="emailHelp" placeholder="Nombor Telefon">

											</td>

										</tr>

									</tbody> 

								</table>

								

								<button type="submit" class="btn btn-success forminput" style="display: none">Simpan</button>

								<button type="button" class="btn btn-danger forminput box-profile-button" style="display: none">Batalkan</button>

								<button type="button" class="btn btn-info box-password-button">Ubah Katalaluan</button>

								

							</form>

							

							<i class="fas fa-edit position-absolute text-muted m-2 box-button" data-box-button-type="editprofile" data-toggle="tooltip" data-placement="left" title="Sunting Profil"></i>

							
							<form id="profilepasswordform" class="mt-3" style="display: none">

								<div class="form-group">

									<input type="password" class="form-control" name="newpassword" placeholder="katalaluan baru">

								</div>

								<div class="form-group">

									<input type="password" class="form-control" name="oldpassword" placeholder="katalaluan lama">

								</div>

								

								<button type="submit" class="btn btn-success">Ubah</button>

								<button type="button" class="btn btn-danger box-password-cancel-button">Batalkan</button>

							</form>

							

						</div>

                    </div>

					

                </div>

               

				

				

            </div>

			

        </div>

        

    </div>



	

</body>

</html>

