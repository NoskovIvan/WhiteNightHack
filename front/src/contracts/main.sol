pragma solidity ^0.5.0;
contract AllEth {

   ///////////////////////////////////////
   ///////////////////////////////////////
   ///////////////////////////////////////
   // structs
   struct User {
      uint id;
      address addr;
      string userName;
      string name;
      string description;
      string text; // ipfs
      string avatar; // ipfs
      string image; // ipfs
   }
   struct Promise {
      uint id;
      address owner;
      string name;
      string description;
      string text; // ipfs
      string avatar; // ipfs
      string image; // ipfs
   }
   ///////////////////////////////////////
   ///////////////////////////////////////
   ///////////////////////////////////////
   // variables
   address OWNER;
   User[] public users;


   ///////////////////////////////////////
   ///////////////////////////////////////
   ///////////////////////////////////////
   // mappings
   mapping (address => string) userIds;
   mapping (address => string) userNames;
   mapping (address => User) usersByAddr;
   mapping (string => User) usersByUserName;
   mapping (string => User) usersByName;


   ///////////////////////////////////////
   ///////////////////////////////////////
   ///////////////////////////////////////
   // constructor
   constructor () public {
      OWNER = msg.sender;
   }


   ///////////////////////////////////////
   ///////////////////////////////////////
   ///////////////////////////////////////
   // modifiers
   modifier onlyOwner {
      require(OWNER == msg.sender);
      _;
   }


   ///////////////////////////////////////
   ///////////////////////////////////////
   ///////////////////////////////////////
   // functions for User

   function addUser (
      string memory userName,
      string memory name,
      string memory description,
      string memory text,
      string memory avatar,
      string memory image
   ) public {
      require(msg.sender!=usersByAddr[msg.sender].addr);
      uint id = users.length;
      User memory U = User(
         id,
         msg.sender,
         userName,
         name,
         description,
         text,
         avatar,
         image
      );
      users.push(U);
      usersByAddr[msg.sender] = U;
      usersByUserName[U.userName] = U;
      usersByName[U.name] = U;
   }


   function remUser () public {
      uint id = usersByAddr[msg.sender].id;
      delete usersByUserName[usersByAddr[msg.sender].userName];
      delete usersByName[usersByAddr[msg.sender].name];
      delete usersByAddr[msg.sender];
      delete users[id];
   }


   function userExists () public view returns(bool){
      address addr = usersByAddr[msg.sender].addr;
      if (addr!=address(0x0)) {
         return true;
      } else {
         return false;
      }
   }


   function getUserByUserName (string memory userName) public view returns(uint){
      return usersByName[userName].id;
   }


   ///////////////////////////////////////
   ///////////////////////////////////////
   ///////////////////////////////////////
   // functions for Promise

   function addPromise (
      string memory userName,
      string memory name,
      string memory description,
      string memory text,
      string memory avatar,
      string memory image
   ) public {
      require(msg.sender!=usersByAddr[msg.sender].addr);
      uint id = users.length;
      User memory U = User(
         id,
         msg.sender,
         userName,
         name,
         description,
         text,
         avatar,
         image
      );
      users.push(U);
      usersByAddr[msg.sender] = U;
      usersByUserName[U.userName] = U;
      usersByName[U.name] = U;
   }





}