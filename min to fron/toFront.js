function minToFront(arr) {
    var min = arr[0];// save first in arr
    var idx = 0;
    for (var i = 1; i < arr.length; i++){ // loop through arr length (5)
        if (arr[i] < min) {// if (1<4)
            min = arr[i];//  set 4 to 1
            idx = i;// idx set to 1 
        }
    }
    for (var x = idx; x > 0; x--){// x = 4
        var temp = arr[x];// temp is set to 4
        arr[x] = arr[x-1];//3
        arr[x-1] = temp;//2
    }
    return arr;
}
console.log(minToFront([4,2,1,3,5]))
