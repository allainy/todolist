//module.exports is a javascript object. objects have properties and methods associated with it. 


exports.getDate = function() {

    const today = new Date();

    const options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };

    return today.toLocaleDateString("en-US", options); //returns the result

}

// wrap bunch of codes inside a function. this function will carry all the code and returns the result. result meaning = day

exports.getDay = function getDay() {

    const today = new Date();

    const options = {
        weekday: "long",
    };

    return today.toLocaleDateString("en-US", options); //returns the result

};
