/*function words(text){
    let res = '';
    let vowels = 'aeiouAEIOU';
    for (let i =0; i<text.length; i++){
        let char = text[i];
        if(vowels.includes(char)){
            res += char;
        }
        else{
            res += char + "o" + char;
        }
    }

    return res;
}
console.log(words("hello world"));*/
/*
const convert = () => {
    const month = ["January", "Feb", "march", "april", "may", "june", "july",
                    "august", "september", "october", "november", "december"];
    return function(num){
        let res = Math.floor(num);
        if(isNaN(res) || res < 1 || res > 12){return 'BadNumber';}
        else{return month[res-1];}
    };
};
const monthconversion = convert();
console.log(monthconversion(2));
console.log(monthconversion(17))
important do not forget to use num for return fucntion, 2 return statements,*/
/*
function createStudent(usn, subjectCode, subjectName, cie, see) {
let ciemarks = cie;
let seemarks = see;

return{
    usn: usn,
    subjectCode: subjectCode,
    subjectName: subjectName,
    getmarks: function(){
        return ciemarks + seemarks;
    },
    display: function(){
        console.log("usn: ",usn);
        console.log("subjectcode: ",subjectCode);
        console.log("subjectname; ",subjectName);
        console.log("total marks: ",this.getmarks());
    }
};
    
};
student1 = createStudent(
    '1ms23cs001',
    'cs52',
    'computer netwroks',
    '49',
    '50'
);
student1.display();
*/
/*
function plural(word, num){
    if(num == 1){
        return word + '';
    }
    else{
        return word + 's';
    }
}
console.log(plural('dog',5));
*/
