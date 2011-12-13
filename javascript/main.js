(function(window) {
	function namespace(str, func /*function*/)/*Rado.Vitq.Initlab*/
	{
		var arr = str.split(".");
		var parent = window;
		var n = arr.length;

		for(var i = 0; i < n; i++) {
			var nextName = arr[i];
			if( typeof (parent[nextName]) === "undefined") {
				parent[nextName] = {};
			}

			if(i === n - 1 && typeof (func) === "function") {
				parent[nextName] = func();
			}
			parent = parent[arr[i]];
		}
	}
	
	// exporting it
	window.namespace = namespace;
})(window);
