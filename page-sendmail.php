<?php
if (isset($_POST['correo'])) {
    
    $from           = trim($_POST['correo']);
    $nombre 		= utf8_decode($_POST['nombre']);
    $correo         = utf8_decode($_POST['correo']);
    $mensaje        = utf8_decode($_POST['mensaje']);

    require_once('./PHPMailer/class.phpmailer.php');

    //PHPMailer Object
    $mail = new PHPMailer(true);
    $mail->From = $correo;
    $mail->FromName = $nombre;
    $mail->addAddress('parque@loscamachos.com.mx', 'Los Camachos');
    // $mail->addAddress('frkalderon@gmail.com', 'Los Camachos');
    $mail->addReplyTo("parque@loscamachos.com.mx", "Reply");
    $mail->addBCC("frkalderon@gmail.com");
    $mail->isHTML(true);
    $mail->Subject = "Contacto Web Los Camachos ";
    $mail->Body = "<p>". $nombre ." escribió: </p>";
    $mail->Body.= "<p>Nombre<b>: </b>". $nombre ."</p>";
    $mail->Body.= "<p>Email<b>: </b>". $correo ."</p>";
    $mail->Body.= "<p><b>Comentarios: </b>". $mensaje ."</p>";
    $mail->AltBody = "This is the plain text version of the email content";

    if(!$mail->send()) { echo "Mailer Error: " . $mail->ErrorInfo; }
    else {echo "Message has been sent successfully"; }

}