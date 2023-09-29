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
	
<!-- navigation bar-->
<link rel="stylesheet" href="css/navbarstyle.css" defer>
<script src="js/navigationbar.js" defer></script>

<!-- boxes -->
<link rel="stylesheet" href="css/boxes.css" defer>
<script src="js/boxes.js" defer></script>

<!--Own style and script-->
<script src="js/adminPage.js" defer></script>
	
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

                <h6 class="text-center header-role" data-boxtext-type="userrole">Admin</h6>

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

                        <i class="fas fa-users fa-sm"></i>

                        <span class="ml-3">Senarai Pengguna</span>

                    </a>

                </li>
				
				<li class="navLinks" data-target-tabcontent="#page3">

                    <a href="#" class="rounded">

                        <i class="fas fa-user"></i>

                        <span class="ml-3">Profile pengguna</span>

                    </a>

                </li>

				<li class="navLinks" data-target-tabcontent="#page4">

                    <a href="#" class="rounded">

                        <i class="fas fa-question"></i>

                        <span class="ml-3">FAQ</span>

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
		

				<!-- user info row -->

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

			
				<!-- user approval list row -->

                <div class="row" style="min-height: 0px">

					

					<div class="col-md-12 p-1 box-container">

						<div class="container-fluid border p-3 shadow rounded position-relative" style="min-height:0px;background-color: #FFFFFF" >

							<span id="welcomeText"> Senarai Permohonan Pengguna </span>

							<!--go from usertable to table body to find the the adminMainPageUserList and create the clone there-->
							<table id="userListTable" class="table table-hover mt-3">
								<thead>
									<tr>
										<th scope="col">No Staff</th>
										<th scope="col">Nama</th>
										<th scope="col">E mail</th>
										<th scope="col">No Telefon</th>
										<th scope="col"></th>
									</tr>
								</thead>
								<tbody>

									<!--ID are for database reference for this user-->
									<tr id="-1" data-blueprint="adminMainPageUserList" data-target="parentRow" style="display:none">

										<td data-target="userStaffNo"></td>
										<td data-target="userName"></td>
										<td data-target="userEmail"></td>
										<td data-target="userPhoneNum" </td>
											<td width="50">
												<div class="btn-group" role="group" aria-label="Basic example">

													<!--change user status and send email move this row to bottom-->
													<button type="button" class="btn btn-success" data-BTNType="userApproveBTN">Sahkan</button>

													<!--remove user from database remove this row-->
													<button type="button" class="btn btn-danger" data-BTNType="userDeclineBTN">Tolak</button>

												</div>
											</td>
									</tr>
									<tr>
										<td class="text-center text-muted" colspan="5" data-rowType="caption" style="display: none">Tiada Permohonan buat masa sekarang</td>
									</tr>
								</tbody>
							</table>

						</div>

						

                    </div>

					

                </div>
				
				<!-- user register link -->
				<div class="row" style="min-height: 0px">

					

					<div class="col-md-6 p-1 box-container">

						<div class="container-fluid border p-3 shadow rounded position-relative" style="min-height:0px;background-color: #FFFFFF" >

							<span id="welcomeText" class="d-block"> Pautan pendaftaran pengguna </span>
							
							<a id="signUpLink" style="text-decoration: none;color:black" href="signUpForm.html"></a>
	
						</div>

						

                    </div>

					

                </div>
                

            </div>
            

			<div id="page2" class="container-fluid page" style="min-height: 0px;display: none">
				
				<!-- welcome row -->

                <div class="row" style="min-height: 0px">

					

                    <div class="col-md-12 p-1">

						<div class="container-fluid border p-3 shadow rounded" style="min-height:0px;background-color: #FFFFFF">

							<span id="welcomeText"> Senarai Pengguna </span>

							<span style="font-size: 10px;" class="text-muted d-block"> perincian maklumat pengguna sistem ini</span>

						</div>

                    </div>



                </div>
				
				<!-- user list table row -->

                <div class="row" style="min-height: 0px">
					
					<!-- top management -->
					<div class="col-md-12 p-1 box-container">

						<div class="container-fluid border p-3 shadow rounded position-relative" style="min-height:0px;background-color: #FFFFFF" >

							<span id="welcomeText"> Senarai Pihak Atasan </span>

							<!--go from usertable to table body to find the the adminMainPageUserList and create the clone there-->
							<div id="adminTableTopManagement" class="table-responsive mt-3">
								<table class="table table-hover">
									<thead>
										<tr>
											<th scope="col">No Staff</th>
											<th scope="col">Nama</th>
											<th scope="col">E mail</th>
											<th scope="col">No Telefon</th>
											<th scope="col"></th>
										</tr>
									</thead>
									<tbody>
										<tr id="-1" data-blueprint="adminMainPageTopManagementList" data-target="parentRow" style="display: none">
											<td data-target="userStaffNo"></td>
											<td data-target="userName"></td>
											<td data-target="userEmail"></td>
											<td data-target="userPhoneNum"</td>
											<td>
												<div class="btn-group" role="group" aria-label="Basic example">
													<button type="button" class="btn btn-info" data-BTNType="editTopManager"><i class="fas fa-edit fa-sm"></i></button>
													<button type="button" class="btn btn-danger" data-BTNType="removeUser"><i class="fas fa-trash fa-sm"></i></button>
												</div>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
							
							<i id="addTopManagementBTN" class="fas fa-plus position-absolute text-muted m-2 box-button" data-toggle="tooltip" data-placement="left" title="Tambah Pihak Atasan"></i>

						</div>

						

                    </div>
					
					<!-- staff -->
					<div class="col-md-12 p-1 box-container">

						<div class="container-fluid border p-3 shadow rounded position-relative" style="min-height:0px;background-color: #FFFFFF" >

							<span id="welcomeText"> Senarai Staff </span>

							<div id="adminTableStaff" class="table-responsive mt-3">
								<table class="table table-hover">
									<thead>
										<tr>
											<th scope="col">No Staff</th>
											<th scope="col">Nama</th>
											<th scope="col">E mail</th>
											<th scope="col">No Telefon</th>
											<th scope="col"></th>
										</tr>
									</thead>
									<tbody>
										
										<!--data-target parent are used to identify the row-->
										<tr class="" id="-1" data-blueprint="adminMainPageStaffList" data-target="parentRow" style="display: none">
											<td data-target="userStaffNo"></td>
											<td data-target="userName"></td>
											<td data-target="userEmail"></td>
											<td data-target="userPhoneNum"</td>
											<td>
												<div class="btn-group" role="group" aria-label="Basic example">
													<button type="button" class="btn btn-info" data-BTNType="staffEditPassword"><i class="fas fa-key fa-sm"></i></button>
													<button type="button" class="btn btn-danger" data-BTNType="removeUser"><i class="fas fa-trash fa-sm"></i></button>
												</div>
											</td>
										</tr>
										
									</tbody>
								</table>
							</div>

						</div>

						

                    </div>

                </div>
                
            </div>

			
			<div id="page3" class="container-fluid page" style="min-height: 0px;display: none;">

                				

				<!-- welcome row -->

                <div class="row" style="min-height: 0px">

					

                    <div class="col-md-12 p-1">

						<div class="container-fluid border p-3 shadow rounded" style="min-height:0px;background-color: #FFFFFF">

							<span id="welcomeText"> Profile </span>

							<span style="font-size: 10px;" class="text-muted d-block"> perincian maklumat pengguna </span>

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

									<input name="newpassword" type="password" class="form-control" placeholder="katalaluan baru">

								</div>

								<div class="form-group">

									<input name="oldpassword" type="password" class="form-control"  placeholder="katalaluan lama">

								</div>

								

								<button type="submit" class="btn btn-success">Ubah</button>

								<button type="button" class="btn btn-danger box-password-cancel-button">Batalkan</button>

							</form>

							

						</div>

                    </div>

					

                </div>

               

				

				

            </div>
			

			<div id="page4" class="container-fluid page" style="min-height: 0px;display: none;">

                				

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
								
								<button type="button" class="btn btn-light box-info-button" data-infopurpose="pendaftaran-staf">Pendaftaran Staff</button>
								
								<button type="button" class="btn btn-light box-info-button" data-infopurpose="pendaftaran-pengurus">Pendaftaran Pengurus</button>
								
								<button type="button" class="btn btn-light box-info-button" data-infopurpose="penyuntingan-profil">Penyuntingan Profil</button>
								
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


        </div>

        

    </div>


	<!-- Modal Add Top Management-->
