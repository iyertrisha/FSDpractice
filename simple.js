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
const convert = () => {
    const month = [January, Feb, march, april, may, june, july,
                    august, september, october, november, december];
    function monthnum(){
        let res = Math.floor(month);
        if(isNaN(res) || res < 1 || res > 12){return 'BadNumber';}
        else{return month[res-1]}
    };
};
monthconversion = convert();
console.log(monthconversion(2));
console.log(monthconversion(17));