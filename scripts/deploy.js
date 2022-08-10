async function main() {
  const MyNFT = await ethers.getContractFactory("MyNFT")

  // Start deployment, returning a promise that resolves to a contract object
  const myNFT = await MyNFT.deploy()
  await myNFT.deployed()
  console.log('chh_log ---> main ---> myNFT Contract deployed to address:', myNFT.address)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.log('chh_log ---> error', error)
    process.exit(1)
  })