<div class="modal fade" id="adminAddTopManagementModal" tabindex="-1" role="dialog" aria-labelledby="adminAddTopManagementModalLabel" aria-hidden="true">
	<div class="modal-dialog modal-xl modal-dialog-centered" role="document">
		<div class="modal-content">
			<div class="modal-header">
				<h5 class="modal-title" id="adminAddTopManagementModalLabel">Tambah Akaun Pengurus Atasan</h5>
				<button id="adminAddTopManagementModalClose" type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
			
			</div>
			<div class="modal-body">
				
				<form id="DaftarForm" class="container-fluid">

					<div class="form-group">
						<label for="DaftarNoTel" class="font-weight-bolder responsive-text-15">Nama:</label>
						<input name="first_name" placeholder="Nama Penuh" class="form-control" type="text">
					</div>

					<div class="form-group">
						<label for="DaftarJantina" class="font-weight-bolder responsive-text-15">Jantina:</label>
						<select class="form-control" id="DaftarJantina" name="jantina">
							<option>LELAKI</option>
							<option>WANITA</option>
						</select>
					</div>

					<div class="form-group">
						<label for="DaftarNoStaff" class="font-weight-bolder responsive-text-15">No Staff:</label>
						<input type="text" class="form-control" id="DaftarNoStaff" name="DaftarNoStaff" aria-describedby="emailHelp" placeholder="Sila masukkan nombor staff anda">
					</div>

					<div class="form-group">
						<label for="DaftarKatalaluan" class="font-weight-bolder responsive-text-15">Katalaluan:</label>
						<input type="password" class="form-control" id="DaftarKatalaluan" name="DaftarKatalaluan" placeholder="Katalaluan">
					</div>

					<div class="form-group">
						<label for="DaftarNoTel" class="font-weight-bolder responsive-text-15">No Telefon:</label>
						<input type="text" class="form-control" id="DaftarNoTel" name="DaftarNoTel" placeholder="012-3456789">
					</div>

					<div class="form-group">
						<label for="DaftarEmail" class="font-weight-bolder responsive-text-15">E mail:</label>
						<input type="email" class="form-control" id="DaftarEmail" name="DaftarEmail" placeholder="username@gmail.com">
					</div>
					
					<button type="submit" id="BTNApproveDaftar" class="btn btn-success responsive-text-15" onsubmit="return false">Daftar</button>
				</form>
				<small data-target='modalNotification' class="form-text" style="color: #0FBB16;display: none">Pengguna ditambah</small>
			</div>
		</div>
	</div>
