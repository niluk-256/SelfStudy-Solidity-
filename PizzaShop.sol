//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
contract PizzaShop {

event buyPizza(address indexed _from,uint256 cost);

uint256  public  pizza_cost = 0.0001 ether;


function  buyaPizza()  payable public  returns (uint256) { 
  
 emit buyPizza(msg.sender, pizza_cost);

return pizza_cost;

 
 }

  struct Man {
      string name;
      uint age;
  }

 Man[] public  man;


 function adddetails(uint256 _age , string memory _name) public {

 man.push(Man({age:_age , name:_name})); //this is correct
 // man.push(Man(_age ,_name)); //this doesnt work why?

 }

function addperson() public {



}












}
