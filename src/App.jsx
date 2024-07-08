import { useState } from 'react'
import { Container, Row, Col, Button, Image, Card, Carousel } from 'react-bootstrap';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  //This is how we declare our variable
  //when we declare it means we make our code remember this information
  //for now we only care about keeping track of 1 number
  //Note:
  //count and setCount could of been called anything else, but here we only care about
  //keeping count so we called our number(integer) variable 'count' and our function 
  //that its tied with 'setCount', which is used for whenever we want to change 'count'
  //the number thats inside 'useState' paranthesis is what we initialize our number(integer)
  //variable to be
  const [count, setCount] = useState(0)

  function incrimentCount(){
    //'count' is the variable we declared
    //'setCount' is the variable we  
    setCount(count+1)
  }


  //Notes on everything bellow:
  //Image circle cut out: it doesnt have to be cut, just remove "roundedCircle" to make it the original image. 
  //Or look at web documentation if you want different type of cut out
  //width in Image/img: use it to adjust you image size. It varies by images, yours might be different
  //padingTop and PaddingBottom: we can be selective on what side to give space if we want. Or just say padding to have it on all sides
  //note when adding image on carousel: you use <img> instead of <Image>. They work the same
  return ( <div>
    <h1>"My Website"</h1>


    <Image
        src="src/assets/profilePicExample.png"
        roundedCircle
        width="30%"
        style={ {paddingTop: 40, paddingBottom: 40} }
    />



    <hr></hr>





    <p> "p" component is to write text(paragraph). <i>Use it to write your bio (notice the added italic here)</i> </p>




    <hr></hr>




    <p> My experiences: </p>
    <ul >
      <li>this is the layout to write bullet points</li>
      <li>use it to write experience, jobs, etc</li>
    </ul>
    




    <hr></hr>







    <p> this is a example of calling a <b>function to increase a number</b> (in programming its called a integer variable:)</p>
    <Button variant='primary' onClick={() => incrimentCount()} > {count} </Button>







    <hr></hr>
    





    <p>Bellow is component examples of:</p>
    <ol>
      <li>"grid"(rows and column)</li>
      <li>cards</li>
      <li>carousel</li>
    </ol>




    <hr></hr>




    <h2>Grid component example</h2>

    <Container>
      <p>at max size here: 2 row by 4 column.
        Even though we coded this to have 8 column, the structure i gave you makes the max column value you can have to be 4.
        So the other remaining Col wrap around to make a row
      </p>
      <Row>
        <Col xs={12} md={6} lg={4} xl={3} > <Button>1</Button> </Col>
        <Col xs={12} md={6} lg={4} xl={3} > <Button>2</Button> </Col>
        <Col xs={12} md={6} lg={4} xl={3} > <Button>3</Button> </Col>
        <Col xs={12} md={6} lg={4} xl={3} > <Button>4</Button> </Col>
        <Col xs={12} md={6} lg={4} xl={3} > <Button>5</Button> </Col>
        <Col xs={12} md={6} lg={4} xl={3} > <Button>6</Button> </Col>
        <Col xs={12} md={6} lg={4} xl={3} > <Button>7</Button> </Col>
        <Col xs={12} md={6} lg={4} xl={3} > <Button>8</Button> </Col>
      </Row>



      <p>this at max size: one row by 4 column. Left over components in a row wrap around to next row, in here 2 buttons go down</p>
      <Row>
        <Col xs={12} md={6} lg={4} xl={3} > <Button>row 1-1</Button> </Col>
        <Col xs={12} md={6} lg={4} xl={3} > <Button>row 1-2</Button> </Col>
        <Col xs={12} md={6} lg={4} xl={3} > <Button>row 1-3</Button> </Col>
        <Col xs={12} md={6} lg={4} xl={3} > <Button>row 1-4</Button> </Col>
        <Col xs={12} md={6} lg={4} xl={3} > <Button>row 1-5</Button> </Col>
        <Col xs={12} md={6} lg={4} xl={3} > <Button>row 1-6</Button> </Col>
      </Row>
      <p>this at max size: one row by 3 column. 3 since we only have 3 columns in this one row</p>
      <Row>
        <Col xs={12} md={6} lg={4} xl={3} > <Button>row 2-1</Button> </Col>
        <Col xs={12} md={6} lg={4} xl={3} > <Button>row 2-2</Button> </Col>
        <Col xs={12} md={6} lg={4} xl={3} > <Button>row 2-3</Button> </Col>

      </Row>



      <p>
        In case you wanted more columns, try this. Makes the max column 12
      </p>
      <Row>
        <Col xs={12} md={6} lg={2} xl={1} > <Button>1</Button> </Col>
        <Col xs={12} md={6} lg={2} xl={1} > <Button>2</Button> </Col>
        <Col xs={12} md={6} lg={2} xl={1} > <Button>3</Button> </Col>
        <Col xs={12} md={6} lg={2} xl={1} > <Button>4</Button> </Col>
        <Col xs={12} md={6} lg={2} xl={1} > <Button>5</Button> </Col>
        <Col xs={12} md={6} lg={2} xl={1} > <Button>6</Button> </Col>
        <Col xs={12} md={6} lg={2} xl={1} > <Button>7</Button> </Col>
        <Col xs={12} md={6} lg={2} xl={1} > <Button>8</Button> </Col>
        <Col xs={12} md={6} lg={2} xl={1} > <Button>9</Button> </Col>
        <Col xs={12} md={6} lg={2} xl={1} > <Button>10</Button> </Col>
        <Col xs={12} md={6} lg={2} xl={1} > <Button>11</Button> </Col>
        <Col xs={12} md={6} lg={2} xl={1} > <Button>12</Button> </Col>
        <Col xs={12} md={6} lg={2} xl={1} > <Button>13</Button> </Col>
      </Row>


      <p>
        Or this. max column 6
      </p>
      <Row>
        <Col xs={12} md={6} lg={4} xl={2} > <Button>1</Button> </Col>
        <Col xs={12} md={6} lg={4} xl={2} > <Button>2</Button> </Col>
        <Col xs={12} md={6} lg={4} xl={2} > <Button>3</Button> </Col>
        <Col xs={12} md={6} lg={4} xl={2} > <Button>4</Button> </Col>
        <Col xs={12} md={6} lg={4} xl={2} > <Button>5</Button> </Col>
        <Col xs={12} md={6} lg={4} xl={2} > <Button>6</Button> </Col>
        <Col xs={12} md={6} lg={4} xl={2} > <Button>7</Button> </Col>
      </Row>










      <hr></hr>






    <h2>Cards component example</h2>
    <p> note, using grid to make this have 3 Columns</p>

      <Row className="justify-content-md-center" style={ {paddingTop: 40} }>
        <Col xs={12} md={6} lg={4} xl={3} style={ {margin: 12}}>

          <Card style={{ width: '18rem'}}>

            <Card.Img variant="top" src="src/assets/googleLogo.png" />

            <Card.Body>

              <Card.Title>Card Title</Card.Title>

              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>

              <Button
                variant="primary"
                href='https://www.google.com/'
                target='_blank'>
                  
                  Go to link
              </Button>
            
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12} md={6} lg={4} xl={3} style={ {margin: 12}}>
          <Card style={{ width: '18rem'}}>

            <Card.Img variant="top" src="src/assets/bingLogo.png" />

            <Card.Body>

              <Card.Title> Bing </Card.Title>

              <Card.Text>
                Who uses Bing??
              </Card.Text>

              <Button
                variant="primary"
                href='https://www.bing.com/'
                target='_blank'>
                  
                  Go to link
              </Button>
            
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12} md={6} lg={4} xl={3} style={ {margin: 12}}>
          <Card style={{ width: '18rem'}}>

            <Card.Img variant="top" src="src/assets/questionLogo.png" />

            <Card.Body>

              <Card.Title> Card 3 example </Card.Title>

              <Card.Text>
                Random, Find out
              </Card.Text>

              <Button
                variant="primary"
                href='https://youtu.be/xvFZjo5PgG0?si=USd7x0S6CnEqYyys'
                target='_blank'>
                  
                  Go to link
              </Button>
            
            </Card.Body>
          </Card>
        </Col>

        
      </Row>

    </Container>







    <hr></hr>





    <h2>Carousel component example</h2>

    <Carousel>
      <Carousel.Item>
        <img
          src="src/assets/googleLogo.png"
          style={{aspectRatio: 1/1, width: "50%"}} >
        </img>
        
      </Carousel.Item>


      <Carousel.Item>
        <img
          src="src/assets/bingLogo.png"
          style={{aspectRatio: 1/1, width: "50%"}} >
        </img>

        <Carousel.Caption>
          <h3 style={{color:'black'}}>Second slide label. You can add labels</h3>
          <p style={{color:'black'}}> Also can add this. This can be more caption</p>
        </Carousel.Caption>
      </Carousel.Item>



      <Carousel.Item>
        <img
          src="src/assets/questionLogo.png"
          style={{aspectRatio: 1/1, width: "50%"}} >
        </img>

        <Carousel.Caption>
          <h3 style={{color:'red'}}>Third slide label. You dont need "p" component if you wish. Vise versa with header</h3>
        </Carousel.Caption>

      </Carousel.Item>

    </Carousel>
    
    


  </div>
  )
}

export default App
