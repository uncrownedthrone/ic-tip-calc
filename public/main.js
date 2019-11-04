const main = () => {
  console.log('hello world')
}

const calculateTip = () => {
  console.log('calculating tip')
  // get bill total from the input tag
  const total = document.querySelector('input').value
  console.log('the total is ' + total)
  // calculate the different tips
  const fifteenPercentTip = total * 0.15
  const eighteenPercentTip = total * 0.18
  const twentyPercentTip = total * 0.2
  console.log(fifteenPercentTip)
  console.log(eighteenPercentTip)
  console.log(twentyPercentTip)
  // display the tip amounts
  document.querySelector(
    '.fifteen-percent'
  ).textContent = fifteenPercentTip.toFixed(2)
  document.querySelector(
    '.eighteen-percent'
  ).textContent = eighteenPercentTip.toFixed(2)
  document.querySelector(
    '.twenty-percent'
  ).textContent = twentyPercentTip.toFixed(2)
}

document.addEventListener('DOMContentLoaded', main)
document.querySelector('button').addEventListener('click', calculateTip)
