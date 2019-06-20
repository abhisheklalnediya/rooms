import React from 'react';
import PropTypes from 'prop-types';
import { Form, Field } from 'react-final-form';
import './styles.css';
import {
  Form as AForm, Input, Button, Radio,
} from 'antd';

const RoomEditorForm = ({ initialValues, onSubmit, onDelete }) => (
  <Form
    initialValues={initialValues}
    onSubmit={onSubmit}
    render={({
      handleSubmit, pristine, values,
    }) => (
      <form onSubmit={handleSubmit}>
        <h2>Room</h2>

        <Field name="flat_number">
          {({ input, meta }) => (
            <AForm.Item
              label="Flat Number"
              validateStatus={(!meta.dirtySinceLastSubmit && meta.submitError && meta.submitError.length) || (meta.error && meta.touched) ? 'error' : ''}
              help={(meta.submitError && meta.submitError.length && meta.submitError.join(',')) || (meta.error && meta.touched && meta.error)}
            >

              <Input {...input} placeholder="Flat Number" />
            </AForm.Item>
          )}
        </Field>
        <Field name="room_type">
          {({ input, meta }) => (
            <AForm.Item
              label="Room Type"
              validateStatus={(!meta.dirtySinceLastSubmit && meta.submitError && meta.submitError.length) || (meta.error && meta.touched) ? 'error' : ''}
              help={(meta.submitError && meta.submitError.length && meta.submitError.join(',')) || (meta.error && meta.touched && meta.error)}
            >
              <Radio.Group {...input}>
                <Radio value="1 BHK">1 BHK</Radio>
                <Radio value="2 BHK">2 BHK</Radio>
                <Radio value="3 BHK">3 BHK</Radio>
                <Radio value="Studio">Studio</Radio>
              </Radio.Group>
            </AForm.Item>
          )}
        </Field>
        <Field name="bathrooms_count">
          {({ input, meta }) => (
            <AForm.Item
              label="Bathrooms"
              validateStatus={(!meta.dirtySinceLastSubmit && meta.submitError && meta.submitError.length) || (meta.error && meta.touched) ? 'error' : ''}
              help={(meta.submitError && meta.submitError.length && meta.submitError.join(',')) || (meta.error && meta.touched && meta.error)}
            >
              <Input {...input} placeholder="Bathrooms" />
            </AForm.Item>
          )}
        </Field>
        <Field name="area">
          {({ input, meta }) => (
            <AForm.Item
              label="Area"
              validateStatus={(!meta.dirtySinceLastSubmit && meta.submitError && meta.submitError.length) || (meta.error && meta.touched) ? 'error' : ''}
              help={(meta.submitError && meta.submitError.length && meta.submitError.join(',')) || (meta.error && meta.touched && meta.error)}
            >
              <Input {...input} placeholder="Area" />
            </AForm.Item>
          )}
        </Field>
        <Field name="rent">
          {({ input, meta }) => (
            <AForm.Item
              label="Rent"
              validateStatus={(!meta.dirtySinceLastSubmit && meta.submitError && meta.submitError.length) || (meta.error && meta.touched) ? 'error' : ''}
              help={(meta.submitError && meta.submitError.length && meta.submitError.join(',')) || (meta.error && meta.touched && meta.error)}
            >
              <Input {...input} placeholder="Rent" />
            </AForm.Item>
          )}
        </Field>
        <Field name="maintenance_amount">
          {({ input, meta }) => (
            <AForm.Item
              label="Maintenance Amount"
              validateStatus={(!meta.dirtySinceLastSubmit && meta.submitError && meta.submitError.length) || (meta.error && meta.touched) ? 'error' : ''}
              help={(meta.submitError && meta.submitError.length && meta.submitError.join(',')) || (meta.error && meta.touched && meta.error)}
            >
              <Input {...input} placeholder="Maintenance Amount" />
            </AForm.Item>
          )}
        </Field>
        <Field name="electricity_account_number">
          {({ input, meta }) => (
            <AForm.Item
              label="Electricity Account Number"
              validateStatus={(!meta.dirtySinceLastSubmit && meta.submitError && meta.submitError.length) || (meta.error && meta.touched) ? 'error' : ''}
              help={(meta.submitError && meta.submitError.length && meta.submitError.join(',')) || (meta.error && meta.touched && meta.error)}
            >
              <Input {...input} placeholder="Electricity Account Number" />
            </AForm.Item>
          )}
        </Field>
        <Button type="primary" htmlType="submit" disabled={pristine}>Save</Button>
        <Button type="danger" onClick={onDelete} disabled={!values || !values.id}>Delete</Button>
      </form>
    )}
  />
);

RoomEditorForm.propTypes = {
  initialValues: PropTypes.object.isRequired,
  values: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};
export default RoomEditorForm;
