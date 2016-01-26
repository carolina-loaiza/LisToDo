(function() {

	var dom = {
		userInput : $('#user_input'),
		listContainer : $('#list_container'),
		addItem : $('#save')
	}

	var appList = (function() {

		function getUserData() {
			var dataUser = dom.userInput.value;
			var showItem = (dataUser != '') ? createListItem(dataUser) : messageError(dom.userInput);
		}

		function messageError(input) {
			input.addClass('error');
		}

		function createListItem(title) {
			var newItem = document.createElement('li');
			newItem.setAttribute('class','item');
		    newItem.innerHTML = '<i class="fa fa-caret-right item-icon"></i>'+
		    					'<p>'+title+'</p>'+
		    					'<button class="delete btn_action"><i class="fa fa-times"></i></button>'+
		    					'<button class="edit btn_action"><i class="fa fa-pencil"></button></i>';
			dom.listContainer.insertBefore( newItem, dom.listContainer.firstChild );
			deleteListItem();
			editListItem();
		}

		function deleteListItem() {
			var deleteItem = $('.delete');
			
			deleteItem.on( 'click', function() {
				$(this).parentNode.remove();
			});
		}

		function editListItem() {
			var editItem = $('.edit');

			editItem.on( 'click', function() {
				this.siblings( "p" ).attr('contenteditable', 'true');
				$('.fa-pencil').addClass('fa-check');
				this.className = 'save btn_action';
				saveListItem();
			});
		}

		function saveListItem() {
			var saveItem = document.querySelector('.save');

			saveItem.on( 'click', function() {
				this.parentNode.childNodes[1].removeAttribute('contenteditable');
				this.children[0].className = 'fa fa-pencil';
				this.className = 'edit btn_action';
			});
		}

		return {
			getData : getUserData
		}

	})();
	
	$( document ).ready(function() {
		dom.addItem.on( 'click', function() {
  			appList.getData();
		});
	});

	
})();

