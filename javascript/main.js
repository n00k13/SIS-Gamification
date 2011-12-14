(function(window) {
	function namespace(str, func /*function*/)
	{
		var arr = str.split("."), parent = window, n = arr.length, i = 0, nextName = "";

		for(i; i < n; i++) {
			nextName = arr[i];
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
