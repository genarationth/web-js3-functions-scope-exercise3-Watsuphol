// ### Exercise #3.1
function mariapayment(interest = 12) {
   return (3*1.001) * interest
}
console.log(`Maria has to pay ${mariapayment(5)} or approximately ${Math.ceil(mariapayment(5))}`);

// ### Exercise #3.2

// #### Part 1
let edfriend = ["Kan","Pa","Mai","Pond"]

let geeting = (name1,name2,name3,name4) => {
    return `Welcome ${name1}, ${name2}, ${name3}, ${name4}.`
}

console.log(geeting(edfriend[0],edfriend[1],edfriend[2],edfriend[3]));

// #### Part 2
const calAge = (edBirthDay, currentYear = 2024) => {
    return currentYear - edBirthDay;
}

console.log(`Ed age is ${calAge(2000)}.`);

// #### Part 3

// Exercise #3.2 Part 3
const greeting_friend_age = (name1, birthYear1, name2, birthYear2, name3, birthYear3, name4, birthYear4) => {
    const age1 = calAge(birthYear1);
    const age2 = calAge(birthYear2);
    const age3 = calAge(birthYear3);
    const age4 = calAge(birthYear4);

    return `Welcome ${name1}, you are ${age1}. Welcome ${name2}, you are ${age2}. Welcome ${name3}, you are ${age3}. Welcome ${name4}, you are ${age4}.`;
}

console.log(greeting_friend_age('Kan', 1995, 'Pa', 2000, 'Mai', 2001, 'Pond',2010));

// ### Challenge Yourself

function rubric_grading(score) {
    if (score === 11) {
        return "Perfect"
    } else if (score > 8){
        return "Excellent"
    } else if (score >= 5){
        return "Pass"
    } else if (score >= 0 && score < 5){
        return "Fail"
    } else {
        return "range shold be 0-11"
    }
}

console.log(`Your rubric grade was ${rubric_grading(11)}`);


