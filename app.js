//Getting references to HTML elements

const card_input = document.getElementById('card_input');
const check_button = document.getElementById('check_button');
const result_textview = document.getElementById('result_textview');

const validateCC = (card_number) =>{
    //Checks if the card number entered is valid using the Luhn's algorithm
    let sum = 0; //Sets the sum of card digits to zero initially

    /*Flag to keep track of the digit to double, which is every 
    second digit starting from the righ. */
    let double = false; 

    for(let i = card_number.length -1; i >= 0; i--){
        //Get the current digit 
        let current_digit = parseInt(card_number.charAt(i));
        if(double){
            /*Multiply the digit by 2 and check if it is greater than 9,
             if it is, subtract 9 from the product */
            if((current_digit *= 2) > 9) current_digit -= 9;
        }

        sum += current_digit;
        double = !double; //Invert the flag
    }
    return (sum % 10) == 0;
}

const validate_card = (event) =>{
    //Get card number from the card input
    let card_number = card_input.value;

    //Sanity checks
    if (card_number < 0 || card_number == 0){
        alert("Please enter a valid number");
        return;
    } 

    if(card_number.length < 16){
        alert("Please enter at least a 16 digit number");
        return;
    }

    let status = validateCC(card_number);

    result_textview.innerHTML = status ? "Card is vaild" : "Card is not valid";
}

check_button.addEventListener('click', validate_card);

card_input.addEventListener('keypress', (event) =>{
    if(event.which === 13){
        validate_card();
    }
})

