<?php
require_once ("lib/tonic.php");
require_once ("resource/member.php");
require_once("resource/checkin.php");

$request = new Request( array('baseUri' => '/startitsmart/api'));
$resource = $request -> loadResource();
$response = $resource -> exec($request);
$response -> output();
