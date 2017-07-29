<?php

header('Access-Control-Allow-Origin: http://localhost:3000');
header('Access-Control-Allow-Origin: http://royscheffers.com');

//echo 'within the PHP script - mailed2';

// var_dump($_POST);

$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$message = $_POST['message'];
$human = intval($_POST['human']);
$from = 'Portfolio Contact Form';
$to = 'r.scheffers@gmail.com';
$subject = 'Message from royscheffers.com';

$body = "Hey, \n\n" .
				"Someone reached out to you from http://royscheffers.com.\n" .
				"From: $name\nE-Mail: $email\nPhone: $phone\nMessage:\n$message";

// $result = 'script called...';
if (mail ($to, $subject, $body, $from)) {
	$result='<div class="alert alert-success">Thank You! I will be in touch soon.</div>';
} else {
	$result='<div class="alert alert-danger">Sorry there was an error sending your message.<br />Use r.scheffers@gmail.com to reach out to me directly or try again later.</div>';
}
// return to Javascript

echo $result;

?>
