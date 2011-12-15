<?php
header("Content-Type: text/html; charset=utf-8");
?>
<html>
	<head>
		<script src="http://code.jquery.com/jquery-latest.js"></script>
		<script src="javascript/kendo.all.min.js"></script>
		<link href="javascript/kendo.metro.min.css" rel="stylesheet" />
		<link href="javascript/kendo.common.min.css" rel="stylesheet" />
		<script src="javascript/jquery-ui-1.8.16.custom.min.js"></script>
		<link href="javascript/smoothness/jquery-ui-1.8.16.custom.css" rel="stylesheet" />
		<script type="text/javascript" src="javascript/main.js"></script>
		<script src="javascript/rest.js"></script>
		<script src="javascript/json2.js"></script>
		<script src="javascript/jquery.toastmessage.js"></script>
		<link href="javascript/jquery.toastmessage.css" rel="stylesheet" />
		<script src="javascript/jquery_admin.js"></script>
	</head>
	<body>
		<div id="container">
			<h1>Създай събитие</h1>
			<p>Всяко създадено събитие ще измести предходното като най-ново</p>
			<label for="eventName">Име на събитието</label>
			<br />
			<input type="text" id="eventName" />
			<br />
			<input id="datepicker" />
			<br />
			<input type="button" id="addEvent" value="Добави събитие" />
		</div>
	</body>
</html>