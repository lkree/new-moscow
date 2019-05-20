<?php
header("Content-Type: text/html; charset=utf-8");
$email = htmlspecialchars($_POST["email"]);
$name = htmlspecialchars($_POST["name"]);
$tel = htmlspecialchars($_POST["tel"]);
$whatsApp = htmlspecialchars($_POST["whatsApp"]);
$telegram = htmlspecialchars($_POST["telegram"]);
$vk = htmlspecialchars($_POST["vk"]);
$viber = htmlspecialchars($_POST["viber"]);
$target = htmlspecialchars($_POST["target"]);


$refferer = getenv('HTTP_REFERER');
$date=date("d.m.y"); // число.месяц.год  
$time=date("H:i"); // часы:минуты:секунды 
$myemail = "ceo@garnet.house"; // e-mail администратора
$myemail1 = "support@odobri.online";
$myemail2 = "manager@odobri.online";

// Отправка письма администратору сайта

$tema = "Москва Дорогая";
$message_to_myemail = "Текст письма:
<br><br>
Связаться через: $target<br>
Имя: $name<br>
E-mail: $email<br>
Телефон: $tel<br>
Viber: $viber<br>
whatsApp: $whatsApp<br>
VK: $vk<br>
Telegram: $telegram<br>
Источник (ссылка): $refferer
";

mail($myemail, $tema, $message_to_myemail, "From: Москва Дорогая <support@odobri.online> \r\n Reply-To: Sitename \r\n"."MIME-Version: 1.0\r\n"."Content-type: text/html; charset=utf-8\r\n" );
mail($myemail1, $tema, $message_to_myemail, "From: Москва Дорогая <support@odobri.online> \r\n Reply-To: Sitename \r\n"."MIME-Version: 1.0\r\n"."Content-type: text/html; charset=utf-8\r\n" );
mail($myemail2, $tema, $message_to_myemail, "From: Москва Дорогая <support@odobri.online> \r\n Reply-To: Sitename \r\n"."MIME-Version: 1.0\r\n"."Content-type: text/html; charset=utf-8\r\n" );




// Сохранение инфо о лидах в файл leads.xls

$f = fopen("leads.xls", "a+");
fwrite($f," <tr>");    
fwrite($f," <td>$email</td> <td>$name</td> <td>$tel</td>   <td>$date / $time</td>");   
fwrite($f," <td>$refferer</td>");    
fwrite($f," </tr>");  
fwrite($f,"\n ");    
fclose($f);

?>