import React from 'react';
import { Container, Row, Col, Card, Form } from 'react-bootstrap';
import { History } from 'history';
import { Input, Checkbox, Button } from '../../components';
import { showToast, useStateCallback } from '../../utility/common';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import schema from '../../schema/editUser';
import { constants } from '../../constants';
import { editUser } from '../../apis/manageUsers';
import '../../styles/editUser.scss';

interface User {
  first_name: string;
  last_name: string;
  email: string;
  id: number | string;
  is_admin: boolean;
}

interface EditUserProps {
  history: History;
}

type EditFormData = {
  firstName: string;
  lastName: string;
  isAdmin: boolean;
};

const EditUser: React.FC<EditUserProps> = ({ history }) => {
  const {
    title,
    buttons,
    emailPlaceholder,
    adminPlaceholder,
    firstNamePlaceholder,
    lastNamePlaceholder,
  } = constants.editUser;

  const [isLoading, setLoading] = useStateCallback(false);

  const { first_name, last_name, email, id, is_admin } = history.location
    .state as User;

  const { register, handleSubmit, errors, formState } = useForm<EditFormData>({
    mode: 'onChange',
    reValidateMode: 'onChange',
    defaultValues: {
      firstName: first_name,
      lastName: last_name,
      isAdmin: is_admin,
    },
    resolver: yupResolver(schema),
  });
  const onSubmit = (data: EditFormData) => {
    setLoading(true, () => {
      const body = {
        first_name: data.firstName,
        last_name: data.lastName,
        is_admin: data.isAdmin,
      };
      editUser(id, body)
        .then((res) => {
          if (res.data.status) {
            showToast(res.data.message);
          } else {
            showToast(res.data.error_message);
          }
          setLoading(false);
        })
        .catch(() => setLoading(false));
    });
  };
  const { touched } = formState;

  return (
    <Container>
      <Row className="edit-user-form">
        <Col lg={12} xl={10} className="offset-lg-0 offset-xl-1">
          <Card>
            <Card.Body className="pad-1">
              <Card.Title>{title}</Card.Title>
              <Form onSubmit={handleSubmit(onSubmit)}>
                <Row>
                  <Col md={6}>
                    <Input
                      controlId="formFirstName"
                      error={errors.firstName && errors.firstName.message}
                      showError={touched && touched.firstName}
                      inputRef={register}
                      name="firstName"
                      isRequired={true}
                      label={firstNamePlaceholder}
                    />
                  </Col>
                  <Col md={6}>
                    <Input
                      controlId="formLastName"
                      error={errors.lastName && errors.lastName.message}
                      showError={touched && touched.lastName}
                      inputRef={register}
                      name="lastName"
                      isRequired={true}
                      label={lastNamePlaceholder}
                    />
                  </Col>
                  <Col md={6}>
                    <Input
                      controlId="formEmail"
                      name="email"
                      label={emailPlaceholder}
                      isControlled={true}
                      value={email}
                      disabled={true}
                    />
                  </Col>
                  <Col md={6} className="inline-checkbox">
                    <Checkbox
                      controlId="isAdminCheckbox"
                      label={adminPlaceholder}
                      inputRef={register}
                      name="isAdmin"
                    />
                  </Col>
                </Row>
                <Card.Footer>
                  <Button
                    variant="success"
                    disabled={isLoading}
                    isLoading={isLoading}
                    label={buttons.editUser}
                    onClick={handleSubmit(onSubmit)}
                  />
                </Card.Footer>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default EditUser;
