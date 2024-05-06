const accountId = 1244553;

let accountEmail = "raushan@google.com"

var accountPassword = "12345"

let accountState

accountCity = "Jaipur"

// accountId = 2   // not allowed


accountEmail = "hg@mg.co"
accountPassword = "21212112"
accountCity = "Bengaluru"



/* 
    Prefer not to use var 
    because fo issue in block scope of and funcitonal scope

*/

console.log(accountId)
console.table([accountId,accountEmail,accountPassword, accountCity, accountState])


