import { useEffect, useState } from 'react';

import "./home.css";

import randomArray from '../../helpers/randomArray'
import bubbleSort from '../../algorithms/bubbleSort';
import insertionSort from '../../algorithms/insertionSort';
import selectionSort from '../../algorithms/selectionSort';
import mergeSort from '../../algorithms/mergeSort';
import heapSort from '../../algorithms/heapSort';
import quickSort from '../../algorithms/quickSort';
import threeWayQuickSort from '../../algorithms/threeWayQuickSort';

import { Container, Col, Row } from 'react-bootstrap';
import { BarChart } from '@mui/x-charts/BarChart';
import { Button, TextField } from '@mui/material';
import Select from 'react-select';

const Home = () => {
    const [list, setList] = useState([]);
    const [isSorted, setIsSorted] = useState(false);
    const [isChanged, setIsChanged] = useState(false);
    const [algo, setAlgo] = useState(1);
    const [size, setSize] = useState(200);
    const [runTime, setRunTime] = useState(0);
    const [iterations,setIterations] = useState(0);
  
    const algorithms = [
      {value: 1, label: 'Bubble Sort'},
      {value: 2, label: 'Insertion Sort'},
      {value: 3, label: 'Selection Sort'},
      {value: 4, label: 'Heap Sort'},
      {value: 5, label: 'Quick Sort'},
      {value: 6, label: '3 Median Quick Sort'},
      {value: 7, label: 'Merge Sort'}
    ]
  
    const colourStyles = {
      control: styles => ({ ...styles, fontSize: '15px', color: '#000' }),
      option: (styles, { data, isDisabled, isFocused, isSelected }) => {
        return {
          ...styles,
          fontSize: '15px',
          color: '#000',
        };
      },
    };
  
  
    useEffect(() => {
  
      setList(randomArray());
      
    }, [])
  
    const sort = () => {
      if(isSorted){
        alert('Array is already sorted');
        return;
      }
      setIsChanged(false)
      let result;
      switch(algo) {
        case 1:
          result = bubbleSort(list);
          setRunTime(result.time);
          setIterations(result.iterations)
          break;
        case 2:
          result = insertionSort(list);
          setRunTime(result.time);
          setIterations(result.iterations)
          break;
        case 3:
          result = selectionSort(list);
          setRunTime(result.time);
          setIterations(result.iterations)
          break;
        case 4:
          result = heapSort(list);
          setRunTime(result.time);
          setIterations(result.iterations)
          break;
        case 5:
          result = quickSort(list);
          setRunTime(result.time);
          setIterations(result.iterations)
          break;
        case 6:
          result = threeWayQuickSort(list);
          setRunTime(result.time);
          setIterations(result.iterations)
          break;
        case 7:
          result = mergeSort(list);
          setList(result.sortedList);
          setRunTime(result.time);
          setIterations(result.iterations)
          break;
        default:
          setRunTime(bubbleSort(list));
      }
      setIsSorted(true);
    }
  
    const regenerate = () => {
      if(size > 1000)
      {
        alert("Please enter a number less than 1000");
        return;
      }
      setList(randomArray(size));
      setIsSorted(false);
    }
  
    const handleAlgoChange = (event) => {
      setIsChanged(true);
      setAlgo(event.value);
    } 
    const handleSizeChange = (event) => {
      setSize(event.target.value)
    }

    return (
      <Container className="Home-header">
        <div>
          <div style={{justifyContent:'center',display:'flex',color:'#555'}}>
            <h1>Select an algorithm to sort the array</h1>
          </div>
          <br />
          <Row>
            {/* <Col>Give the array size</Col> */}
            <Col>
              <TextField
                onChange={handleSizeChange}
                placeholder='Provide the array size(200)'
                inputProps={{
                  style:{
                    color: "#000",
                    borderRadius: "5px",
                    padding: "8px 8px",
                    backgroundColor: "#fff"
                  }
                }}
              />
            </Col>
            <Col>
              <Button
                variant='outlined'
                onClick = {regenerate}
              >
                Regenerate
              </Button>
            </Col>
          </Row>
          <br/>
          <Row>
            {/* <Col>Select the sorting Algorithm</Col> */}
            <Col>
              <Select 
                options = {algorithms}
                onChange={handleAlgoChange}
                placeholder = {algorithms[0].label}
                styles={colourStyles}
              />
            </Col>
            <Col>
              <Button
                variant='contained'
                onClick={sort}
              >
                Sort the array
              </Button>
            </Col>
          </Row>
          <br />
          <Row style={{textAlign:'center'}}>
            <Col>
                {isSorted && !isChanged && <p>The {algorithms.map(obj => {
                  if(obj.value === algo){
                    return obj.label
                  }
                  return null;
                })} algorithm took <b>{iterations}</b> iterations and {runTime} milliseconds to sort the array</p>}
            </Col>
          </Row>
        </div>
        
        <BarChart
          series = {[{data: list}]} 
        />

      </Container>
    )
}

export default Home;
