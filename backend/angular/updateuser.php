<?php 
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');

$data_back = json_decode(file_get_contents('php://input'));

$name = $data_back->{"name"};
$username = $data_back->{"username"};
$password = $data_back->{"password"};
$id = $_REQUEST['edit'];

if($name !='' && $username !='' && $password !='' && $id !=0){
	$user = 'root';
	$pass = '';
	$db = new PDO('mysql:host=localhost;dbname=angular', $user, $pass);; // DB connection
	
	$sql = "UPDATE usermgmt SET name='$name',username='$username',password='$password' WHERE id='$id'";
	$prepareQry = $db->prepare($sql);
	$prepareQry->execute();
}

?>