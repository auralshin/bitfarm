pragma solidity 0.6.1;

contract StructStorage {

    uint256 public s = 1; 
    uint256 public c;
    uint256 public t=1;
    mapping (address => uint) balances;

    function fundaddr(address addr) public{
        balances[addr] = 2000;
    }

        function sendCoin(address receiver, uint amount, address sender) public returns(bool sufficient){
        
        
        if (balances[sender] < amount) 
        return false;
        
        balances[sender] -= amount;
        balances[receiver] += amount;
        
                        
        return true;
        
    }

    function getBalance(address addr) view public returns(uint){
        return balances[addr];
    }
struct farmer {
   
    bytes fid;
    bytes32 fname;
    bytes32 loc;
    bytes32 crop;
    uint256 contact;
    uint quantity;
    uint exprice;
}

struct lot {

    bytes lotno;
    bytes grade;
    uint mrp;
    bytes32 testdate;
    bytes32 expdate;
}

address public tester;
address owner;

mapping (bytes => farmer) f1;
farmer[] public fm;

mapping (bytes => lot) l1;
lot[] public l;




