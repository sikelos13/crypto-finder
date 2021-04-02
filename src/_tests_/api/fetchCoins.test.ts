  
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { fetchCoinsApi, FetchCoinsApiResponse } from '../../api/fetchCoins';
import { mockCoinsList } from '../mocks/mockCoinsList';
  
  describe('Fetch coins list api', () => {
      it('returns coins list when fetchCoinsApi is called', done => {
          const mock = new MockAdapter(axios);
          const data = { response: mockCoinsList };

          const params= {
              page: 1,
              perPage: 20
          }

          mock.onGet(`${process.env.REACT_APP_API_ENDPOINT}/coins/markets?vs_currency=usd&per_page=${params.perPage}&page=${params.page}`).reply(200, data);
        
          fetchCoinsApi(params).then((response: FetchCoinsApiResponse) => {
              expect(response.data).toEqual(data);
              done();
          });
      });

      it('returns error message on 400', done => {
        const mock = new MockAdapter(axios);
        const data = false;

        const params= {
            page: 1,
            perPage: 20
        }

        mock.onGet(`${process.env.REACT_APP_API_ENDPOINT}/coins/markets?vs_currency=usd&per_page=${params.perPage}&page=${params.page}`).reply(400, data);
      
        fetchCoinsApi(params).then((response: FetchCoinsApiResponse) => {
            expect(response.success).toEqual(data);
            done();
        });
    });

    it('returns error message on 500', done => {
        const mock = new MockAdapter(axios);
        const data = false;

        const params= {
            page: 1,
            perPage: 20
        }

        mock.onGet(`${process.env.REACT_APP_API_ENDPOINT}/coins/markets?vs_currency=usd&per_page=${params.perPage}&page=${params.page}`).reply(500, data);
      
        fetchCoinsApi(params).then((response: FetchCoinsApiResponse) => {
            expect(response.success).toEqual(data);
            done();
        });
    });
  });