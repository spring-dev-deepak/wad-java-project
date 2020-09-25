try{
    const currentUserJson = localStorage.getItem('currentUser')
    const currentUser = JSON.parse(currentUserJson)

    const name = document.querySelector('#uname')
    const eMail = document.querySelector('#uemail')
    const accNo = document.querySelector('#uacc')
    const gender = document.querySelector('#ugen')

    name.textContent = currentUser.firstName
    eMail.textContent = currentUser.eMail
    accNo.textContent = currentUser.accNo
    gender.textContent = currentUser.gender

    var logout = (e) => {
        localStorage.removeItem('currentUser')
        location.href = './index.html'
    }
}catch{
    location.href = './index.html'
}