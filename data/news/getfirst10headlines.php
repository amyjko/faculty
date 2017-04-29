<?php

$storyID = $_GET["storyID"];

$host = "ovid01.u.washington.edu:35232";
$user = "root";
$password = "funnybunny";
$database = "news";

$connection = mysql_connect($host,$user,$password)
	or die("ERROR: Could not connect: ".mysql_error());

mysql_select_db($database,$connection) 
	or die("ERROR: Error in selecting the database:".mysql_error());

$sql="SELECT text FROM articles WHERE storyID = $storyID";

$sql_result=mysql_query($sql,$connection) 
	or exit("Sql Error".mysql_error());

$headlines = array();

$limit = 9;

while ($row = mysql_fetch_array($sql_result, MYSQL_NUM)) {
    
    $articletext = $row[0];
    $headline = strtok($articletext, "\n");
    array_push($headlines, $headline);
    
    if(count($headlines) > $limit)
    	break;
    
}

echo json_encode($headlines);

?>