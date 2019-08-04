// source https://www.blockchain.com/api/blockchain_api
// single address: https://blockchain.info/rawaddr/$bitcoin_address

export const fetchAddress = async (address, offset = 0) => {
  const res = await fetch(`https://blockchain.info/rawaddr/${address}?cors=true&offset=${offset}`);
  const resJSON = await res.json();
  return resJSON;
};