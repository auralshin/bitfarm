module.exports = {
 contracts_directory: "#path",
 contract_build_directory: "#path",
 migration_directory: "#path"
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*" // Match any network id
      websocket: true
    }
  }
};
