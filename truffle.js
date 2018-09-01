module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      from: '0xd4e3e671053af5980e4235b9d46172b0485947a3',
      network_id: 5777, // Match any network id
       gasPrice: 50,   // <--- Twice as much
       gas: 6712390,   // <--- Twice as much
    }
  }
};
