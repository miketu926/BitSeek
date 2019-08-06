const convertBTC = (x, btc = 100000000) => {
  x = (x / btc).toFixed(6);
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export default convertBTC;