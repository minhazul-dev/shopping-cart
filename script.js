// document.getElementById('case-increase').addEventListener('click', function () {
//     const caseInput = document.getElementById('case-count');
//     const caseCount = parseInt(caseInput.value);
//     const caseNewCount = caseCount + 1;
//     caseInput.value = caseNewCount;
//     const caseTotal = caseNewCount * 59;
//     document.getElementById('case-total').innerText = "$" + caseTotal;
// })

// // for case minus button 
// document.getElementById('case-decrease').addEventListener('click',function(){
//    const caseInput = document.getElementById('case-count')
//   const caseCount = parseInt(caseInput.value);
//   const caseNewCount = caseCount - 1;
//   caseInput.value = caseNewCount;
//   const caseTotal = caseCount * 59 ;
//   document.getElementById('case-total').innerText= "$" + caseTotal;

// })

// uprer same jinish  with function

// document.getElementById('case-increase').addEventListener('click', function () {
//     handleProductChange(true);
// })

// document.getElementById('case-decrease').addEventListener('click', function () {
//     handleProductChange(false)

// })

// function handleProductChange(isIncrease) {

//     const caseInput = document.getElementById('case-count')
//     const caseCount = parseInt(caseInput.value);
//     // const caseNewCount = caseCount - 1;
//     let caseNewCount = caseCount ;
//     if (isIncrease == true) {
//         caseNewCount = caseCount + 1;
//     }
//     if (isIncrease == false && caseCount > 0) {
//         caseNewCount = caseCount - 1;
//     }
//     caseInput.value = caseNewCount;
//     const caseTotal = caseNewCount * 59;
//     document.getElementById('case-total').innerText = "$" + caseTotal;


// }


//    for phone plus button 
// document.getElementById('phone-increase').addEventListener('click', function () {
//     handlePhoneChange(true);
// })
// for minus button

// document.getElementById('phone-decrease').addEventListener('click', function () {
//     handlePhoneChange(false)
// })

// function handlePhoneChange(isIncreasingPhone) {
//     const caseInput = document.getElementById('phone-count')

//     const caseCount = parseInt(caseInput.value);
//     let caseNewCount = caseCount;
//     if (isIncreasingPhone == true) {
//         caseNewCount = caseCount + 1;
//     }
//     if (isIncreasingPhone == false && caseCount > 0) {
//         caseNewCount = caseCount - 1;

//     }
//     caseInput.value = caseNewCount;
//     const phoneTotal = caseNewCount * 1219;
//     document.getElementById('phone-total').innerText = "$" + phoneTotal;
// }


function handleProductChange(product, isIncrease) {

    const productCount = getInputValue(product);
    let productNewCount = productCount;
    if (isIncrease == true) {
        productNewCount = productCount + 1;
    }

    if (isIncrease == false && productCount > 0) {
        productNewCount = productCount - 1;
    }
    productCount.value = productNewCount;
    // const productTotal = productNewCount * 59;
    document.getElementById(product + '-count').value = productNewCount;
    let productTotal = 0;
    if (product == 'phone') {
        productTotal = productNewCount * 1219;

    }
    if (product == 'case') {
        productTotal = productNewCount * 59;

    }

    document.getElementById(product + '-total').innerText = "$" + productTotal;
    calculateTotal();
}

function calculateTotal() {
    // const phoneInput = document.getElementById('phone-count');
    // const phoneCount = parseInt(phoneInput.value);
    const phoneCount = getInputValue('phone');
    const caseCount = getInputValue('case');

  const  totalPrice = phoneCount*1219 + caseCount*59;
 
    const tax = Math.round(totalPrice * 0.1);
    document.getElementById('tax-amount').innerText = "$" + tax;
    document.getElementById('total-price').innerText = "$" + totalPrice;

    const grandTotal = totalPrice + tax;
    document.getElementById('grand-total').innerText = "$" + grandTotal;
}
function getInputValue(product) {
    const productInput = document.getElementById(product + '-count');
    const productCount = parseInt(productInput.value);
    return productCount;

}