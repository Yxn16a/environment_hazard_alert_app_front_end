import React from "react"; 
import { Button, Form, Col, Row } from 'react-bootstrap';
//import { Prev } from "react-bootstrap/esm/PageItem";

export default function FormData() {

  const [formData, setFormData] = React.useState({
    province: "", 
    district: "", 
    sector: "", 
    cell:""
  })

  //const [show, setShow] = React.useState(true)
  
  // function selectProvince() { 
  //   setShow((prev)=>{ 
  //     return {
  //       ...prev, 

  //     }
  //   })
  // }

  function SubmitFormData() { 

  }

  function handleChange(event) {
    const { name, value } = event.target
    setFormData((prevformData) => {
      return {
        ...prevformData,
        [name]: value
      }
    })
  }
  return (
    <Form onSubmit={SubmitFormData}>
      <Row className="mb-3 mx-auto">
        <Col className="col-md-3 col-12">
          <Form.Select
            name="province"
            value={formData.province}
            onChange ={handleChange}
          >
            <option >--selectProvince--</option>
            <option value="north">North</option>
            <option value="south">South</option>
            <option value="east">East</option>
            <option value="west">West</option>
            <option value="kigali">KigaliCity</option>
          </Form.Select>
        </Col>
        <Col className="col-md-3 col-12">
          {formData.province.length > 0 && <Form.Select
            name="district"
            value={formData.district}
            onChange={handleChange}
          >
            <option>--select District--</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>}
        </Col>
        <Col className="col-md-3 col-12">
          {formData.district.length > 0 &&<Form.Select
            name="sector"
            value={formData.sector}
            onChange={handleChange}
          >
            <option>--select sector--</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>}
        </Col>
        <Col className="col-md-3 col-12">
          {formData.sector.length > 0 &&<Form.Select
            name="cell"
            value={formData.cell}
            onChange={handleChange}
          >
            <option>--select cell--</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>}
        </Col> 
      </Row>
      <Row className="d-flex mb-3 mx-auto align-items-center">
        <Col className="col-6 mb-0 mx-auto">
          <Form.Group >
            <Form.Label className="timelabel" htmlFor="startDate">Start Date</Form.Label>
            <Form.Control type="date" id="startDate" />
          </Form.Group>
        </Col>
        <Col className="col-6 mb-0 mx-auto">
          <Form.Group >
            <Form.Label className="timelabel" htmlFor="EndDate">End Date</Form.Label>
            <Form.Control type="date" id="EndDate" />
          </Form.Group>
        </Col>
      </Row>
      <Row className="d-flex mx-auto">
        <Col className="col-12">
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Col>
      </Row>
    </Form>
  );
}

