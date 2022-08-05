//SPDX-License-Identifier: MIT
 pragma solidity ^0.8.1;
 contract Coffee{

uint costCofee = 0.001 ether;
uint  private time = block.timestamp + 10 seconds;
//-----------------------------------
event BoughtCofee ( address indexed , uint _amount );
address payable owner ;
constructor (){
 owner = payable(msg.sender);

}

enum  Stages {
  order,//0
  make,//1
  serve //2

}
Stages public  CofeeStages = Stages.order; 
//Modifiers--------------------------------------------
modifier valueOfcost (){
require(msg.value >= costCofee , " Your balance is not enough");
    _;
}
modifier StageCofee (Stages _stage){
require(CofeeStages == _stage , "You cant order right now Stage error ");
    _;
}
modifier Stime (){
require(block.timestamp > time , "You cant order right now Wait 10 seconds");
    _;
}
modifier OwnerOnly (){
require(msg.sender == owner , "You are  not the owner!!");
    _;
}
//---------------------------------------------------------


address[] public whoBought; 

function buyCofee () public payable StageCofee(Stages.order) valueOfcost {
 emit BoughtCofee(msg.sender , msg.value);
 
 CofeeStages = Stages.make ;
 whoBought.push(msg.sender);
 

}

function StageReverse()public {
 backtoOrder();

}
function OnlyOwner() public OwnerOnly {

}
function getFunds () public view returns (uint) {

    return address(this).balance;
}

function backtoOrder() public  Stime{

CofeeStages = Stages.order;

}






function getOwner () public view returns (address) {

return owner;

}





 }
