import { render, RenderResult } from '@testing-library/react'
import CoinsList from '../../components/CoinsList';
import { mockCoinsList } from '../mocks/mockCoinsList';

let documentBody: RenderResult;

describe("<CoinDetail />", () => {
  beforeEach(() => {
    documentBody = render(<CoinsList coinsList={mockCoinsList} />);
  });

  test("Renders <SkeletonLoader /> and then <CoinsLIst /> component correctly",  () => {

    expect(documentBody.getByText(/Testcoin1/i)).toBeInTheDocument();
});
});
