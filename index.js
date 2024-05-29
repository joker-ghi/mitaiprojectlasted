
    //chạy index 
const { spawn } = require("child_process");
const { readFileSync } = require("fs-extra");
const http = require("http");
const axios = require("axios");
const semver = require("semver");
const path = require("path");
const logger = require("./utils/log");
const chalk1 = require("chalk");
const chalk = require("chalkercli");
const geoip = require("geoip-lite");
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const useragent = require("express-useragent");
const requestIp = require("request-ip");
const api = require("./scr_api/routes/api");
const os = require("os");

    var mautim = ["#FF33FF"];
var job = ["FF9900", "FFFF33", "33FFFF", "FF99FF", "FF3366", "FFFF66", "FF00FF", "66FF99", "00CCFF", "FF0099", "FF0066", "0033FF", "FF9999", "00FF66", "00FFFF","CCFFFF","8F00FF","FF00CC","FF0000","FF1100","FF3300","FF4400","FF5500","FF6600","FF7700","FF8800","FF9900","FFaa00","FFbb00","FFcc00","FFdd00","FFee00","FFff00","FFee00","FFdd00","FFcc00","FFbb00","FFaa00","FF9900","FF8800","FF7700","FF6600","FF5500","FF4400","FF3300","FF2200","FF1100"];
    var random = 
job[Math.floor(Math.random() * job.length)]
    var random2 = 
job[Math.floor(Math.random() * job.length)]

    const cpuUsage = os.loadavg()[0] * 100 / os.cpus().length;
const totalMemory = os.totalmem();
const freeMemory = os.freemem();
const memoryUsage = (totalMemory - freeMemory) * 100 / totalMemory;

const diskUsage = fs.statSync('/').size;
const diskTotal = fs.statSync('/').blocks * fs.statSync('/').blksize;
const diskUsagePercentage = (diskUsage / diskTotal) * 100;
    
var mau = ["#0000FF","#00FF00","#00FFFF"];
var dtai = mau[Math.floor(Math.random() * mau.length)];
    const item = [
  {
    "thiết bị": "RAM",
    "dung lượng": `${(totalMemory / (1024 * 1024 * 1024)).toFixed(2)} MB`,
    "phần trăm": `${memoryUsage.toFixed(2)} %`
  },
  {
    "thiết bị": "CPU",
    "dung lượng": `${os.cpus().length} cores`,
    "phần trăm": `${cpuUsage.toFixed(2)} %`
  },
  {
    "thiết bị": "Disk",
    "dung lượng": `${(diskUsage / (1024 * 1024 * 1024)).toFixed(2)} GB`,
    "phần trăm": `${diskUsagePercentage.toFixed(2)} %`
  },
  {
    "thiết bị": "CPU Usage",
    "dung lượng": `${cpuUsage.toFixed(0)} MB`,
    "phần trăm": `${cpuUsage.toFixed(2)} %`
  },
  {
  "thiết bị": "Memory Usage",
  "dung lượng": `${memoryUsage.toFixed(0)} MB`,
  "phần trăm": `${memoryUsage.toFixed(2)} %`
  },
];

function startBot(message) {
    (message) ? logger(message, "[ Bắt đầu ]") : "";

    const child = spawn("node", ["mitai"], {
  cwd: __dirname ,
  stdio: "inherit",
  shell: true
});

    child.on("close", (codeExit) => {
        if (codeExit != 0 || global.countRestart && global.countRestart < 5) {
            startBot("Tiến hành khởi động lại...");
            global.countRestart += 1;
            return;
        } else return;
    });

    child.on("error", function (error) {
        logger("Đã xảy ra lỗi: " + JSON.stringify(error), "[ Bắt đầu ]");
    });
};
    setTimeout(() => {
console.table(item);
    }, 3000)
startBot();
        //end index //
  } catch (error) {
    console.error(`[ ERROR ] -> ${appStateFilePath} đã bị lỗi!\nLỗi là: ${error}\n[ GET APPSTATE ] -> Hệ thống đang tiến hành lấy ${appStateFilePath} mới!\n`);

    function startLogin() {
      const child = spawn("node", ["login.js"], {
  cwd: __dirname ,
  stdio: "inherit",
  shell: true
});

      child.on('data', (data) => {
        console.error(`stderr: ${data}`);
      });

      child.on('close', (code) => {
        console.log(`child process exited with code ${code}`);
      });
    }

    startLogin();
  }
});
}
