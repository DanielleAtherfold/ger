

//measurements are in Inches
const twoByFourWidth= 3.5;
const twoByFourHeright= 1.5;
const postWidth=3.5;

const distanceBetweenStuds= 16;
const boardLength=8*12; //boards are 8ft but converted to inches 

function WallWidth(WallWidth:number){
    let innerWallWidth=(WallWidth*12)-(postWidth*2);
    return innerWallWidth;
}

function AccountForWaste(totalStuds:number){
    return Math.ceil(totalStuds*1.1)
}

function LengthStuds(length:number,distanceApart:number){
    return Math.ceil(length/distanceApart)
}

function StudsOnRoofAndFloor(length:number){
    return Math.ceil(length/(boardLength))*2
}

function BuildWall(lengthInFeet:number){
    let length=WallWidth(lengthInFeet)
    let studsInWall=LengthStuds(length,distanceBetweenStuds)
    let studsOnTopAndBottom=StudsOnRoofAndFloor(length)
    let totalStuds=studsInWall+studsOnTopAndBottom
    return totalStuds
}
function BuildAHouse(widthInFeet:number,lengthInFeet:number){
    let wall1=BuildWall(widthInFeet)*2
    let wall2=BuildWall( lengthInFeet)*2
    return wall1+wall2
}


export default function CalcWallStuds(houseWidthInFeet:number,lengthInFeet:number){
    let totalStuds=BuildAHouse(houseWidthInFeet,lengthInFeet)
    let waste=AccountForWaste(totalStuds)
    console.log(totalStuds,waste)
    return{
        totalStuds:totalStuds,
        studsPlusWaste:waste
    }
}




