import xhr from '../../xhr/xhr';

const resultSearch = async () => {
  // call the endpoint from the express app:
  const { data } = await xhr._get('/agile-prices');
  return JSON.parse(data.body);

  // The endpoint can be called directly without authentication.
  // You'll also need to change the base url in xhr.js to https://api.octopus.energy/v1
  // const { data } = await xhr._get('/products/AGILE-18-02-21/electricity-tariffs/E-1R-AGILE-18-02-21-C/standard-unit-rates/');
  // return data;
};

export default {
  resultSearch,
};
