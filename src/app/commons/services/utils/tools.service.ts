import {Injectable} from '@angular/core';

@Injectable()
export class ToolsService {
  constructor() {
  }

  public getData(string: string) {
    if (string !== undefined && string != null) {
      const d = new Date(string);
      const time =
        d.getFullYear() +
        '-' +
        (d.getMonth() + 1) +
        '-' +
        d.getDate() +
        ' ' +
        d.getHours() +
        ':' +
        d.getMinutes() +
        ':' +
        d.getSeconds();
      return time;
    } else {
      return '';
    }
  }

// 时间格式转换函数
  public formatDate(time, fmt) {
    const date = new Date(time);
    if (time === null || time === '') {
      return null;
    }
    if (/(y+)/.test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 -
        RegExp.$1.length));
    }
    const o = {
      'M+': date.getMonth() + 1,
      'd+': date.getDate(),
      'h+': date.getHours(),
      'm+': date.getMinutes(),
      's+': date.getSeconds()
    };
    for (const k in o) {
      if (new RegExp(`(${k})`).test(fmt)) {
        const str = o[k] + '';
        fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? str :
          this.padLeftZero(str));
      }
    }
    if (fmt !== '1970-01-01 08:00:00') {
      return fmt;
    } else {
      return null;
    }
  }

  padLeftZero(str) {
    return ('00' + str).substr(str.length);
  }

  // 判断是否为0~1之间
  public numRange(string: string) {
    const a = /^[0-1]$|^0\.[0-9]+$/; // 0~1之间
    const b = /^[0-9]+([.][0-9]{1}){0,1}$/; // 数字，要求最多一位小数
    if (b.test(string)) {
      if (a.test(string)) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }

  // 判断是否为非负整数
  public isPositiveNumber(string: string) {
    const reg = /^\d+$/; // 非负整数
    if (reg.test(string)) {
      return true;
    } else {
      return false;
    }
  }

  // 判断车牌号是否合法
  public isCar(string: string) {
    const carNum = /^[冀豫云辽黑湘皖鲁苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼渝京津沪新京军空海北沈兰济南广成使领A-Z]{1}[a-zA-Z0-9]{5}[a-zA-Z0-9挂学警港澳]{1}$/;
    if (carNum.test(string)) {
      return true;
    } else {
      return false;
    }
  }
}
