import { render, RenderResult } from '@testing-library/react'
import CoinDetailHighLowPrice from '../../../components/CoinsManagement/CoinDetailComponents/CoinDetailHighLowPrice';
import { mockCoinNormalized } from '../../mocks/coinNormalized';

let documentBody: RenderResult;

describe("<CoinDetailHighLowPrice />", () => {
  beforeEach(() => {
    documentBody = render(<CoinDetailHighLowPrice coin={mockCoinNormalized} />);
  });

  test("Renders <CoinDetailDeveloperData /> component correctly",  () => {
        expect(documentBody.getByText(/Highest price since creation:/i)).toBeInTheDocument();
    });

    test("Renders highest price since creation correctly",  () => {
        expect(documentBody.getByText(/215 USD on March 13/i)).toBeInTheDocument();
      });

      test("Renders lowest last 24hours value correctly",  () => {
        expect(documentBody.queryAllByText('N/A')).toHaveLength(3);
      });
});
