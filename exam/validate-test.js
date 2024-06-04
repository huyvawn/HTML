function checkName(eid1,eid2){ 
    var isCorrect = false;
    firstName = false;
    lastName = false;
    firstName = /^[A-z ]+$/.test(document.getElementById(eid1).value);
    lastName = /^[A-z ]+$/.test(document.getElementById(eid2).value);
    if(firstName == true && lastName == true)
        isCorrect = true;
    else
        isCorrect = false;
    alert(isCorrect? 
    'Congratulations! You entered correctly' : 'Sorry, You entered invalid name. Please try again.');
};
