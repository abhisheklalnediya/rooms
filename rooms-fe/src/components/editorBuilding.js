import React from 'react';
import PropTypes from 'prop-types';
import { Form, Field } from 'react-final-form';
import './styles.css';
import { Form as AForm, Input, Button } from 'antd';

const required = value => (value ? undefined : 'Required');

const BuildingEditorForm = ({ initialValues, onSubmit, onDelete }) => (
  <Form
    initialValues={initialValues}
    onSubmit={onSubmit}
    render={({
      handleSubmit, pristine, values,
    }) => (
      <form onSubmit={handleSubmit}>
        <h2>Building</h2>

        <Field name="name" validate={required}>
          {({ input, meta }) => (
            <AForm.Item
              label="Name"
              validateStatus={(!meta.dirtySinceLastSubmit && meta.submitError && meta.submitError.length) || (meta.error && meta.touched) ? 'error' : ''}
              help={(meta.submitError && meta.submitError.length && meta.submitError.join(',')) || (meta.error && meta.touched && meta.error)}
            >
              <Input {...input} placeholder="Name" />
            </AForm.Item>
          )}
        </Field>
        <Field name="address" validate={required}>
          {({ input, meta }) => (
            <AForm.Item
              label="Address"
              validateStatus={(!meta.dirtySinceLastSubmit && meta.submitError && meta.submitError.length) || (meta.error && meta.touched) ? 'error' : ''}
              help={(meta.submitError && meta.submitError.length && meta.submitError.join(',')) || (meta.error && meta.touched && meta.error)}
            >
              <Input {...input} placeholder="Address" />
            </AForm.Item>
          )}
        </Field>
        <Field name="landmark1">
          {({ input, meta }) => (
            <AForm.Item
              label="Landmark 1"
              validateStatus={(!meta.dirtySinceLastSubmit && meta.submitError && meta.submitError.length) || (meta.error && meta.touched) ? 'error' : ''}
              help={(meta.submitError && meta.submitError.length && meta.submitError.join(',')) || (meta.error && meta.touched && meta.error)}
            >
              <Input {...input} placeholder="Landmark" />
            </AForm.Item>
          )}
        </Field>
        <Field name="landmark2">
          {({ input, meta }) => (
            <AForm.Item
              label="Landmark 2"
              validateStatus={(!meta.dirtySinceLastSubmit && meta.submitError && meta.submitError.length) || (meta.error && meta.touched) ? 'error' : ''}
              help={(meta.submitError && meta.submitError.length && meta.submitError.join(',')) || (meta.error && meta.touched && meta.error)}
            >
              <Input {...input} placeholder="Landmark" />
            </AForm.Item>
          )}
        </Field>
        <Field name="landmark3">
          {({ input, meta }) => (
            <AForm.Item
              label="Landmark 3"
              validateStatus={(!meta.dirtySinceLastSubmit && meta.submitError && meta.submitError.length) || (meta.error && meta.touched) ? 'error' : ''}
              help={(meta.submitError && meta.submitError.length && meta.submitError.join(',')) || (meta.error && meta.touched && meta.error)}
            >
              <Input {...input} placeholder="Landmark" />
            </AForm.Item>
          )}
        </Field>
        <Button type="primary" htmlType="submit" disabled={pristine}>Save</Button>
        <Button type="danger" onClick={onDelete} disabled={!values || !values.id}>Delete</Button>
      </form>
    )}
  />
);

BuildingEditorForm.propTypes = {
  initialValues: PropTypes.object.isRequired,
  values: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};
export default BuildingEditorForm;
