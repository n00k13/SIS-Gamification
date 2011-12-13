namespace("GameCraft.REST", function() {
	var _private = {
		options : {
			baseUrl : ""
		}
	};
	return {
		setOptions : function(options) {
			for(var option in options) {
				if(options.hasOwnProperty(option)) {
					_private.options[option] = options[option];
				}
			}
		},
		create : function create(apiObjectName/*string*/, dataObject/*object*/, callback/*function*/) {
			if( typeof (dataObject) !== "object" || typeof (apiObjectName) !== "string") {
				return false;
			}
			dataObject = JSON.stringify(dataObject);

			// make the call
			$.ajax({
				type : "POST",
				url : _private.options.baseUrl + apiObjectName,
				data : dataObject,
				dataType : "json",
				contentType : "application/json; charset=utf-8",
				success : function(data) {
					if( typeof (callback) !== "undefined") {
						callback(data);
					}
				},
				error : function(jqXHR, textStatus, errorThrown) {
					console.log(textStatus + ' ' + errorThrown);
				}
			});

			return true;
		},
		get : function(apiObjectName/*string*/, callback/*function*/) {
			if( typeof (callback) !== "function" || typeof (apiObjectName) !== "string") {
				return false;
			}

			$.ajax({
				type : "GET",
				url : _private.options.baseUrl + apiObjectName,
				dataType : "json",
				success : function(data) {
					if( typeof (callback) !== "undefined") {
						callback(data);
					}
				},
				error : function(jqXHR, textStatus, errorThrown) {
					console.log(textStatus + ' ' + errorThrown);
				}
			});
			return true;
		},
		getById : function(apiObjectName/*string*/, apiObjectId/*string|integer*/, callback /*function*/) {
			if( typeof (callback) !== "function" || typeof (apiObjectName) !== "string" || typeof (apiObjectId) !== "string") {
				return false;
			}

			$.ajax({
				type : "GET",
				url : _private.options.baseUrl + apiObjectName + "/" + apiObjectId,
				dataType : "json",
				success : function(data) {
					if( typeof (callback) !== "undefined") {
						callback(data);
					}
				},
				error : function(jqXHR, textStatus, errorThrown) {
					console.log(textStatus + ' ' + errorThrown);
				}
			});
			return true;
		},
		update : function(apiObjectName/*string*/, apiObjectId/*string|integer*/, dataObject/*object*/, callback /*function*/) {
			if( typeof (dataObject) !== "object" || typeof (apiObjectId) !== "string" || typeof (apiObjectId) !== "string") {
				return false;
			}
			dataObject = JSON.stringify(dataObject);
			$.ajax({
				type : "PUT",
				url : _private.options.baseUrl + apiObjectName + "/" + apiObjectId,
				dataType : "json",
				contentType : "application/json; charset=utf-8",
				data : dataObject,
				success : function(data) {
					if( typeof (callback) !== "undefined") {
						callback(data);
					}
				},
				error : function(jqXHR, textStatus, errorThrown) {
					console.log(textStatus + ' ' + errorThrown);
				}
			});
			return true;
		},
		helperMethod : function(apiObjectName, apiObjectId, helperMethodName, dataObject) {
			this.update(apiObjectName, apiObjectId + helperMethodName, dataObject);
		}
	}
});
