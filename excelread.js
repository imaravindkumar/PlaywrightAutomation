

const ExcelJS = require('exceljs');
( async () => {
  const workbook = new ExcelJS.Workbook();
  await workbook.xlsx.readFile("ExcelData.xlsx");

  const worksheet = workbook.getWorksheet(1); // Assuming data is in the first worksheet

  const jsonData = [];

  worksheet.eachRow((row, rowNumber) => {
    if (rowNumber !== 1) { // Skip header row
      const rowValues = row.values;
      const rowData = {};

      // Assuming headers are in the first row
      worksheet.getRow(1).eachCell((headerCell, colNumber) => {
        rowData[headerCell.value] = rowValues[colNumber];
      });

      jsonData.push(rowData);
    }
  });

  console.log(JSON.stringify(jsonData, null, 2)); // Print JSON data with indentation
  
 // const outputdata = JSON.stringify(jsonData, null, 2);
  //Export the JSON Data
   module.exports = jsonData;
  //return jsonData;
})();

//export {readexcelfile}

// const execelfileData = require("xlsx");

// const workbook = execelfileData.readFile("../uitlities/ExcelData.xlsx");
// const worksheet = workbook.Sheets("Sheet1");

// console.log(worksheet);
