<?php 
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');

$data_back = json_decode(file_get_contents('php://input'));
$id = $data_back->{"del"};

if($id !=0){
	$user = 'root';
	$pass = '';
	$db = new PDO('mysql:host=localhost;dbname=angular', $user, $pass);; // DB connection
	$sql = "DELETE FROM game WHERE id='$id'";
	$prepareQry = $db->prepare($sql);
	$prepareQry->execute();
}
?>