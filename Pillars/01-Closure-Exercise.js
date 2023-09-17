// Call closure functions only one time ?

/* PROBLEM */
let view;
function initializeProblem() {
    view= "*^*"
    console.log("View set!");
}

// initializeProblem()
// initializeProblem()
// initializeProblem()
// console.log(view);


/* SOLUTION */
/* PROBLEM */
function initialize() {
    let called = 0;
    return function () {
        if (called > 0) return;
        else {
            view= "*^*"
            called++;
            console.log("View set!");
        }
    }
}

const startInitialization = initialize();
// startInitialization()
// startInitialization()
// startInitialization()

// console.log(view);
