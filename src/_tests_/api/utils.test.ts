import { handleErrorMessage } from '../../api/utils/handleErrorMessage';


describe("Return error of api call", () => {
    test("it should return a normalized message from rejected request", () => {
        const responseApiOne = {
            error_code: ["Something went wrong please try again"]
        };

        const outputOne = "Something went wrong please try again";

        expect(handleErrorMessage(responseApiOne)).toEqual(outputOne);
    });

    test("it should return a normalized message from rejected non field errors", () => {
        const responseApiTwo = {
            non_field_errors: ["Something went wrong , contact administrator"]
        };

        const outputTwo = "Something went wrong , contact administrator";

        expect(handleErrorMessage(responseApiTwo)).toEqual(outputTwo);
    });

    test("it should return a normalized message response data object", () => {
        const responseApiThree = {
            response: {
                data: {
                    non_field_errors: ["Object has some problems"]
                }
            }
        };

        const outputThree = "Object has some problems";

        expect(handleErrorMessage(responseApiThree)).toEqual(outputThree);
    });
});