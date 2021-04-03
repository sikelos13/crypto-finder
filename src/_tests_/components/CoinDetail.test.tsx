import { render, RenderResult, waitFor } from '@testing-library/react'
import CoinDetail from '../../components/CoinsManagement/CoinDetail';
import { BrowserRouter } from 'react-router-dom';

let documentBody: RenderResult;

describe("<CoinDetail />", () => {
  beforeEach(() => {
    documentBody = render(<BrowserRouter><CoinDetail /></BrowserRouter>);
  });

  test("Renders <CoinDetail /> component correctly",  async () => {
    await waitFor(() => expect(documentBody.getByText(/back to list/i)).toBeInTheDocument())
  });
});
