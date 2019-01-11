import React from "react";
import { Form } from "semantic-ui-react";

export const renderText = ({
  input,
  type,
  label,
  placeholder,
  meta: { touched, error, warning },
  ...props
}) => (
  <Form.Field>
    <Form.Input
      {...input}
      {...props}
      error={touched && error && true}
      label={label}
      placeholder={placeholder}
    />
    <Form.Field>
      {touched &&
        ((error && <i style={{ color: "#9f3a38" }}>{error}</i>) ||
          (warning && <i style={{ color: "#9f3a38" }}>{warning}</i>))}
    </Form.Field>
  </Form.Field>
);
