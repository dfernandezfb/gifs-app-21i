import { useState, useEffect } from 'react';
import axiosClient from './../config/axiosConfig';
import { api_key } from './../constants/constants';
import {Container, Row, Col} from 'react-bootstrap'
import styled from 'styled-components'
import Results from './../components/Results/Results';
import SearchBar from './../components/SearchBar/SearchBar';
import useGet from './../hooks/useGet';

const LateralSearch = styled(Col)`
background-color: tomato;
height:100vh;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
`

const MainPage = () => {
  const [gifs, setGifs,getGifs] = useGet(`/trending?api_key=${api_key}&limit=8`)
  const [search, setSearch] = useState('');

  const doSearch = async () =>{
    try {
      const response = await axiosClient.get(`/search?api_key=${api_key}&q=${search}&limit=8`);
      setGifs(response.data.data);
    } catch (error) {
      console.error(error);      
    }
  }
  const handleKeyUp=(e)=>{
    setSearch(e.target.value)
  }
  
  useEffect(()=>{
    if(search.length!==0){
      doSearch();
    }else{
      getGifs();
    }
  },[search])
  return ( 
    <Container fluid>
    <Row>
      <LateralSearch xs={2}>
        <SearchBar search={search} handleKeyUp={handleKeyUp}/>
      </LateralSearch>
      <Col xs={10} className='d-flex flex-wrap'>
        <Results results={gifs}/>
      </Col>
    </Row>
  </Container>
   );
}
 
export default MainPage;