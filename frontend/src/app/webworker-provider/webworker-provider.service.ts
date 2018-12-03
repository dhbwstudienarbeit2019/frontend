import { Injectable } from '@angular/core';
import { ResultMessage } from './message.interface';

@Injectable({
  providedIn: 'root'
})
export class WebworkerProviderService {

  constructor() {
  }


  public startWebworker<T>(file: string) {
    const worker = new Worker(file);

    const resultPromise = new Promise((resolve, reject) =>
      worker.addEventListener('message', message => {
        const data = <ResultMessage>(message.data);
        console.log(data);
        if (data.status === 'error') {
          reject(data);
        }
        if (data.status === 'finished') {
          resolve(data.result);
        }
      }));
    const job = <WebworkerJob<T>>{
      abort: () => worker.terminate(),
      result: resultPromise,
      send: (data) => worker.postMessage(data),
      file
    };
    return job;
  }
}

interface WebworkerJob<T> {
  file: string;
  send: (data: any) => void;
  result: Promise<T>;
  abort: () => {};
}

