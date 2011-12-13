<?php
require_once ("models/members/memberfactory.php");
/**
 * @uri /member
 */
class MemberResourceGetPost extends Resource {

	function get($request) {
		$response = new Response($request);
		$response -> code = Response::OK;
		$response -> addHeader('content-type', 'application/json');

		$response -> body = json_encode(MemberFactory::read());
		return $response;
	}
}

/**
 * @uri /member/{id}
 */
class MemberResourceIdOperations extends Resource {
	function get($request, $id) {
		$response = new Response($request);
		$response -> code = Response::OK;
		$response -> addHeader('content-type', 'application/json');
		
		$payload = MemberFactory::readById($id);
		$response -> body = json_encode($payload);
		return $response;
	}
}