// get a random number
function getRandomNumber() {
   return Math.floor(Math.random() * horoscopes.length )
};
// create the messages to be displayed in 3 ways
 const horoscopes = ['libra','scorpio','leo','Gemini','siggattarus','Aquarus'];
 const wiseMessage = ['double tragedy','new love','sickness','good fortunes','someone new','change of career',];
 const advice = ['tread carefully', 'go with the flow','trust no one','make friends','invest wisely','settle down'];
 const  message = [];

 //create a function to push messages to 
 //the new(message) array depending on the random numbers gotten  to correspond to the data given

 function getOutputMessage() {
    for (let i = 0;i < horoscopes.length; i++ ) {
        return message.push(horoscopes[getRandomNumber()])
    } 

    
    };

 
 //getOutputMessage();
 //console.log(message)

 //create a function to combine the messages into one for output
 function combineMessages() {
    if (getRandomNumber() === 0) {
        return  `your horoscope is ${message} ,you'll experience ${wiseMessage[0]}. Please ${advice[0]}`
    }
    else if (getRandomNumber() === 1) {
        return   `your horoscope is ${message} ,you'll experience ${wiseMessage[1]}. Please ${advice[1]}`
    }
    else if (getRandomNumber() === 2) {
        return  `your horoscope is ${message} ,you'll experience ${wiseMessage[2]}. Please ${advice[2]}`
    }
    else if (getRandomNumber() === 3) {
        return `your horoscope is ${message} , you'll experience ${wiseMessage[3]}. Please ${advice[3]}`
    }
    else if (getRandomNumber() === 4) {
        return  `your horoscope is ${message} , you'll experience ${wiseMessage[4]}. Please ${advice[4]}`
    }else {
        return  `your horoscope is ${message}, you'll experience ${wiseMessage[5]}. Please ${advice[5]}`
    }
 };
 //test code by calling and logging
 getOutputMessage()
 combineMessages()
 //console.log(getOutputMessage())
 console.log(combineMessages())

 
