import { render, RenderResult } from '@testing-library/react'
import CoinDetailCommunityData from '../../../components/CoinsManagement/CoinDetailComponents/CoinDetailCommunityData';
import { mockCoinNormalized } from '../../mocks/coinNormalized';

let documentBody: RenderResult;

describe("<CoinDetailCommunityData />", () => {
  beforeEach(() => {
    documentBody = render(<CoinDetailCommunityData coin={mockCoinNormalized} />);
  });

  test("Renders <CoinDetailCommunityData /> component correctly",  () => {
        expect(documentBody.getByText(/Community statistics:/i)).toBeInTheDocument();
    });

    test("Renders community data correctly",  () => {
        expect(documentBody.getByText(/13456/i)).toBeInTheDocument();
    });
});
