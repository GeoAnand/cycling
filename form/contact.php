<?php

$name = $_POST['name'];
$name = trim($name); // remove spaces from the beginning and end of the name
$name = str_replace(" ", "_", $name); // replace spaces with underscores
$email = $_POST['email'];
$usermessage = $_POST['usermessage'];
// $to = "geoanand.v.v@gmail.com";
$to = "ramanujar4u@gmail.com";
$subject = "CyclingYogis: Enquiry Received (contact)";
$subject2 = "CyclingYogis: Enquiry Received (contact)";


$headers = "From: ".$name."\r\n".
"CC: ";
$headers2 = "From: ".$email."\r\n".
"CC: ";

$txt = "You have received an email from ".$name.
"\r\n Name: ".$name.
"\r\n E-mail: ".$email.
"\r\n Message:".$usermessage. "\r\n";

$domainName = "@bom1plzcpnl493939.prod.bom1.secureserver.net";
$responseMessage = str_replace($domainName, "");
echo $responseMessage;

$txt2 = "Dear ".$name.",";
"\r\n"."Thank you for getting in touch with us.";
$txt2 .= "\r\n"."";
$txt2 .= "\r\n"."We have received your enquiry. Our Team will contact you soon with further details.";
$txt2 .= "\r\n"."Meanwhile, we are also available on the numbers given below in case you have any further queries.";
$txt2 .= "\r\n"."Ramanujar Moulana: +91 98840 23123 | ramanujar4u@gmail.com";




if($email!=NULL){
    mail($to, $subject, $txt, $headers);
}
$result= mail($email, $subject2, $txt2, $headers2);


// database Connection
$conn = new mysqli('localhost', 'contact_admin', 'Cycling_Yogis@123654', 'contact_form' );
	if($conn->connect_error){
		echo "$conn->connect_error";
		die("Connection Failed : ". $conn->connect_error);
	} else {
		$stmt = $conn->prepare("insert into contact(name, email, usermessage ) values(?, ?, ?)");
		$stmt->bind_param("sss", $name, $email, $usermessage);
		$execval = $stmt->execute();
// 		echo $execval;
//         echo " Registration successfully...";
// 		$stmt->close();
// 		$conn->close();

        header('Location:https://cyclingyogis.in/');
	}
?>


