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
import { BarChart, BarPlot } from '@mui/x-charts/BarChart';
import { Button, TextField } from '@mui/material';
import Select from 'react-select';
import { ChartsYAxis, ResponsiveChartContainer } from '@mui/x-charts';
import { ChartsXAxis } from '@mui/x-charts/ChartsXAxis';
import sortedArray from '../../helpers/sortedArray';
import reverseSortedArray from '../../helpers/reverseSortedArray';
import almostSortedArray from '../../helpers/almostSortedArray';
import { Bar } from 'react-chartjs-2';

const Compare = () => {
    const [list, setList] = useState([]);
    const [isSorted, setIsSorted] = useState(false);
    const [algo, setAlgo] = useState([]);
    const [size, setSize] = useState(200);
    const [arrayType, setArrayType] = useState(1);
  
    const algorithms = [
      {value: 1, label: 'Bubble Sort'},
      {value: 2, label: 'Insertion Sort'},
      {value: 3, label: 'Selection Sort'},
      {value: 4, label: 'Heap Sort'},
      {value: 5, label: 'Quick Sort'},
      {value: 6, label: '3 Median Quick Sort'},
      {value: 7, label: 'Merge Sort'}
    ]

    const arrayOptions = [
      {value: 1, label: 'Random'},
      {value: 2, label: 'Sorted'},
      {value: 3, label: 'Sorted in reverse'},
      {value: 4, label: 'Almost Sorted'}
    ]

    const [timeMap, setTimeMap] = useState([]);
    const [labelMap, setLabelMap] = useState([]);
  
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
      setAlgo([])
      setLabelMap([])
      setIsSorted(false);
      
    }, [])
  
    const sort = () => {
      if(algo.length === 0)
      {
        alert("Select one or more algorithms")
        return;
      }
      if(isSorted)
      { 
        alert("The Array is already sorted")
        return;
      }
      algo.map((element) =>{
        let temp = list.slice();
        let runTime = 0;
        console.log(temp)
        switch(element.value) {
          case 1:
            runTime = bubbleSort(temp);
            break;
          case 2:
            runTime = insertionSort(temp);
            break;
          case 3:
            runTime = selectionSort(temp)
            break;
          case 4:
            runTime = heapSort(temp)
            break;
          case 5:
            runTime = quickSort(temp)
            break;
          case 6:
            runTime = threeWayQuickSort(temp)
            break;
          case 7:
            runTime = mergeSort(temp).time
            break;
          default:
            bubbleSort(list);
        }

        timeMap.push(runTime);
        labelMap.push(element.label);
      })
      
      threeWayQuickSort(list);
      setIsSorted(true);
    }
  
    const regenerate = () => {
      switch(arrayType) {
        case 1:
          setList(randomArray(size))
          break;
        case 2:
          setList(sortedArray(size))
          break;
        case 3:
          setList(reverseSortedArray(size))
          break;
        case 4:
          setList(almostSortedArray(size))
          break;
        default:
          setList(randomArray(size))
      }
      setTimeMap([]);
      setLabelMap([]);
      setIsSorted(false);
    }
  
    const handleAlgoChange = (event) => {
      setAlgo(event);
    } 
    const handleSizeChange = (event) => {
      setSize(event.target.value)
    }
    const handleArrayChange = (event) => {
      setArrayType(event.value);
    }

    return (
      <Container className="Home-header">
        <div>
          <div style={{display:'flex', justifyContent: 'center'}}>
            <h1>Select two or more Algorithms to compare the run time</h1>
          </div>
          <br/>
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
              <Select 
                options = {arrayOptions}
                onChange={handleArrayChange}
                placeholder = {'Select type of Array'}
                styles={colourStyles}
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
            <Col>Select the sorting Algorithms to compare run time</Col>
            <Col>
              <Select 
                options = {algorithms}
                onChange={handleAlgoChange}
                //placeholder = {'Select Algorithms to compare'}
                styles={colourStyles}
                isMulti
              />
            </Col>
            <Col>
              <Button
                variant='outlined'
                onClick={sort}
              >
                Sort and Compare
              </Button>
            </Col>
          </Row>
        </div>

        {isSorted && 
        <BarChart
          xAxis ={[{scaleType: 'band', data: labelMap}]}
          series={[{data: timeMap}]}
          height={300}
        />}

        <ResponsiveChartContainer
          xAxis={[{scaleType:'band',data: list.map((num,index) => {return index}), id:'x-axis-id'}]}
          yAxis={[{data: list, id: 'y-axis-id'}]}
          series = {[{type: 'bar', data: list}]}
        >
          <BarPlot />
          <ChartsXAxis label='List' position='bottom' axisId='x-axis-id' />
        </ResponsiveChartContainer>
        {/* <BarChart
          series = {[{data: list}]} 
        /> */}
      </Container>
    )
}

export default Compare;