import fs from 'fs'

export const saveDataToJSON = <T>(path: string, newData: T): void => {
  fs.writeFileSync(`../json/${path}.json`, JSON.stringify(newData))
}

export const getDataFromJSON = (path: string) =>
  JSON.parse(fs.readFileSync(`../json/${path}.json`).toString())
