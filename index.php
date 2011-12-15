<?php?>
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
		<script src="javascript/jquery_index.js"></script>
	</head>
	<body>
		<div id="container">
			<div id="checkinContainer">
				<h1 id="titlePlaceholder"></h1>
				<label for="memberName">Member Name:</label>
				<input type="text" id="memberName" />
				<input type="button" value="Check In" id="checkinButton" />
				<input type="hidden" value="-1" id="checkinEvent" />
				<h2>CheckedIn</h2>
				<div id="checkedInContainer"></div>
			</div>
		</div>
	</body>
</html>