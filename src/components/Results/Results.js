import './Results.css'
import axiosClient from '../../config/axiosConfig';
import { useEffect, useState } from 'react';
import { api_key } from '../../constants/constants';
import {Card} from 'react-bootstrap'

const Results = () => {
  const [results,setResults] = useState([]);
  
  const getGifsTrend = async () =>{
    try {
      const response = await axiosClient.get(`/trending?api_key=${api_key}&limit=10`);
      setResults(response.data.data)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(()=>{
    getGifsTrend();
  },[])

  return ( 
    <>
      {results.map((result,index) =>
        <Card key={index} style={{ width: '10rem' }} className='m-2'>
          <Card.Img variant="top" src={result.images.original.url} />
          <Card.Body>
            <Card.Title>{result.title}</Card.Title>
          </Card.Body>
        </Card>
      )}
    </>
   );
}
 
export default Results;