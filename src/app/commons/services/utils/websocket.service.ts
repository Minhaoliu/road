import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

@Injectable()
export class WebsocketService {
  public ws: WebSocket;

  createWebSocket(url: string): Observable<any> {
    this.ws = new WebSocket(url);
    return new Observable((observer) => {
      this.ws.onmessage = (e) => {
        observer.next(e.data);
      };
      this.ws.onerror = (e) => observer.error(e);
      this.ws.onclose = () => observer.complete();
    });
  }

  sendMessage(msg: any) {
    this.ws.send(JSON.stringify(msg));
  }

  closeWebSocket() {
    this.ws.close();
  }
}
