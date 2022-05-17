axios.get('http://api.bryanuniversity.edu/kiaraHightower/list')

    .then(response => {
        for(let i = 0; i < response.data.length; i++){
            var text = document.createElement('h1')
            h1.textContent = response.data[i].value
                document.body.appendChild(text)
        }
    })

        .catch(error => console.log(error))


    function createToDo(){
        var listItem = document.querySelector('#toDoText').value
        var itemName = document.createTextNode(listItem)
        var newItem = document.createElement('li')
            newItem.appendChild(itemName)
            
            document.querySelector('#postItem').appendChild(newItem)
    }