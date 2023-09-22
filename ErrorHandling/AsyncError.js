// Errors
// Native Error constructor functions

const err = new Error("OOps!")
// try { throw err } catch (err) { console.log(err.message) } finally { console.log("Correct!") }





// Promise.reject("asyncFail").then(console.log).catch(console.log)

// Promise.resolve("asyncFail")
// .then(response => {
//     Promise.resolve().then(() => {
//         throw new Error("Failed!")
//     })
//     .catch(er => console.log(er))
// })
// .then(res => {
//     console.log(res, 2);
// })
// .catch(console.log)



class AuthenticationError extends Error {
    constructor (message) {
        super(message);
        this.name = "authenticationError"
        this.favouriteSnack = "grapes"
    }
}

const aErr = new AuthenticationError("oPsIE")

console.log(aErr instanceof AuthenticationError);


(function () {
    try {
      throw new Error();
    } catch (err) {
      var err = 5;
      var boo = 10;
      console.log("Err: ", err);
    }
    //Guess what the output is here:
    console.log("Err outside: ", err);
    console.log("Boo", boo);
  })();