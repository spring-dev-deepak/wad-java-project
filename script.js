const signupData = document.querySelector('.signup-data')
const inputData = document.querySelectorAll('input')

signupData.addEventListener('submit', (e) => {
    e.preventDefault()

    const registerDetails = {
        firstName: inputData[0].value,
        age: inputData[1].value,
        gender: inputData[2].value,
        userName: inputData[3].value,
        password: inputData[4].value,
        accNo: inputData[5].value,
        cusNo: inputData[6].value,
        branch: inputData[7].value,
        debitNo: inputData[8].value,
        cvv: inputData[9].value,
        city: inputData[10].value,
        state: inputData[11].value,
        eMail: inputData[12].value,
        phoneNo: inputData[13].value,
        zipCode: inputData[14].value,
        balance: Math.ceil(Math.random() * 1000)
    }

    console.log(registerDetails)

    localStorage.setItem(registerDetails.userName, JSON.stringify(registerDetails))

    location.href = "./index.html"
})


        // const newsData = ['news1', 'news2', 'news3', 'news4', 'news5', 'news6', 'news7']
        // var news;

        // const newsUpdate1 = document.getElementById('news-update1')
        // var br = document.createElement('br')

        // for(news of newsData){
        //     newsUpdate1.innerHTML = newsUpdate1.innerHTML + news + "<br>"
        // }