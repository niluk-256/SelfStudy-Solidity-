enum   ShirtSize{ 
    small ,// 0
    medium,// 1
    large // 2
  
}
ShirtSize choice = ShirtSize.medium ;
ShirtSize constant defaultsize = ShirtSize.medium;



function changeToLarge() public 
 {  
     choice = ShirtSize.large;
   }


function changeToSmall() public 
 {  
     choice = ShirtSize.small;
   }

function getSize() public view returns(ShirtSize) {
return choice ;

}
function getDefautChoice() public pure returns(uint){

    return uint(defaultsize) ;
}
