// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

const stepDOM = (step, food) => {
  document.querySelector(`#${food}`).innerHTML += `<li>${step}</li>`;
  //  ... Your code here
};

// Out of sync
// getInstruction("mashedPotatoes", 0, (step1) => {
//   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
// }, (error) => console.log(error));

// getInstruction("mashedPotatoes", 1, (step2) => {
//   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
// }, (error) => console.log(error));

// getInstruction("mashedPotatoes", 2, (step3) => {
//   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
// }, (error) => console.log(error));

// getInstruction("mashedPotatoes", 3, (step4) => {
//   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
// }, (error) => console.log(error));

// getInstruction("mashedPotatoes", 4, (step5) => {
//   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
//   document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
// }, (error) => console.log(error));

// Iteration 1 - using callbacks
// ...



getInstruction("mashedPotatoes", 0, (step0) => {
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step0}</li>`;
  // ... Your code here
  getInstruction("mashedPotatoes", 1, (step1) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
    // ... Your code here
    getInstruction("mashedPotatoes", 2, (step2) => {
      document.querySelector(
        "#mashedPotatoes"
      ).innerHTML += `<li>${step2}</li>`;
      // ... Your code here
      getInstruction("mashedPotatoes", 3, (step3) => {
        document.querySelector(
          "#mashedPotatoes"
        ).innerHTML += `<li>${step3}</li>`;
        // ... Your code here
        getInstruction("mashedPotatoes", 4, (step4) => {
          document.querySelector(
            "#mashedPotatoes"
          ).innerHTML += `<li>${step4}</li>`;
          getInstruction("mashedPotatoes", 5, (step5) => {
            document.querySelector(
              "#mashedPotatoes"
            ).innerHTML += `<li>${step5}</li>`;

            // ... Your code here
            document
              .querySelector("#mashedPotatoesImg")
              .removeAttribute("hidden");

            // ...
          });
        });
        // ...
      });
      // ...
    });
    // ...
  });
  // ...
});

// Iteration 2 - using promises
// ...

// for (let i = 0; i < 8;) {
//   obtainInstruction('steak', i)
//   .then( (step) => {
//     document.querySelector("#steak").innerHTML += `<li>${step}</li>`;
//     //  ... Your code here
//   })
//   i++
//   if (i === 8){
//     document.querySelector("#steakImg").removeAttribute("hidden");
//   }
// }

// document.querySelector("#steak").innerHTML += `<li>Steak is Ready!</li>`

// Iteration 2 - using promises
obtainInstruction("steak", 0)
  .then((step) => stepDOM(step, "steak"))
  .then(() =>
    obtainInstruction("steak", 1).then((step) => stepDOM(step, "steak"))
  )
  .then(() =>
    obtainInstruction("steak", 2).then((step) => stepDOM(step, "steak"))
  )
  .then(() =>
    obtainInstruction("steak", 3).then((step) => stepDOM(step, "steak"))
  )
  .then(() =>
    obtainInstruction("steak", 4).then((step) => stepDOM(step, "steak"))
  )
  .then(() =>
    obtainInstruction("steak", 5).then((step) => stepDOM(step, "steak"))
  )
  .then(() =>
    obtainInstruction("steak", 6).then((step) => stepDOM(step, "steak"))
  )
  .then(() =>
    obtainInstruction("steak", 7).then((step) => stepDOM(step, "steak"))
  ).then(() => {

    document.querySelector("#steakImg").removeAttribute("hidden");
  })

// ... Your code here

// Iteration 3 using async/await
// ...

async function makeBroccoli() {
  // ... Your code here

  try {
    // await only works in async functions
    // it can only be used on something that returns a Promise
    // await will wait for the call to complete and get a response before moving on to the next phase of the code.
    const myResolve0 = await obtainInstruction("broccoli", 0).then((step) =>
      stepDOM(step, "broccoli")
    );
    const myResolve1 = await obtainInstruction("broccoli", 1).then((step) =>
      stepDOM(step, "broccoli")
    );
    const myResolve2 = await obtainInstruction("broccoli", 2).then((step) =>
      stepDOM(step, "broccoli")
    );
    const myResolve3 = await obtainInstruction("broccoli", 3).then((step) =>
      stepDOM(step, "broccoli")
    );
    const myResolve4 = await obtainInstruction("broccoli", 4).then((step) =>
      stepDOM(step, "broccoli")
    );
    const myResolve5 = await obtainInstruction("broccoli", 5).then((step) =>
      stepDOM(step, "broccoli")
    );
    const myResolve6 = await obtainInstruction("broccoli", 6).then((step) =>
      stepDOM(step, "broccoli")
    );
    const myResolve7 = await obtainInstruction("broccoli", 7).then((step) =>
      stepDOM(step, "broccoli")
    );
    document.querySelector("#broccoliImg").removeAttribute("hidden");

    // mypromise('1').then(myResolve => {
    //     // <do something here></here>
    // }).catch(err => err);

    return {
      resolve: [
        myResolve0,
        myResolve1,
        myResolve2,
        myResolve3,
        myResolve4,
        myResolve5,
        myResolve6,
        myResolve7,
      ],
    };

    // return 'hello there'
    // return resolve(`This Resolved just fine with param: ${param}`);
    // return `This Resolved just fine with param: ${param}`;

    // catch(err) is the reject from a Pomise and catches anything that goes wrong in the try
  } catch (err) {
    return err;
    // return reject({status: 'Failure', message: 'Something went wrong!!'})
    // return {status: 'Failure', message: 'Something went wrong!!'}
  }
}

makeBroccoli();

// Bonus 2 - Promise all

function myPromise(food, step) {
  return new Promise((resolve, reject) => {
    if(!!food) {
          console.log(step);
            obtainInstruction(food, step).then((step) => {
              return resolve(step);
            })
            
        } else {
            return reject({status: 'Failure', message: 'Something went wrong!!'})
        }
    })
}
// ...

Promise.all([myPromise('brusselsSprouts', 0), myPromise('brusselsSprouts', 1), myPromise('brusselsSprouts', 2), myPromise('brusselsSprouts', 3), myPromise('brusselsSprouts', 4), myPromise('brusselsSprouts', 5), myPromise('brusselsSprouts', 6), myPromise('brusselsSprouts', 7)]).then(responseValues => {
    const [one, two, three, four, five, six, seven, eigth] = responseValues;


    responseValues.forEach((step) => {
      stepDOM(step, "brusselsSprouts")
    })
    
    stepDOM('Brussels sprouts are ready!', "brusselsSprouts")
    document.querySelector("#brusselsSproutsImg").removeAttribute("hidden");

})

