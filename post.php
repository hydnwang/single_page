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
  
  // 指定收件者
  $to = "onyxlw@yahoo.com.tw";
  // 指定header
  $headers  = "MIME-Version: 1.0\r\n";
  $headers .= "Content-type: text/plain; charset=utf-8\r\n";
  $headers .= "From: $name<$email>\r\n";
  // Additional headers
  /*$headers .= "To: Mary <mary@example.com>, Kelly <kelly@example.com>\r\n";
  $headers .= "From: Birthday Reminder <birthday@example.com>\r\n";
  $headers .= "Cc: birthdayarchive@example.com\r\n";
  $headers .= "Bcc: birthdaycheck@example.com\r\n";*/

  // 傳送郵件
  mail($to, $subject, $message, $headers);
  /*if( mail("$to", "$subject", "$message", "$header"))
    echo "success";
  else
    echo "fail";*/

  //將網頁重新導向到 index.php
  //header("location:index.html");
  //exit();  // Content-type: text/plain; 
?>
<html>
<head>
<meta charset="utf-8">
<title>Customer's Message Confirmed</title>
<link href="css/style.css" rel="stylesheet" type="text/css">
<link href="css/post.css" rel="stylesheet" type="text/css">
</head>
<body>
  <div class="content orange">
    <div class="success">
      <p>Wow! Hey...<?php echo '<strong><span style="color:#000000">'.$name.'</span></strong>'; ?>, if you see this page, it means that you've successfully left a message to me.</p>
      <p>I'm appreciate for your concern and I promise that you'll be replied soon, thanks!</p>
      <br>
      <br>
      <br>
      <p>You can <a href="http://jaxvania.comuf.com/test/">Go Back</a> or just close this page.</a></p>
    </div>
  </div>
</body>
</html>