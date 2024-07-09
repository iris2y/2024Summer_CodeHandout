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
  return ( <div style= {{backgroundColor: 'black'}} > 
    <h1 style={{color: 'white'}}>Lockwood and Co.</h1>

    <Image
src="src/assets/lucy.png.jpg"
roundedCircle
width="20%"
style={ {paddingTop: 10, paddingBottom: 10} }
/>
    <Image
        src="src/assets/anthony.png.jpg"
        roundedCircle
        width="20%"
        style={ {paddingTop: 20, paddingBottom: 20} }
    />
    
<Image
src="src/assets/george.png.jpg"
roundedCircle
width="20%"
style={ {paddingTop: 20, paddingBottom: 20} }
/>

    <hr></hr>





    <p style={{color: 'white'}}><i> This is a five-book series written by Jonathan Stroud.  It's set in an alternate version of London where ghosts have overrun the country and are killing people (The Problem).  Only children can see the ghosts, using their Talents (Sight, Touch, and Hearing), so they are tasked with hunting them. The series follows three of these "ghost hunters" who make up the company Lockwood and Co.</i> </p>




    <hr></hr>




    <p style={{color: 'white'}}> <b> Lucy Carlyle </b> </p>
    <ul>
    <p style={{color: 'white'}}>Role: narrator</p>
    <p style={{color: 'white'}}>She believes we need to empathize with the ghosts to fix The Problem</p>
    <p style={{color: 'white'}}>Her Talent is Hearing (though her Touch is strong, too), which means she is one of the few people who can hear what ghosts say</p>
    </ul>
    <p style={{color: 'white'}}> <b>Anthony Lockwood</b></p>
    <ul>
      <p style={{color: 'white'}}>Role: leader/founder of the company </p>
      <p style={{color: 'white'}}>He believes we need to keep killing ghosts to fix the problem</p>
      <p style={{color: 'white'}}> His Talent is Sight, which means he can see ghosts more clearly than others </p>
    </ul>
<p style={{color: 'white'}}> <b>George Cubbins </b></p>
<ul>
  <p style={{color: 'white'}}>Role: researcher for the company</p>
  <p style={{color: 'white'}}>He believes we need to keep researching The Problem to fix it</p>
  <p style={{color: 'white'}}>His Talents are average all around</p>
</ul>


    <hr></hr>







  







    <hr></hr>
    





   
  




    <hr></hr>




  

    <Container>
      
      








      <hr></hr>






    

      <Row className="justify-content-md-center" style={ {paddingTop: 40} }>
        <Col xs={12} md={6} lg={4} xl={3} style={ {margin: 12}}>

          <Card style={{ width: '18rem'}}>

            <Card.Img variant="top" src="src/assets/tvshow.png" />

            <Card.Body>

              <Card.Title>Trailer for the Lockwood and Co.</Card.Title>

              <Card.Text>
                Came out in 2023 on Netflix
              </Card.Text>

              <Button
                variant="primary"
                href='https://www.youtube.com/watch?v=7-iYxGLpQzo'
                target='_blank'>
                  
                  Go to link
              </Button>
            
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12} md={6} lg={4} xl={3} style={ {margin: 12}}>
          <Card style={{ width: '18rem'}}>

            <Card.Img variant="top" src="src/assets/goodreads.png" />

            <Card.Body>

              <Card.Title> Lockwood and Co. on Goodreads </Card.Title>

              <Card.Text>
              Read in-depth summaries and other people's opinions on the books!
              </Card.Text>

              <Button
                variant="primary"
                href='https://www.goodreads.com/series/76807-lockwood-co'
                target='_blank'>
                  
                  Go to link
              </Button>
            
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12} md={6} lg={4} xl={3} style={ {margin: 12}}>
          <Card style={{ width: '18rem'}}>

            <Card.Img variant="top" src="src/assets/lockwood.png.jpg" />

            <Card.Body>

              <Card.Title> More character info </Card.Title>

              <Card.Text>
                Want to know what Lockwood keeps behind the door on the landing? Or the reason Lucy fled to London? Spoilers and more explanations here
              </Card.Text>

              <Button
                variant="primary"
                href='https://lockwoodandco.fandom.com/wiki/Lockwood_%26_Co._(series)'
                target='_blank'
                >
                  
                Go to link
              </Button>
            
            </Card.Body>
          </Card>
        </Col>

        
      </Row>

    </Container>







    <hr></hr>





    <h2 style= {{color: 'white'}}><b>The Series in Order</b></h2>

    <Carousel>
      <Carousel.Item>
        <img
          src="src/assets/lockwood1.png"
          style={{aspectRatio: 1/1.5, width: "30%"}} >
        </img>
        
      </Carousel.Item>


      <Carousel.Item>
        <img
          src="src/assets/lockwood2.png"
          style={{aspectRatio: 1/1.5, width: "30%"}} >
        </img>


      </Carousel.Item>



      <Carousel.Item>
        <img
          src="src/assets/lockwood33.png"
          style={{aspectRatio: 1/1.5, width: "30%"}} >
        </img>

      
      </Carousel.Item>

      <Carousel.Item>
        <img
          src="src/assets/lockwood4.png"
          style={{aspectRatio: 1/1.5, width: "30%"}} >
        </img>
        
      </Carousel.Item>

      <Carousel.Item>
        <img
          src="src/assets/lockwood5.png"
          style={{aspectRatio: 1/1.5, width: "30%"}} >
        </img>
        
      </Carousel.Item>
    </Carousel>
    
    


  </div>
  )
}

export default App
