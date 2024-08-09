import { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import * as formik from 'formik';
import * as yup from 'yup';

function App() {
  const { Formik } = formik;

  const [key, setKey] = useState("players");

  const playerSchema = yup.object().shape({
    firstName: yup.string().required('First Name is required.').matches(/^[A-Za-z]{0,30}$/),
    lastName: yup.string().required('Last Name is required.').matches(/^[A-Za-z]{0,30}$/),
    team: yup.string().required('Team Name is required.'),
  });

  const playerForm = () => {
    return(
      <Formik
        validationSchema = {playerSchema}
        onSubmit={console.log}
        initialValues={{
          firstName: 'Pavel',
          lastName: 'Datsyuk',
          team: 'Red Wings'
        }}>
        {({ handleSubmit, handleChange, values, touched, errors }) => (
        <Form noValidate onSubmit = {handleSubmit}>
          <Form.Group
          as={Col}
          md="4"
          controlId="validationFormkit101"
          className="position-relative">
            <Form.Label>email</Form.Label>
            <Form.Control
                  type="text"
                  name="firstName"
                  value={values.firstName}
                  onChange={handleChange}
                  isValid={touched.firstName && !errors.firstName}
                />
                <Form.Control.Feedback tooltip>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group
                as={Col}
                md="4"
                controlId="validationFormik102"
                className="position-relative"
              >
                <Form.Label>Last name</Form.Label>
              <Form.Control
                type="text"
                name="lastName"
                value={values.lastName}
                onChange={handleChange}
                isValid={touched.lastName && !errors.lastName}
              />
              <Form.Control.Feedback tooltip>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Button type="submit">Submit form</Button>
        </Form>
        )}
      </Formik>
    );
  };

  const playerTab = () => {
    return (
      <>{playerForm()}</>
    )
  }

  const teamTab = () => {
    return (
      <div className="h1">
        Player
      </div>
    )
  }

  return (
  <div>
    <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-3">
      <Tab eventKey="players" title="Players">
        {playerTab()}
      </Tab>
      <Tab eventKey="team" title="Team">
        {teamTab()}
      </Tab>
    </Tabs>
  </div>
  );
}

export default App;
