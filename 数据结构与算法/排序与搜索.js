let ArrayList = function () {
    let array = [];
    this.insert = function (item) {
        array.push(item);
    }
    this.toString = function () {
        return array.join();
    }
    let swap = function (array, index1, index2) {
        let temp = array[index1];
        array[index1] = array[index2];
        array[index2] = temp;
    }
    this.bubbleSort = function () {
        for (let i = 0; i < array.length; i++) {
            for (let j = 0; j < array.length - 1 - i; j++) {
                if (array[j] > array[j + 1]) {
                    swap(array, j, j + 1);
                }
            }
        }
        console.log(array);
    }
    this.selectionSort = function () {
        let length = array.length,
            indexMin;
        for (let i = 0; i < length; i++) {
            indexMin = i;
            for (let j = i; j < length; j++) {
                if (array[indexMin] > array[j]) {
                    indexMin = j;
                }
            }
            if (i !== indexMin) {
                swap(array, i, indexMin);
            }
        }
        console.log(array);
    }
    let quick = function (array, left, right) {
        let index;
        if (array.length > 1) {
            index = partition(array, left, right);
            if (left < index - 1) {
                quick(array, left, index - 1);
            }
            if (index < right) {
                quick(array, index, right);
            }
        }
    }
    let partition = function (array, left, right) {
        var pivot = array[Math.floor((right + left) / 2)],
            i = left,
            j = right;
        while (i <= j) {
            while (array[i] < pivot) {
                i++;
            }
            while (array[j] > pivot) {
                j--;
            }
            if (i <= j) {
                swap(array, i, j);
                i++;
                j--;
            }
        }
        return i;
    }

    this.quickSort = function () {
        quick(array, 0, array.length - 1);
        console.log(array);
    }

}

let myArray = new ArrayList();
myArray.insert(19);
myArray.insert(23);
myArray.insert(10);
myArray.insert(3);
myArray.insert(300);
myArray.insert(1);
myArray.quickSort();