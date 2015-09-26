<?php
  require_once("dbdata.inc.php");
	
  $name = $_POST["name"];
  $email = $_POST["email"];
  $subject = $_POST["subject"];
  $message = $_POST["message"];
  $current_time = date("Y-m-d H:i:s");

  //建立資料連接
  $link = create_connection();

  //執行 SQL 命令
  $sql = "INSERT INTO test(name, email, subject, message, date)
          VALUES('$name', '$email', '$subject', '$message', '$current_time')";
  $result = execute_sql("a8809602_test", $sql, $link);

  //關閉資料連接
  mysql_close($link);

  //將網頁重新導向到 index.php
  header("location:index.html");
  exit();
?>