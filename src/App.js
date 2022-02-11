import 'bootstrap/dist/css/bootstrap.css';
import {Container, Row, Col} from 'react-bootstrap'
import styled from 'styled-components'
import Results from './components/Results/Results';

const LateralSearch = styled(Col)`
background-color: tomato;
height:100vh;

`

function App (){
  return(
      <Container fluid>
        <Row>
          <LateralSearch xs={2}>

          </LateralSearch>
          <Col xs={10} className='d-flex flex-wrap'>
            <Results/>
          </Col>
        </Row>
      </Container>
  )
}

export default App