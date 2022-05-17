import { screen, cleanup } from '@testing-library/react';
import renderWithRedux from '../helpers/renderWithRedux';
import App from '../App';
import userEvent from '@testing-library/user-event';

describe('testing clicks', () => {
  beforeEach(cleanup);
  it('the page should has a button and a text 0', () => {
    renderWithRedux(<App />);
    const buttonAdicionar = screen.getByText('Clique aqui');

    expect(buttonAdicionar).toBeInTheDocument();
    expect(screen.getByText('0')).toBeInTheDocument();
  });

  it('the value should change with a diferente initialState', () => {
    renderWithRedux(<App />, { initialState: { clickReducer: { counter: 5 }}});

    expect(screen.getByText('5')).toBeInTheDocument();
  });

  it('the value should increment with a button click', () => {
    renderWithRedux(<App />);

    const buttonClick = screen.getByRole('button');
    expect(screen.getByText('0')).toBeInTheDocument();

    userEvent.click(buttonClick);

    expect(screen.queryByText('0')).not.toBeInTheDocument();
    expect(screen.getByText('1')).toBeInTheDocument();
  });

  it('the value should work properly with a initial value of 10', () => {
    renderWithRedux(<App />, { initialState: { clickReducer: { counter: 10 }}});

    const buttonClick = screen.getByRole('button');
    expect(screen.getByText('10')).toBeInTheDocument();

    userEvent.click(buttonClick);

    expect(screen.queryByText('10')).not.toBeInTheDocument();
    expect(screen.getByText('11')).toBeInTheDocument();
  });
});
