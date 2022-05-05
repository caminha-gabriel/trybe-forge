import React from 'react';
import { render, screen } from '@testing-library/react';
import ValidEmail from '../components/ValidEmail';

describe('Testing ValidEmail component', () => {
  
  it('Testing component when email is VALID', () => {
    const USER_EMAIL = 'email@email.com';
    render(<ValidEmail email={USER_EMAIL} />);
    const isValid = screen.getByText('Email Válido');
    expect(isValid).toBeInTheDocument();
  });

  it('Testing component when email is INVALID', () => {
    const USER_EMAIL = 'wrongemail';
    render(<ValidEmail email={USER_EMAIL} />);
    const isInvalid = screen.getByText('Email Inválido');
    expect(isInvalid).toBeInTheDocument();
  });

  it('Testing component when email is NOT SENT', () => {
    render(<ValidEmail />)
    const validationElement = screen.getByTestId('id-email-validation');
    expect(validationElement).toHaveTextContent('');
  });

  it('Testing validation text color when email is VALID', () => {
    const USER_EMAIL = 'email@email.com';
    render(<ValidEmail email={USER_EMAIL}/>);
    const validationElement = screen.getByTestId('id-email-validation');
    expect(validationElement.style.color).toBe('green');
  });

  it('Testing validation text color when email is INVALID', () => {
    const USER_EMAIL = 'wrongemail';
    render(<ValidEmail email={USER_EMAIL}/>);
    const validationElement = screen.getByTestId('id-email-validation');
    expect(validationElement.style.color).toBe('red');
  });
});
