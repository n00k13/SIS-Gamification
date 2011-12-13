<?php
require_once ("database/dbconf.php");
require_once ("checkinmodel.php");

class CheckinFactory {
	public static function read() {
		$query = "SELECT * FROM checkins";
		$res = GlobalDatabase::$database -> query($query);

		$modelResult = array();

		while ($row = $res -> fetch()) {
			$m = new CheckinModel($row -> id, $row -> name, $row -> date);
			$modelResult[] = $m;
		}
		return $modelResult;
	}
	
	public static function create($name, $date) {
		$query = "INSERT INTO checkins(name, date) VALUES(?,?)";
		$res = GlobalDatabase::$database -> exec($query, array($name, $date));
		return $res;
	}
	
	
	public static function getLatest() {
		$query = "SELECT * FROM checkins ORDER BY id DESC LIMIT 1";
		$res = GlobalDatabase::$database -> query($query);
		$row = $res -> fetch();
		return new CheckinModel($row -> id, $row -> name, $row -> date);
	}

	public static function checkin($memberId, $eventId) {
		$memberId = (int) $memberId;
		$eventId = (int) $eventId;
		
		$check = "SELECT uid FROM members_to_checkins WHERE member_id = ? AND checkin_id = ?";
		$resCheck = GlobalDatabase::$database -> query($check, array($memberId, $eventId));
		
		if($resCheck !== FALSE) {
			return FALSE;
		}
		
		$query = "INSERT INTO members_to_checkins(member_id, checkin_id) VALUES(?, ?)";
		$res = GlobalDatabase::$database -> exec($query, array($memberId, $eventId));
		return TRUE;
	}
	
	public static function getCheckedinMembers($eventId) {
		$query = "SELECT * FROM members WHERE id IN (SELECT member_id FROM members_to_checkins WHERE checkin_id = ?)";
		$res = GlobalDatabase::$database -> query($query, array((int)$eventId));
		
		$modelResult = array();

		while ($row = $res -> fetch()) {
			$m = new MemberModel($row -> id, $row -> first_name, $row -> second_name);
			$modelResult[] = $m;
		}
		return $modelResult;
	}

}
