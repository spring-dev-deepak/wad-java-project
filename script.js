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


        // const newsData = ['news1', 'news2', 'news3', 'news4', 'news5', 'news6', 'news7']
        // var news;

        // const newsUpdate1 = document.getElementById('news-update1')
        // var br = document.createElement('br')

        // for(news of newsData){
        //     newsUpdate1.innerHTML = newsUpdate1.innerHTML + news + "<br>"
        // }