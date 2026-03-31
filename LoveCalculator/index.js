let name1=document.getElementById("name1");
let name2=document.getElementById("name2");

let btn=document.getElementById("calcBtn");

function CalculateL0ve(name1,name2){
    const combinedName=(name1+name2).toLowerCase();
    const letters=["l","o","v","e"];
    const count=[];
    letters.forEach(letter=>{
        let counts=0;
        for(let char of combinedName){
            if(char==letter){
                count++;
            }

        }
        counts.push[count];
    });


    // Jab tak counts array mein ek se zyada number ho, reduce karte raho
  // Yeh ek mathematical reduction technique hai
  while (counts.length > 2) {
    const newCounts = [];
    for (let i = 0; i < Math.floor(counts.length / 2); i++) {
      newCounts.push(counts[i] + counts[counts.length - 1 - i]);
    }
    // Agar length odd thi toh middle element ko bhi rakhna hoga
    if (counts.length % 2 !== 0) {
      newCounts.push(counts[Math.floor(counts.length / 2)]);
    }
    counts.length = 0;
    newCounts.forEach(n => counts.push(n));
  }

  // Aakhir mein jo do numbers bache unhe join karke percentage banao
  const percentage = parseInt(counts.join(''));
  
  // Agar percentage 100 se zyada ho toh sirf last 2 digits lo
  return percentage > 100 ? percentage % 100 : percentage;
}

