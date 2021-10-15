export const getAllUedaBukkomiData = async () => {

  const url = 'https://ueda-bukkomi.can.canonic.dev/api/bukkomiPhreases';
  const res = await fetch(url);
  const data = await res.json();
  const results = data.data;

  return results;
}

export const getUedaBukkomiData = async (id: string) => {
  const url = 'https://ueda-bukkomi.can.canonic.dev/api/bukkomiPhreases/' + id;
  const res = await fetch(url);
  const data = await res.json();
  const result = data.data;

  return result;
}
