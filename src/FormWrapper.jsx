import React from 'react';

class FormWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      values: this.props.initialValues || {},
      touched: {},
      errors: {}
    };
  }
}
