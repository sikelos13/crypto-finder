import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { fetchCoinApi, FetchCoinApiResponse } from '../../api/fetchCoin'
import { mockCoinDetailed } from '../mocks/mockCoinDetailed';
  
  describe('Fetch coin api', () => {
      it('returns coin details when fetchCoinApi is called', done => {
          const mock = new MockAdapter(axios);
          const data = { response: mockCoinDetailed };

          const id = 'testid';

          mock.onGet(`${process.env.REACT_APP_API_ENDPOINT}/coins/${id}`).reply(200, data);
        
          fetchCoinApi(id).then((response: FetchCoinApiResponse) => {
              expect(response.data).toEqual(data);
              done();
          });
      });

      it('returns error message on 400', done => {
        const mock = new MockAdapter(axios);
        const data = false;
        const id = 'testid';

        mock.onGet(`${process.env.REACT_APP_API_ENDPOINT}/coins/${id}`).reply(400, data);
      
        fetchCoinApi(id).then((response: FetchCoinApiResponse) => {
            expect(response.success).toEqual(data);
            done();
        });
    });

    it('returns error message on 500', done => {
        const mock = new MockAdapter(axios);
        const data = false;
        const id = 'testid';

        mock.onGet(`${process.env.REACT_APP_API_ENDPOINT}/coins/${id}`).reply(500, data);
      
        fetchCoinApi(id).then((response: FetchCoinApiResponse) => {
            expect(response.success).toEqual(data);
            done();
        });
    });
  });