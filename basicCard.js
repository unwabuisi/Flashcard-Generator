


function BasicCard(front,back) {

    // this argument checks to make the instance is a new instance, if not
    // it will call the constructor again with the 'new' keyword
    if (!(this instanceof BasicCard)) {
        return new BasicCard(front,back);
    }
    this.frontOfCard = front;
    this.backOfCard = back;
}
