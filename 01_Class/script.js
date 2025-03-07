/*Logic banane ka sahi tareeqa ye hai ke hum chhoti chhoti problems ko solve karna seekhain. Pehle basic concepts samjho, phir unko code mein implement karo.

Chalo step-by-step bilkul basic se logic develop karna seekhtay hain! 😊

🔹 Step 1: Problem Ko Samajhna
Pehle maslay ko define karna zaroori hai.
Misaal ke taur par, ek simple problem lete hain:
✅ Kya number even hai ya odd?

👀 Sochne ka tareeqa:

Agar number 2 se divide ho jaye aur bacha na aaye (remainder 0 ho), to even hai.
Agar remainder 1 aaye, to odd hai.


🔹 Step 2: Logic likhna (Paper ya Soch kar)
✅ Ek number lo
✅ Usay 2 se divide karo
✅ Agar remainder 0 ho to even, warna odd

🔹 Step 3: JavaScript Code likhna
Ab hum ise JavaScript mein likhtay hain:*/
function checEvenOdd(number) {
  if (number % 2 === 0) {
    console.log("is Even");
  } else {
    console.log("is Odd");
  }
}

checEvenOdd(5); // Output: is Odd
checEvenOdd(10); // Output: is Even

/*🔹 Step 4: Code ka Analysis
🔹 number % 2 === 0 ka matlab hai ke number ko 2 se divide kiya aur remainder 0 aaya.
🔹 Agar condition true ho, to "Even" print hoga.
🔹 Warna "Odd" print hoga.

✅ Tumhara Pehla Task
Tum khud ek Logic likho jo check kare kya number positive hai ya negative?
Hint:

Agar number > 0 hai, to positive
Agar number < 0 hai, to negative
Agar number === 0 hai, to zero hai
🚀 Try karo! Aur agar help chahiye to mujhe batao. 😊*/