import { render, RenderResult } from '@testing-library/react'
import CoinDetailDescription from '../../../components/CoinsManagement/CoinDetailComponents/CoinDetailDescription';
import { mockCoinNormalized } from '../../mocks/coinNormalized';

let documentBody: RenderResult;

describe("<CoinDetailDescription />", () => {
  beforeEach(() => {
    documentBody = render(<CoinDetailDescription coin={mockCoinNormalized} />);
  });

  test("Renders <CoinDetailDescription /> component correctly with description",  () => {
    expect(documentBody.getByText(/Description/i)).toBeInTheDocument();
    });

    test("Renders description correctly",  () => {
      expect(documentBody.getByText(/Test something/i)).toBeInTheDocument();
      });
});
