const {isValid, generateMultiplyArr,printMultiplyTable} = require('../main');
    it ('should  numbers be valid', () => {
        var firstNumber=2;
        var secondNumber=3;
        var result=isValid(firstNumber,secondNumber);
        expect(result).toBe(true);
        });

        it ('should  generated array with table items', () => {
            var firstNumber=2;
            var secondNumber=3;
            var generateArr=generateMultiplyArr(firstNumber,secondNumber);
            expect(generateArr[0][0]).toBe("2*2=4");
            expect(generateArr[1][0]).toBe("2*3=6");
            expect(generateArr[1][1]).toBe("3*3=9");
            });
            it ('should print multiply table', () => {
              const array = [];
              array[0] = [];
              array[0][0] = "2*2=4";
              const result = printMultiplyTable(array);
			  expect(result).toBe("2*2=4 \n");
                });