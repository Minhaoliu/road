import {Injectable} from '@angular/core';

@Injectable()
export abstract class MinemapLoaderService {
  abstract load(): Promise<void>;
}
