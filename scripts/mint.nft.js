const hre = require("hardhat");

async function main() {
    ownerAddress = "0x6395B3e2BD4890fe5315dFE39020cE322BD3156B";
    contractAddress = "0xCdeC11b8802d0f02004De77a9581e84d324420BF";

    const NFT = await hre.artifacts.readArtifact("BoboNFT");
    const contract = new web3.eth.Contract(NFT.abi, contractAddress);

    // metadata token URI - image link inside
    const tokenURI = "https://gateway.pinata.cloud/ipfs/Qmdcn2QYZ5ymD6wmob4des7zGjhBfBTRvW9aPaM4TBmFCk"

    let options = {
        from: ownerAddress,
        maxPriorityFeePerGas: 1 * 10**9, // default gas price in wei, 10 gwei in this case
        maxFeePerGas: 80 * 10**9,
        gas: 3 * 10**6,
        type: 2,
        chainID: 4,
    }

    await contract.methods.mint(ownerAddress, tokenURI)
    .send(options)
    .then(function(receipt){
        console.log(receipt)  
    })
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
