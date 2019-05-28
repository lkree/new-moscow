<?php

$__EMAILS__ = ["support@odobri.online", 
               "manager@odobri.online",
               "ceo@garnet.house"];

function sendEmailPopup($to) {
  $subject = "Заявка с сайта Москва Дорогая"; 
  $message = getPopupData();
  $headers = "Content-type: text/html; charset=utf-8 \r\n"; 

  mail($to, $subject, $message, $headers); 
}

function writeDataToTxt() {
  $document = fopen('./requests.html', 'a+');
  $date = date('l jS \of F Y h:i:s A');
  fwrite($document, "<table><tr><td>$date</td></tr>");
  fwrite($document, getPopupData());
  fwrite($document, '<tr><td>-------------------------------------------------------</td></tr></table>');
  fclose($document);
}

function getPopupData() {
  $dataToWrite = "";

  foreach($_GET as $k => $v) {
    $data = json_decode($k);
    if (gettype($data) === 'object') {
      foreach($data as $key => $value) {
        $dataToWrite .= "<tr><td><b>$key</b></td><td>$value</td></tr>";
      }
    }
  }
  return $dataToWrite;
}

foreach($__EMAILS__ as $k => $v) {
  sendEmailPopup($v);
}

writeDataToTxt();
?>