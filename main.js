var count = 0;

document.addEventListener('keypress', function todoList (event) {
	if (event.keyCode == 13) {
		var input = document.getElementById('todoInput').value;
		var text = document.createTextNode(input);
		var newItem = document.createElement('li');

		newItem.classList.add('z-depth-4');
		newItem.setAttribute("id", "newItemLi");
		newItem.appendChild(text);

		document.getElementById('todoUl').appendChild(newItem);	
		document.getElementById("todoInput").value = "";

		 if (input === '') {
		    alert("You need to write something!");
		  } else {
		  	deleteItem();
		  	checkboxItem();
		  	count++;
		   	document.getElementById('counter').innerHTML = "Tasks: " + count;
		  }

		function checkboxItem () {
			var checkbox = document.createElement('input'); 
		   	checkbox.setAttribute("type", "checkbox");
    		checkbox.setAttribute("class", "filled-in");
    		checkbox.innerHTML = '<label for="filled-in-box">Filled in</label>';
		    newItem.appendChild(checkbox);

			checkbox.addEventListener('click', function () {
				if (checkbox.checked) {
					allItem();
					activeItem();
					completedItem();
					newItem.style.textDecoration = "line-through";
					newItem.style.color = '#9E9E9E';
					checkbox.setAttribute("checked", "checked");
				} else {
					checkbox.removeAttribute("checked", "checked");
					newItem.style.textDecoration = "none";
					newItem.style.color = 'black';
				}

				function allItem () {
					var allBtn = document.getElementById('allItem');
					allBtn.addEventListener('click', function () {
						if (newItem) {
							newItem.classList.remove('hidden');
						}
					}, false) 
				}
				
				function completedItem () {
					var completedBtn = document.getElementById('completeItem');
					var completed = document.querySelectorAll('input:not(:checked)');
					completedBtn.addEventListener('click', function () {
						if (completed) {
							newItem.classList.add('hidden');
							event.preventDefault();
						} 
					},false)
				}

				function activeItem () {
					var activeBtn = document.getElementById('activeItem');
					var active = document.querySelectorAll('input:checked');
					activeBtn.addEventListener('click', function () {
						if (active) {
							newItem.classList.add('hidden');
							event.preventDefault();
						} 
					}, false)
				}
			}, false)
		}

		function deleteItem () {
		 	var clear = document.createElement('span');
			clear.innerHTML = '<i class="material-icons">clear</i>';
			clear.addEventListener('click', function remove () {
				this.parentNode.parentNode.removeChild(this.parentNode);
				count--;
				document.getElementById('counter').innerHTML = "Tasks: " + count;
			}, false)
			newItem.appendChild(clear);
		}
	}
}, false);