</div>

<!-- Modal Edit Top Management-->
<div class="modal fade" id="adminEditTopManagementModal" tabindex="-1" role="dialog" aria-labelledby="adminEditTopManagementModalLabel" aria-hidden="true">
	<div class="modal-dialog modal-xl modal-dialog-centered" role="document">
		<div class="modal-content">
			<div class="modal-header">
				<h5 class="modal-title" id="adminEditTopManagementModalLabel">Sunting Profil Pengurus Atasan Baharu</h5>
				<button id="adminEditTopManagementModalClose" type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
			
			</div>
			<div class="modal-body">
				<form id="editTopManagerInfo" class="border-bottom mb-2">
					<!--still require form validation and password change-->
					<div class="parent form-row">
						<div class="form-group col-md-12">
						  <label for="inputUserName" class="font-weight-bolder">Maklumat Peribadi</label>
						  <input type="text" class="form-control" id="inputUserName" name="inputUserName" placeholder="Nama">
						</div>
					</div>
					
					
					<div class="parent form-row"> 
						<div class="form-group col-12">
							<input type="email" class="form-control" id="inputUserEmail" name="inputUserEmail" placeholder="Email"> 
						</div>
					</div>
					
				
					<div class="parent form-row">
						<div class="form-group col-12">
							<input type="text" class="form-control" id="inputUserPhoneNo" name="inputUserPhoneNo" placeholder="012-4567890">
						</div>
						
						<div class="form-group col-2">
							<button type="submit" class="btn btn-success" data-BTNType="editProfile">Ubah</button>
						</div>
						
					</div>
					
				</form>
				
				<form id="editTopManagerSecurity" class="border-bottom mb-2">		
					<div class="parent form-row">
						<div class="form-group col-md-12">
						  <label for="inputUserPassword" class="font-weight-bolder">Maklumat Keselamatan</label>
						  <input type="password" class="form-control" id="inputUserNewPassword" name="inputUserNewPassword" placeholder="katalaluan baharu">
						</div>
						<div class="form-group col-2">
							<button type="submit" class="btn btn-success" data-BTNType="editProfile">Ubah</button>
						</div>
					</div>
				</form>
				<small data-target='modalNotification' class="form-text" style="color: #0FBB16;display: none">Maklumat diubah</small>
			</div>
		</div>
	</div>
</div>

<!-- Modal Edit Staff Password-->
<div class="modal fade" id="adminEditStaffPasswordModal" tabindex="-1" role="dialog" aria-labelledby="adminEditStaffPasswordModalLabel" aria-hidden="true">
	<div class="modal-dialog modal-xl modal-dialog-centered" role="document">
		<div class="modal-content">
			<div class="modal-header">
				<h5 class="modal-title" id="adminEditStaffPasswordModalLabel">Sunting Katalaluan Staff</h5>
				<button id="adminEditStaffPasswordModalClose" type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
			
			</div>
			<div class="modal-body">
				<form id="editSatffSecurityForm" class="border-bottom mb-2">		
					<div class="parent form-row">
						<div class="form-group col-md-12">
						  <label for="inputUserPassword" class="font-weight-bolder">Maklumat keselamatan</label>
						  <input type="password" class="form-control" id="inputUserNewPassword" name="inputUserNewPassword" placeholder="Katalaluan baharu">
						</div>
						<div class="form-group col-2">
							<button type="submit" class="btn btn-success" data-BTNType="editProfile">Ubah</button>
						</div>
					</div>
				</form>
				<small data-target='modalNotification' class="form-text" style="color: #0FBB16;display: none">Maklumat diubah</small>
			</div>
		</div>
	</div>
</div>
	

</body>

</html>

