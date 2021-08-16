let story = "Last weekend, I took literally the most beautiful bike ride of my life. The route is called The 9W to Nyack and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It's really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.";
//In the code editor, there is a string called story. We want to gather some information about the individual words and sentences in the string. Let’s split the string into individual words and save them in a new array called storyWords.
const storyWords = story.split(" ");
console.log(storyWords);//[ 'Last', 'weekend,',... 88 more items ]
console.log("Number of words in the paragraf: ",storyWords.length-1)//Number of words in the paragraf:  187

let unnecessaryWords = ['extremely', 'literally', 'actually' ];

//There is an array of words that are unnecessary. Iterate over your array to filter out these words. Save the remaining words in an array called betterWords. There are several ways that you could achieve this.
var betterWords=storyWords.filter((unnecessaryWords) => !['extremely', 'literally','actually' ].includes(unnecessaryWords));

console.log(betterWords);//[ 'Last', 'weekend,',... 82 more items ]

let overusedWords = ['really', 'very', 'basically'];

//There is an array of words called overusedWords. These are words overused in this story. You want to let the user of your program know how many times they have used these overused words. There are two ways to achieve this. Try it on your own first. If you need help, consult the hint
for (let i = 0; i < betterWords.length; i++) {
  for (let j = 0; j < overusedWords.length; j++) {
    if (betterWords[i] === overusedWords[j]) {
      console.log(overusedWords[j])
    }
  }
};//prints words not numbers like below

let reallyCount = 0;
let veryCount =  0;
let basicallyCount =  0;
for(i = 0; i <betterWords.length; i ++){
if (betterWords[i] === 'really'){
  reallyCount +=1;
 if(reallyCount % 2 === 0){//For the overused words, remove it every other time it appears.//percet devides number and check if there is leftover(in my case it is devided by 2){
betterWords.splice(i, 1)
}
} else if (betterWords[i] === 'very'){
  veryCount += 1;
  if(veryCount % 2 === 0){
betterWords.splice(i, 1)
}
} else if (betterWords[i] === 'basically'){
  basicallyCount+=1;
   if(basicallyCount% 2 === 0){
betterWords.splice(i, 1)
}
}
};
console.log(betterWords);
console.log("really counts: " , reallyCount);//really counts:  2
console.log("very counts: ", veryCount);//very counts:  5
console.log("basically counts: ", basicallyCount);//basically counts:  1

//Now, count how many sentences are in the paragraph.This may seem tricky, but remember that all of the sentences in this paragraph end with a period (.) or an exclamation mark (!). You could iterate over the array and add 1 to a sentence counter variable for each word that has a period or exclamation mark as its final character.
//let sentences = 0;/array.forEach(word => {if (word[word.length-1] === '.' || word[word.length-1] === '!') {sentences+=1}});
const re = /[.!]/;
const numOfSentences = story.split(re);
console.log("the number of sentences is : ", numOfSentences.length-1);//the number of sentences is :  12

console.log("Really counts: " ,(reallyCount ),"Very counts: ", (veryCount ),"Basically counts: ", (basicallyCount), "Number of words in the paragraf: ", (storyWords.length-1));

//Now, log the betterWords array to the console as a single string.

console.log(betterWords.join(" "));//Last weekend, I took the most beautiful bike ride of my life. The route is called The 9W to Nyack and it stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It's really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you cross back into New York! At this point, you are very close to the end.

//practice 1

let count = (story.match(/very/g)||[]).length;
console.log(count);//prints 5

for (var i=0; i<betterWords.length; i++) 

//Write a function that finds the word that appears the greatest number of times.
var compare= 1;//We are going to compare using stored value
var count1= 0;//We are going to count occurrence of item here
var word;//We are going to store word item
for (var i=0; i<betterWords.length; i++){
 for (var j=i; j<betterWords.length; j++){
  if (betterWords[i] == betterWords[j])
count1++;//increment existing value
 if (count1 > compare) {
compare=count1; //set compare to count1
word = betterWords[i]; }//set wordt value
}
count1=0;
}
console.log(word+" - is the most used word ( " +compare +" times it was used) ") ;

//Replaced overused words with something else.
var newReally = "extremely";
var newStory = story.replace(/very/g, newReally);
console.log("New string = " + newStory);

