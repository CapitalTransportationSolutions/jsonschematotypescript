import { writeFileSync } from 'fs'
import { compileFromFile } from 'json-schema-to-typescript'

async function generate() {
  writeFileSync('unifiedShipmentObject.d.ts', await compileFromFile('unifiedshipmentobject.schema.json'))
}

generate()
