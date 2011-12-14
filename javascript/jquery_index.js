$(document).ready(function() {
	var rest = GameCraft.REST;

	rest.get("api/checkin/latest/", function(data) {
		var checkinObject = data;
		rest.get("api/member/", function(data) {
			init(data, checkinObject);
		});
	});
	var init = function(data, checkinObject) {
		
		data = data.map(function(item, index) {
			item.name = item.firstName + " " + item.secondName;
			return item;
		});
		
		var localDataSouce = new kendo.data.DataSource({
			data : data
		});

		var ui = new EJS({
			url : "javascript/templates/ui.ejs"
		}).render({
			title : checkinObject.name,
			date : checkinObject.date
		});

		$("#container").append(ui);
		$("#checkinEvent").val(checkinObject.id);
		
		$("#memberName").kendoComboBox({
			index : 0,
			dataTextField : "name",
			dataValueField : "id",
			dataSource : localDataSouce
		});

		$("#checkinButton").bind("click", {
			context : {
				idmap : idmap
			}
		}, function(event) {
			var memberId = event.data.context.idmap[$("#memberName").val()], eventId = $("#checkinEvent").val();
			console.log(memberId, eventId);

			if( typeof (memberId) === "undefined") {
				alert("Pick a member");
				return false;
			}
			rest.create("api/checkin/" + eventId + "/member/" + memberId + "/", {}, function(data) {
				console.log(data);
			});
		});
		/*setInterval(function() {
		 $.ajax({
		 type : "GET",
		 url : "api/checkin/members/" + $("#checkinEvent").val() + "/",
		 success : function(data) {
		 console.log(data);
		 $("#checkedInContainer").html("");
		 for(var i = 0, len = data.length; i < len; ++i) {
		 var name = data[i].firstName + " " + data[i].secondName;
		 $("#checkedInContainer").append(name + "<br />");
		 }
		 },
		 error : function(jqXHR, textStatus, errorThrown) {
		 console.log(textStatus + ' ' + errorThrown);
		 }
		 })
		 }, 2500)*/
	}
});
