<?php

$path = $_GET["path"];

$host = "ovid01.u.washington.edu:35232";
$user = "root";
$password = "funnybunny";
$database = "issues";

$connection = mysql_connect($host,$user,$password)
	or die("Could not connect: ".mysql_error());

mysql_select_db($database,$connection) 
	or die("Error in selecting the database:".mysql_error());

$sql="SELECT text FROM issues WHERE path = '$path'";

$sql_result=mysql_query($sql,$connection) 
	or exit("SQL Error".mysql_error());

if(mysql_num_rows($sql_result) != 1)
	die("ERROR: There should only be one result for path " . $path . " but there were " . mysql_num_rows($sql_result));

$text = mysql_result($sql_result, 0, "text");

echo $text;

?>