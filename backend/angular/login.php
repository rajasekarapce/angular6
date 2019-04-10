<?php 
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');

$data_back = json_decode(file_get_contents('php://input'));
$username = $data_back->{"username"};
$password = $data_back->{"password"};

if($username !='' && $password !=''){
	$user = 'root';
	$pass = '';
	$db = new PDO('mysql:host=localhost;dbname=angular', $user, $pass);; // DB connection
	$sql = "select * from usermgmt where username='$username' and password='$password'";
	$prepareQry = $db->prepare($sql);
	$prepareQry->execute();
	$getrec = $prepareQry->fetch ( PDO::FETCH_ASSOC );
	$db = null;
	$ret = array('user' => $getrec);
	echo json_encode($getrec);
}
?>