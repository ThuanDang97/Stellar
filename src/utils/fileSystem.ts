import fs from 'fs'

export const saveDataToJSON = <T>(path: string, newData: T): void => {
  fs.writeFileSync(`src/data/${path}.json`, JSON.stringify(newData))
}

export const getDataFromJSON = (path: string) =>
  JSON.parse(fs.readFileSync(`src/data/${path}.json`).toString())
