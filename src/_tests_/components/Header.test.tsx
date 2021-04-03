import Header from '../../components/Header';
import { render, RenderResult } from '@testing-library/react';
import { mockCoinsList } from '../mocks/mockCoinsList';
import PaginationNavBar from '../../components/PaginationNavBar';

let documentBody: RenderResult;

const pagination = {
    page: 1,
    perPage: 20,
    hasNextPage: false
}

describe('<Header />', () => {
    beforeEach(() => {
      documentBody = render(<Header 
            coinsList={mockCoinsList}
            handlePaginate={jest.fn()}
            loading={false}
            pagination={pagination}
            />);
    });

    it('shows app bar title', () => {
      expect(documentBody.getByText(/Coins Finder/i)).toBeInTheDocument();
    });

    it('Renders pagination component', () => {
        expect(documentBody.getByText(/Page/i)).toBeInTheDocument();
      });
  });