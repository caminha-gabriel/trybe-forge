import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

test('check if email input exists in document', () => {
  render(<App />);
  const inputEmail = screen.getByLabelText('Email');
  expect(inputEmail).toBeInTheDocument();
  expect(inputEmail.type).toBe('email');
});

test('check if "Enviar" button exists in document', () => {
  render(<App />);
  const sendButton = screen.getByTestId('id-send');
  expect(sendButton).toBeInTheDocument();
  expect(sendButton).toHaveValue('Enviar');
  expect(sendButton.type).toBe('button');
})

test('check if 2 buttons exists in document', () => {
  render(<App />);
  const buttons = screen.getAllByRole('button');
  expect(buttons).toHaveLength(2);
});

describe('check if input and button works properly', () => {
  it('should render your email after typing it and clicking on "Enviar"', () => {
    render(<App />);

    const USER_EMAIL = 'teste@teste.com';
    const inputEmail = screen.getByLabelText('Email');
    const sendButton = screen.getByTestId('id-send');
    const emailElement = screen.getByTestId('id-email-user');
    
    expect(inputEmail).toBeInTheDocument();
    expect(sendButton).toBeInTheDocument();
    expect(emailElement).toBeInTheDocument();
    
    expect(emailElement).toHaveTextContent('Valor:');
    expect(inputEmail).toHaveValue('');

    userEvent.type(inputEmail, USER_EMAIL);
    expect(inputEmail).toHaveValue(USER_EMAIL);
    userEvent.click(sendButton);
    
    expect(inputEmail).toHaveValue('');
    expect(emailElement).toHaveTextContent(`Valor: ${USER_EMAIL}`);
  })
});
