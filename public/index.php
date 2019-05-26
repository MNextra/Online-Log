<?php


/*

r=teacher/home
r=teacher/create_class

*/

$route = isset($_GET['r']) ? $_GET['r'] : NULL;

set_include_path(get_include_path() . PATH_SEPARATOR . '../');
//var_dump($route);
if ($route) {
	if (!session_id()) session_start();
	$partition = explode("/", $route);	

	$r0  = $partition[0];
	$class_name = ucfirst(strtolower($r0))."Controller";
	$function_name = $partition[1];
	if(!file_exists('../controller/' . $class_name . '.php')){
		echo '<script>alert("err route");window.history.go(-1);</script>';
        exit;
	}
	include('controller/' . $class_name . '.php');
	if(!class_exists($class_name)){
		echo '<script>alert("err route");window.history.go(-1);</script>';
        exit;
	}
	$controller = new $class_name();
	if(!method_exists($controller,$function_name)){
		echo '<script>alert("err route");window.history.go(-1);</script>';
        exit;
	}
	$controller->$function_name();
} else {
	include('controller/LoginController.php');
	$loginController = new LoginController();
	$loginController->login_page();
}
