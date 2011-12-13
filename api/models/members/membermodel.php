<?php
class MemberModel {
	public $id = -1;
	public $firstName = "";
	public $secondName = "";

	public function __construct($id = -1, $firstName = "", $secondName = "") {
		$this -> id = $id;
		$this -> firstName = $firstName;
		$this -> secondName = $secondName;
	}

	public function name() {
		return $this -> firstName . " " . $this -> secondName;
	}

}
