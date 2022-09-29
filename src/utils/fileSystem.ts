import fs from 'fs'

export const saveDataToJSON = <T>(path: string, newData: T): void => {
  fs.writeFileSync(`../tmp/${path}.json`, JSON.stringify(newData))
}

export const getDataFromJSON = (path: string) =>
  JSON.parse(fs.readFileSync(`../tmp/${path}.json`).toString())
