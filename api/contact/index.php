<?php

if( empty($_POST['name']) && empty($_POST['email']) ) die();
if ($_POST){
    // set response code - 200 OK
    http_response_code(200);
    $subject = $_POST['fname'];
    $to =  "bundaoliver@gmail.com";
    $from = $_POST['email'];
    //data
    $msg = $_POST['number'] . $_POST['message'];
    //Headers
    $headers  = "MIME-Version: 1.0\r\n";
    $headers .= "Content-type: text/html; charset=UTF-8\r\n";
    $headers .= "From: <".$from. ">" ;
    mail($to,$subject,$msg,$headers);
    //echo json_encode( $_POST );
    echo json_encode(array("sent" => true));
} else {
 // tell the user about error
 echo json_encode(
     [
        "sent" => false,
        "message" => "Something went wrong"
     ]
 );
}
?>
