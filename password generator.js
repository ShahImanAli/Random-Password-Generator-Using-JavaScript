const upperset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerset = "abcdefghijklmnopqrstuvwxyz";
const numberset = "0123456789";
const symbolset = "~!@#$%^&*()";


//selection all the elements

const generatedPassword = document.getElementById('generated-password');
const lengthInput = document.getElementById('password-length');
const upperInput = document.getElementById('checkbox1');
const lowerInput = document.getElementById('checkbox2');
const numberInput = document.getElementById('checkbox3');
const symbolInput = document.getElementById('checkbox4');
const generateBtn = document.querySelector('.generate-btn');
const copyBtn = document.querySelector('.copy-btn');


//function for random data

const getRandomData = (dataSet) => {
  return dataSet[Math.floor(Math.random() * dataSet.length)];
};



//function for generate password

const generatePassword = () => {
    let password = "";
    const length = parseInt(lengthInput.value); 


    if(!upperInput.checked && !lowerInput.checked && !numberInput.checked && !symbolInput.checked){
      alert("Please select anyone of the option given below")
      
    }

  // function to get accurate password 

    const truncateString = (str, num) => {
      if (str.length > num) {
        return str.slice(0, num);
      } else {
        return str;
      }
    };
  
    while (password.length < length) {
      if (upperInput.checked) password += getRandomData(upperset);
      if (lowerInput.checked) password += getRandomData(lowerset);
      if (numberInput.checked) password += getRandomData(numberset);
      if (symbolInput.checked) password += getRandomData(symbolset);

  
    }

    password = truncateString(password, length);
  
    generatedPassword.value = password;

  };

generateBtn.addEventListener('click', generatePassword);


//logic for copy password button

copyBtn.addEventListener('click', () => {
    
    generatedPassword.select();
    generatedPassword.setSelectionRange(0, 99999); /*For mobile devices*/
    navigator.clipboard.writeText(generatedPassword.value); //for mobile copying

})

