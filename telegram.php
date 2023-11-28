<?php

/* https://api.telegram.org/bot6808961121:AAHG-sBjIU0GGiemQpf0lCi66UI2m5xkLXg/getUpdates,
где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее */

$name = $_POST['user_name'];
$phone = $_POST['user_phone'];
$email = $_POST['user_email'];
$token = "6808961121:AAHG-sBjIU0GGiemQpf0lCi66UI2m5xkLXg";
$chat_id = "-4098771282";
$arr = array(
  'User name: ' => $name,
  'Phone: ' => $phone,
  'Email' => $email
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

if ($sendToTelegram) {
  header('Location: thank-you.html');
} else {
  echo "Error";
}
?>