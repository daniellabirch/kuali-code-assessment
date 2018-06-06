class elevatorClass {
	constructor(requested, currentfloor, doorsopen, occupied, trips) {
		this.requested = false;
		this.currentfloor = 0;
		this.doorsopen = false;
		this.occupied = false;
		this.trips = 0;
	}
}

class floorClass {
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
		trips:0
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
//manipulate arrays, this works when I am manually creating the objects
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


//create classes, ideally, I could manipulate the objects in the arrays after they've been created using the classes but I am running out of time, I think I have rethink the logic a bit
	var floor = new floorClass(true, true);
	floors.push(floor);

	var elevator = new elevatorClass(true, requestElevator, true, true, 1);
	elevators.push(elevator);
}

document.getElementById("requestelevator").addEventListener("click", function(){
	//the numbers entered here should be customizable - not sure if the preference should be set by the user or the function itself
	floors[0].request(0);
});