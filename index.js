let result = document.getElementById('result');
let array = document.getElementById('array');

function minNumber(...min) {
    let arr = min;
    let i = min.length;
    minimum = arr[i - 1];
    while (i--){
        if(arr[i] < minimum){
            minimum= arr[i];
        }
    }
            return minimum;
}

array.innerText = "23, 6, 43, 68, 5, 16, 34, 9, 50";
result.innerText = "Minimum = " + minNumber(23, 6, 43, 68, 5, 16, 34, 9, 50);