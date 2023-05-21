<!DOCTYPE html>
<html>
	<?php
		// Load profile JSON
		$json_perfil = file_get_contents('/25523204/data/perfil.json');

		$perfil = json_decode($json_perfil);

		// Load configuration JSON
		$len = substr($_SERVER['HTTP_ACCEPT_LANGUAGE'], 0, 2);

		$configFiles = [
			"es" => "/25523204/data/configES.json",
			"pt" => "/25523204/data/configPT.json",
			"default" => "/25523204/data/configEN.json"
		];

		$json_config = file_get_contents($configFiles[$len] ?? $configFiles["default"]);
		$config = json_decode($json_config);

		function parseArray($group) {
			$parsed = current($group);
			$isFirst = true;
			$count = count($group);
			foreach($group as $element) {
				if ($isFirst) {
					$isFirst = false;
					continue;
				}  
				if (--$count <= 1) {
					$parsed .= "y " . $element;
				} 
				else {
					$parsed .= ", " . $element;
				}		
			}

			return $parsed;
		}
	?>
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
		<meta charset="UTF-8" />
		<link rel="icon" href="http://www.ciens.ucv.ve/portalasig2/favicon.ico" type="image/x-icon" />
		<link rel="stylesheet" href="../css/bootstrap/bootstrap.css" />
		<link rel="stylesheet" href="../css/style.css" type="text/css" />
		<link rel="stylesheet" href="perfil.css" type="text/css" />
		<title><?php echo $perfil->nombre; ?></title>
	</head>
	<body>
		<header>
			<nav>
				<ul class="container-fluid">
					<li class="logo col">
						<?php echo implode(" ", $config->sitio); ?>
					</li>
					<li class="saludo col">
						<?php echo $config->saludo . ", " . $perfil->nombre; ?>
					</li>
					<li class="busqueda">
						<?php echo $config->home; ?>
						<a href="index.html"></a>
					</li>
				</ul>
			</nav>
		</header>
		<section class="container-fluid _container">
			<div class="row col-md-11 col-sm-12">
				<div class="row col-md-11 col-sm-12 profile-box">
					<div class="col-md-3 col-sm-8" id="foto">
						<img src="<?php echo $perfil->imagen; ?>" id="profile-image" class="img-fluid" />
						<figure>
							<svg class="" viewBox="0 0 170 320" preserveAspectRatio="none">
								<path id="svg-show" d="M0,0C0,0,0,200,0,200.14385C24.580441,186.61523,55.897012,195.90157,90,195.90157C124.10299,195.90157,155.41956,186.61523,180,171.14385C180,171.14385,180,0,180,0C180,0,0,0,0,0C0,0,0,0,0,0" />
								<desc>Created with Snap</desc>
								<defs></defs>
							</svg>
							<figcaption>
								<p id="text-svg">Hola, esta es una animacion</p>
							</figcaption>
						</figure>
					</div>
					<div class="col-md-9 col-sm-12 profile-info">
						<!-- name -->
						<h1 class="row" id="nombre">
							<?php echo $perfil->nombre; ?>
						</h1>
						<!-- description -->
						<p class="row" id="descripcion">
							<?php echo $perfil->descripcion; ?>
						</p>
						<!-- elements -->
						<div class="container" id="tabla-datos-perfil">
							<p class="row col-10"><span id="color-favorito">
								<?php echo $config->color . ": " . $perfil->color; ?>
							</span></p>
							<p class="row col-10"><span id="libro-favorito">
								<?php echo $config->libro . ": " . $perfil->libro; ?>
							</span></p>
							<p class="row col-10"><span id="estilo-musica">
								<?php echo $config->musica . ": " . $perfil->musica; ?>
							</span></p>
							<p class="row col-10"><span id="videojuegos">
								<?php echo $config->video_juego . ": " . parseArray($perfil->video_juego); ?>
							</span></p>
							<p class="row col-10 lenguajes" id="lenguajes">
								<?php echo $config->lenguajes . ": " . parseArray($perfil->lenguajes); ?>
							</p>
							<p class="row col-10" id="link">
								<?php echo str_replace("[email]", '<a href="mailto:'.$perfil->email.'">' .$perfil->email.'</a>', $config->email); ?>
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
		<footer>
			<?php echo $config->copyRight; ?>
		</footer>
		<script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
		<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
		<script src="../js/bootstrap/bootstrap.js"></script>
		<!-- <script src="js/index.js"></script> -->
		<script src="js/svg.js"></script>
	</body>
</html>
