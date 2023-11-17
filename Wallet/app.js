// Function to connect to MetaMask
async function connectToMetaMask() {
    if (window.ethereum) {
      try {
        // Request account access
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
  
        // Display connected account and balance
        displayAccountInfo(accounts[0]);
      } catch (error) {
        console.error('Error connecting to MetaMask:', error);
      }
    } else {
      console.error('MetaMask not detected');
    }
  }
  
  // Function to display account information
  async function displayAccountInfo(accountAddress) {
    const web3 = new Web3(window.ethereum);
  
    // Get account balance
    const balanceWei = await web3.eth.getBalance(accountAddress);
    const balanceEth = web3.utils.fromWei(balanceWei, 'ether');
  
    // Display account address and balance
    document.getElementById('accountAddress').innerText = accountAddress;
    document.getElementById('accountBalance').innerText = balanceEth;
  }
  
  // Function to send a transaction
  async function sendTransaction() {
    try {
      const web3 = new Web3(window.ethereum);
      const accounts = await web3.eth.getAccounts();
  
      // Example: Send 0.1 ETH to another address (replace with your target address)
      const targetAddress = '0x846579Fc5ba08e3B85e4144E91AC3e6CD0e8B936';
      const amountEth = '0.1';
  
      // Create transaction object
      const transactionObject = {
        from: accounts[0],
        to: targetAddress,
        value: web3.utils.toWei(amountEth, 'ether'),
      };
  
      // Send transaction
      const transactionHash = await web3.eth.sendTransaction(transactionObject);
  
      console.log('Transaction sent:', transactionHash);
    } catch (error) {
      console.error('Error sending transaction:', error);
    }
  }
  
  // Check if MetaMask is installed
  if (typeof window.ethereum !== 'undefined') {
    console.log('MetaMask is installed!');
  } else {
    console.error('MetaMask not detected');
  }
  