<?php 
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');

$data_back = json_decode(file_get_contents('php://input'));
$name = $data_back->{"name"};
$price = $data_back->{"price"};

if($name !='' && $price !=''){
	$user = 'root';
	$pass = '';
	$db = new PDO('mysql:host=localhost;dbname=angular', $user, $pass);; // DB connection
	$sql = "INSERT INTO game SET name='$name',price='$price',CreateDate=NOW()";
	$prepareQry = $db->prepare($sql);
	$prepareQry->execute();
}
?>