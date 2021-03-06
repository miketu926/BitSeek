// source: https://www.blockchain.com/api/blockchain_api

export const fetchAddress = async (address, offset = 0) => {
  const res = await fetch(`https://blockchain.info/rawaddr/${address}?cors=true&offset=${offset}`);
  if (res.status === 500) return res;
  const resJSON = await res.json();
  return resJSON;
};