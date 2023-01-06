const input = document.querySelector('#input')

function validation(event) {
    let codeC = event.codeC || event.which
    if ( codeC >= 65 && codeC <= 90 ) {
        return true ; 
    } 
    else if (codeC == 8 || codeC == 27 || codeC == 32 || codeC == 20 || codeC == 9 || codeC == 46) {
        return true;     
    }
    return false;
}