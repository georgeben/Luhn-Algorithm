//Getting references to HTML elements

const card_input = document.getElementById('card_input');
const check_button = document.getElementById('check_button');
const result_textview = document.getElementById('result_textview');

const validateCC = (card_number) =>{
    //Checks if the card number entered is valid
    let sum = 0;
    let double = false;

    console.log("Last number", card_number[card_number.length -1]);
    console.log(card_number.length -1);
    for(let i = card_number.length -1; i >= 0; i--){
        let current_number = parseInt(card_number.charAt(i));
        if(double){
            if((current_number *= 2) > 9) current_number -= 9;
        }

        sum += current_number;
        double = !double;
    }
    return (sum % 10) == 0;
}

const validate_card = (event) =>{
    //Get card number from the card input
    let card_number = card_input.value;

    //Sanity checks
    if (card_number < 0 || card_number == 0 || card_number.length < 16){
        alert("Please enter a valid number");
        return;
    } 
    console.log("Card number", card_number);

    let status = validateCC(card_number);
    console.log("After validation", status)

    result_textview.innerHTML = status ? "Card is vaild" : "Card is not valid";
}

check_button.addEventListener('click', validate_card);

card_input.addEventListener('keypress', (event) =>{
    if(event.which === 13){
        validate_card();
    }
})

