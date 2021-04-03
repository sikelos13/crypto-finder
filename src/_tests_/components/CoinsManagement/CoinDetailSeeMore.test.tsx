import { render, RenderResult } from '@testing-library/react'
import CoinDetailSeeMore from '../../../components/CoinsManagement/CoinDetailComponents/CoinDetailSeeMore';
import { mockCoinsListSimple } from '../../mocks/mockCoinsListSimple';

let documentBody: RenderResult;

describe("<CoinDetailSeeMore />", () => {
  beforeEach(() => {
    documentBody = render(<CoinDetailSeeMore similarCoinsList={mockCoinsListSimple} />);
  });

  test("Renders <CoinDetailSeeMore /> component correctly",  () => {
        expect(documentBody.getByText(/More coins/i)).toBeInTheDocument();
    });

    test("Renders list of coins correctly",  () => {
        expect(mockCoinsListSimple).toHaveLength(2);
      });

      test("Renders a coin correctly",  () => {
        expect(documentBody.getByText('test_simple1(ts1)')).toBeInTheDocument();
      });
});
