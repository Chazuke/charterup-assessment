interface Test {
    name: string,
    myString: string,
    maxRepeat: number,
    testCompleted: boolean,
    myResult: string,
}

const tests: Test[] = [
    { name: "Test 1", myString: "xxxy", maxRepeat: 2, testCompleted: false, myResult: "" },
    { name: "Test 2", myString: "xxyy", maxRepeat: 1, testCompleted: false, myResult: "" },
    { name: "Test 3", myString: "xxyxx", maxRepeat: 1, testCompleted: false, myResult: "" },
    { name: "Test 4", myString: "xxxxyyyyxx", maxRepeat: 1, testCompleted: false, myResult: "" },
    { name: "Test 5", myString: "aaaabbbbccccdddd", maxRepeat: 1, testCompleted: false, myResult: "" },
    { name: "Test 6", myString: "aaaabbbbccccdddd", maxRepeat: 2, testCompleted: false, myResult: "" },
    { name: "Test 7", myString: "aaaabbbbccccdddd", maxRepeat: 3, testCompleted: false, myResult: "" },
];

const formatString = (test: Test) => {
    let prevEval: string = null;
    let curCount = 0;

    for (let i = 0; i < test.myString.length; i++) {
        let curEval = test.myString.charAt(i);
        if (curEval === prevEval && curCount < test.maxRepeat) {
            test.myResult = test.myResult.concat(curEval);
            curCount++;
            prevEval = curEval;
        }

        if (curEval != prevEval) {
            test.myResult = test.myResult.concat(curEval);
            curCount = 1;
            prevEval = curEval;
        }
    }

    test.testCompleted = true;
};

for (let testCase of tests) {
    formatString(testCase);
    console.log(testCase.name + " Completed Successfully. Result is: " + testCase.myResult);
}