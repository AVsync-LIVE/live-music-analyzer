//------------------------------------------------------------------------------------------------------------------------------
        //-----------------------------------------------CREATING THE GUITAR TAB-------------------------------------------------------
        //------------------------------------------------------------------------------------------------------------------------------
//grab values
var convertedStuff = document.getElementById('converter');
var generation = document.getElementById('output');
var d = document.createElement('br');
var the_uke;

var eString = document.getElementById('eString');
var BString = document.getElementById('BString');
var GString = document.getElementById('GString');
var DString = document.getElementById('DString');
var AString = document.getElementById('AString');
var EString = document.getElementById('EString');


//creating the six GUITAR string arrays
var guit_string1 = new Array();
var guit_string2 = new Array();
var guit_string3 = new Array();
var guit_string4 = new Array();
var guit_string5 = new Array();
var guit_string6 = new Array();

// setting length of the six GUITAR string arrays
guit_string1.length = 75;
guit_string2.length = 75;
guit_string3.length = 75;
guit_string4.length = 75;
guit_string5.length = 75;
guit_string6.length = 75;

//populating the six GUITAR string arrays with hyphens

// for (i = 0; i < guit_string1.length; i++) {
//     guit_string1[i] = "-";
//     guit_string2[i] = "-";
//     guit_string3[i] = "-";
//     guit_string4[i] = "-";
//     guit_string5[i] = "-";
//     guit_string6[i] = "-";
// }

//guitar strings are populated down below
var all_guit_strings = [[]]; //= new Array(guit_string1, guit_string2, guit_string3, guit_string4, guit_string5, guit_string6);

//function that displays the GUITAR tab for the user 
function guit_tab_display() {
    //var d = document.createElement('br');
    for (i = 0; i < 6; i++) {
        for (j = 0; j < guit_string1.length; j++) {
            convertedStuff.innerHTML += all_guit_strings[i][j]
        }
        convertedStuff.appendChild(d)
    }
}
//------------------------------------------------------------------------------------------------------------------------------
//-----------------------------------------------CREATING THE UKULELE TAB-------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------------------

//creating the four UKULELE string arrays
var uke_string1 = new Array();
var uke_string2 = new Array();
var uke_string3 = new Array();
var uke_string4 = new Array();

// setting length of the four UKULELE string arrays
uke_string1.length = 75;
uke_string2.length = 75;
uke_string3.length = 75;
uke_string4.length = 75;

//populating the four UKULELE string arrays with hyphens
for (i = 0; i < uke_string1.length; i++) {
    uke_string1[i] = "-";
    uke_string2[i] = "-";
    uke_string3[i] = "-";
    uke_string4[i] = "-";
}

var all_uke_strings = new Array(uke_string1, uke_string2, uke_string3, uke_string4);


//function that displays the UKULELE tab for the user 
function uke_tab_display() {
    //var d = document.createElement('br');
    for (i = 0; i < 4; i++) {
        for (j = 0; j < uke_string1.length; j++) {
            convertedStuff.innerHTML += all_uke_strings[i][j]
        }
        convertedStuff.appendChild(d);
    }
}

//------------------------------------------------------------------------------------------------------------------------------
//-----------------------------------------------CREATING THE BANJO TAB-------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------------------

//creating the five BANJO string arrays
var banjo_string1 = new Array();
var banjo_string2 = new Array();
var banjo_string3 = new Array();
var banjo_string4 = new Array();
var banjo_string5 = new Array();

// setting length of the five BANJO string arrays
banjo_string1.length = 75;
banjo_string2.length = 75;
banjo_string3.length = 75;
banjo_string4.length = 75;
banjo_string5.length = 75;

//populating the five BANJO string arrays with hyphens
for (i = 0; i < banjo_string1.length; i++) {
    banjo_string1[i] = "-";
    banjo_string2[i] = "-";
    banjo_string3[i] = "-";
    banjo_string4[i] = "-";
    banjo_string5[i] = "-";
}

var all_banjo_strings = new Array(banjo_string1, banjo_string2, banjo_string3, banjo_string4, banjo_string5);


