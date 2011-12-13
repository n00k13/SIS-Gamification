<?php
require_once ("models/checkins/checkinfactory.php");

/**
 * @uri /checkin
 */
class CheckinCRUD extends Resource {
	public function get($request) {
		$response = new Response($request);
		$response -> code = Response::OK;
		$response -> addHeader('content-type', 'application/json');

		$response -> body = json_encode(CheckinFactory::read());
		return $response;
	}

	public function post($request) {
		$response = new Response($request);
		$response -> code = Response::OK;
		$response -> addHeader('content-type', 'application/json');

		$res = CheckinFactory::create($_POST["name"], $_POST["date"]);
		$body = array("success" => TRUE);

		if ($res === FALSE) {
			$body["success"] = FALSE;
		}

		$response -> body = json_encode($body);
		return $response;
	}

}

/**
 * @uri /checkin/{checkin_id}/member/{member_id}
 */
class CheckinMethods extends Resource {
	public function post($request, $checkinId, $memberId) {
		$response = new Response($request);
		$response -> code = Response::OK;

		$isChecked = CheckinFactory::checkin($memberId, $checkinId);
		$res = array("success" => TRUE, "message" => "Check-in successfull");
		
		if($isChecked === FALSE) /*already checked in*/ {
			$res["success"] = FALSE;
			$res["message"] = "Already checked in";
		}
		
		
		$response -> body = json_encode($res);
		return $response;
	}

}

/**
 * @uri /checkin/members/{id}/
 */
class CheckinGetMembersByCheckinId extends Resource {
	public function get($request, $id) {
		$response = new Response($request);
		$response -> code = Response::OK;
		$response -> addHeader('content-type', 'application/json');
		$response -> body = json_encode(CheckinFactory::getCheckedinMembers($id));
		return $response;
	}

}

/**
 * @uri /checkin/latest/
 */
class CheckinGetLatest extends Resource {
	public function get($request) {
		$response = new Response($request);
		$response -> code = Response::OK;
		$response -> addHeader('content-type', 'application/json');
		$response -> body = json_encode(CheckinFactory::getLatest());
		return $response;
	}

}
