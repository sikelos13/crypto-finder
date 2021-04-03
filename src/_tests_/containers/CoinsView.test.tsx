import { render, RenderResult, configure } from '@testing-library/react'
import CoinsView from '../../containers/CoinsView';
import Header from '../../components/Header';
import { mockCoinsList } from '../mocks/mockCoinsList';

configure({testIdAttribute: 'id'})

const pagination = {
    page: 1,
    perPage: 20,
    hasNextPage: false
}
let documentBody: RenderResult;

describe("<CoinsView />", () => {
  beforeEach(() => {
    documentBody = render(<CoinsView />);
  });

  test("Renders <SkeletonLoader /> and then <Header /> component correctly",  async () => {

   expect(await documentBody.findByTestId('skeleton-loader')).toBeVisible();
        const dom = render(<Header  
            pagination={pagination}
            coinsList={mockCoinsList}
            handlePaginate={jest.fn()}
            loading={false}
            />);

   expect(await dom.queryAllByText(/Coins Finder/i)).toHaveLength(2);
  });
});
