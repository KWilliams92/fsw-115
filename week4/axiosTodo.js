axios.get('http://api.bryanuniversity.edu/kh/list')

    .then(resp => {
        resp.data.forEach(function(e, i){
            var des = document.createElement('li')
            document.body.querySelector('#toDos').appendChild(des)

            des.textContent = resp.data[i].description

                des.addEventListener('click', function(){
                    des.style.textDecoration = 'line-through'
                })
        })
})

.catch(err => console.log(err))

function createToDo(){
    var listItem = document.querySelector('#toDoText').value
    var itemName = document.createTextNode(listItem)
    var newItem = document.createElement('li')
        newItem.appendChild(itemName)

        newItem.addEventListener('click', function(){
            newItem.style.textDecoration = 'line-through'
        })

    document.body.querySelector('#toDos').appendChild(newItem)
}

