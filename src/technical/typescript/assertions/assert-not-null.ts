const assertNotNull = <T>(
  value: T | null,
  message = 'Provided value should not be null'
): T => {
  if (value === null) throw new Error(message);

  return value;
};

export { assertNotNull };
