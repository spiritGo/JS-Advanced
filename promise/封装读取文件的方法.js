const fs = require("fs");
const path = require("path");

/* fs.readFile(path.join(__dirname,'./files/1.txt'),'utf-8',(err,data)=>{
    if(err) throw err;
    console.log(data)
}); */

/* function getFileByPath(filePath, callback) {
  fs.readFile(filePath, "utf-8", (err, data) => {
    // if (err) throw err;
    // console.log(err,data);
    callback(err, data);
  });
}

getFileByPath(path.join(__dirname, "./files/1.txt1"),(err,data)=>{
    console.log(err, data);
}); */

function getFileByPath(filePath) {
  return new Promise(function(resolve, reject) {
    fs.readFile(filePath, "utf-8", (err, data) => {
      if (err) return reject(err);
      resolve(data);
    });
  });
}

/* var p = getFileByPath(path.join(__dirname, "./files/1.txt"));
p.then(
  function(data) {
    console.log(data);
  },
  function(err) {
    console.log(err);
  }
); */

getFileByPath(path.join(__dirname, "./files/11.txt"))
  .then(
    function(data) {
      console.log(data);
      return getFileByPath(path.join(__dirname, "./files/2.txt"));
    },
    function(err) {
      console.log(err.message);
      return getFileByPath(path.join(__dirname, "./files/22.txt"));
    }
  )
  .then(
    function(data) {
      console.log(data);

      return getFileByPath(path.join(__dirname, "./files/3.txt"));
    },
    function(err) {
      console.log(err.message);
      return getFileByPath(path.join(__dirname, "./files/3.txt"));
    }
  )
  .then(function(data) {
    console.log(data);
  });
