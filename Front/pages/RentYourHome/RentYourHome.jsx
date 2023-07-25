import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import InputGroup from 'react-bootstrap/InputGroup';
import {DatePicker} from '@gsebdev/react-simple-datepicker';
import backgroundImg from '../../public/imgicons/police_blackandwhite.jpg';
import './RentYourHome.css';

const BackgroundContainer = styled.div`
  background-image: url(${backgroundImg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 100vh;
  width: 100%;
`;


const formatDateToDDMMYYYY = (date) => {
  try {
    console.log('Date parameter:', date); // Add this line to check the type of the 'date' parameter
    // Make sure that the 'date' parameter is an instance of the 'Date' object
    if (!(date instanceof Date)) {
      throw new Error('Invalid date parameter');
    }

    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  } catch (error) {
    console.error('Error in formatDateToDDMMYYYY:', error);
    return ''; // Return a default value or handle the error in an appropriate way
  }
};


const RentYourHome = () => {
 
  const [initialDate, setInitialDate] = useState(new Date('01/02/2023'));
 

  const [formData, setFormData] = useState({
    user_id: '12345678-1234-1234-1234-1234567890ab',
    firstname: '',
    lastname: '',
    email: '',
    accommodation_name: '',
    description: '',
    location: '',
    price:'',
    availability:'',
    start_avail_date:'',
    end_avail_date:'',

  });
 
  const onChangeCallback = (date, name) => {
    console.log("Date selected:", date);
    // Convertir la date au format souhaité (par exemple, 'DD/MM/YYYY') pour l'affichage dans le champ de texte
    const formattedDate = formatDateToDDMMYYYY(date);
    setFormData({ ...formData, [name]: formattedDate });
  };
  


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('http://127.0.0.1:4000/accommodations/', formData)
    
      .then((response) => {
        // Rediriger vers le tableau de bord de l'utilisateur en cas de succès
        console.log (response)
        location[1]('/home-page');
      })
      .catch((error) => {
        console.error(error);
        console.log(error.response);
        // Gérer les erreurs ici si nécessaire
      });
  };


    return (
      <BackgroundContainer>
        <div className='rentyourhome-container'>
            <h1>You want to rent your home to a responsible person from the forces?</h1>
            
            <p>Our platform connects you with responsible police officers and other forces members looking for comfortable and secure accommodations during their stay. 
            Join us in supporting those who protect and serve, while earning extra incomefrom your property. List your home now and be part of a community that values safety, responsibility, and hospitality. 
            Together, let's create a welcoming haven for our brave heroes.</p> 
            <strong>Get started today and see how your home can make a difference!</strong>

            <p>Please fill in this form</p>
            
            <Form onSubmit={handleSubmit}>
      <Row className="mb-3">

      <Form.Group as={Col} controlId="formGridEmail">

          <Form.Label style={{ color: '#1D3C78', fontSize: '20px' }}>First name</Form.Label>
          <Form.Control onChange={ handleChange } value= { formData.firstname } name="firstname" type="text" placeholder="First name" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label style={{ color: '#1D3C78', fontSize: '20px' }}>Last name</Form.Label>
          <Form.Control onChange={ handleChange } value= { formData.lastname } name="lastname" type="text" placeholder="Last name" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label style={{ color: '#1D3C78', fontSize: '20px' }}>Email</Form.Label>
          <Form.Control onChange={ handleChange } value= { formData.email } name="email" type="text" placeholder="Enter email" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label style={{ color: '#1D3C78', fontSize: '20px' }}>Country</Form.Label>
          <Form.Control onChange={ handleChange } name="Country" type="text" placeholder="Spain" />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label style={{ color: '#1D3C78', fontSize: '20px' }}>Address</Form.Label>
        <Form.Control onChange={ handleChange } value= { formData.location } name="location" type="text" placeholder="1234 Main St" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridAddress2">
        <Form.Label style={{ color: '#1D3C78', fontSize: '20px' }}>Address 2</Form.Label>
        <Form.Control placeholder="Apartment, studio, or floor" />
      </Form.Group>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label style={{ color: '#1D3C78', fontSize: '20px' }}>City</Form.Label>
          <Form.Control />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label style={{ color: '#1D3C78', fontSize: '20px' }}>Autonomous Community</Form.Label>
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
          <Form.Label style={{ color: '#1D3C78', fontSize: '20px' }}>Postal Code</Form.Label>
          <Form.Control />
        </Form.Group>
      </Row>


      <strong>Information about your accommodation</strong>
      <div>

  <label style={{ color: '#1D3C78', fontSize: '20px' }}>Starting Date:</label>
  <DatePicker
    id='starting-datepicker-id'
    name='starting-date-demo'
    onChange={onChangeCallback}
    value={initialDate} // Assurez-vous que vous avez initialisé initialDate
  />
</div>

<div>
  <label style={{ color: '#1D3C78', fontSize: '20px' }}>Ending Date:</label>
  <DatePicker
    id='ending-datepicker-id'
    name='ending-date-demo'
    onChange={onChangeCallback}
    value={initialDate} // Assurez-vous que vous avez initialisé initialDate
  />
</div>

      <Form.Group >
      <Form.Select aria-label="Default select example">
      <option>Type of accommodation</option>
      <option value="1">Room</option>
      <option value="2">House</option>
      <option value="3">Apartment</option>
    </Form.Select>
    </Form.Group>

    <InputGroup className="mb-3 justify-content-center" style={{ marginTop: '2rem' }}>
        <InputGroup.Text>€</InputGroup.Text>
        <Form.Control onChange={ handleChange } value= { formData.price } name="price" type="number" aria-label="Amount (to the nearest dollar)" style={{ maxWidth: '100px' }} />
        <InputGroup.Text>.00 / night</InputGroup.Text>
      </InputGroup>

   
      <Form.Group controlId="formFile" className="mb-3">
        <Form.Label style={{ color: '#1D3C78', fontSize: '20px' }}> Upload pictures of your home</Form.Label>
        <Form.Control type="file" />
      </Form.Group>
      

      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label style={{ color: '#1D3C78', fontSize: '20px' }}>Short description of yourself and your place</Form.Label>
        <Form.Control onChange={ handleChange } value= { formData.description } name="description" type="text" as="textarea" rows={3} />
      </Form.Group>

      <Form.Group className="mb-3" id="formGridCheckbox">
        <Form.Check type="checkbox" label="Agree to terms and conditions" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    
  
          </div>
          </BackgroundContainer>
  );
};

export default RentYourHome;

