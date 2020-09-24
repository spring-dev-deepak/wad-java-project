const businessNewsApiUrl = 'https://api.nytimes.com/svc/topstories/v2/business.json?api-key='
const sportsNewsApiUrl = 'https://api.nytimes.com/svc/topstories/v2/sports.json?api-key='
const apiKey = '22rCdhycw7PDC0PvAcnKIVo0oFGAQLuX'

fetch(businessNewsApiUrl + apiKey).then(response => {
    response.json().then(data => {
        const newsData = data.results;
        var news;

        const newsUpdate1 = document.getElementById('news-update1')

        for(news of newsData){
           newsUpdate1.innerHTML = newsUpdate1.innerHTML + news.title + "<br><br>"
        }
    })
})

fetch(sportsNewsApiUrl + apiKey).then(response => {
    response.json().then(data => {
        const newsData = data.results;
        var news;

        const newsUpdate2 = document.getElementById('news-update2')

        for(news of newsData){
           newsUpdate2.innerHTML = newsUpdate2.innerHTML + news.title + "<br><br>"
        }
    })
})

const signinData = document.querySelector('.signin-form')
const userData = document.querySelectorAll('input')

signinData.addEventListener('submit', (e) => {
    e.preventDefault()

    const loginDeatils = {
        userName: userData[0].value,
        password: userData[1].value
    }

    try{
        const userDetailsJson = localStorage.getItem(loginDeatils.userName)
        const userDetails = JSON.parse(userDetailsJson)

        const userName = userDetails.userName
        const password = userDetails.password

        if((loginDeatils.userName == userName) && (loginDeatils.password == password)){
            alert('successfull login')
        }else{
            alert('wrong credentails')
        }
    }catch{
        return alert('username not found')
    }
})
