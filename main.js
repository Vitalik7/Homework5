var count = 0

document.addEventListener('keypress', function todoList (event) {
	if (event.keyCode == 13) {
		var input = document.getElementById('todoInput').value
		var text = document.createTextNode(input)
		var newItem = document.createElement('li')
		var newItem_p = document.createElement('p')
		var list = document.getElementById('todoUl')
		list.style.display = 'block'

		newItem.classList.add('z-depth-4')
		newItem.classList.add('filter-active')
		newItem_p.appendChild(text)
		newItem.appendChild(newItem_p)
		newItem_p.classList.add('item_p')

		document.getElementById('todoUl').appendChild(newItem)	
		document.getElementById('todoInput').value = ''
			
		if (input === '') {
		  alert('You need to write something!')
		} else {
		  deleteItem()
		  checkboxItem()
		  count++
			document.getElementById('counter').innerHTML = 'Tasks: ' + count
		}
	}

	function checkboxItem () {
		var checkbox = document.createElement('input')
		checkbox.setAttribute('type', 'checkbox')
    		checkbox.setAttribute('class', 'filled-in')
   		checkbox.innerHTML = "<label for='filled-in-box'>Filled in</label>"
		newItem.appendChild(checkbox)

		checkbox.addEventListener('click', function () {
			if (checkbox.checked) {
				newItem_p.style.textDecoration = 'line-through'
				newItem.style.color = '#9E9E9E'
				newItem.classList.remove('filter-active')
				newItem.classList.add('filter-completed')
			} else {
				newItem.classList.remove('filter-completed')
				newItem.classList.add('filter-active')
				newItem_p.style.textDecoration = 'none'
				newItem.style.color = 'black'
			}
			filters()
		}, false)
	}

	function deleteItem () {
		var clear = document.createElement('span')
		clear.innerHTML = "<i class='material-icons'>clear</i>"
		clear.addEventListener('click', function () {
			this.parentNode.parentNode.removeChild(this.parentNode)
			count--
			document.getElementById('counter').innerHTML = 'Tasks: ' + count
		}, false)
		newItem.appendChild(clear)
	}
}, false)

function filters () {
	var allBtn = document.getElementById('allItem')	
	var activeBtn = document.getElementById('activeItem')
	var completedBtn = document.getElementById('completeItem')
	var active = document.querySelectorAll('.filter-active')
	var completed = document.querySelectorAll('.filter-completed')

	function completeRemoved () {
		completed.forEach(function (item) {
			item.classList.remove('hidden')
		})
	}

	function activeRemoved () {
		active.forEach(function (item) {
			item.classList.remove('hidden')
		})
	}		

	allBtn.addEventListener('click', function () {
		activeRemoved()
		completeRemoved()
	}, false) 	

	completedBtn.addEventListener('click', function (event) {
		active.forEach(function (item) {
			item.classList.add('hidden')
		}) 
		completeRemoved()
		event.preventDefault()
	}, false)

	activeBtn.addEventListener('click', function (event) {
		completed.forEach(function (item) {
			item.classList.add('hidden')
		})
		activeRemoved()
		event.preventDefault()
	}, false)
}
