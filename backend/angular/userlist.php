<?php 
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');

//$data_back = json_decode(file_get_contents('php://input'));
$user = 'root'; $pass = '';
$db = new PDO('mysql:host=localhost;dbname=angular', $user, $pass);; // DB connection

$pdoSql = "SELECT * FROM `usermgmt` order by id desc";							
$pdoStmt = $db->prepare ( $pdoSql );
$pdoStmt->execute();
$getrec = $pdoStmt->fetchAll ( PDO::FETCH_ASSOC );
$db = null;
$ret = array('user' => $getrec);
echo json_encode($ret);
?>