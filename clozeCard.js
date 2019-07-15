

function ClozeCard(text,cloze){

    if (text.includes(cloze)) {

        // return the cloze-deleted portion of the text
        this.cloze = cloze;

        // return the text with cloze part removed
        var indexOfCloze = text.indexOf(cloze);
        this.partialText = "..." + text.substring(indexOfCloze + cloze.length); //remove the cloze word from the substring

        // return the full text
        this.fullText = text;
    }

    // If the cloze term is not in the text, throw an ERROR
    else {
        console.log(
            `\n*****ERROR:*****\n YOUR CLOZE TERM: " ${cloze} "\nDOES NOT APPEAR IN YOUR FULL TEXT: " ${text} "\n`
        );
    }
}


