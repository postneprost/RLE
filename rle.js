function rle(str) {
    let result = '';
    let count = 1;
    for (let i = 0; i < str.length; i++) {
        if (str[i] == str[i+1]) count++;
        else {
            result += count + str[i];
            count = 1;
        }
    }
    return result;
}


console.log(rle('WWWWWWWWWBBBWWWWWWWWWWWWWWWWWWWWWWWBWWWWWWWWWWWWWW'));
