//GET
function getData(){
    axios.get('http://api.bryanuniversity.edu/kh/list')
        .then(response => createToDo(response.data))
        .catch(error => console.log(error))
}

getData()

function createToDo(data){
    for (let i = data.length - 1; i >= 0; i--){
    
    let listItem = document.createElement('li')
        listItem.textContent = data[i].description
        listItem.setAttribute('id', data[i].id)

    let complete = document.createElement('input')
        complete.setAttribute('type', 'checkbox')
    let editBtn = document.createElement('button');
        editBtn.textContent = 'Update';

    listItem.appendChild(complete)
    listItem.appendChild(editBtn)
    document.querySelector('#toDos').appendChild(listItem)

    complete.addEventListener('click', e => {
        let parentNode = e.target.parentNode
        if (e.target.checked){
                parentNode.style.textDecoration = 'line-through'
                axios.put(`http://api.bryanuniversity.edu/kh/list/${isChecked}`, {isComplete: true})
                .then(resp => console.log(resp))
                .catch(err => console.log(err))
        }
        else {
            e.target.parentNode.style.textDecoration = 'none'
            axios.put(`http://api.bryanuniversity.edu/kh/list/${isChecked}`, {isComplete: false})
            .then(resp => console.log(resp))
            .catch(err => console.log(err))
        }
    })

    //EDIT BUTTON
    editBtn.addEventListener('click', (e) => {
        let itemId = e.target.value;
        if (data[i].isComplete === false) {
            updateText = " Update Complete";
        } else {
            updateText = " Update Incomplete";
        }
        editBtn.id = data[i]._id;
        editBtn.value = data[i].isComplete;
        axios.put(`http://api.bryanuniversity.edu/kh/list/${itemId.id}`)
            .then(resp => getData())
            .catch(err => console.log(err))

    
    })
}

//POST
    let toDoForm = document.toDoForm
    toDoForm.addEventListener('submit', e => {
        e.preventDefault()

        let newToDo = {
            name: toDoForm.name.value,
            description: toDoForm.description.value,
            price: toDoForm.price.value
        }

        newData.name.value = ""
        newData.description.value = ""
        newData.price.value = ""

    axios.put('http://api.bryanuniversity.edu/kh/list/', newToDo)
        .then(resp => getData())
        .catch(err => console.log(err))
    })

//DELETE
let deleteBtn = document.querySelector('#delete')
    deleteBtn.addEventListener('submit', e => {
        e.preventDefault()

        let itemDelete = e.target.parentNode
        axios.delete(`http://api.bryanuniversity.edu/kh/list/${itemDelete.id}`)
        .then(resp => getData())
        .catch(err => console.log(err))
    })

//PUT
let newData = document.toDoForm;
    newData.addEventListener('submit', e => {
        e.preventDefault();
        let updateTodo = {
            name: newData.name.value,
            description: newData.description.value,
            price: newData.price.value,
            isComplete: false
        }
        newData.name.value = "";
        newData.price.value = "";
        newData.description.value = "";

        let itemId = e.target.value;
        let itemCompleted = e.target.value;
        let isComplete = null;
            itemCompleted = "false" ? (isComplete = true) : (isComplete = false);

        axios.put(`http://api.bryanuniversity.edu/kh/list/${itemId}`, updateTodo)
            .then(resp => getData())
            .catch(err => console.log(err))
    })    
}






/*const postData = (e) => {
    e.preventDefault()

    let toDoTitle = document.querySelector('#toDoTitle').value
    let toDoDes = document.querySelector('#toDoDes').value
    let toDoPrice = document.querySelector('#toDoPrice').value

    var newToDo = {

        Name: toDoTitle,
        Description: toDoDes,
        Price: toDoPrice
    }

    axios.post('http://api.bryanuniversity.edu/kh/list', newToDo)
        .then(resp => getData())
        .catch(err => console.log(err))

    let form = document.querySelector('#toDo')
        form.addEventListener('click', postData)
}


    function newToDo(e){
    let list1 = document.querySelector('#toDoTitle').value
    let list2 = document.querySelector('#toDoDes').value
    let list3 = document.querySelector('#toDoPrice').value

    var name1 = document.createTextNode(list1)
    var name2 = document.createTextNode(list2)
    var name3 = document.createTextNode(list3)

    var new1 = document.createElement('li')
        new1.appendChild(name1)
    var new2 = document.createElement('li')
        new2.appendChild(name2)
    var new3 = document.createElement('li')
        new3.appendChild(name3)

        new1.addEventListener('click', function(){
            new1.style.textDecoration = 'line-through'
        })
        new2.addEventListener('click', function(){
            new2.style.textDecoration = 'line-through'
        })
        new3.addEventListener('click', function(){
            new3.style.textDecoration = 'line-through'
        })

        document.body.querySelector('#toDos').appendChild(newToDo())
}*/
