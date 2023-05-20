const fs = require('fs')
const path = require('path')

export function getImagePaths(folder) {
  const dirPath = path.join(process.cwd(), 'public', 'images', folder)
  const fileNames = fs.readdirSync(dirPath)
  return fileNames.map((fileName) => `/images/${folder}/${fileName}`)
}
