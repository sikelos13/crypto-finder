import { render, RenderResult, configure } from '@testing-library/react'
import PriceHighCharts from '../../../components/CoinsManagement/CoinDetailComponents/PriceHighCharts';
import { mockCoinNormalized } from '../../mocks/coinNormalized';

configure({testIdAttribute: 'id'})
let documentBody: RenderResult;

describe("<PriceHighCharts />", () => {
    beforeEach(() => {
        documentBody = render(<PriceHighCharts coin={mockCoinNormalized} />);
      });

    test("Renders <SkeletonLoaderDetail /> and then <PriceHighCharts /> component correctly",  async () => {
        expect(await documentBody.findByTestId('skeleton-loader-detail')).toBeVisible();
  });
});
