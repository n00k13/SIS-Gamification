$(document).ready(function() {
		var checkinObject = null;

		$.ajax({
			type : "GET",
			url : "api/checkin/latest/",
			async : false,
			success : function(data) {
				checkinObject = data;
			}
		});

		$.ajax({
			type : "GET",
			url : "api/member/",
			success : function(data) {
				console.log(data);
				init(data, checkinObject);
			},
			error : function(jqXHR, textStatus, errorThrown) {
				console.log(textStatus + ' ' + errorThrown);
			}
		});

		var init = function(data, checkinObject) {
			var idmap = {};
			var parsed = [];
			for(var i = 0, len = data.length; i < len; ++i) {
				var name = data[i].firstName + " " + data[i].secondName;
				parsed[i] = name;
				idmap[name] = data[i].id;
			}

			var ui = new EJS({
				url : "javascript/templates/ui.ejs"
			}).render({
				title : checkinObject.name,
				date : checkinObject.date
			});

			$("#container").append(ui);
			$("#checkinEvent").val(checkinObject.id);
			$("#memberName").autocomplete({
				source : parsed
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

				$.ajax({
					type : "POST",
					url : "api/checkin/" + eventId + "/member/" + memberId + "/",
					data : {},
					success : function(data) {
						console.log("Checkin successful :", data);
					},
					error : function(jqXHR, textStatus, errorThrown) {
						console.log(textStatus + ' ' + errorThrown);
					}
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