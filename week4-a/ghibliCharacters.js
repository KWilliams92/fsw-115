const getData = () => {
    axios.get('https://ghibliapi.herokuapp.com/people')
    .then(response => {
        console.log(response)
        for(let i = 0; i < 20; i++) {
            const ghibliCharacters = document.createElement('h3')
            ghibliCharacters.textContent = response.data[i].name
            document.querySelector('#gCharacters').appendChild(ghibliCharacters)
        }
    })

    .catch(error => console.log(error))
}

const buttonP = document.querySelector('#buttonP')
    buttonP.addEventListener('click', getData)