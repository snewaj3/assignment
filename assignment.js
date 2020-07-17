


// Convert feet to mile

function feetToMile (feet){
    var mile = feet/5280;
    return mile;
}
var check = feetToMile(25);
console.log(check);








//Culculating the required wood 

function woodCalculator (chair, table, bed){
    var numberOfChair = chair;
    var numberOfTable = table*3;
    var numberOfBed = bed*5;

    var result = numberOfChair + numberOfTable + numberOfBed;
    console.log(result,"Cubic metre");
}

    woodCalculator(2, 3, 5);







// culculate the bricks needed

    function brickCalculator (floor){

        if( floor <= 10){
            var brick = 15 * floor * 1000;
           }
    
        else if (floor>10 && floor <= 20){
            var brick = floor * 12 * 1000;
    }
    
        else if ( floor > 20) {
            var brick = 10 * floor * 1000;
    }
        return brick
    }
    
    var check = brickCalculator(18);
    console.log(check);
       




// find the smallest number     

    function tinyFriend(names) {
        var smallest = names[0];
        for (var i=0; i<names.length; i++){
            var friendList = names[i];
            if (friendList.length<smallest.length){
                smallest=friendList;
            }
        }
        return smallest;
        }
        
        var check = ['helal', 'bashir', 'babu', 'apu'];
        console.log (tinyFriend(check));