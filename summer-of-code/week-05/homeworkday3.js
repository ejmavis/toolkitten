// ###########################################
// Day 2 Homework tasks
// //Music
// // A 440Hz
// // 1 octave is double the frequency 
// tempered piano
// A' 880Hz
// 12 half notes
// calculate and console.log the frequency each of the twelve notes between A and A'
// This is not a linear scale, but a geometric scale.
function musicFreq(){
    var a = 440
    var aDash = 880
    var noteNumber = 12
    //console.log(a,aDash)
    var commonRatio = (aDash/a)**(1/noteNumber)
    var note=['A','A#','B','C','C#','D','D#','E','F','F#','G','G#',"A'"]
    var noteLen = note.length
    // console.log(note)
    // console.log(commonRatio)
    var outputlist = ''
    for (i = 0; i < noteLen; i++) {
        output = note[i] + " has a frequency of "+ a*(commonRatio**i)+"Hz"
        console.log(output + '\n')
        // I have inserted <br> as this is the html for a new line
        // So when the text is inserted into the html it will have
        // each note and its frequency on a separate line
        outputlist = outputlist + '<br>' + output
    }
    return outputlist
}
// Second thing is planets.
// Calculate and console.log how many minutes the moon travels in a day.  
// First calculate how many degrees it travels in the sky when the Earth returns to the same position during its daily rotation.
// Find angle then calculate the travel time in minutes.




// ########################################
// Full name greeting. 
// Write a program that asks for a person’s first name, 
// then middle, 
// and then last. 
// Finally, it should greet the person using their full name. 
function askName(){
    var firstName = prompt("Please enter your first name?")
    var questionTwo = 'Thank you, ' + firstName + '\nPlease enter your middle name(s)';
    var middleNames = prompt(questionTwo)
    var surName = prompt("Now, please enter your surname.")
    var outputString = "It is very nice to meet you " + firstName + ' ' + middleNames + ' ' + surName +'!';
    //alert(outputString)
    console.log(outputString)
    return outputString
}
// #############################
// Bigger, better favorite number.
// Write a program that asks for a person’s favorite number. 
// Have your program add 1 to the number, and then suggest the result as a bigger and better favorite number. 
// (Do be tactful about it, though.) 
function chooseNum(){
    var favouriteNumber = prompt("Please enter your favourite number")
    suggestedNumber = parseInt(favouriteNumber) + 1
    outputString = favouriteNumber + " is a very nice number, but have you thought about " + suggestedNumber + "? It is bigger and better than " + favouriteNumber
    console.log(outputString)
    //alert(outputString)
    return outputString
}

// Angry Boss Program
// Angry boss. Write an angry boss program that rudely asks what you want. Whatever you answer, the angry boss should yell it back to you and then fire you. For example, if you type in I want a raise, it should yell back like this: 
// WHADDAYA MEAN "I WANT A RAISE"?!? YOU'RE FIRED!!

function angryBoss(){
    var input = prompt('I\'m very busy, doing important stuff. WHADDAYA WANT?')
    output = 'WHADDAYA MEAN "' + input.toUpperCase() + '"?!? YOU\'RE FIRED!!!!!!!!!!!!!!!!!!!'
    return output
}

//
//- Table of contents. Here’s something for you to do in order to play around more with center, ljust, and rjust: write a program that will display a table of contents so that it looks like this: 
// Table of Contents 
// Chapter 1: Getting Started        page 1
// Chapter 2: Numbers                page 9
// Chapter 3: Letters                page 13
function tableContents(){
    var titles = ['Getting Started','Numbers','Letters']
    var pages = [1,9,13]
    var output = ''
    var outputlist = '<center><h3>Table of Contents</h3></center><table style="width:100%">'
    // I am aware that <center></center> is considered deprecated, but it does still work.
    // I do not know how to use CSS.
    for (i=0 ;i <titles.length; i++){
        var c = i + 1
        output = '<tr><td>'+'Chapter ' + c + ': ' + titles[i] + '</td><td>' + 'page ' + pages[i] + '</td></tr>'
        outputlist = outputlist + output 
    }
    outputlist = outputlist + '</table>'
    return outputlist
}