import NotFound from '../../components/NotFound';
import { render, RenderResult } from '@testing-library/react';

let documentBody: RenderResult;

describe('<Header />', () => {
    beforeEach(() => {
      documentBody = render(<NotFound  />);
    });

    it('shows text title', () => {
      expect(documentBody.getByText(/Page not found/i)).toBeInTheDocument();
    });
  });