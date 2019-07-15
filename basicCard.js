var fs = require('fs');

function BasicCard(front,back) {

    // this argument checks to make the instance is a new instance, if not
    // it will call the constructor again with the 'new' keyword
    if (!(this instanceof BasicCard)) {
        return new BasicCard(front,back);
    }
    this.frontOfCard = front;
    this.backOfCard = back;

    // this appends the flashcard data to a comma separated text file with format: front,back
    fs.appendFile('./db/basicCard.csv', `${front},${back}\n`, function(err){
        if (err) {
            throw err;
        }
    });

    this.cleanDB = function() {
        fs.writeFile('./db/basicCard.csv','',function(err) {
            if (err) {
                throw err;
            }
            console.log('Flashcard database cleared');
        });
    };
}

module.exports = BasicCard;

