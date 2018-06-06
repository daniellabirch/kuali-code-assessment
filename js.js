class elevator {
	constructor(requested, currentfloor, doorsopen, occupied, trips) {
		this.requested = false;
		this.currentfloor = 0;
		this.doorsopen = false;
		this.occupied = false;
		this.trips = 0;
	}
}

class floor {
	constructor(requested, elevatorpresent) {
		this.requested = false;
		this.elevatorpresent = false;
		//this.request = requestedElevator;
	}
}

var elevators = [
	{
		requested:false,
		currentfloor:0,
		doorsopen:false,
		occupied:false,
		trips:0,
	}
]

var floors = [
	{
		requested:false,
		elevatorpresent:false,
		request:requestElevator

	}

]

function requestElevator(requestedfloor){
	var closestElevator = 0;

	for(i = 0; i < elevators.length; i++){
		if( i - requestedfloor < closestElevator - requestedfloor ){
			closestElevator =  i;
		}
	};

	var requestedElevator = elevators[closestElevator];

	requestedElevator.requested = true;

	if(requestedElevator.currentfloor < requestedfloor){
		for(i = requestedElevator.currentfloor; i < requestedfloor; i++){
			console.log(i);
		}
	}
	else{
		for(i = requestedElevator.currentfloor; i > requestedfloor; i = i - 1){
			console.log(i);
		}
	}

	requestedElevator.currentfloor = requestedfloor;
	requestedElevator.doorsopen = true;
	requestedElevator.occupied = true;
	requestedElevator.trips += 1;

	var floor = new floor(true, true);
	floors.push(floor);

	var elevator = new elevator(true, requestElevator, true, true, 1);
	elevators.push(elevator);
}
