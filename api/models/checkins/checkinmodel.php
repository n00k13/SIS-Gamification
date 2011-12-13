<?php

class CheckinModel {
	public $id = -1;
	public $name = "";
	public $date = "";

	public function __construct($id, $name, $date) {
		$this -> id = $id;
		$this -> name = $name;
		$this -> date = $date;
	}

}
