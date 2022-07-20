import React from "react"; 
import { Button, Form, Col, Row } from 'react-bootstrap';
const { Provinces, Districts, Sectors,Cells} = require('rwanda')

export default function FormData() {
  const Todaysdate = new Date(); 
  const [formData, setFormData] = React.useState({
    province: "", 
    district: "", 
    sector: "", 
    cell: "",
    startDate:Todaysdate,
    endDate:""
  })
  let district; 
  let sectors; 
  let cell; 

  const provinces = Provinces().map(prov => <option value={prov} key={prov}>{prov}</option>)
  
  function selectDistrict(province) {
    try {
      if (province) {
        return district = Districts(province).map(district => <option value={district} key={district}>{district}</option>);
      }
     } catch (e) { 
      return console.error(e);
    }
  }

  function selectSectors(province, district) {
    try {
      if (province && district) {
        return sectors = Sectors(province, district).map(sector => <option value={sector} key={sector}>{sector}</option>)
      }
    } catch (e) { 
      console.error(e)
    }
     
  }

  function selectCell(province, distric, sector) {
    try {
      if (province && distric && sector) {
        return cell = Cells(province, distric, sector).map(cell => <option value={cell} key={cell}>{cell}</option>)
      }
    } catch (e) { 
      console.error(e); 
    }
  }

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
            {provinces}
          </Form.Select>
        </Col>
        <Col className="col-md-3 col-12">
          {selectDistrict(formData.province) && <Form.Select
            name="district"
            value={formData.district}
            onChange={handleChange}
          >
            <option>--select District--</option>
            {district}
          </Form.Select>}
        </Col>
        <Col className="col-md-3 col-12">
          {formData.district && selectSectors(formData.province, formData.district) && <Form.Select
            name="sector"
            value={formData.sector}
            onChange={handleChange}
          >
            <option>--select sector--</option>
            {sectors}
          </Form.Select>}
        </Col>
        <Col className="col-md-3 col-12">
          {formData.sector && selectCell(formData.province, formData.district, formData.sector) &&<Form.Select
            name="cell"
            value={formData.cell}
            onChange={handleChange}
          >
            <option>--select cell--</option>
            {cell}
          </Form.Select>}
        </Col>
      </Row>
      {formData.cell && <Row className="d-flex mb-3 mx-auto align-items-center">
        <Col className="col-6 mb-0 mx-auto">
          <Form.Group >
            <Form.Label className="timelabel" htmlFor="startDate">Start Date</Form.Label>
            <Form.Control
              type="date" id="startDate"
              name="startDate"
              value={formData.startDate}
            />
          </Form.Group>
        </Col>
        <Col className="col-6 mb-0 mx-auto">
          <Form.Group >
            <Form.Label className="timelabel" htmlFor="EndDate">End Date</Form.Label>
            <Form.Control
              type="date" id="EndDate"
              name="endDate"
              value={formData.endDate}
            />
          </Form.Group>
        </Col>
      </Row>}
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

