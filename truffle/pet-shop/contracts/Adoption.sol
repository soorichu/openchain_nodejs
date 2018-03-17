pragma solidity ^0.4.17;

contract Adaption{
	
	address[16 public adopters;
	function adopt(uint petId) public returns (uint){
		require(petId >= 0 && petID <= 15);
		adopters[petID] = msg.sender;
		return petId;
	}

	function getAdopters() public view returns (address[16]){
		return adopters;
	}

}
