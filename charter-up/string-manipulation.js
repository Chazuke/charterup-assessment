var tests = [
    { name: "Test 1", myString: "xxxy", maxRepeat: 2, testCompleted: false, myResult: "" },
    { name: "Test 2", myString: "xxyy", maxRepeat: 1, testCompleted: false, myResult: "" },
    { name: "Test 3", myString: "xxyxx", maxRepeat: 1, testCompleted: false, myResult: "" },
    { name: "Test 4", myString: "xxxxyyyyxx", maxRepeat: 1, testCompleted: false, myResult: "" },
    { name: "Test 5", myString: "aaaabbbbccccdddd", maxRepeat: 1, testCompleted: false, myResult: "" },
    { name: "Test 6", myString: "aaaabbbbccccdddd", maxRepeat: 2, testCompleted: false, myResult: "" },
    { name: "Test 7", myString: "aaaabbbbccccdddd", maxRepeat: 3, testCompleted: false, myResult: "" },
];
var formatString = function (test) {
    var prevEval = null;
    var curCount = 0;
    for (var i = 0; i < test.myString.length; i++) {
        var curEval = test.myString.charAt(i);
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
for (var _i = 0, tests_1 = tests; _i < tests_1.length; _i++) {
    var testCase = tests_1[_i];
    formatString(testCase);
    console.log(testCase.name + " Completed Successfully. Result is: " + testCase.myResult);
}
