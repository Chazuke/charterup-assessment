type SpotInfo = {
    isTaken: boolean;
};

type RowInfo = {
    spotsTaken: number;
    spots: Array<SpotInfo>;
};

type ParkingInfo = {
    floor: number;
    row: number;
    startingSpot: number;
}

type VehicleType = "Motorcycle" | "Car" | "Bus";

const numRows = 10;
const floor: RowInfo[] = new Array<RowInfo>(10);

for (let i = 0 ; i < numRows; i++) {
    let row: RowInfo = {
        spotsTaken: 0,
        spots: new Array<SpotInfo>(10),
    };
    floor[i] = row;
}

const parkVehicle = (vehicleType: VehicleType): ParkingInfo => {
    switch(vehicleType) {
        case "Motorcycle" || "Car":
            // Cars and motorcycles only take one space
            return findParkingSpot();
            break;
        case "Bus":
            // Buses take 5 spaces
            return findParkingSpot(5);
            break;
        default:
            // Retur
            return {
                floor: -1,
                row: -1,
                startingSpot: -1,
            }
    }
}

const findParkingSpot = (numSpotsRequired: number = 1): ParkingInfo => {
    for (let i = 0; i < floor.length; i++) {
        if (floor[i].spots.length - floor[i].spotsTaken >= numSpotsRequired) {
            // Set the assigned spots as taken
            for (let j = 0; j < numSpotsRequired; j++) {
                floor[i].spots[floor[i].spotsTaken+j].isTaken = true;
            }

            // Generate the parking info
            const parkingInfo = {
                floor: 1,
                row: i,
                startingSpot: floor[i].spotsTaken,
            }

            // Increase the number of spots taken in the row
            floor[i].spotsTaken += numSpotsRequired;

            return parkingInfo
        }
    }
}