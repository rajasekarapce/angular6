<?php 
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');

$id = isset($_REQUEST['edit'])?$_REQUEST['edit']:'';

$user = 'root'; $pass = '';
$db = new PDO('mysql:host=localhost;dbname=angular', $user, $pass);; // DB connection

$pdoSql = "SELECT * FROM `game` where id='$id'";							
$pdoStmt = $db->prepare ( $pdoSql );
$pdoStmt->execute();
$getrec = $pdoStmt->fetch ( PDO::FETCH_ASSOC );
$db = null;
$ret = array('game' => $getrec);
//echo json_encode($ret);
echo json_encode($getrec);

?>