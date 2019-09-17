import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class PhaseUtilService {
  // 绘制车道面
  public drawFillRoads(ctx, roadLength, roadWidth, data) {
    ctx.beginPath();
    if (data.N) {
      ctx.moveTo(0, roadLength);
      ctx.lineTo((roadLength * 3) / 4, roadLength);
      ctx.quadraticCurveTo(
        roadLength,
        roadLength,
        roadLength,
        (roadLength * 3) / 4
      );
      ctx.lineTo(roadLength, 0);
      ctx.lineTo(roadLength + roadWidth, 0);
      ctx.lineTo(roadLength + roadWidth, (roadLength * 3) / 4);
      ctx.quadraticCurveTo(
        roadLength + roadWidth,
        roadLength,
        roadLength + roadLength / 4 + roadWidth,
        roadLength
      );
      ctx.lineTo(2 * roadLength + roadWidth, roadLength);
    } else {
      ctx.moveTo(0, roadLength);
      ctx.lineTo(2 * roadLength + roadWidth, roadLength);
    }
    ctx.fillStyle = "#999";
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    if (data.E) {
      ctx.moveTo(roadLength + roadWidth, 0);
      ctx.lineTo(roadLength + roadWidth, (roadLength * 3) / 4);
      ctx.quadraticCurveTo(
        roadLength + roadWidth,
        roadLength,
        roadLength + roadLength / 4 + roadWidth,
        roadLength
      );
      ctx.lineTo(2 * roadLength + roadWidth, roadLength);

      ctx.lineTo(roadLength * 2 + roadWidth, roadLength + roadWidth);
      ctx.lineTo(
        roadLength + roadWidth + roadLength / 4,
        roadLength + roadWidth
      );
      ctx.quadraticCurveTo(
        roadLength + roadWidth,
        roadLength + roadWidth,
        roadLength + roadWidth,
        roadLength + roadWidth + roadLength / 4
      );
      ctx.lineTo(roadLength + roadWidth, roadLength * 2 + roadWidth);
    } else {
      ctx.moveTo(roadLength + roadWidth, 0);
      ctx.lineTo(roadLength + roadWidth, roadLength * 2 + roadWidth);
    }
    ctx.fillStyle = "#999";
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    if (data.S) {
      ctx.moveTo(roadLength * 2 + roadWidth, roadLength + roadWidth);
      ctx.lineTo(
        roadLength + roadWidth + roadLength / 4,
        roadLength + roadWidth
      );
      ctx.quadraticCurveTo(
        roadLength + roadWidth,
        roadLength + roadWidth,
        roadLength + roadWidth,
        roadLength + roadWidth + roadLength / 4
      );
      ctx.lineTo(roadLength + roadWidth, roadLength * 2 + roadWidth);

      ctx.lineTo(roadLength, roadLength * 2 + roadWidth);
      ctx.lineTo(roadLength, roadLength + roadWidth + roadLength / 4);
      ctx.quadraticCurveTo(
        roadLength,
        roadLength + roadWidth,
        (roadLength * 3) / 4,
        roadLength + roadWidth
      );
      ctx.lineTo(0, roadLength + roadWidth);
    } else {
      ctx.moveTo(roadLength * 2 + roadWidth, roadLength + roadWidth);
      ctx.lineTo(0, roadLength + roadWidth);
    }
    ctx.fillStyle = "#999";
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    if (data.W) {
      ctx.moveTo(roadLength, roadLength * 2 + roadWidth);
      ctx.lineTo(roadLength, roadLength + roadWidth + roadLength / 4);
      ctx.quadraticCurveTo(
        roadLength,
        roadLength + roadWidth,
        (roadLength * 3) / 4,
        roadLength + roadWidth
      );
      ctx.lineTo(0, roadLength + roadWidth);

      ctx.lineTo(0, roadLength);
      ctx.lineTo((roadLength * 3) / 4, roadLength);
      ctx.quadraticCurveTo(
        roadLength,
        roadLength,
        roadLength,
        (roadLength * 3) / 4
      );
      ctx.lineTo(roadLength, 0);
    } else {
      ctx.moveTo(roadLength, roadLength * 2 + roadWidth);
      ctx.lineTo(roadLength, 0);
    }
    ctx.fillStyle = "#999";
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.moveTo(roadLength, roadLength);
    ctx.lineTo(roadLength + roadWidth, roadLength);
    ctx.lineTo(roadLength + roadWidth, roadLength + roadWidth);
    ctx.lineTo(roadLength, roadLength + roadWidth);
    ctx.fillStyle = "#999";
    ctx.fill();
    ctx.closePath();

    if (!data.N) {
      ctx.clearRect(
        (roadLength * 3) / 4,
        0,
        roadWidth + roadLength / 2,
        roadLength
      );
    }
    if (!data.E) {
      ctx.clearRect(
        roadLength + roadWidth,
        (roadLength * 3) / 4,
        roadLength,
        roadWidth + roadLength / 2
      );
    }
    if (!data.S) {
      ctx.clearRect(
        (roadLength * 3) / 4,
        roadLength + roadWidth,
        roadWidth + roadLength / 2,
        roadLength
      );
    }
    if (!data.W) {
      ctx.clearRect(
        0,
        (roadLength * 3) / 4,
        roadLength,
        roadWidth + roadLength / 2
      );
    }
  }
  // 绘制道路
  public drawRoads(ctx, roadLength, roadWidth, data) {
    let iconLength = 60;
    let phaseLength = 120;
    let list = [];
    let phaseList = [];
    console.log("drawRoads");
    //画面
    this.drawFillRoads(ctx, roadLength, roadWidth, data);
    //绘制道路名
    this.drawRoadName(ctx, roadLength, roadWidth, data, 0);
    //北
    if (data.N) {
      list = [];
      phaseList = [];
      var laneWidth = (roadWidth * 2) / (3 * data.N.length);
      ctx.beginPath();
      if (data.W) {
        ctx.moveTo(roadLength, 0);
        ctx.lineTo(roadLength, (roadLength * 3) / 4);
        ctx.quadraticCurveTo(
          roadLength,
          roadLength,
          (roadLength * 3) / 4,
          roadLength
        );
        ctx.lineTo(0, roadLength);
      } else {
        ctx.moveTo(roadLength, 0);
        ctx.lineTo(roadLength, roadLength + (roadWidth * 3) / 4);
      }
      if (data.E) {
        ctx.moveTo(roadLength + roadWidth, 0);
        ctx.lineTo(roadLength + roadWidth, (roadLength * 3) / 4);
        ctx.quadraticCurveTo(
          roadLength + roadWidth,
          roadLength,
          roadLength + roadLength / 4 + roadWidth,
          roadLength
        );
        ctx.lineTo(2 * roadLength + roadWidth, roadLength);
      } else {
        ctx.moveTo(roadLength + roadWidth, 0);
        ctx.lineTo(roadLength + roadWidth, roadLength + (roadWidth * 3) / 4);
      }

      for (var i = 1; i <= data.N.length; i++) {
        ctx.moveTo(roadLength + i * laneWidth, 0);
        ctx.lineTo(roadLength + i * laneWidth, roadLength / 2);
      }
      for (var i = 0; i < data.N.length; i++) {
        list.push([
          roadLength + (i + 1) * laneWidth,
          roadLength / 2,
          laneWidth,
          iconLength,
          data.N[i].dirc,
          180
        ]);
        phaseList.push([
          roadLength + (i + 1) * laneWidth,
          roadLength / 2,
          laneWidth,
          phaseLength,
          data.N[i].dirc,
          180,
          data.N[i].isSelect
        ]);
      }
      //停车线
      ctx.moveTo(roadLength + (roadWidth * 2) / 3 + 4, roadLength / 2);
      ctx.lineTo(roadLength, roadLength / 2);
      ctx.strokeStyle = "#fff";
      ctx.lineWidth = 1;
      ctx.setLineDash([]);
      ctx.stroke();
      ctx.closePath();
      for (var i = 0; i < list.length; i++) {

        this.drawPhase(
          ctx,
          phaseList[i][0],
          phaseList[i][1],
          phaseList[i][2],
          phaseList[i][3],
          phaseList[i][4],
          list[i][5],
          phaseList[i][6]
        );
        this.drawArrow(
          ctx,
          list[i][0],
          list[i][1],
          list[i][2],
          list[i][3],
          list[i][4],
          list[i][5]
        );
      }
    } else {
      ctx.beginPath();
      ctx.moveTo(0, roadLength);
      ctx.lineTo(roadLength * 2 + roadWidth, roadLength);
      ctx.lineWidth = 1;
      ctx.strokeStyle = "#fff";
      ctx.setLineDash([]);
      ctx.stroke();
      ctx.closePath();
    }
    //南
    if (data.S) {
      list = [];
      phaseList = [];
      var laneWidth = (roadWidth * 2) / (3 * data.S.length);
      ctx.beginPath();
      if (data.W) {
        ctx.moveTo(roadLength, 2 * roadLength + roadWidth);
        ctx.lineTo(roadLength, roadLength + roadLength / 4 + roadWidth);
        ctx.quadraticCurveTo(
          roadLength,
          roadLength + roadWidth,
          (roadLength * 3) / 4,
          roadLength + roadWidth
        );
        ctx.lineTo(0, roadLength + roadWidth);
      } else {
        ctx.moveTo(roadLength, roadLength + roadWidth / 2);
        ctx.lineTo(roadLength, roadLength * 2 + roadWidth);
      }
      if (data.E) {
        ctx.moveTo(roadLength + roadWidth, 2 * roadLength + roadWidth);
        ctx.lineTo(
          roadLength + roadWidth,
          roadLength + roadLength / 4 + roadWidth
        );
        ctx.quadraticCurveTo(
          roadLength + roadWidth,
          roadLength + roadWidth,
          roadLength + roadLength / 4 + roadWidth,
          roadLength + roadWidth
        );
        ctx.lineTo(2 * roadLength + roadWidth, roadLength + roadWidth);
      } else {
        ctx.moveTo(roadLength + roadWidth, roadLength + roadWidth / 2);
        ctx.lineTo(roadLength + roadWidth, roadLength * 2 + roadWidth);
      }
      for (var i = 1; i <= data.S.length; i++) {
        ctx.moveTo(
          roadLength + roadWidth - i * laneWidth,
          (roadLength * 3) / 2 + roadWidth
        );
        ctx.lineTo(
          roadLength + roadWidth - i * laneWidth,
          2 * roadLength + roadWidth
        );
      }
      for (var i = 0; i < data.S.length; i++) {
        list.push([
          roadLength + roadWidth - (i + 1) * laneWidth,
          (roadLength * 3) / 2 + roadWidth,
          laneWidth,
          iconLength,
          data.S[i].dirc,
          0
        ]);
        phaseList.push([
          roadLength + roadWidth - (i + 1) * laneWidth,
          (roadLength * 3) / 2 + roadWidth,
          laneWidth,
          phaseLength,
          data.S[i].dirc,
          0,
          data.S[i].isSelect
        ]);
      }
      //停车线
      ctx.moveTo(
        roadLength + (roadWidth * 1) / 3,
        (roadLength * 3) / 2 + roadWidth
      );
      ctx.lineTo(roadLength + roadWidth, (roadLength * 3) / 2 + roadWidth);
      ctx.strokeStyle = "#fff";
      ctx.lineWidth = 1;
      ctx.setLineDash([]);
      ctx.stroke();
      ctx.closePath();
      for (var i = 0; i < list.length; i++) {

        this.drawPhase(
          ctx,
          phaseList[i][0],
          phaseList[i][1],
          phaseList[i][2],
          phaseList[i][3],
          phaseList[i][4],
          phaseList[i][5],
          phaseList[i][6]
        );
        this.drawArrow(
          ctx,
          list[i][0],
          list[i][1],
          list[i][2],
          list[i][3],
          list[i][4],
          list[i][5]
        );
      }
    } else {
      console.log(2);
      ctx.beginPath();
      ctx.moveTo(0, roadLength + roadWidth);
      ctx.lineTo(2 * roadLength + roadWidth, roadLength + roadWidth);
      ctx.lineWidth = 1;
      ctx.strokeStyle = "#fff";
      ctx.setLineDash([]);
      ctx.stroke();
      ctx.closePath();
    }
    //西
    if (data.W) {
      list = [];
      phaseList = [];
      var laneWidth = (roadWidth * 2) / (3 * data.W.length);
      ctx.beginPath();
      for (var i = 1; i < data.W.length; i++) {
        ctx.moveTo(0, roadLength + roadWidth - i * laneWidth);
        ctx.lineTo(roadLength / 2, roadLength + roadWidth - i * laneWidth);
      }
      for (var i = 0; i < data.W.length; i++) {
        list.push([
          roadLength / 2,
          roadLength + roadWidth - (i + 1) * laneWidth,
          laneWidth,
          iconLength,
          data.W[i].dirc,
          90
        ]);
        phaseList.push([
          roadLength / 2,
          roadLength + roadWidth - (i + 1) * laneWidth,
          laneWidth,
          phaseLength,
          data.W[i].dirc,
          90,
          data.W[i].isSelect
        ]);
      }
      //停车线
      ctx.moveTo(roadLength / 2, roadLength + (roadWidth * 1) / 3);
      ctx.lineTo(roadLength / 2, roadLength + roadWidth);
      ctx.lineWidth = 1;
      ctx.strokeStyle = "#fff";
      ctx.setLineDash([]);
      ctx.stroke();
      ctx.closePath();
      for (var i = 0; i < list.length; i++) {

        this.drawPhase(
          ctx,
          phaseList[i][0],
          phaseList[i][1],
          phaseList[i][2],
          phaseList[i][3],
          phaseList[i][4],
          phaseList[i][5],
          phaseList[i][6]
        );
        this.drawArrow(
          ctx,
          list[i][0],
          list[i][1],
          list[i][2],
          list[i][3],
          list[i][4],
          list[i][5]
        );
      }
    }
    // 东
    if (data.E) {
      list = [];
      phaseList = [];
      var laneWidth = (roadWidth * 2) / (3 * data.E.length);
      ctx.beginPath();
      for (var i = 1; i < data.E.length; i++) {
        ctx.moveTo(
          (roadLength * 3) / 2 + roadWidth,
          roadLength + i * laneWidth
        );
        ctx.lineTo(2 * roadLength + roadWidth, roadLength + i * laneWidth);
      }
      for (var i = 0; i < data.E.length; i++) {
        list.push([
          (roadLength * 3) / 2 + roadWidth,
          roadLength + (i + 1) * laneWidth,
          laneWidth,
          iconLength,
          data.E[i].dirc,
          -90
        ]);
        phaseList.push([
          (roadLength * 3) / 2 + roadWidth,
          roadLength + (i + 1) * laneWidth,
          laneWidth,
          phaseLength,
          data.E[i].dirc,
          -90,
          data.E[i].isSelect
        ]);
      }
      //停车线
      ctx.moveTo(
        (roadLength * 3) / 2 + roadWidth,
        roadLength + (roadWidth * 2) / 3 + 4
      );
      ctx.lineTo((roadLength * 3) / 2 + roadWidth, roadLength);
      ctx.lineWidth = 1;
      ctx.strokeStyle = "#fff";
      ctx.setLineDash([]);
      ctx.stroke();
      ctx.closePath();
      for (var i = 0; i < list.length; i++) {
        this.drawPhase(
          ctx,
          phaseList[i][0],
          phaseList[i][1],
          phaseList[i][2],
          phaseList[i][3],
          phaseList[i][4],
          phaseList[i][5],
          phaseList[i][6]
        );
        this.drawArrow(
          ctx,
          list[i][0],
          list[i][1],
          list[i][2],
          list[i][3],
          list[i][4],
          list[i][5]
        );
      }
    }

    if (data.N) {
      //中心隔离带
      ctx.beginPath();
      ctx.moveTo(roadLength + (roadWidth * 2) / 3, 0);
      ctx.lineTo(roadLength + (roadWidth * 2) / 3, roadLength / 2);
      ctx.moveTo(roadLength + (roadWidth * 2) / 3 + 4, 0);
      ctx.lineTo(roadLength + (roadWidth * 2) / 3 + 4, roadLength / 2);
      ctx.strokeStyle = "#fff";
      ctx.lineWidth = 2;
      ctx.setLineDash([]);
      ctx.stroke();
      ctx.closePath();
    }
    if (data.S) {
      //中心隔离带
      ctx.beginPath();
      ctx.moveTo(
        roadLength + (roadWidth * 1) / 3,
        (roadLength * 3) / 2 + roadWidth
      );
      ctx.lineTo(roadLength + (roadWidth * 1) / 3, 2 * roadLength + roadWidth);
      ctx.moveTo(
        roadLength + (roadWidth * 1) / 3 + 4,
        (roadLength * 3) / 2 + roadWidth
      );
      ctx.lineTo(
        roadLength + (roadWidth * 1) / 3 + 4,
        2 * roadLength + roadWidth
      );
      ctx.strokeStyle = "#fff";
      ctx.lineWidth = 2;
      ctx.setLineDash([]);
      ctx.stroke();
      ctx.closePath();
    }
    if (data.W) {
      //中心隔离带
      ctx.beginPath();
      ctx.moveTo(0, roadLength + (roadWidth * 1) / 3);
      ctx.lineTo(roadLength / 2, roadLength + (roadWidth * 1) / 3);
      ctx.moveTo(0, roadLength + (roadWidth * 1) / 3 + 4);
      ctx.lineTo(roadLength / 2, roadLength + (roadWidth * 1) / 3 + 4);
      ctx.strokeStyle = "#fff";
      ctx.lineWidth = 2;
      ctx.setLineDash([]);
      ctx.stroke();
      ctx.closePath();
    }
    if (data.E) {
      //中心隔离带
      ctx.beginPath();
      ctx.moveTo(
        (roadLength * 3) / 2 + roadWidth,
        roadLength + (roadWidth * 2) / 3
      );
      ctx.lineTo(2 * roadLength + roadWidth, roadLength + (roadWidth * 2) / 3);
      ctx.moveTo(
        (roadLength * 3) / 2 + roadWidth,
        roadLength + (roadWidth * 2) / 3 + 4
      );
      ctx.lineTo(
        2 * roadLength + roadWidth,
        roadLength + (roadWidth * 2) / 3 + 4
      );
      ctx.strokeStyle = "#fff";
      ctx.lineWidth = 2;
      ctx.setLineDash([]);
      ctx.stroke();
      ctx.closePath();
    }
    if (data.N) {
      //反向车道隔离线
      ctx.beginPath();
      ctx.moveTo(roadLength + roadWidth - roadWidth / 3 / 2, 0);
      ctx.lineTo(roadLength + roadWidth - roadWidth / (3 * 2), roadLength / 2);
      ctx.lineWidth = 3;
      ctx.setLineDash([8, 8]);
      ctx.strokeStyle = "#fff";
      ctx.stroke();
      ctx.closePath();
      this.drawSidewalk(
        ctx,
        roadLength - 10,
        (roadLength * 3) / 4 + 10,
        roadLength / 2 / 2,
        roadWidth,
        data.NSidewalk,
        -90
      );
    }
    if (data.S) {
      //反向车道隔离线
      ctx.beginPath();
      ctx.moveTo(
        roadLength + (roadWidth * 1) / 3 / 2,
        (roadLength * 3) / 2 + roadWidth
      );
      ctx.lineTo(
        roadLength + (roadWidth * 1) / 3 / 2,
        2 * roadLength + roadWidth
      );
      ctx.lineWidth = 3;
      ctx.setLineDash([8, 8]);
      ctx.strokeStyle = "#fff";
      ctx.stroke();
      ctx.closePath();
      this.drawSidewalk(
        ctx,
        roadLength - 10,
        roadLength + roadWidth + (roadLength * 1) / 2 - 10,
        roadLength / 2 / 2,
        roadWidth,
        data.SSidewalk,
        -90
      );
    }
    if (data.W) {
      //反向车道隔离线
      ctx.beginPath();
      ctx.moveTo(0, roadLength + (roadWidth * 1) / 3 / 2);
      ctx.lineTo(roadLength / 2, roadLength + (roadWidth * 1) / 3 / 2);
      ctx.lineWidth = 3;
      ctx.setLineDash([8, 8]);
      ctx.strokeStyle = "#fff";
      ctx.stroke();
      ctx.closePath();
      this.drawSidewalk(
        ctx,
        roadLength / 2 + 10,
        roadLength - 10,
        roadLength / 2 / 2,
        roadWidth,
        data.WSidewalk,
        0
      );
    }
    if (data.E) {
      //反向车道隔离线
      ctx.beginPath();
      ctx.moveTo(
        (roadLength * 3) / 2 + roadWidth,
        roadLength + roadWidth - roadWidth / 3 / 2
      );
      ctx.lineTo(
        2 * roadLength + roadWidth,
        roadLength + roadWidth - roadWidth / 3 / 2
      );
      ctx.lineWidth = 3;
      ctx.setLineDash([8, 8]);
      ctx.strokeStyle = "#fff";
      ctx.stroke();
      ctx.closePath();
      this.drawSidewalk(
        ctx,
        roadLength + roadWidth + roadLength / 4 - 10,
        roadLength - 10,
        roadLength / 2 / 2,
        roadWidth,
        data.ESidewalk,
        0
      );
    }
  }
  public drawRoadName(ctx, roadLength, roadWidth, data, deg) {
    if (data.NRoadName) {
      ctx.save();
      ctx.rotate((deg / 180) * Math.PI);
      ctx.beginPath();
      ctx.font = "12px Microsoft YaHei";
      ctx.fillStyle = "rgba(0,0,0,.65)";
      // ctx.fillText(data.NRoadName, roadWidth, roadWidth);
      this.fillTextVertical(
        ctx,
        data.NRoadName,
        (roadLength * 7) / 8,
        (roadLength * 1) / 2
      );
      ctx.restore();
      ctx.closePath();
    } else {
      if (data.SRoadName) {
        ctx.save();
        ctx.rotate((deg / 180) * Math.PI);
        ctx.beginPath();
        ctx.font = "12px Microsoft YaHei";
        ctx.fillStyle = "rgba(0,0,0,.65)";
        // ctx.fillText(data.NRoadName, roadWidth, roadWidth);
        this.fillTextVertical(
          ctx,
          data.SRoadName,
          (roadLength * 7) / 8,
          (roadLength * 7) / 4 + roadWidth
        );
        ctx.restore();
        ctx.closePath();
      }

    }
    if (data.ERoadName) {
      ctx.save();
      ctx.translate(0, 0);
      ctx.rotate((deg / 180) * Math.PI);
      ctx.beginPath();
      ctx.font = "12px Microsoft YaHei";
      ctx.fillStyle = "rgba(0,0,0,.65)";
      ctx.fillText(
        data.ERoadName,
        roadLength + (roadWidth * 9) / 8,
        (roadLength * 9) / 10
      );
      ctx.restore();
      ctx.closePath();
    } else {
      if (data.WRoadName) {
        ctx.save();
        ctx.translate(0, 0);
        ctx.rotate((deg / 180) * Math.PI);
        ctx.beginPath();
        ctx.font = "12px Microsoft YaHei";
        ctx.fillStyle = "rgba(0,0,0,.65)";
        ctx.fillText(
          data.WRoadName,
          (roadLength * 3) / 8,
          (roadLength * 9) / 10
        );
        ctx.restore();
        ctx.closePath();
      }
    }

    if (data.time) {
      ctx.save();
      ctx.translate(roadLength, roadLength);
      ctx.rotate((deg / 180) * Math.PI);
      ctx.beginPath();
      ctx.font = "22px Microsoft YaHei";
      ctx.fillStyle = "#0f0";
      ctx.fillText(data.time, roadLength / 2, roadWidth / 2);
      ctx.restore();
      ctx.closePath();
    }
  }
  public drawSidewalk(ctx, x, y, w, h, isRelease, deg) {
    const interval = 5;
    const height = 8;
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate((deg / 180) * Math.PI);
    ctx.beginPath();
    if (isRelease) {
      ctx.globalAlpha = 1;
      ctx.fillStyle = "#008000";
    } else {
      ctx.globalAlpha = 1;
      ctx.fillStyle = "#fff";
    }
    for (var i = 1; i < h / (height + interval); i++) {
      ctx.fillRect(0, (height + interval) * i, w, height);
    }
    ctx.closePath();
    ctx.restore();
  }
  public drawArrow(ctx, x, y, w, h, type, deg) {
    console.log("drawArrow");
    if (type === "R") {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate((deg / 180) * Math.PI);
      ctx.beginPath();
      ctx.moveTo(w / 3, h);
      ctx.lineTo(w / 3, h / 4);
      ctx.lineTo((w * 3) / 4, h / 4);
      ctx.moveTo((w * 3) / 4 - w / 8, h / 4 - h / 8);
      ctx.lineTo((w * 3) / 4, h / 4);
      ctx.lineTo((w * 3) / 4 - w / 8, h / 4 + h / 8);
      ctx.strokeStyle = "#fff";
      ctx.lineWidth = 2;
      ctx.setLineDash([]);
      ctx.stroke();
      ctx.restore();
      ctx.closePath();
    } else if (type === "L") {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate((deg / 180) * Math.PI);
      ctx.beginPath();
      ctx.moveTo((w * 3) / 4, h);
      ctx.lineTo((w * 3) / 4, h / 4);
      ctx.lineTo(w / 3, h / 4);
      ctx.moveTo(w / 3 + w / 8, h / 4 - h / 8);
      ctx.lineTo(w / 3, h / 4);
      ctx.lineTo(w / 3 + w / 8, h / 4 + h / 8);
      ctx.strokeStyle = "#fff";
      ctx.lineWidth = 2;
      ctx.setLineDash([]);
      ctx.stroke();
      ctx.restore();
      ctx.closePath();
    } else if (type === "Z") {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate((deg / 180) * Math.PI);
      ctx.beginPath();
      ctx.moveTo(w / 2, h);
      ctx.lineTo(w / 2, h / 8);
      ctx.moveTo(w / 2 - w / 5, h / 8 + h / 5);
      ctx.lineTo(w / 2, h / 8);
      ctx.lineTo(w / 2 + w / 5, h / 8 + h / 5);
      ctx.strokeStyle = "#fff";
      ctx.lineWidth = 2;
      ctx.setLineDash([]);
      ctx.stroke();
      ctx.closePath();
      ctx.restore();
    } else if (type === "ZL") {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate((deg / 180) * Math.PI);
      ctx.beginPath();
      ctx.moveTo((w * 2) / 3, h);
      ctx.lineTo((w * 2) / 3, h / 8);
      ctx.moveTo((w * 2) / 3 - w / 8, h / 8 + h / 8);
      ctx.lineTo((w * 2) / 3, h / 8);
      ctx.lineTo((w * 2) / 3 + w / 8, h / 8 + h / 8);
      ctx.moveTo((w * 2) / 3, (h * 1) / 2);
      ctx.lineTo(w / 3, (h * 1) / 2);
      ctx.moveTo(w / 3 + w / 8, (h * 1) / 2 - h / 8);
      ctx.lineTo(w / 3, (h * 1) / 2);
      ctx.lineTo(w / 3 + w / 8, (h * 1) / 2 + h / 8);
      ctx.strokeStyle = "#fff";
      ctx.lineWidth = 2;
      ctx.setLineDash([]);
      ctx.stroke();
      ctx.closePath();
      ctx.restore();
    } else if (type === "ZR") {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate((deg / 180) * Math.PI);
      ctx.beginPath();
      ctx.moveTo((w * 1) / 3, h);
      ctx.lineTo((w * 1) / 3, h / 8);
      ctx.moveTo((w * 1) / 3 - w / 8, h / 8 + h / 8);
      ctx.lineTo((w * 1) / 3, h / 8);
      ctx.lineTo((w * 1) / 3 + w / 8, h / 8 + h / 8);
      ctx.moveTo((w * 1) / 3, (h * 1) / 2);
      ctx.lineTo((w * 2) / 3, (h * 1) / 2);
      ctx.moveTo((w * 2) / 3 - w / 8, (h * 1) / 2 - h / 8);
      ctx.lineTo((w * 2) / 3, (h * 1) / 2);
      ctx.lineTo((w * 2) / 3 - w / 8, (h * 1) / 2 + h / 8);
      ctx.strokeStyle = "#fff";
      ctx.lineWidth = 2;
      ctx.setLineDash([]);
      ctx.stroke();
      ctx.closePath();
      ctx.restore();
    } else if (type === "U") {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate((deg / 180) * Math.PI);
      ctx.beginPath();
      ctx.moveTo((w * 3) / 4, h);
      ctx.lineTo((w * 3) / 4, h / 8);
      ctx.lineTo((w * 1) / 4, h / 8);
      ctx.lineTo((w * 1) / 4, (h * 2) / 4);

      ctx.moveTo((w * 1) / 4 - w / 8, (h * 2) / 4 - h / 8);
      ctx.lineTo((w * 1) / 4, (h * 2) / 4);
      ctx.lineTo((w * 1) / 4 + w / 8, (h * 2) / 4 - h / 8);
      ctx.strokeStyle = "#fff";
      ctx.lineWidth = 2;
      ctx.setLineDash([]);
      ctx.stroke();
      ctx.closePath();
      ctx.restore();
    } else if (type === "A") {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate((deg / 180) * Math.PI);
      ctx.beginPath();
      ctx.moveTo((w * 1) / 2, h);
      ctx.lineTo((w * 1) / 2, h / 8);

      ctx.moveTo((w * 1) / 2 - w / 8, h / 8 + h / 8);
      ctx.lineTo((w * 1) / 2, h / 8);
      ctx.lineTo((w * 1) / 2 + w / 8, h / 8 + h / 8);

      ctx.moveTo((w * 1) / 8, (h * 2) / 4);
      ctx.lineTo((w * 7) / 8, (h * 2) / 4);

      ctx.moveTo((w * 1) / 8 + w / 8, (h * 2) / 4 - h / 8);
      ctx.lineTo((w * 1) / 8, (h * 2) / 4);
      ctx.lineTo((w * 1) / 8 + w / 8, (h * 2) / 4 + h / 8);

      ctx.moveTo((w * 7) / 8 - w / 8, (h * 2) / 4 - h / 8);
      ctx.lineTo((w * 7) / 8, (h * 2) / 4);
      ctx.lineTo((w * 7) / 8 - w / 8, (h * 2) / 4 + h / 8);

      ctx.strokeStyle = "#fff";
      ctx.lineWidth = 2;
      ctx.setLineDash([]);
      ctx.stroke();
      ctx.closePath();
      ctx.restore();
    }
  }
  public drawPhase(ctx, x, y, w, h, type, deg, isSelect) {
    if (isSelect === 'true') {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate((deg / 180) * Math.PI);
      ctx.beginPath();
      // 设置透明度值
      ctx.globalAlpha = 1;
      ctx.fillStyle = "#008000";
      ctx.fillRect(0 + 2, 0, w - 4, h);
      ctx.closePath();
      ctx.restore();
    }
  }
  public fillTextVertical(ctx, text, x, y) {
    var context = ctx;

    var arrText = text.split("");
    var arrWidth = arrText.map(function(letter) {
      return context.measureText(letter).width;
    });

    var align = context.textAlign;
    var baseline = context.textBaseline;

    if (align == "left") {
      x = x + Math.max.apply(null, arrWidth) / 2;
    } else if (align == "right") {
      x = x - Math.max.apply(null, arrWidth) / 2;
    }
    if (
      baseline == "bottom" ||
      baseline == "alphabetic" ||
      baseline == "ideographic"
    ) {
      y = y - arrWidth[0] / 2;
    } else if (baseline == "top" || baseline == "hanging") {
      y = y + arrWidth[0] / 2;
    }

    context.textAlign = "center";
    context.textBaseline = "middle";

    // 开始逐字绘制
    arrText.forEach(function(letter, index) {
      // 确定下一个字符的纵坐标位置
      var letterWidth = arrWidth[index];
      // 是否需要旋转判断
      var code = letter.charCodeAt(0);
      if (code <= 256) {
        context.translate(x, y);
        // 英文字符，旋转90°
        context.rotate((90 * Math.PI) / 180);
        context.translate(-x, -y);
      } else if (index > 0 && text.charCodeAt(index - 1) < 256) {
        // y修正
        y = y + arrWidth[index - 1] / 2;
      }
      context.fillText(letter, x, y);
      // 旋转坐标系还原成初始态
      context.setTransform(1, 0, 0, 1, 0, 0);
      // 确定下一个字符的纵坐标位置
      var letterWidth = arrWidth[index];
      y = y + letterWidth;
    });
    // 水平垂直对齐方式还原
    context.textAlign = align;
    context.textBaseline = baseline;
  }
}
