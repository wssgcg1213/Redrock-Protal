<?php
   $userId  = $_POST["userId"];
   $userPwd = $_POST["userPwd"];

   if( !empty($userId) && $userId == 'lijinxin'){
   		if( !empty($userPwd) && $userPwd== "lijinxin" ){
           
   			$res = array( 
   				"status" => 200,
   				"data"  => array(
   					"name" => "lijinxin"
   				)
   			);

   		}
   }else{

	   	$res = array(
	   		"status" => 100,
	   		"data" => array(
	   			    "reason" => "你的用户名或密码不对"
	   			)
	   	);
   }

   echo json_encode($res);

?>