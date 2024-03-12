const addTaskBtn = document.getElementById('addTaskBtn');
const newTaskInput = document.getElementById('newTaskInput');
const taskList = document.querySelector('#taskList')

addTaskBtn.addEventListener("click", function () {
    const taskText = newTaskInput.value.trim();

    if (taskText) {
        newTaskInput.classList.remove('outline', 'outline-red-400', 'outline-1');
        newTaskInput.parentElement.querySelector('span').classList.add('hidden')

        const li = document.createElement("li");
        li.className = "flex justify-between items-center bg-white px-4 py-2 shadow-sm mb-2";
        li.innerHTML = `
            <span>${taskText}</span>
            <div>
                <button class="favoriteBtn p-2">
                    <i class="fa-regular fa-circle-check fa-lg"></i>
                </button>
                <button class="deleteBtn p-2">❌</button>
            </div>
        `
        taskList.appendChild(li)
        newTaskInput.value = '';

        const deleteBtn = li.querySelector('.deleteBtn');
        deleteBtn.addEventListener("click", function () {
            li.remove();
        })

        const taskDoneBtn = li.querySelector('.favoriteBtn');
        taskDoneBtn.addEventListener("click", function () {
            const icon = li.querySelector('i');
            icon.classList.toggle('fa-solid');
            icon.classList.toggle('text-green-500');
        })
    } else {
        newTaskInput.classList.add('outline', 'outline-red-400', 'outline-1');
        newTaskInput.parentElement.querySelector('span').classList.remove('hidden')
    }
})
