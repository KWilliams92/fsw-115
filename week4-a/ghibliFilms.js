const getData = () => {
    axios.get('https://ghibliapi.herokuapp.com/films')
    .then(response => {
        console.log(response)
        for(let i = 0; i < 20; i++) {
            const ghibliFilms = document.createElement('h3')
            ghibliFilms.textContent = response.data[i].title
            document.querySelector('#gFilms').appendChild(ghibliFilms)
        }
    })

    .catch(error => console.log(error))
}

const buttonF = document.querySelector('#buttonF')
    buttonF.addEventListener('click', getData)