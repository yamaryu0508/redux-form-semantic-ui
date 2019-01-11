import React from "react";
import { Field, reduxForm } from "redux-form";
import { Button, Form } from "semantic-ui-react";

import { renderText } from "./SemanticFields";
import {
  required,
  maxLength15,
  email,
  aol,
  number,
  minValue13,
  tooYoung
} from "./Validations";

const ValidationForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props;
  return (
    <Form>
      <Field
        required
        name="username"
        type="text"
        component={renderText}
        label="Username"
        validate={[required, maxLength15]}
      />
      <Field
        name="email"
        type="email"
        component={renderText}
        label="Email"
        validate={email}
        warn={aol}
      />
      <Field
        required
        name="age"
        type="number"
        component={renderText}
        label="Age"
        validate={[required, number, minValue13]}
        warn={tooYoung}
      />
      <Form.Group>
        <Button
          color="blue"
          icon="checkmark"
          labelPosition="right"
          content="Submit"
          onClick={handleSubmit}
          disabled={submitting}
        />
        <Button
          content="Clear Values"
          onClick={reset}
          disabled={pristine || submitting}
        />
      </Form.Group>
    </Form>
  );
};

export default reduxForm({
  form: "form"
})(ValidationForm);
