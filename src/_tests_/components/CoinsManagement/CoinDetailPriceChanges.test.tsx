import { render, RenderResult } from '@testing-library/react'
import CoinDetailPriceChanges from '../../../components/CoinsManagement/CoinDetailComponents/CoinDetailPriceChanges';
import { mockCoinNormalized } from '../../mocks/coinNormalized';

let documentBody: RenderResult;

describe("<CoinDetailPriceChanges />", () => {
  beforeEach(() => {
    documentBody = render(<CoinDetailPriceChanges coin={mockCoinNormalized} />);
  });

  test("Renders <CoinDetailPriceChanges /> component correctly",  () => {
        expect(documentBody.getByText('Price changes (USD)')).toBeInTheDocument();
    });

    test("Renders last 24h price correctly",  () => {
        expect(documentBody.getByText(/Last 24h:/i)).toBeInTheDocument();
        expect(documentBody.getByText(12)).toBeInTheDocument();
      });

      test("Renders last month price correctly",  () => {
        expect(documentBody.getByText(/Last month:/i)).toBeInTheDocument();
        expect(documentBody.queryAllByText('N/A')).toHaveLength(2);
      });
});
