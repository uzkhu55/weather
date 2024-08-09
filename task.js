const promise = () => {
  console.log("hello world");
};
setTimeout(promise, 1000);
2;
let counter = 0;

function a() {
  counter = counter += 1;
  console.log(counter);
}

setInterval(a, 1000);

3;
let currentStep = 0;

function printStep() {
  currentStep = currentStep += 1;
  console.log(`Step ${currentStep}`);
  if (currentStep === 3) {
    clearInterval(aa);
  }
}
let aa = setInterval(printStep, 2000);

4;
function pid() {
  console.log("Something went wrong");
}

setTimeout(pid, 1000);
