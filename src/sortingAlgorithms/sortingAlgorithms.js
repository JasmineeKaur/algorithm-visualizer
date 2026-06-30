// export const mergeSort = array => {
//     if(array.length == 1)return array;
//     const middleIdx = Math.floor(array.length/2);
//     const firstHalf = mergeSort(array.slice(0,middleIdx));
//     const secondHalf = mergeSort(array.slice(middleIdx));
//     const sortedArray = [];
//     let i = 0,
//         j = 0;
//     while(i<firstHalf.length && j < secondHalf.length){
//         if(firstHalf[i] < secondHalf[j]){
//             sortedArray.push(firstHalf[i++]);
//         }
//         else{
//             sortedArray.push(secondHalf[j++]);
//         }
//     }
//     while(i < firstHalf.length) sortedArray.push(firstHalf[i++]);
//     while(j < secondHalf.length) sortedArray.push(secondHalf[j++]);
//     return sortedArray;
// }

export function getMergeSortAnimations(array) {
    const animations = [];
    if(array.length <= 1)return array;
    const auxiliaryArray = array.slice();
    mergeSortHelper(array,0,array.length-1,auxiliaryArray,animations);
    return animations;
}

function mergeSortHelper(mainArray,startIdx,endIdx,auxiliaryArray,animations){
    if(startIdx === endIdx)return;
    const middleIdx = Math.floor((startIdx+endIdx)/2);
    mergeSortHelper(auxiliaryArray,startIdx,middleIdx,mainArray,animations);
    mergeSortHelper(auxiliaryArray,middleIdx+1,endIdx,mainArray,animations);
    doMerge(mainArray,startIdx,middleIdx,endIdx,auxiliaryArray,animations);
}
function doMerge(mainArray,startIdx,middleIdx,endIdx,auxiliaryArray,animations){
    let k = startIdx;
    let i = startIdx;
    let j = middleIdx + 1;
    while(i <= middleIdx && j<= endIdx){
        animations.push([i,j]);
        animations.push([i,j]);
        if(auxiliaryArray[i] <= auxiliaryArray[j]){
            animations.push([k,auxiliaryArray[i]]);
            mainArray[k++] = auxiliaryArray[i++];
        } else {
            animations.push([k,auxiliaryArray[j]]);
            mainArray[k++] = auxiliaryArray[j++];
        }
    }
    while(i<=middleIdx) {
        animations.push([i,i]);
        animations.push([i,i]);
        animations.push([k,auxiliaryArray[i]]);
        mainArray[k++] = auxiliaryArray[i++];
    }
    while(j <= endIdx){
        animations.push([j,j]);
        animations.push([j,j]);
        animations.push([k,auxiliaryArray[j]]);
        mainArray[k++] = auxiliaryArray[j++];
    }
}

export function getBubbleSortAnimationsArray(array){
    const animations = [];
    const arr = array.slice();
    for(let i = 0;i < arr.length;i++){
        for(let j = 0;j < arr.length-i-1;j++){
            animations.push([j,j+1]);
            animations.push([j,j+1]);
            if(arr[j] > arr[j+1]){
                animations.push([j,arr[j+1],j+1,arr[j]]);
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            } else {
                animations.push([j,arr[j],j+1,arr[j+1]]);
            }
        }
    }
    return animations;
}

export function getInsertSortAnimations(array){
    const animations = [];
    const arr = array.slice();
    for(let i = 1; i < arr.length; i++){
        let j = i;
        while(j>0 && arr[j]<arr[j-1]){
            animations.push([j,j-1]);
            animations.push([j,j-1]);
            animations.push([j,arr[j-1],j-1,arr[j]]);
            let temp = arr[j];
            arr[j] = arr[j-1];
            arr[j-1] = temp;
            j--;
        } 
        if(j>0){
            animations.push([j,j-1]);
            animations.push([j,j-1]);
            animations.push([j,arr[j],j-1,arr[j-1]]);
        }
    }
    return animations;
}

export function getQuickSortAnimations(array) {
    const animations = [];
    const arr = array.slice();
    quickSortHelper(arr,0,arr.length-1,animations);
    return animations;
}

function quickSortHelper(arr, low, high, animations){
    if(low<high){
        const pivotIdx = partition(arr,low,high,animations);
        quickSortHelper(arr,low,pivotIdx-1,animations);
        quickSortHelper(arr,pivotIdx+1,high,animations);
    }
}

function partition(arr,low,high,animations){
    const pivot = arr[high];
    let i = low-1;
    for(let j = low; j < high; j++){
        animations.push([j,high]);
        animations.push([j,high]);
        if(arr[j] <= pivot){
            i++;
            animations.push([i,arr[j],j,arr[i]]);
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        } else {
            animations.push([j,arr[j],i+1,arr[i+1]]);
        }
    }
    animations.push([i+1,high]);
    animations.push([i+1,high]);
    animations.push([i+1,arr[high],high,arr[i+1]]);
    let temp = arr[i+1];
    arr[i+1] = arr[high];
    arr[high] = temp;
    return i+1;
}