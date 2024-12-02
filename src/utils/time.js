export const calculateDays = (checkIn, checkOut) => {
  const checkInDate = new Date(checkIn);
  const checkOutDate = new Date(checkOut);

  const timeDifference = checkOutDate - checkInDate
  return timeDifference / (1000 * 24 * 60 * 60)
}