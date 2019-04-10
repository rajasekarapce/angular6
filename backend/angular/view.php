<?php 
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');

//$data_back = json_decode(file_get_contents('php://input'));
$user = 'root'; $pass = '';
$db = new PDO('mysql:host=localhost;dbname=angular', $user, $pass);; // DB connection

$pdoSql = "SELECT * FROM `game`";							
$pdoStmt = $db->prepare ( $pdoSql );
$pdoStmt->execute();
$getrec = $pdoStmt->fetchAll ( PDO::FETCH_ASSOC );
$db = null;
$ret = array('game' => $getrec);
echo json_encode($ret);

/* echo '{
  "game": [
  {
      "id": "1",
      "name": "A song of ice and fire",
      "price": "George RR Martin"
  },
  {
      "id": "2",
      "name": "Harry Potter",
      "price": "JK Rowling"
  },
  {
      "id": "3",
      "name": "Anna Karenina",
      "price": "Leo Tolstoy"
  },
  {
      "id": "4",
      "name": "Great Expectations",
      "price": "Charles Dickens"
  },
  {
      "id": "5",
      "name": "Middlemarch",
      "price": "George Eliot"
  }]
}'; */
?>