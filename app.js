(function() {

	var app = {

		init : function() {
			this.listeners();
			this.selectCheckedOrNot();
		},

		listeners : function() {
			$('#addTaskBtn').on('click', this.addTask.bind(this))
			$('input[type=radio]').on('click', this.selectCheckedOrNot.bind(this))
		},

		addTask : function() {
			var inputTask = $('#inputTask').val();
			if (inputTask) {
				var task = '<li class="ui list"><div class="ui checkbox"><input type="checkbox"> <label>' + inputTask + '</label></div></li>'
				$('#listTasks').append(task);
				$('#inputTask').val("");
			}
			this.selectCheckedOrNot()
		},

		selectCheckedOrNot : function() {
			var notCheckedTasks = $('input[type="checkbox"]:not(:checked)').next('label');
			var checkedTasks = $('input[type="checkbox"]:checked').next('label');
			notCheckedTasks.css("color", "red");
			checkedTasks.css("color", "green");
		}

	}

	app.init();

})();