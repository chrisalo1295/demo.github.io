class Bank
{
    static get_acc_details()
    {
        var acc_details ={
            1001:{name:"Ann", acno: 1001, pin: 1234, password: "abcd", balance: 2000},
            1002:{name:"Amal", acno: 1002, pin: 1244, password: "efgh", balance: 3000},
            1003:{name:"Nithya", acno: 1003, pin: 1254, password: "ijkl", balance: 4000}
        }
        return acc_details
    }
    static login() 
    {
        var accno = document.querySelector("#accnum").value;
        var pwsd = document.querySelector("#pass").value;
        try 
        {
            if(isNaN(accno))throw "not a valid account number"; 
        }
        catch(err) 
        {
            alert("err");
        }
        let data = Bank.get_acc_details();
        if(accno in data) 
        {
            let pwd = data[accno].password;
            if(pwd == pwsd)
            {
                alert("login successfull");
                window.location.href = "transaction.html";
            }
            else 
            {
                alert("incorrect password");
            }
        }
        else 
        {
            alert("user does not exist");
        }
    }
    
    static deposit() 
    {
        var accnum = document.querySelector("#accno").value;
        var pin = document.querySelector("#pin").value;
        var amt = Number(document.querySelector("#amount").value); 
        let data =Bank.get_acc_details();
        if (accnum in data) 
        {
            let pin_no = data[accnum].pin;
            if (pin == pin_no) 
            {
                data[accnum].balance += amt;
                alert("account has been credited");
                alert(data[accnum].balance);
            }
            else 
            {
                alert("pin not valid");
            }
        }
        else 
        {
            alert("incorrect account details");
        }
    }
    
    static withdraw() 
    {
        var accnum = document.querySelector("#accno").value;
        var pin = document.querySelector("#pin").value;
        var amt = Number(document.querySelector("#amount").value); 
        let data =Bank.get_acc_details();
        if (accnum in data) 
        {
            let pin_no = data[accnum].pin;
            if (pin == pin_no) 
            {
                data[accnum].balance -= amt;
                alert("account has been debited");
                alert(data[accnum].balance);
            }
            else 
            {
                alert("pin not valid");
            }
        }
        else 
        {
            alert("incorrect account details");
        }
    }

    static balance_check()
    {
        var n = document.getElementById("acc_no").value;
        let data = Bank.get_acc_details();
        if (n in data)
        {
            let holder_name = data[n].name;
            let bal = data[n].balance;
            document.getElementById('name').innerHTML = "hello" + holder_name;
            document.getElementById('balance').innerHTML ="your current balance" + bal;
        }
    }
}