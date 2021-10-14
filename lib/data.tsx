export const getUedaBukkomiData = async () => {

  const url = 'https://ueda-bukkomi.can.canonic.dev/api/bukkomiPhreases';
  const test_res = await fetch(url);
  const test_data = await test_res.json();
  const test_results = test_data.data;
  console.log(test_results);

  return test_results;
}
