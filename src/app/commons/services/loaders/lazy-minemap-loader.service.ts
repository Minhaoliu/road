import { Injectable } from '@angular/core';
import { MinemapLoaderService } from './minemap-loader.service';
import { DocumentRef, WindowRef } from '../utils/browser-globals';

import { environment } from '../../../../environments/environment';



@Injectable()
export class LazyMinemapLoaderService extends MinemapLoaderService {

  protected _scriptLoadingPromise: Promise<void>;

  constructor(
    private _windowRef: WindowRef,
    private _documentRef: DocumentRef
  ) {
    super();
  }

  load(): Promise<void> {
    const window = <any>this._windowRef.getNativeWindow();


    if ( window.minemap ) {
      return Promise.resolve();
    }

    if (this._scriptLoadingPromise) {
      return this._scriptLoadingPromise;
    }

    const script = this._documentRef.getNativeDocument().createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.defer = true;

    // script.src = this._getScriptSrc(this.callbackName);
    // script.src = (window as any).conf().minemapSrc;
    // script.src = '//218.22.29.213:18060/minemapapi/v2.0.0/minemap.js';
    script.src = 'http://api.map.baidu.com/api?v=2.0&ak=HDSpCnDXBBf6Zl6oUguvtW5t9Sq9GDcO';


    this._assignScriptLoadingPromise(script);

    this._documentRef.getNativeDocument().body.appendChild(script);

    return this._scriptLoadingPromise;

  }

  private _assignScriptLoadingPromise(scriptElem: HTMLElement) {
    this._scriptLoadingPromise = new Promise<void>((resolve: Function, reject: Function) => {
      // (<any>this._windowRef.getNativeWindow())[this.callbackName] = () => {
      //   resolve();
      // };
      scriptElem.onload = () => {
        resolve();
      }

      scriptElem.onerror = (error: Event) => {
        reject(error);
      };
    });
  }



}
