import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ValidEmail extends Component {
  verifyEmail = (email) => {
    const emailRegex = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
    return emailRegex.test(email);
  };

  render() {
    const { email } = this.props;
    const renderValidation =
      email !== ''
        ? this.verifyEmail(email)
          ? 'Email Válido'
          : 'Email Inválido'
        : null;
    let validationColor;
    if (renderValidation === 'Email Válido') validationColor = 'green';
    if (renderValidation === 'Email Inválido') validationColor = 'red';
    return (
      <div>
        <h2 data-testid='id-email-user'>{`Valor: ${email}`}</h2>
        <h3
          data-testid='id-email-validation'
          style={{ color: validationColor }}
        >
          {renderValidation}
        </h3>
      </div>
    );
  }
}

ValidEmail.propTypes = {
  email: PropTypes.string,
};

ValidEmail.defaultProps = {
  email: '',
};
