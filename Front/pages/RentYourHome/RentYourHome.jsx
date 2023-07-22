
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import InputGroup from 'react-bootstrap/InputGroup';
import {DatePicker} from '@gsebdev/react-simple-datepicker';
import './RentYourHome.css';

const RentYourHome = () => {
  const onChangeCallback = ({ target }) => {

  };
    return (
        <div className='rentyourhome-container'>
            <h1>You want to rent your home to a responsible person from the forces?</h1>
            
            <p>Our platform connects you with responsible police officers and other forces members looking for comfortable and secure accommodations during their stay. 
            Join us in supporting those who protect and serve, while earning extra incomefrom your property. List your home now and be part of a community that values safety, responsibility, and hospitality. 
            Together, let's create a welcoming haven for our brave heroes.</p> 
            <strong>Get started today and see how your home can make a difference!</strong>

            <p>Please fill in this form</p>
            
                <Form>
      <Row className="mb-3">

      <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>First name</Form.Label>
          <Form.Control type="first name" placeholder="First name" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Last name</Form.Label>
          <Form.Control type="Last name" placeholder="Last name" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Address</Form.Label>
        <Form.Control placeholder="1234 Main St" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridAddress2">
        <Form.Label>Address 2</Form.Label>
        <Form.Control placeholder="Apartment, studio, or floor" />
      </Form.Group>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>City</Form.Label>
          <Form.Control />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>State</Form.Label>
          <Form.Select defaultValue="Choose...">
            <option>Choose...</option>
            <option>Álava</option>
            <option>Albacete</option>
            <option>Alicante</option>
            <option>Almería</option>
            <option>Asturias</option>
            <option>Ávila</option>
            <option>Badajoz</option>
            <option>Barcelona</option>
            <option>Burgos</option>
            <option>Cáceres</option>
            <option>Cádiz</option>
            <option>Cantabria</option>
            <option>Castellón</option>
            <option>Ciudad Real</option>
            <option>Córdoba</option>
            <option>Cuenca</option>
            <option>Girona</option>
            <option>Granada</option>
            <option>Guadalajara</option>
            <option>Gipuzkoa</option>
            <option>Huelva</option>
            <option>Huesca</option>
            <option>Jaén</option>
            <option>La Rioja</option>
            <option>Las Palmas</option>
            <option>León</option>
            <option>Lleida</option>
            <option>Lugo</option>
            <option>Madrid</option>
            <option>Málaga</option>
            <option>Murcia</option>
            <option>Navarra</option>
            <option>Ourense</option>
            <option>Palencia</option>
            <option>Pontevedra</option>
            <option>Salamanca</option>
            <option>Santa Cruz de Tenerife</option>
            <option>Segovia</option>
            <option>Sevilla</option>
            <option>Soria</option>
            <option>Tarragona</option>
            <option>Teruel</option>
            <option>Toledo</option>
            <option>Valencia</option>
            <option>Valladolid</option>
            <option>Zamora</option>
            <option>Zaragoza</option>
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>Zip</Form.Label>
          <Form.Control />
        </Form.Group>
      </Row>



      <strong>Information about your accommodation</strong>

      <DatePicker
      id='datepicker-id'
      name='date-demo'
      onChange={onChangeCallback}
      value={'01/02/2023'}
      />


      <Form.Group >
      <Form.Select aria-label="Default select example">
      <option>Style of accommodation</option>
      <option value="1">Room</option>
      <option value="2">House</option>
      <option value="3">Apartment</option>
    </Form.Select>
    </Form.Group>

    <InputGroup className="mb-3" style={{ marginTop: '2rem' }}>
        <InputGroup.Text>€</InputGroup.Text>
        <Form.Control aria-label="Amount (to the nearest dollar)" />
        <InputGroup.Text>.00</InputGroup.Text>
      </InputGroup>

   
      <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>Upload pictures of your home</Form.Label>
        <Form.Control type="file" />
      </Form.Group>
      

      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Short description of yourself and your place</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>

      <Form.Group className="mb-3" id="formGridCheckbox">
        <Form.Check type="checkbox" label="Agree to terms and conditions" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    
    
          </div>
       
  );
};

export default RentYourHome;

