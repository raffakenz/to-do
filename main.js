const todoInput = document.getElementById('todo-input')
const listTask = document.getElementById('list-task')

function addTask() {
    if (todoInput.value === '') {
        alert('Please enter a task!')
    } else {
        let li = document.createElement('li')
        li.innerHTML = todoInput.value
        listTask.appendChild(li)
        
        let span = document.createElement('span')
        span.innerHTML = "\u00D7"
        li.appendChild(span)
    }

    todoInput.value = ''
    save()
}

todoInput.addEventListener('keydown', function(event) {{
    if (event.key === 'Enter') {
        addTask()
    }
}})

listTask.addEventListener('click', function(e) {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked')
        save()
    } 
    else if (e.target.tagName === 'SPAN') {
        e.target.parentElement.remove()
        save()
    }
}, false)

function save() {
    localStorage.setItem('data', listTask.innerHTML)
}

function show() {
    listTask.innerHTML = localStorage.getItem('data')
}

show()