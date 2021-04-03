import { generateId } from '../utils/GenerateId'
import { getSeeMoreList } from '../utils/getSeeMoreList';
import { mockCoinsList } from './mocks/mockCoinsList'

describe("Return random generated id", () => {
    test("it should return an id", () => {  
      expect(generateId()).toBeGreaterThan(1);
    });
  });

  describe("Return simple coin object list", () => {
    test("it should simple coin list", () => {  
      const output = [
        {
          name: 'Testcoin1',
          id: 'testcoin1',
          symbol: 'tsc'
        },
        {
          name: 'Testcoin2',
          id: 'testcoin2',
          symbol: 'tsc2'
        }
      ];
  
      expect(getSeeMoreList(mockCoinsList)).toEqual(output);
    });
  });