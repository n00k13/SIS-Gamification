Date.prototype.mysqlFormat = function() {
	return this.getFullYear() + '-' + (this.getMonth() < 9 ? '0' : '') + (this.getMonth() + 1) + '-' + (this.getDate() < 10 ? '0' : '') + this.getDate();
}

$(document).ready(function() {
	$("#datepicker").kendoDatePicker({
		value : new Date()
	});

	$("#addEvent").click(function() {
		var name = $("#eventName").val(), date = $("#datepicker").data("kendoDatePicker").value().mysqlFormat();
		console.log(name, date);
	});
});
