// //Music
// // A 440Hz
// // 1 octave is double the frequency 
// tempered piano
// A' 880Hz
// 12 half notes
// calculate and console.log the frequency each of the twelve notes between A and A'
// This is not a linear scale, but a geometric scale.

// Second thing is planets.
// Calculate and console.log how many minutes the moon travels in a day.  
// First calculate how many degrees it travels in the sky when the Earth returns to the same position during its daily rotation.
// Find angle then calculate the travel time in minutes.
var a = 440
var aDash = 880
var noteNumber = 12
//console.log(a,aDash)
var commonRatio = (aDash/a)**(1/noteNumber)
var note=['A','A#','B','C','C#','D','D#','E','F','F#','G','G#',"A'"]
var noteLen = note.length
// console.log(note)
// console.log(commonRatio)
for (i = 0; i < noteLen; i++) {
    console.log(note[i]," has a frequency of "+ a*(commonRatio**i)+"Hz\n");
}

