import * as readline from "readline";

const DAILY = "Daily";
const HOURLY = "Hourly";
const DISTANCE = "Distance";
const pricingMethods = [DAILY, HOURLY, DISTANCE];

const charterPricingRateMap: Map<string, number> = new Map<string, number>();
charterPricingRateMap.set(DAILY, 1000.00);
charterPricingRateMap.set(HOURLY, 400.00);
charterPricingRateMap.set(DISTANCE, 3.50);

const miniBusPricingRateMap: Map<string, number> = new Map<string, number>();
miniBusPricingRateMap.set(DAILY, 925.00);
miniBusPricingRateMap.set(HOURLY, 360.00);
miniBusPricingRateMap.set(DISTANCE, 3.25);

const sprinterPricingRateMap: Map<string, number> = new Map<string, number>();
sprinterPricingRateMap.set(DAILY, 850.00);
sprinterPricingRateMap.set(HOURLY, 320.00);
sprinterPricingRateMap.set(DISTANCE, 3.00);

const partyBusPricingRateMap: Map<string, number> = new Map<string, number>();
partyBusPricingRateMap.set(DAILY, 775.00);
partyBusPricingRateMap.set(HOURLY, 280.00);
partyBusPricingRateMap.set(DISTANCE, 2.75);

const sedanPricingRateMap: Map<string, number> = new Map<string, number>();
sedanPricingRateMap.set(DAILY, 700.00);
sedanPricingRateMap.set(HOURLY, 240.00);
sedanPricingRateMap.set(DISTANCE, 2.50);

const suvPricingRateMap: Map<string, number> = new Map<string, number>();
suvPricingRateMap.set(DAILY, 625.00);
suvPricingRateMap.set(HOURLY, 200.00);
suvPricingRateMap.set(DISTANCE, 2.25);

const limoPricingRateMap: Map<string, number> = new Map<string, number>();
limoPricingRateMap.set(DAILY, 550.00);
limoPricingRateMap.set(HOURLY, 160.00);
limoPricingRateMap.set(DISTANCE, 2.00);

const trolleyPricingRateMap: Map<string, number> = new Map<string, number>();
trolleyPricingRateMap.set(DAILY, 475.00);
trolleyPricingRateMap.set(HOURLY, 120.00);
trolleyPricingRateMap.set(DISTANCE, 1.75);

const CHARTER = "Charter";
const MINI_BUS = "Mini Bus";
const SPRINTER = "Sprinter";
const PARTY_BUS = "Party Bus";
const SEDAN = "Sedan";
const SUV = "SUV";
const LIMO = "Limousine";
const TROLLEY = "Trolley";
const vehicleTypes = [CHARTER, MINI_BUS, SPRINTER, PARTY_BUS, SEDAN, SUV, LIMO, TROLLEY];

const vehicleTypePricingMap: Map<string, Map<string, number>> = new Map<string, Map<string, number>>();
vehicleTypePricingMap.set(CHARTER, charterPricingRateMap);
vehicleTypePricingMap.set(MINI_BUS, miniBusPricingRateMap);
vehicleTypePricingMap.set(SPRINTER, sprinterPricingRateMap);
vehicleTypePricingMap.set(PARTY_BUS, partyBusPricingRateMap);
vehicleTypePricingMap.set(SEDAN, sedanPricingRateMap);
vehicleTypePricingMap.set(SUV, suvPricingRateMap);
vehicleTypePricingMap.set(LIMO, limoPricingRateMap);
vehicleTypePricingMap.set(TROLLEY, trolleyPricingRateMap);

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let chosenVehicleType: string = null;
const firstQuestion = (): Promise<void> => {
    return new Promise((resolve, reject) => {
        rl.question("Please enter the vehicle type you would like to charter: ", (answer: string) => {
            if (vehicleTypes.includes(answer)) {
                chosenVehicleType = answer;
                resolve();
            } else {
                console.log("Sorry that is not a valid vehicle type. It must be one of: " + vehicleTypes + "\nPlease start over");
                rl.close();
                process.exit;
            }
        });
    });
};

let chosenVehicleAmount: number = null;
const secondQuestion = (): Promise<void> => {
    return new Promise((resolve, reject) => {
        rl.question("Please enter the number of " + chosenVehicleType + "(s) you would like to rent: ", (answer: string) => {
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

let chosenPricingMethod: string = null;
const thirdQuestion = (): Promise<void> => {
    return new Promise((resolve, reject) => {
        rl.question("Please enter the desired pricing method: ", (answer: string) => {
            if (pricingMethods.includes(answer)) {
                chosenPricingMethod = answer;
                resolve();
            } else {
                console.log("Sorry that is not a valid pricing method. It must be one of: " + pricingMethods + "\nPlease start over");
                rl.close();
                process.exit;
            }
        });
    });
};

let chosenAmount: number = null;
let rateType: string = null;

const fourthQuestion = (): Promise<void> => {
    if (chosenPricingMethod === DAILY) {
        rateType = "days";
    } else if (chosenPricingMethod === HOURLY) {
        rateType = "hours";
    } else if (chosenPricingMethod === DISTANCE) {
        rateType = "miles"
    } else {
        rateType = "default"
    }

    return new Promise((resolve, reject) => {
        rl.question("Please enter the number of " + rateType + " you are planning to travel: ", (answer: string) => {
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

const main = async () => {
    await firstQuestion();
    await secondQuestion();
    await thirdQuestion();
    await fourthQuestion();

    rl.close();

    const vehicleTypePricing = vehicleTypePricingMap.get(chosenVehicleType);
    const vehicleRate = vehicleTypePricing!.get(chosenPricingMethod);
    const totalPrice = (chosenVehicleAmount * vehicleRate * chosenAmount);
    console.log("In order to rent " + chosenVehicleAmount + " " + chosenVehicleType + " vehicle(s) at a "
        + chosenPricingMethod + " rate for " + chosenAmount + " " + rateType + ", it would cost: $" + totalPrice.toFixed(2));
};

main();

