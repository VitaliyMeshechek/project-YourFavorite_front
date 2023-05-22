// возвращает возраст в годах по дню рождения в формате "дд.мм.гггг"
function getAge(dateString) {
  const [day, month, year] = dateString.split('.');
  const today = new Date();
  const birthDate = new Date(year, month - 1, day);
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();

  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}

export { getAge };
