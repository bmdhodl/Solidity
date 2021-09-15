pragma solidity ^0.4.17;
// linter warnings (red underline) about pragma version can igonored!
// Use this code in Remix to easily interact with this code
// contract code will go here
// updateMe
contract Inbox {
    string public message;

    function Inbox(string initialMessage) public {
        message = initialMessage;
    }

    function setMessage(string newMessage) public {
        message = newMessage;
    }
}