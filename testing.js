  var ethers = require('ethers');  

  const network = "mainnet";

  var provider = new ethers.providers.InfuraProvider(network, {
    projectId: "234917530f0240f3ac505c80223474e3",
    projectSecret: "78fbac48939044f4834ed277b2a2e4b5"
  });
  
  const block = provider.on("block", (number) =>{

      console.log("Block Number: " + number); 
      let block = provider.getBlockWithTransactions(number); 
      console.log( block);

  });

  //(block.number)).then((result