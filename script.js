
//    Check login
function checkLogIn(){
    let isLogedIn = localStorage.getItem('login');
    if(isLogedIn === "true"){
        document.getElementById('login').style.display ="none"
        document.getElementById('dashboard').style.display ="block"
    }else{
        document.getElementById('login').style.display ="block"
        document.getElementById('dashboard').style.display ="none"
    }
}
checkLogIn()


// Login function
function login(){
    localStorage.setItem('login', "true");
    checkLogIn()
}
const submit = document.getElementById('submit')
submit.addEventListener('click', login)


// Logout function
function logout(){
    localStorage.setItem('login', "false");
    checkLogIn()
}
const logoutbtn = document.getElementById('logout')
logoutbtn.addEventListener('click', logout)

// Reset and Logout function
function resetAndLogout(){
    localStorage.clear()
    checkLogIn()
}
const resetbtn = document.getElementById('resetbtn')
resetbtn.addEventListener('click', resetAndLogout)



function reloadBallance(){
    let totalDeposit = localStorage.getItem('totalDeposit')
    let totalWithdraw = localStorage.getItem('totalWithdraw')
    let totalBalance = localStorage.getItem('totalBalance')

    document.getElementById('depositeAmount').innerText = totalDeposit? totalDeposit :00
    document.getElementById('withdrawAmount').innerText = totalWithdraw? totalWithdraw:00
    document.getElementById('ballanceAmount').innerText = totalBalance? totalBalance:1000

}
reloadBallance()

// Add deposite function
function submitDeposite(){
    document.getElementById('errorIinfo').innerText = ""
    const depositeAmount = parseFloat(document.getElementById('depositeAmount').innerText)
    const ballanceAmount = parseFloat(document.getElementById('ballanceAmount').innerText)
    const newDeposite = parseFloat(document.getElementById('deposite').value)
    if (Number.isNaN(newDeposite) || newDeposite < 0) {
        document.getElementById('errorIinfo').innerText = "Please enter a valid number"
        document.getElementById('deposite').value = ""
    } else {
        let newDepositeAmount = depositeAmount + newDeposite
        let newBallanceAmount = ballanceAmount + newDeposite

        localStorage.setItem('totalDeposit', newDepositeAmount)
        localStorage.setItem('totalBalance', newBallanceAmount)

        reloadBallance()

        document.getElementById('deposite').value = ""
    }
}
const addDeposite = document.getElementById('addDeposite')
addDeposite.addEventListener('click', submitDeposite)



// Add withdraw function
function submitWithdraw(){
    document.getElementById('errorIinfo').innerText = ""
    const withdrawAmount = parseFloat(document.getElementById('withdrawAmount').innerText)
    const ballanceAmount = parseFloat(document.getElementById('ballanceAmount').innerText)

    const newWithdraw = parseFloat(document.getElementById('withdraw').value)
    if (Number.isNaN(newWithdraw) || newWithdraw < 0) {
        document.getElementById('errorIinfo').innerText = "Please enter a valid number"
        document.getElementById('withdraw').value = ""
    }else if(newWithdraw > ballanceAmount){
        document.getElementById('errorIinfo').innerText = "You don't have sufficient balance"
        document.getElementById('withdraw').value = ""
    } else {
        let newWithdrawAmount = withdrawAmount + newWithdraw
        let newBallanceAmount = ballanceAmount - newWithdraw

        localStorage.setItem('totalWithdraw', newWithdrawAmount)
        localStorage.setItem('totalBalance', newBallanceAmount)

        reloadBallance()


        document.getElementById('withdraw').value = ""
    }
}
const addWithdraw = document.getElementById('addWithdraw')
addWithdraw.addEventListener('click', submitWithdraw)


