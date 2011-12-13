namespace("GameCraft.REST", function() {
	var _private = {
		successToast : function(message) {
			if(message == false) {
				return;
			}
			$().toastmessage('showSuccessToast', message);
		},
		failToast : function() {
			$().toastmessage('showErrorToast', "An Error Occured. Check the console for details.");
		},
		options : {
			baseUrl : ""
		}
	};
	return {
		setOptions : function(options) {
			for(var option in options) {
				if(options.hasOwnProperty(option)) {
					_private.options[option] = options[option];
					console.log(options[option]);
				}
			}
		},
		create : function create(apiObjectName/*string*/, dataObject/*object*/, callback/*function*/, successToastMessage /*string*/) {
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
					_private.successToast(successToastMessage);
					if( typeof (callback) !== "undefined") {
						callback(data);
					}
					console.log(data);
				},
				error : function(jqXHR, textStatus, errorThrown) {
					_private.failToast();
					console.log(textStatus + ' ' + errorThrown);
				}
			});

			return true;
		},
		get : function(apiObjectName/*string*/, callback/*function*/, successToastMessage/*string*/) {
			if( typeof (callback) !== "function" || typeof (apiObjectName) !== "string") {
				return false;
			}

			$.ajax({
				type : "GET",
				url : _private.options.baseUrl + apiObjectName,
				dataType : "json",
				success : function(data) {
					_private.successToast(successToastMessage);
					callback(data);
				},
				error : function(jqXHR, textStatus, errorThrown) {
					_private.failToast();
					console.log(textStatus + ' ' + errorThrown);
				}
			});
			return true;
		},
		getById : function(apiObjectName /*string*/, apiObjectId/*string|integer*/, callback /*function*/, successToastMessage/*string*/) {
			if( typeof (callback) !== "function" || typeof (apiObjectName) !== "string" || typeof (apiObjectId) !== "string") {
				return false;
			}

			$.ajax({
				type : "GET",
				url : _private.options.baseUrl + apiObjectName + "/" + apiObjectId,
				dataType : "json",
				success : function(data) {
					_private.successToast(successToastMessage);
					callback(data);
				},
				error : function(jqXHR, textStatus, errorThrown) {
					_private.failToast();
					console.log(textStatus + ' ' + errorThrown);
				}
			});
			return true;
		},
		update : function(apiObjectName /*string*/, apiObjectId /*string|integer*/, dataObject/*object*/, successToastMessage/*string*/) {
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
					_private.successToast(successToastMessage);
				},
				error : function(jqXHR, textStatus, errorThrown) {
					_private.failToast();
					console.log(textStatus + ' ' + errorThrown);
				}
			});
			return true;
		},
		helperMethod : function(apiObjectName, apiObjectId, helperMethodName, dataObject, successMessage) {
			this.update(apiObjectName, apiObjectId + helperMethodName, dataObject, successMessage);
		}
	}
});
