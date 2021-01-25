        // Login function
        function login(){
            document.getElementById('login').style.display ="none"
            document.getElementById('dashboard').style.display ="block"
        }
        const submit = document.getElementById('submit')
        submit.addEventListener('click', login)


        // Logout function
        function logout(){
            document.getElementById('login').style.display ="block"
            document.getElementById('dashboard').style.display ="none"
        }
        const logoutbtn = document.getElementById('logout')
        logoutbtn.addEventListener('click', logout)



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
                document.getElementById('depositeAmount').innerText = newDepositeAmount
                let newBallanceAmount = ballanceAmount + newDeposite
                document.getElementById('ballanceAmount').innerText = newBallanceAmount

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
                document.getElementById('withdrawAmount').innerText = newWithdrawAmount
                let newBallanceAmount = ballanceAmount - newWithdraw
                document.getElementById('ballanceAmount').innerText = newBallanceAmount

                document.getElementById('withdraw').value = ""
            }
        }
        const addWithdraw = document.getElementById('addWithdraw')
        addWithdraw.addEventListener('click', submitWithdraw)


