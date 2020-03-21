function rle(str) {
    let result;
    for (let i = 0; i < str.length; i++) {
        if (str[i] == str[i+1]) count++;
        else count = 1;
    }
}



console.log(rle('WWWWWWWWWBBBWWWWWWWWWWWWWWWWWWWWWWWBWWWWWWWWWWWWWW'));
