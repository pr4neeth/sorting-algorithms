import { useEffect, useState } from 'react';

import "./compare.css";

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

const Compare = () => {
    const [list, setList] = useState([]);
    const [isSorted, setIsSorted] = useState(false);
    const [algo, setAlgo] = useState(1);
    const [size, setSize] = useState(200);
  
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
      if(isSorted)
        return;
      switch(algo) {
        case 1:
          bubbleSort(list);
          break;
        case 2:
          insertionSort(list);
          break;
        case 3:
          selectionSort(list);
          break;
        case 4:
          heapSort(list);
          break;
        case 5:
          quickSort(list);
          break;
        case 6:
          threeWayQuickSort(list);
          break;
        case 7:
          setList(mergeSort(list));
      }
      setIsSorted(true);
    }
  
    const regenerate = () => {
      setList(randomArray(size));
      setIsSorted(false);
    }
  
    const handleAlgoChange = (event) => {
      setAlgo(event.value);
    } 
    const handleSizeChange = (event) => {
      console.log(event);
      setSize(event.target.value)
    }

    return (
      <Container className="Home-header">
        <div>
          <Row>
            <Col>Give the array size</Col>
            <Col>
              <TextField
                onChange={handleSizeChange}
                placeholder='200'
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
            <Col>Select the sorting Algorithm</Col>
            <Col>
              <Select 
                options = {algorithms}
                onChange={handleAlgoChange}
                placeholder = {algorithms[0].label}
                styles={colourStyles}
                isMulti
              />
            </Col>
            <Col>
              <Button
                variant='outlined'
                onClick={sort}
              >
                Sort the array
              </Button>
            </Col>
          </Row>
        </div>
        
        <BarChart
          series = {[{data: list}]} 
        />
      </Container>
    )
}

export default Compare;