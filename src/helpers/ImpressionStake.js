const impressionStakeJSON = require("../abi/ImpressionStake.json");

const { ethers } = require("ethers");

require("dotenv").config();

const SIGNER_KEY = process.env.SIGNER_KEY;
const RPC = process.env.RPC;
const IMPRESSION_STAKE_ADDRESS = process.env.IMPRESSION_STAKE_ADDRESS;
const networkProvider = new ethers.providers.JsonRpcProvider(RPC);
const impressionStake = new ethers.Contract(IMPRESSION_STAKE_ADDRESS, impressionStakeJSON.abi, networkProvider);
const signer = new ethers.Wallet(SIGNER_KEY, networkProvider);

// Function to create a message request
const requestMessage = async (to, message) => {
  try{
  await impressionStake.requestMessage(to, message);
  } catch (e) {
    console.log(e);
  }
}

// Function to claim a message request
const claimMessage = async (requestId, signature, textMessageHash) => {
  try{
  await impressionStake.claimMessage(requestId, signature, textMessageHash);
  } catch (e) {
    console.log(e);
  }
}

// Function to hash a message
const hashMessage = (message) => {
  try{
  const hash = ethers.utils.solidityKeccak256(['string'], [message]);
  return hash;
  } catch (e) {
    console.log(e);
  }
}
// Function to get signature
const getSignature = async (message) => {
  try{
  // Hash the text message
  let textMessageHash = hashMessage(message);

  // Hash the message to be signed (not textMessage)
  let msgHash = ethers.utils.solidityKeccak256(
          ['uint256', 'address', 'bytes'],
          [requestId, signer.address, textMessageHash]
        );

  // Sign the message hash using your private key, not the receiver's
  const signature = await signer.signMessage(ethers.utils.arrayify(msgHash));
  return signature
  } catch (e) {
    console.log(e);
  }
}
