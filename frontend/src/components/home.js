import React from 'react';
import { Carousel, Card, Image, Button, Row, Col } from 'antd';
import images from './assets';

const Home = () => {
  const contentStyle = {
    position: 'relative',
    height: '100vh',
    overflow: 'hidden',
  };

  const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Darker overlay for better contrast
    zIndex: 500,
  };

  const textStyle = {
    position: 'absolute',
    top: '200px',
    left: '200px',
    zIndex: 1000, // Ensure text is above the overlay
    color: 'white',
  };

  const headingStyle = {
    fontSize: '3rem', // Adjust font size to a reasonable value
    margin: 0,
    padding: 0,
    fontFamily: "Oxanium", 
    width: '50%',
    color: 'silver'
  };

  const paragraphStyle = {
    fontSize: '1rem', // Adjust font size to a reasonable value
    margin: '10px 0 0',
    padding: 0,
    fontFamily: "Roboto", 
    width: '50%'
  };

  const buttonStyle = {
    background: "linear-gradient(to right, #00ff00, #0080ff)",
    padding: '25px',
    marginTop: '20px',
    position: 'absolute',
    top: '260px',
    left: '250px',
    border: 'solid 2px linear-gradient(to right, #00ff00, #0080ff)',
    fontSize: '15px'

  };

  const linkStyle = {
    fontSize: '20px',
    fontFamily: 'Montserrat',
  };

  const buttonContainerStyle = {
    position: 'absolute',
    top: 30,
    right: 40,
    zIndex: 1000,
    display: 'flex',
    gap: '10px',
    
  };
  
  const navButtonStyle = {
    padding: '20px 40px',
    fontSize: '18px',
    background: "#0080ff",
    cursor: 'pointer',
    color: 'white',
    fontFamily: 'Montserrat'
  };

  return (
    <div>
      <Carousel autoplay autoplaySpeed={1500} style={{overflow: 'hidden', position: 'relative'}}>

        <div style={contentStyle}>
          <Card
            hoverable
            cover={
              <Image
                alt="Slide 1"
                src={images.image1} 
                style={{ width: '100vw', height: '100vh', objectFit: 'cover' }}
              />
            }
            style={{ width: '100%', height: '100vh', overflow: 'hidden' }}
          >
            <div style={buttonContainerStyle} >
              <Button type="default" size="large" style={navButtonStyle}>
                <a href='#'>Sign Up</a>
              </Button>
              <Button type="default" size="large" style={navButtonStyle}>
                <a href='#'>Login</a>
              </Button>
            </div>
            <div style={overlayStyle}></div>
            <div style={textStyle}>
              <h1 style={headingStyle}>
                "Transform Learning with AI-Powered Teaching Style Recommendations"
              </h1>
              <p style={paragraphStyle}>
                Personalized teaching methods for every learner—tailored by AI and driven by data.
              </p>
              <Button type="primary" size="large" style={buttonStyle}>
                <a href='#' style={linkStyle}>Get Started</a>
              </Button>
            </div>
          </Card>
        </div>

        <div style={contentStyle}>
          <Card
            hoverable
            cover={
              <Image
                alt="Slide 2"
                src={images.image2} // Replace with your image source
                style={{ width: '100vw', height: '100vh', objectFit: 'cover' }}
              />
            }
            style={{ width: '100%', height: '100vh' }}
          >
            <div style={buttonContainerStyle} >
              <Button type="default" size="large" style={navButtonStyle}>
                <a href='#'>Sign Up</a>
              </Button>
              <Button type="default" size="large" style={navButtonStyle}>
                <a href='#'>Login</a>
              </Button>
            </div>
            <div style={overlayStyle}></div>
            <div style={textStyle}>
              <h1 style={headingStyle}>
                "Revolutionize Teaching with Adaptive Learning Pathways"
              </h1>
              <p style={paragraphStyle}>
                Create customized learning journeys that evolve with your progress and preferences.
              </p>
              <Button type="primary" size="large" style={buttonStyle}>
                <a href='#' style={linkStyle}>Learn More</a>
              </Button>
            </div>
          </Card>
        </div>

        <div style={contentStyle}>
          <Card
            hoverable
            cover={
              <Image
                alt="Slide 3"
                src={images.image3} // Replace with your image source
                style={{ width: '100vw', height: '100vh', objectFit: 'cover' }}
              />
            }
            style={{ width: '100%', height: '100vh' }}
          >
            <div style={buttonContainerStyle} >
              <Button type="default" size="large" style={navButtonStyle}>
                <a href='#'>Sign Up</a>
              </Button>
              <Button type="default" size="large" style={navButtonStyle}>
                <a href='#'>Login</a>
              </Button>
            </div>
            <div style={overlayStyle}></div>
            <div style={textStyle}>
              <h1 style={headingStyle}>
                "Empowering Educators and Learners with Real-Time Feedback"
              </h1>
              <p style={paragraphStyle}>
                Gain insights into your progress, all driven by cutting-edge AI.
              </p>
              <Button type="primary" size="large" style={buttonStyle}>
                <a href='#' style={linkStyle}>Get Started</a>
              </Button>
            </div>
          </Card>
        </div>

        <div style={contentStyle}>
          <Card
            hoverable
            cover={
              <Image
                alt="Slide 4"
                src={images.image4} // Replace with your image source
                style={{ width: '100vw', height: '100vh', objectFit: 'cover' }}
              />
            }
            style={{ width: '100%', height: '100vh' }}
          >
            <div style={buttonContainerStyle} >
              <Button type="default" size="large" style={navButtonStyle}>
                <a href='#'>Sign Up</a>
              </Button>
              <Button type="default" size="large" style={navButtonStyle}>
                <a href='#'>Login</a>
              </Button>
            </div>
            <div style={overlayStyle}></div>
            <div style={textStyle}>
              <h1 style={headingStyle}>
                "Revolutionize Teaching with Adaptive Learning Pathways"
              </h1>
              <p style={paragraphStyle}>
                Create customized learning journeys that evolve with your progress and preferences.
              </p>
              <Button type="primary" size="large" style={buttonStyle}>
                <a href='#' style={linkStyle}>Learn More</a>
              </Button>
            </div>
          </Card>
        </div>
      </Carousel>

      <div style={{ padding: '30px 60px', backgroundColor: '#ffffff ', color: '#ffffff', height: '80vh' }}>
      <h1 style={{ fontFamily: 'Oxanium', color: '#008f98' }}>Key Features</h1>
      <Row gutter={50} style={{ marginTop: '40px' }}>
        <Col span={8}>
          <Card hoverable style={{ backgroundColor: 'rgba(32, 84, 84 , 1)', color: '#d8f5f5 ', boxShadow: '0px 4px 10px rgba(10, 24, 24 , 0.7)', }}>
            <h3 style={{ fontFamily: 'Roboto' }}>AI-Powered Recommendations</h3>
            <p style={{ fontFamily: 'Montserrat' }}>
              Our advanced AI analyzes learner data to recommend personalized teaching styles.
            </p>
          </Card>
        </Col>
        <Col span={8}>
          <Card hoverable style={{ backgroundColor: 'rgba(32, 84, 84 , 1)', color: '#d8f5f5 ', boxShadow: '0px 4px 10px rgba(10, 24, 24 , 0.7)', }}>
            <h3 style={{ fontFamily: 'Roboto' }}>Adaptive Learning Pathways</h3>
            <p style={{ fontFamily: 'Montserrat' }}>
              Tailor educational journeys that evolve with students, ensuring effective learning.
            </p>
          </Card>
        </Col>
        <Col span={8}>
          <Card hoverable style={{ backgroundColor: 'rgba(32, 84, 84 , 1)', color: '#d8f5f5 ', boxShadow: '0px 4px 10px rgba(10, 24, 24 , 0.7)', }}>
            <h3 style={{ fontFamily: 'Roboto' }}>Real-Time Feedback</h3>
            <p style={{ fontFamily: 'Montserrat' }}>
              Educators can receive instant feedback and adjust teaching methods as needed.
            </p>
          </Card>
        </Col>
      </Row>
      <Row gutter={50} style={{ marginTop: '40px' }}>
        <Col span={8}>
          <Card hoverable style={{ backgroundColor: 'rgba(32, 84, 84 , 1)', color: '#d8f5f5 ', boxShadow: '0px 4px 10px rgba(10, 24, 24 , 0.7)', }}>
            <h3 style={{ fontFamily: 'Roboto' }}>Comprehensive Teaching Style Database</h3>
            <p style={{ fontFamily: 'Montserrat' }}> 
              Explore a wide range of teaching styles tailored for different learning preferences.
            </p>
          </Card>
        </Col>
        <Col span={8}>
          <Card hoverable style={{ backgroundColor: 'rgba(32, 84, 84 , 1)', color: '#d8f5f5 ', boxShadow: '0px 4px 10px rgba(10, 24, 24 , 0.7)', }}>
            <h3 style={{ fontFamily: 'Roboto' }}>Multi-Platform Accessibility</h3>
            <p style={{ fontFamily: 'Montserrat' }}>
              Accessible across multiple platforms—desktop, mobile, and tablet.
            </p>
          </Card>
        </Col>
        <Col span={8}>
          <Card hoverable style={{ backgroundColor: 'rgba(32, 84, 84 , 1)', color: '#d8f5f5 ', boxShadow: '0px 4px 10px rgba(10, 24, 24 , 0.7)', }}>
            <h3 style={{ fontFamily: 'Roboto' }}>Data-Driven Insights</h3>
            <p style={{ fontFamily: 'Montserrat' }}>
              Make informed decisions with AI-backed insights on student progress and learning outcomes.
            </p>
          </Card>
        </Col>
      </Row>
      </div>

      <div style={{ padding: '80px 50px', backgroundColor: '#1f2833', color: '#ffffff' }}>
      <h2 style={{ fontFamily: 'Oxanium', color: 'silver' }}>How It Works</h2>
      <Row style={{ marginTop: '40px' }}>
        <Col span={12}>
          <Image src={images.image1} alt="How it works" preview={false} height={550} />
        </Col>
        <Col span={12}>
          <div style={{ marginLeft: '40px' }}>
            <h3 style={{ color: '#66fcf1' }}>Step 1: Learner Assessment</h3>
            <p>
              The learner fills out an initial assessment form to capture key details about their learning preferences.
            </p>
            <h3 style={{ color: '#66fcf1' }}>Step 2: AI Recommendation Engine</h3>
            <p>
              Our AI processes the assessment data and suggests the most suitable teaching styles.
            </p>
            <h3 style={{ color: '#66fcf1' }}>Step 3: Real-Time Feedback & Adaptive Learning</h3>
            <p>
              Learners receive personalized learning pathways, continuously adapting based on real-time feedback.
            </p>
          </div>
        </Col>
      </Row>
      </div>

      <div style={{ padding: '100px 50px', backgroundColor: '#1f2833', color: '#ffffff', textAlign: 'center' }}>
      <h2 style={{ fontFamily: 'Oxanium', color: 'silver' }}>Ready to Transform Learning?</h2>
      <p style={{ fontSize: '1.5rem', color: '#66fcf1' }}>
        Join us in revolutionizing education with AI-powered teaching recommendations.
      </p>
      <Button type="primary" size="large" style={{ background: "linear-gradient(to right, #00ff00, #0080ff)", padding: '20px 40px', fontSize: '1.2rem' }}>
        <a href='#signup' style={{ color: 'white', fontFamily: 'Montserrat' }}>Get Started Today</a>
      </Button>
      </div>

      <div style={{ padding: '40px', backgroundColor: '#0b0c10', color: '#ffffff' }}>
      <Row justify="space-between" gutter={50}>
        <Col span={8}>
          <h3 style={{ color: 'silver' }}>About Us</h3>
          <p>
            We're dedicated to transforming education through personalized, AI-driven solutions. Our mission is to make teaching and learning more effective and enjoyable.
          </p>
        </Col>
        <Col span={8}>
          <h3 style={{ color: 'silver' }}>Contact</h3>
          <p>Email: support@edtechapp.com</p>
          <p>Phone: +254 720454113</p>
        </Col>
        <Col span={8}>
          <h3 style={{ color: 'silver' }}>Follow Us</h3>
          <div>
            <a href="#" style={{ color: '#66fcf1', marginRight: '10px' }}>Facebook</a>
            <a href="#" style={{ color: '#66fcf1', marginRight: '10px' }}>X</a>
            <a href="#" style={{ color: '#66fcf1', marginRight: '10px' }}>LinkedIn</a>
          </div>
        </Col>
      </Row>
      <p style={{ marginTop: '20px', textAlign: 'center', color: '#66fcf1' }}>
        © 2024 Educational Teaching Style Recommendation App. All Rights Reserved.
      </p>
    </div>

    </div>
  );
};

export default Home;
