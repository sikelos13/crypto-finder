import { render, RenderResult } from '@testing-library/react'
import CoinDetailDeveloperData from '../../../components/CoinsManagement/CoinDetailComponents/CoinDetailDeveloperData';
import { mockCoinNormalized } from '../../mocks/coinNormalized';

let documentBody: RenderResult;

describe("<CoinDetailDeveloperData />", () => {
  beforeEach(() => {
    documentBody = render(<CoinDetailDeveloperData coin={mockCoinNormalized} />);
  });

  test("Renders <CoinDetailDeveloperData /> component correctly",  () => {
        expect(documentBody.getByText(/Github statistics:/i)).toBeInTheDocument();
    });

    test("Renders forks correctly",  () => {
        expect(documentBody.getByText(/Forks/i)).toBeInTheDocument();
        expect(documentBody.getByText(/15/i)).toBeInTheDocument();
      });

      test("Renders stars correctly",  () => {
        expect(documentBody.getByText(/Stars/i)).toBeInTheDocument();
        expect(documentBody.getByText(3)).toBeInTheDocument();
      });
});
