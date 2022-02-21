const currency = (number, withSign = false) => {
  const parts = number.toString().split('.');
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return `${withSign ? '$' : ''}${parts.join('.')}`;
};

export {
  currency,
}