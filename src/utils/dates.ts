export const formatDateYMD = (date: Date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

export const calculateAge = (birthDate: string | number | Date) => {
  const birth = new Date(birthDate);
  const today = new Date();
  let age = today.getFullYear() - birth.getFullYear();
  const monthDifference = today.getMonth() - birth.getMonth();

  // Adjust age if the birth date hasn't occurred yet this year
  if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birth.getDate())) {
    age--;
  }

  return age;
};