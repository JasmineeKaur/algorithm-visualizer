import React from 'react';
import {getMergeSortAnimations, getBubbleSortAnimationsArray, getInsertSortAnimations, getQuickSortAnimations} from '../sortingAlgorithms/sortingAlgorithms.js';
import './SortingVisualizer.css';
//import './App.css';

export default class SortingVisualizer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            array: [],
            arraySize : 150,
        };
    }

    componentDidMount(){
        this.resetArray();
    }

    resetArray(size = this.state.arraySize){
        const array = [];
        for(let i = 0; i < size; i++){
            array.push(randomIntFromInterval(5,600));
        }
        this.setState({array});
    }
    
    mergeSort(){
        const animations = getMergeSortAnimations(this.state.array);
        for(let i = 0;i<animations.length;i++){
            const arrayBars = document.getElementsByClassName('array-bar');
            const isColorChange = i%3 !==2;
            if(isColorChange){
                const [barOneIdx,barTwoIdx] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                const color = i % 3 == 0 ? 'red' : 'turquoise';
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * Math.floor(600/this.state.arraySize));
            } else {
                setTimeout(() => {
                    const [barOneIdx,newHeight] = animations[i];
                    const barOneStyle = arrayBars[barOneIdx].style;
                    barOneStyle.height = `${newHeight}px`;
                }, i * Math.floor(600/this.state.arraySize));
            }
        }
    }

    bubbleSort(){
        const animations = getBubbleSortAnimationsArray(this.state.array);
        for(let i = 0;i<animations.length;i++){
            const arrayBars = document.getElementsByClassName('array-bar');
            const isColorChange = i%3 !==2
            if(isColorChange){
                const [barOneIdx,barTwoIdx] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                const color = i%3 ==0 ? 'red' : 'turquoise';
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * Math.floor(600/this.state.arraySize));
            }else {
                setTimeout(() => {
                    const [barOneIdx, newHeightOne, barTwoIdx, newHeightTwo] = animations[i];
                    const barOneStyle = arrayBars[barOneIdx].style;
                    const barTwoStyle = arrayBars[barTwoIdx].style;
                    barOneStyle.height = `${newHeightOne}px`;
                    barTwoStyle.height = `${newHeightTwo}px`;
                }, i * Math.floor(600/this.state.arraySize));
            }
        }
    }

    insertSort(){
        const animations = getInsertSortAnimations(this.state.array);
        for(let i = 0;i < animations.length; i++){
            const arrayBars = document.getElementsByClassName('array-bar');
            const isColorChange = i%3 !== 2
            if(isColorChange){
                const [barOneIdx,barTwoIdx] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                const color = i%3 ==0? 'red':'turquoise';
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i*Math.floor(600/this.state.arraySize));
            } else {
                setTimeout(() => {
                    const [barOneIdx,newHeightOne,barTwoIdx,newHeightTwo] = animations[i];
                    arrayBars[barOneIdx].style.height = `${newHeightOne}px`;
                    arrayBars[barTwoIdx].style.height = `${newHeightTwo}px`;
                }, i * Math.floor(600/this.state.arraySize));
            }
        }
    }

    quickSort(){
        const animations = getQuickSortAnimations(this.state.array);
        for(let i =0; i<animations.length; i++){
            const arrayBars = document.getElementsByClassName('array-bar');
            const isColorChange = i%3 !== 2
            if(isColorChange){
                const [barOneIdx,barTwoIdx] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                const color = i%3 == 0?'red' : 'turquoise';
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * Math.floor(600/this.state.arraySize));
            } else {
                setTimeout(() => {
                    const [barOneIdx, newHeightOne, barTwoIdx, newHeightTwo] = animations[i];
                    arrayBars[barOneIdx].style.height = `${newHeightOne}px`;
                    arrayBars[barTwoIdx].style.height = `${newHeightTwo}px`;
                }, i * Math.floor(600/this.state.arraySize));
            }
        }
    }

    testSortingAlgorithms(){
        for(let i = 0;i<100;i++)
        {
            const array = [];
            const length = randomIntFromInterval(1,1000);
            for(let i = 0;i<length;i++){
                array.push(randomIntFromInterval(-1000,1000));
            }
            const javaScriptSortedArray = array.slice().sort((a,b)=> a-b);
            const mergeSortedArray = getMergeSortAnimations(array.slice());
            console.log(arraysAreEqual(javaScriptSortedArray,mergeSortedArray));
        }
    }

    render(){
        const {array,arraySize} = this.state;
        const barWidth = Math.max(2,Math.floor(600/arraySize));
        return (
            <div className="array-container">
            <div className="controls">
            <label> Change Array Size and Speed</label>
            <input 
                type = "range"
                min = "5"
                max = "200"
                value = {arraySize}
                onChange = {(e) => {this.setState({arraySize : parseInt(e.target.value)});
                                    this.resetArray(parseInt(e.target.value));}}
            />
            <button onClick={() => this.resetArray()}>Generate New Array</button>
            <button onClick={() => this.mergeSort()}>Merge Sort</button>
            <button onClick={() => this.quickSort()}>Quick Sort</button>
            <button onClick={() => this.bubbleSort()}>Bubble Sort</button>
            <button onClick={() => this.insertSort()}>Insertion Sort</button>
            </div>
            <div style = {{
                display : 'flex',
                alignItems : 'flex-end',
                justifyContent : 'center',
                height : 'calc(100vh - 120px)',
                overflow : 'hidden',
            }}>
            {array.map((value,idx) => (
            <div className = "array-bar" 
                 key = {idx}
                 style = {{height : `${value}px`,
                           width : `${barWidth}px`,
                           margin : '0 1px',}}></div>
            ))}
            </div>
            </div>
        );
    }
}

function randomIntFromInterval(min,max){
    return Math.floor(Math.random() * (max-min+1)+min);
}

function arraysAreEqual(arrayOne,arrayTwo){
    if(arrayOne.length != arrayTwo.length)return false;
    for(let i = 0;i < arrayOne.length; i++){
        if(arrayOne[i]!=arrayTwo[i]){
            return false;
        }
    }
    return true;
}