//function that displays the BANJO tab for the user 
function banjo_tab_display() {
    //var d = document.createElement('br');
    for (i = 0; i < 5; i++) {
        for (j = 0; j < banjo_string1.length; j++) {
            convertedStuff.innerHTML += all_banjo_strings[i][j]
        }
        convertedStuff.appendChild(d)
    }
}

//------------------------------------------------------------------------------------------------------------------------------
//-----------------------------------------------DISPLAYING THE TABS------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------------------

function loadConverter()
{
    // instantiating guit_tab_display -- displaying the empty GUITAR tab
    //guit_tab_display();
    //generation.appendChild(d)

    //function that prompts user for guitar column 1 info and then updates the GUITAR column 1
    // (occurs after user clicks button)

    //var userInput = prompt("Enter chord for Column 1:");
    //   guit_string1[0] = userInput.charAt(0);
    //   guit_string2[0] = userInput.charAt(1);
    //   guit_string3[0] = userInput.charAt(2);
    //   guit_string4[0] = userInput.charAt(3);
    //   guit_string5[0] = userInput.charAt(4);
    //   guit_string6[0] = userInput.charAt(5);

    guit_string1 = eString.innerText;
    guit_string2 = BString.innerText;
    guit_string3 = GString.innerText;
    guit_string4 = DString.innerText;
    guit_string5 = AString.innerText;
    guit_string6 = EString.innerText;

    all_guit_strings.push(guit_string1);
    all_guit_strings.push(guit_string2);
    all_guit_strings.push(guit_string3);
    all_guit_strings.push(guit_string4);
    all_guit_strings.push(guit_string5);
    all_guit_strings.push(guit_string6);

    //console.log(all_guit_strings);
    
    /*
        Here a check needs to be in place for the converter: the user should have some sort of drop-down select
        to determine which conversion function needs to run. Each time the 'convert' button is pressed, the strings variable is
        reset, and emptied to refill when the user hits the 'convert' button again. This is to accomodate the editing of tabs.
    */
    chords = [[]]; //reset the chord variable for the next set of chords to convert
    guit_to_uke_convert(); //instantiates the guit_to_uke_convert function -- updates the ukulele tab
    all_guit_strings = [[]]; //reset the double array...??? -> this works!!
}
// mapping function that will convert the guitar chord in column 1 to the corresponding ukulele chord
function guit_to_uke_convert() {
    var frigginChord = '';
    // for (let i = 1; i < all_guit_strings.length; i++) {
    //     chord = chord + all_guit_strings[i][j];
    // }
    console.log(all_guit_strings.length); // length = 7?
    for (let j = 0; j < guit_string1.length; j++) {
        chords.push(all_guit_strings.map(function(value,index){return value[j];})); //return a column
    }
    //console.log(chords)

    for (let index = 0; index < chords.length; index++) {
        const element = chords[index];
        //console.log(element); //returns all arrays holding the columns

        for (let jindex = 0; jindex < element.length; jindex++) {
            const d = element[jindex];
            if (d == undefined)
                continue;
            else
            {
                frigginChord += d;
                the_uke = uke_chord.get(guit_chord.get(frigginChord));
                console.log(the_uke); //returns undefined if there is no equivalent chord conversion
            }
        }
        console.log(frigginChord);
        frigginChord = ''; //wipe the chord after conversion
    }
    // var converted_uke_chord = uke_chord.get(guit_chord.get(completeChord));
    // console.log(`uke: ${converted_uke_chord}`);
    // console.log(completeChord);
}
// mapping function that will convert the guitar chord in column 1 to the corresponding banjo tab

function guit_to_banjo_convert() {
    converted_banjo_chord = banjo_chord.get(guit_chord.get(all_guit_strings));
    banjo_string1[0] = converted_banjo_chord.charAt(0);
    banjo_string2[0] = converted_banjo_chord.charAt(1);
    banjo_string3[0] = converted_banjo_chord.charAt(2);
    banjo_string4[0] = converted_banjo_chord.charAt(3);
    banjo_string5[0] = converted_banjo_chord.charAt(4);
}