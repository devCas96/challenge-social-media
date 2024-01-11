export const handleCheckReachingEnd = (currentLength, _total, dispatcher) => {
  const isEnd = currentLength >= _total;
  dispatcher(isEnd);
};
