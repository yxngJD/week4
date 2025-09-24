// app.js
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  console.log("Start of Week 4 Project");
  await delay(1000);
  console.log("Hello from Promises & async/await!");
  console.log("End of Program");
}

main();
