import { Component, OnInit } from '@angular/core';
import { MinemapLoaderService } from 'src/app/commons/services/loaders/minemap-loader.service';

import { WindowRef } from 'src/app/commons/services/utils/browser-globals';
import { NzModalService } from 'ng-zorro-antd';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.less']
})
export class MapComponent implements OnInit {

  public window;
  private map;
  echartIntance; // echar实例对象
  option;
  popup;
  signalStatus = {
    online: 800,
    outline: 49,
    fault: 0
  };
  chartValue ;
  public marker;
  modal; //弹窗对象
  searchValue = '';
  singleOption;
  private mapConfig = {
    zoom: 11,
    pitch: 0,
    maxZoom: 17,
    minZoom: 3
  };
  index = 0;
  typeIndex = 0;
  dataSet;
  ServerPeriodList = [
    {
      text: "早高峰",
      isSelect: true
    },
    {
      text: "晚高峰",
      isSelect: false
    },
    {
      text: "平峰",
      isSelect: false
    }
  ];
  mapData = [];
  chartData;
  isHidden = true;

  constructor(
    private _minemapLoaderService: MinemapLoaderService,
    private _windowRef: WindowRef,
  ) {
    this.window = this._windowRef.getNativeWindow();

   }

  ngOnInit() {
    const that = this;
    // 地图加载
    this._minemapLoaderService
      .load()
      .then(() => {
        return that.initMap();
      })
      .then(() => {

      });
    that.initPage();
  }

  initPage() {

  }

  public initMap(): Promise<any> {
    const that = this;
    return new Promise((resolve, reject) => {
      that.window.minemap.domainUrl = (environment as any).map.domainUrl;
      that.window.minemap.dataDomainUrl = (environment as any).map.dataDomainUrl;
      that.window.minemap.spriteUrl = (environment as any).map.spriteUrl;
      that.window.minemap.serviceUrl = (environment as any).map.serviceUrl;
      that.window.minemap.accessToken = (environment as any).map.deepAccessToken;
      that.window.minemap.solution = (environment as any).map.deepSolution;
      that.map = new that.window.minemap.Map({
        container: "map",
        style: (environment as any).map.deepStyle,
        center: [117.2848361748944, 31.800321849958962],
        zoom: that.mapConfig.zoom,
        pitch: that.mapConfig.pitch,
        maxZoom: that.mapConfig.maxZoom,
        minZoom: that.mapConfig.minZoom
      });
      that.map.repaint = true;
      that.map.on("load", function() {
        resolve(true);
      });
    })
  }
}
