"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var DAILY = "Daily";
var HOURLY = "Hourly";
var DISTANCE = "Distance";
var pricingMethods = [DAILY, HOURLY, DISTANCE];
var charterPricingRateMap = new Map();
charterPricingRateMap.set(DAILY, 1000.00);
charterPricingRateMap.set(HOURLY, 400.00);
charterPricingRateMap.set(DISTANCE, 3.50);
var miniBusPricingRateMap = new Map();
miniBusPricingRateMap.set(DAILY, 925.00);
miniBusPricingRateMap.set(HOURLY, 360.00);
miniBusPricingRateMap.set(DISTANCE, 3.25);
var sprinterPricingRateMap = new Map();
sprinterPricingRateMap.set(DAILY, 850.00);
sprinterPricingRateMap.set(HOURLY, 320.00);
sprinterPricingRateMap.set(DISTANCE, 3.00);
var partyBusPricingRateMap = new Map();
partyBusPricingRateMap.set(DAILY, 775.00);
partyBusPricingRateMap.set(HOURLY, 280.00);
partyBusPricingRateMap.set(DISTANCE, 2.75);
var sedanPricingRateMap = new Map();
sedanPricingRateMap.set(DAILY, 700.00);
sedanPricingRateMap.set(HOURLY, 240.00);
sedanPricingRateMap.set(DISTANCE, 2.50);
var suvPricingRateMap = new Map();
suvPricingRateMap.set(DAILY, 625.00);
suvPricingRateMap.set(HOURLY, 200.00);
suvPricingRateMap.set(DISTANCE, 2.25);
var limoPricingRateMap = new Map();
limoPricingRateMap.set(DAILY, 550.00);
limoPricingRateMap.set(HOURLY, 160.00);
limoPricingRateMap.set(DISTANCE, 2.00);
var trolleyPricingRateMap = new Map();
trolleyPricingRateMap.set(DAILY, 475.00);
trolleyPricingRateMap.set(HOURLY, 120.00);
trolleyPricingRateMap.set(DISTANCE, 1.75);
var CHARTER = "Charter";
var MINI_BUS = "Mini Bus";
var SPRINTER = "Sprinter";
var PARTY_BUS = "Party Bus";
var SEDAN = "Sedan";
var SUV = "SUV";
var LIMO = "Limousine";
var TROLLEY = "Trolley";
var vehicleTypes = [CHARTER, MINI_BUS, SPRINTER, PARTY_BUS, SEDAN, SUV, LIMO, TROLLEY];
var vehicleTypePricingMap = new Map();
vehicleTypePricingMap.set(CHARTER, charterPricingRateMap);
vehicleTypePricingMap.set(MINI_BUS, miniBusPricingRateMap);
vehicleTypePricingMap.set(SPRINTER, sprinterPricingRateMap);
vehicleTypePricingMap.set(PARTY_BUS, partyBusPricingRateMap);
vehicleTypePricingMap.set(SEDAN, sedanPricingRateMap);
vehicleTypePricingMap.set(SUV, suvPricingRateMap);
vehicleTypePricingMap.set(LIMO, limoPricingRateMap);
vehicleTypePricingMap.set(TROLLEY, trolleyPricingRateMap);
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var chosenVehicleType = null;
var firstQuestion = function () {
    return new Promise(function (resolve, reject) {
        rl.question("Please enter the vehicle type you would like to charter: ", function (answer) {
            if (vehicleTypes.includes(answer)) {
                chosenVehicleType = answer;
                resolve();
            }
            else {
                console.log("Sorry that is not a valid vehicle type. It must be one of: " + vehicleTypes + "\nPlease start over");
                rl.close();
                process.exit;
            }
        });
    });
};
var chosenVehicleAmount = null;
var secondQuestion = function () {
    return new Promise(function (resolve, reject) {
        rl.question("Please enter the number of " + chosenVehicleType + "(s) you would like to rent: ", function (answer) {
            chosenVehicleAmount = parseInt(answer);
            if (!chosenVehicleAmount) {
                console.log("Sorry that is not a valid number.\nPlease start over");
                rl.close();
                process.exit;
            }
            resolve();
        });
    });
};
var chosenPricingMethod = null;
var thirdQuestion = function () {
    return new Promise(function (resolve, reject) {
        rl.question("Please enter the desired pricing method: ", function (answer) {
            if (pricingMethods.includes(answer)) {
                chosenPricingMethod = answer;
                resolve();
            }
            else {
                console.log("Sorry that is not a valid pricing method. It must be one of: " + pricingMethods + "\nPlease start over");
                rl.close();
                process.exit;
            }
        });
    });
};
var chosenAmount = null;
var rateType = null;
var fourthQuestion = function () {
    if (chosenPricingMethod === DAILY) {
        rateType = "days";
    }
    else if (chosenPricingMethod === HOURLY) {
        rateType = "hours";
    }
    else if (chosenPricingMethod === DISTANCE) {
        rateType = "miles";
    }
    else {
        rateType = "default";
    }
    return new Promise(function (resolve, reject) {
        rl.question("Please enter the number of " + rateType + " you are planning to travel: ", function (answer) {
            chosenAmount = parseInt(answer);
            if (!chosenAmount) {
                console.log("Sorry that is not a valid number.\nPlease start over");
                rl.close();
                process.exit;
            }
            resolve();
        });
    });
};
var main = function () { return __awaiter(void 0, void 0, void 0, function () {
    var vehicleTypePricing, vehicleRate, totalPrice;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, firstQuestion()];
            case 1:
                _a.sent();
                return [4 /*yield*/, secondQuestion()];
            case 2:
                _a.sent();
                return [4 /*yield*/, thirdQuestion()];
            case 3:
                _a.sent();
                return [4 /*yield*/, fourthQuestion()];
            case 4:
                _a.sent();
                rl.close();
                vehicleTypePricing = vehicleTypePricingMap.get(chosenVehicleType);
                vehicleRate = vehicleTypePricing.get(chosenPricingMethod);
                totalPrice = (chosenVehicleAmount * vehicleRate * chosenAmount);
                console.log("In order to rent " + chosenVehicleAmount + " " + chosenVehicleType + " vehicle(s) at a "
                    + chosenPricingMethod + " rate for " + chosenAmount + " " + rateType + ", it would cost: $" + totalPrice.toFixed(2));
                return [2 /*return*/];
        }
    });
}); };
main();
//# sourceMappingURL=charterup-pricing-engine.js.map