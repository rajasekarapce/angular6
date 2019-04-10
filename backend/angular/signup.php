<?php 
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');

$data_back = json_decode(file_get_contents('php://input'));
$name = $data_back->{"name"};
$username = $data_back->{"username"};
$password = $data_back->{"password"};
$token = md5(time());

if($name !='' && $username !='' && $password !=''){
	$user = 'root';
	$pass = '';
	$db = new PDO('mysql:host=localhost;dbname=angular', $user, $pass);; // DB connection
	$sql = "INSERT INTO usermgmt SET name='$name',username='$username',password='$password',token='$token'";
	$prepareQry = $db->prepare($sql);
	$prepareQry->execute();
}
?>