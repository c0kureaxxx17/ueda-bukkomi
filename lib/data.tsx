import * as fs from 'fs'
import * as path from 'path'
import { Phrease } from "../type/phrease"

// Canonicから取得
// export const getAllUedaBukkomiData = async () => {

//   const url = 'https://ueda-bukkomi.can.canonic.dev/api/bukkomiPhreases';
//   const res = await fetch(url);
//   const data = await res.json();
//   const results = data.data;

//   return results;
// }

// export const getUedaBukkomiData = async (id: string) => {
//   const url = 'https://ueda-bukkomi.can.canonic.dev/api/bukkomiPhreases/' + id;
//   const res = await fetch(url);
//   const data = await res.json();
//   const result = data.data;

//   return result;
// }

export const getAllUedaBukkomiDataJson = async () => {

  const jsonPath = path.join(process.cwd(), 'lib', 'phrases.json')
  const jsonText = fs.readFileSync(jsonPath, 'utf-8')
  const results = JSON.parse(jsonText)

  const dataPhreases = []
  for (let i = 0; i < results.length; i++) {
    let _id = i.toString();
    dataPhreases.push(getUedaBukkomiDataJson(_id))
  }

  return await Promise.all(dataPhreases);
}

export const getUedaBukkomiDataJson = async (id: string): Promise<Phrease> => {
  const jsonPath = path.join(process.cwd(), 'lib', 'phrases.json')
  const jsonText = fs.readFileSync(jsonPath, 'utf-8')
  const results = JSON.parse(jsonText)
  const result = results[id]

  return {
    id: id.toString(),
    bukkomi: result.bukkomi,
    scene: result.scene,
    movie: result.movie,
    furigana: result.furigana
  };
}
