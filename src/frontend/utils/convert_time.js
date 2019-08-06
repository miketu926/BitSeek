const convert = (unix) => {
  const time = new Date(unix * 1000);
  return time.toLocaleDateString('default', { year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric' });
}

export default convert;