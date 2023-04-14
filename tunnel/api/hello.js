const express = require('express')
const app = express()
const { GoogleSpreadsheet } = require('google-spreadsheet');




app.get('/', async (req, res) => {

const doc = new GoogleSpreadsheet();
console.log(doc.spreadsheetId);
  res.send(doc.spreadsheetId)
})

app.listen(3001)