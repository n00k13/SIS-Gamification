<?php
require_once ("database/dbconf.php");
require_once ("membermodel.php");
/**
 *
 */
class MemberFactory {

	public static function create($object) {
		// $query = "INSERT INTO members(name) VALUES(?)";
		// $res = GlobalDatabase::$database -> exec($query, array($object -> name));
		// return new MemberModel(GlobalDatabase::$database -> lastInsertId, $object -> name);
	}

	public static function read() {
		$query = "SELECT id, first_name, second_name FROM members";
		$res = GlobalDatabase::$database -> query($query);

		$modelResult = array();

		while ($row = $res -> fetch()) {
			$m = new MemberModel($row -> id, $row -> first_name, $row -> second_name);
			$modelResult[] = $m;
		}
		return $modelResult;
	}

	public static function readById($id) {
		$query = "SELECT id, first_name, second_name FROM members WHERE id = ? LIMIT 1";
		$res = GlobalDatabase::$database -> query($query, array($id));
		
		$row = $res->fetch();
		if($row === FALSE) {
			return FALSE;
		}
		return new MemberModel($row -> id, $row -> first_name, $row -> second_name);
	}

	public static function update($id, $object) {

	}

	public static function delete($id) {

	}

}
