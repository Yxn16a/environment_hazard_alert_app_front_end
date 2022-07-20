import React from "react"
import { Row, Col} from "react-bootstrap";
import LandingPageCards from "./Cards";
import Form from './Form'
import uvData  from '../assets/data/Uvlightdata'

const Uvdata = uvData.map((data) => { 
  return < LandingPageCards 
    key={data.id}
    initialtime={data.initialtime}
    finaltime={data.finaltime}
    uvquantity={data.uvquatinty}
    measures={data.measure}
  />
})

export default function Main(){ 
    return (
        <div>
            <Row className="mt-3 mb-2 mx -auto d-flex justify-content-center">
                <Col className ="col-md-12 col-12">
                    <h1 className ="font-header1 text-center">Land Slides and Flood Prediction System</h1>
                </Col>
            </Row>
            <Row className="mx-auto mb-2 p-auto">
                <Col className="userprompt">
                    <h2 className="font-header2 text-center">Select Your Location and Date You Want To Predict For</h2>
                </Col>
            </Row>
            <Row>
                <Form/>
             </Row>
            <Row>
                <h2 className="font-header2 text-center mb-3">Check Todays Condition</h2> 
            </Row> 
            <Row>
            {Uvdata}
            </Row>
        </div>  
    )
}

