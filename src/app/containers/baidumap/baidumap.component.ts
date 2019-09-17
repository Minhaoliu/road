import { Component, OnInit } from '@angular/core';
import { MinemapLoaderService } from 'src/app/commons/services/loaders/minemap-loader.service';

import { WindowRef } from 'src/app/commons/services/utils/browser-globals';
import { NzModalService } from 'ng-zorro-antd';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-baidumap',
  templateUrl: './baidumap.component.html',
  styleUrls: ['./baidumap.component.less']
})
export class BaidumapComponent implements OnInit {

  window;

  constructor(
    private _minemapLoaderService: MinemapLoaderService,
    private _windowRef: WindowRef,
  ) {
    this.window = this._windowRef.getNativeWindow();

  }

  ngOnInit() {
    // 地图加载
    this._minemapLoaderService
      .load()
      .then(() => {
        return this.initMap();
      })
      .then(() => {

      });
  }

  initMap() {
    // 百度地图API功能
    const that = this;
    var map = new this.window.BMap.Map('allmap');    // 创建Map实例
    map.centerAndZoom(new that.window.BMap.Point(116.404, 39.915), 11);  // 初始化地图,设置中心点坐标和地图级别
    //添加地图类型控件
    var opts = {offset: new that.window.BMap.Size(20, 50)}
    map.addControl(new that.window.BMap.PanoramaControl(opts));
    map.addControl(new that.window.BMap.MapTypeControl({
      mapTypes: [
        that.window.BMAP_NORMAL_MAP,
        that.window.BMAP_HYBRID_MAP
      ]
    }));
    map.setCurrentCity('北京');          // 设置地图显示的城市 此项是必须设置的
    map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
    //覆盖区域图层测试
    // map.addTileLayer(new that.window.BMap.PanormaCoverageLayer());

    // var stCtrl = new that.window.BMap.PanoramaControl(); //构造全景控件
    // stCtrl.setOffset(new that.window.BMap.Size(20, 20));
    // map.addControl(stCtrl); //添加全景控件

  }
}
