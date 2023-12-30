const circle = (radius) => {
  const PI = 3.14;

  if (!radius || typeof radius !== 'number') { return undefined; }

  return {
    radius,
    area: parseFloat((PI * radius * radius).toPrecision(5)),
    circumference: parseFloat((2 * PI * radius).toPrecision(4)),
  };
};

console.log(circle(7));

module.exports = circle;
