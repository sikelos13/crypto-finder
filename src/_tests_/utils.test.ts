import { generateId } from '../utils/GenerateId'

describe("Return random generated id", () => {
    test("it should return an id", () => {  
      expect(generateId()).toBeGreaterThan(1);
    });
  });