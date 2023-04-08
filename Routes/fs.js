import express from "express";
import fs from "fs";

const router = express.Router();

router.post("/create", async (req, res) => {
  const timeStamp = new Date();

  const date = timeStamp.getDate();
  const month = timeStamp.getMonth() + 1;
  const year = timeStamp.getFullYear();

  const currentDate = date + "-" + month + "-" + year;

  const hours = timeStamp.getHours();
  const minutes = timeStamp.getMinutes();
  const seconds = timeStamp.getSeconds();

  const currentTime = hours + "hrs-" + minutes + "mins-" + seconds + "secs";

  const currentDateTime = "Date=" + currentDate + "__Time=" + currentTime;

  fs.writeFile(`./Folder/${currentDateTime}.txt`,timeStamp.toString(),async (err) => {
      if (err) {
        res.send(err);
      } else {
        res.send("Created Successfully");
      }
    })
});

router.get("/get", async(req,res)=>{
    fs.readdir("./Folder/", (err, files) => {
        files.forEach(file => {
         fs.readFile(`./Folder/${file}`, "utf-8", (err,data)=>{
            console.log(data);
         })   
        });
      });
      res.send("All files received");
})

export const fsRouter = router;
