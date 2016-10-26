(function() {

	var app = {

		init : function() {
			this.listeners();
		},

		listeners : function() {
			$('#addTaskBtn').on('click', this.addTask.bind(this))
		},

		addTask : function() {
			var inputTask = $('#inputTask').val();
			if (inputTask) {
				var task = '<li class="ui list"><div class="ui checkbox"><input type="checkbox"> <label>' + inputTask + '</label></div></li>'
				$('#listTasks').append(task);
			}
		}

	}

	app.init();

})();