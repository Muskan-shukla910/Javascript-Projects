let arr1=["The time is always right to do what is right.," ,"In the end, it's not the years in your life that count. It's the life in your years","The measure of a man is what he does with power.","A good character is the best tombstone.","Integrity is doing the right thing, even when no one is watching."];

let arr = [
  "The time is always right to do what is right.",                          // 1
  "Character is doing the right thing when nobody's looking.",              // 2
  "We are what we repeatedly do. Excellence is not an act but a habit.",   // 3
  "Do not do to others what you would not want done to yourself.",          // 4
  "Integrity is doing the right thing, even when no one is watching.",      // 5
  "A good character is the best tombstone.",                                // 6
  "The measure of a man is what he does with power.",                       // 7
  "Honesty is the first chapter in the book of wisdom.",                    // 8
  "It is not enough to do good; one must do it the right way.",             // 9
  "Kind words can be short and easy to speak, but their echoes are endless.", // 10
  "The strength of character is not tested in comfort but in adversity.",   // 11
  "Do unto others as you would have them do unto you.",                     // 12
  "A man is not honest simply because he never had a chance to steal.",     // 13
  "The truly rich are those who enjoy what they have.",                     // 14
  "He who angers you conquers you.",                                        // 15
  "Courage is not the absence of fear, but the triumph over it.",           // 16
  "An eye for an eye makes the whole world blind.",                         // 17
  "Speak only if it improves upon the silence.",                            // 18
  "You cannot do a kindness too soon, for you never know how soon it will be too late.", // 19
  "Live as if you were to die tomorrow. Learn as if you were to live forever.", // 20
  "It is easier to build strong children than to repair broken men.",       // 21
  "Forgiveness is not an occasional act; it is a constant attitude.",       // 22
  "The best way to find yourself is to lose yourself in the service of others.", // 23
  "Wisdom is knowing what to do next; virtue is doing it.",                 // 24
  "No one has ever become poor by giving.",                                 // 25
  "In the middle of every difficulty lies opportunity.",                    // 26
  "We rise by lifting others.",                                             // 27
  "A lie gets halfway around the world before the truth puts on its boots.", // 28
  "You must be the change you wish to see in the world.",                   // 29
  "Justice without mercy is cruelty; mercy without justice is weakness.",   // 30
  "Treat people as if they were what they ought to be.",                    // 31
  "The good you do today may be forgotten tomorrow. Do good anyway.",       // 32
  "Not all those who wander are lost, but all who deceive are.",            // 33
  "A person's worth is measured by the worth of what they value.",          // 34
  "Moral courage is the highest form of bravery.",                          // 35
  "It is in your hands to create a better world for all who live in it.",   // 36
  "The most important thing in the world is family and love.",              // 37
  "Real generosity toward the future lies in giving all to the present.",   // 38
  "Ethics is knowing the difference between what you have the right to do and what is right to do.", // 39
  "He who has a why to live can bear almost any how.",                      // 40
  "To know what is right and not do it is the worst cowardice.",            // 41
  "Goodness is the only investment that never fails.",                      // 42
  "A good deed is never lost; he who sows courtesy reaps friendship.",      // 43
  "The soul is dyed the color of its thoughts.",                            // 44
  "Do what you can, with what you have, where you are.",                    // 45
  "Small deeds done are better than great deeds planned.",                  // 46
  "Reputation is what others think of you; character is what you truly are.", // 47
  "He is rich who is content; he is poor who wants more than he has.",      // 48
  "The greatest glory is not in never falling, but in rising every time we fall.", // 49
  "Let your life speak louder than your words."                             // 50
];

// console.log(morals.length); // Output: 50
// console.log(arr.length);
let btn=document.querySelector("button");
let quote=document.querySelector("h1");

btn.addEventListener('click',()=>{
    const ind=Math.floor(Math.random()*50);
    quote.textContent=arr[ind];

})
