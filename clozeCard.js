var fs = require('fs');

function ClozeCard(text,cloze){

    // this is a check to make sure the user calls the constructor with the 'new'keyword
    if (!(this instanceof ClozeCard)) {
        return new ClozeCard(text,cloze);
    }

    if (text.includes(cloze)) {

        // return the cloze-deleted portion of the text
        this.cloze = cloze;

        // return the text with cloze part removed
        var indexOfCloze = text.indexOf(cloze);
        this.partialText = "..." + text.substring(indexOfCloze + cloze.length); //remove the cloze word from the substring

        // return the full text
        this.fullText = text;

        // writes cloze flashcad to .csv file in format: fullText,cloze
        fs.appendFile('./db/clozeCard.csv', `${text},${cloze}\n`, function(err) {
            if (err) {
                throw err;
            }
        });

        this.cleanDB = function() {
                fs.writeFile('./db/clozeCard.csv','',function(err) {
                    if (err) {
                        throw err;
                    }
                    console.log('Flashcard database cleared');
                });
        };
    }

    // If the cloze term is not in the text, throw an ERROR
    else {
        console.log(
            `\n*****ERROR:*****\n YOUR CLOZE TERM: " ${cloze} "\nDOES NOT APPEAR IN YOUR FULL TEXT: " ${text} "\n`
        );
    }
}


module.exports = ClozeCard;


