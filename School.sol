//SPDX-License-Identifier: MIT
 pragma solidity ^0.8.1;
 contract School{




uint256 private startDate = block.timestamp + 10 seconds ;
uint256 private WorkDate = startDate + 10 seconds ;




enum Routing{

Intotheschool,// 0
Learning,// 1
OutOfSchool// 2

}

Routing public SchoolRouting = Routing.Intotheschool;


//-------------------------------------------
modifier schoolOpenedOrNot(uint _date){
require(block.timestamp > _date , " you can't go to the school not opened yet wait 10 seconds ");
    _;
}
modifier Workornot (){
require(block.timestamp > WorkDate , " Ahaha!! you can't leave now Study :) wait 10 seconds ");
    _;
}

modifier AtSchoolstages(Routing _stage ){
require(SchoolRouting == _stage , " Sorry You can't do that!!  ");
    _;
}

//----------------------
function enterToSchool()public schoolOpenedOrNot(startDate) AtSchoolstages(Routing.Intotheschool) {

updateRouting(Routing.Learning);

}
function workInSchool()public AtSchoolstages(Routing.Learning) {
updateRouting(Routing.OutOfSchool);
}
function leaveSchool ()public AtSchoolstages(Routing.OutOfSchool) Workornot  {
updateRouting(Routing.Intotheschool);
 startDate = block.timestamp;
}

//------------------------------------------------------------------

function updateRouting (Routing _stage) private {

SchoolRouting = _stage ; 

}



 }
