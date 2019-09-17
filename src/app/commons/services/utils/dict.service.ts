import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DictService {
  public month = ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'];
  public week = ['周一', '周二', '周三', '周四', '周五', '周六', '周日'];
  public day = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10',
  '11', '12', '13', '14', '15', '16', '17', '18', '19', '20',
  '21', '22', '23', '24', '25', '26', '27', '28', '29', '30'];
  // 时间段
  public periodList = [
    {
      text: "00:00-06:59",
      isSelect: true
    },
    {
      text: "07:00-09:19",
      isSelect: false
    },
    {
      text: "09:20-16:49",
      isSelect: false
    },
    {
      text: "16:50-18:59",
      isSelect: false
    },
    {
      text: "19:00-23:59",
      isSelect: false
    }
  ];

  public directionList = [
    {
      direction: '北向西',
      checked: false,
      turn: "right",
      dirc: 'north'
    },
    {
      direction: '北向南',
      checked: false,
      turn: "straight",
      dirc: 'north'
    },
    {
      direction: '北向东',
      checked: false,
      turn: 'left',
      dirc: 'north'
    },
    {
      direction: '东向北',
      checked: false,
      turn: "right",
      dirc: 'east'
    },
    {
      direction: '东向西',
      checked: false,
      turn: "straight",
      dirc: 'east'
    },
    {
      direction: '东向南',
      checked: false,
      turn: 'left',
      dirc: 'east'
    },
    {
      direction: '南向西',
      checked: false,
      turn: "right",
      dirc: 'south'
    },
    {
      direction: '南向北',
      checked: false,
      turn: "straight",
      dirc: 'south'
    },
    {
      direction: '南向东',
      checked: false,
      turn: 'left',
      dirc: 'south'
    },
    {
      direction: '西向北',
      checked: false,
      turn: "left",
      dirc: 'west'
    },
    {
      direction: '西向东',
      checked: false,
      turn: "straight",
      dirc: 'west'
    },
    {
      direction: '西向南',
      checked: false,
      turn: 'right',
      dirc: 'west'
    }
  ];
}
