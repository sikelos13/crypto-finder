import { generateId } from '../utils/GenerateId'
import { DateFormat } from '../utils/DateFormat';
import { mockCoinsList } from './mocks/mockCoinsList'
import { getSeeMoreList } from '../utils/getSeeMoreList';

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

  describe("Return a humanized date format", () => {
    test("it return a normalized date on outputt", () => {  
      const output = 'Feb 13, 2021';
  
      expect(DateFormat.normalize('2021-02-13T20:49:26.606Z')).toEqual(output);
    });
  });