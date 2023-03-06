export const formatPrice = (number) => {
  const newNumber = Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(number / 100);
  return newNumber;
};

// This function would take an input array of data and
// filter it by the given input string.
export const getUniqueValues = (data, filterBy) => {
  let uniqueValues = data.map((item) => item[filterBy]);

  if (filterBy === 'colors'){
    uniqueValues = uniqueValues.flat()
  }

  return ["all", ...new Set(uniqueValues)];
};
