let challenge = "30 Days Of JavaScript";

console.log(challenge);

console.log(challenge.length);

console.log(challenge.toUpperCase());

console.log(challenge.toLowerCase());

console.log(challenge.substring(0,2));

console.log(challenge.substring(3, (challenge.length)));

console.log(challenge.includes("Script"));

let strArray = challenge.split();

console.log(strArray);

console.log(challenge.split(" "));

console.log("Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon".split(","));

console.log("The quote \'There is no exercise better for the heart than reaching down and lifting people up.\' by John Holmes teaches us to help one another.")

if(typeof('10') == typeof(10))
{
    console.log("true");
}
else  
{
    console.log(typeof(parseInt('10')) == typeof(10))
}

let randomNum = Math.random() * 100

console.log(randomNum);

console.log(Math.random() * 50 + 50);

for(let i = 1; i <=5; i++)
{
    console.log(i + " 1 " + i + " " + i*i +" " + i*i*i);
}
