import { Injectable } from '@angular/core';
import { ResultMessage } from './message.interface';

@Injectable({
  providedIn: 'root'
})
export class WebworkerProviderService {

  constructor() {
  }

  public createWorker(workerUrl) {
    let worker = null;
    try {
      let blob;
      try {
        blob = new Blob(['importScripts(\'' + workerUrl + '\');'], { 'type': 'application/javascript' });
      } catch (e1) {
        const blobBuilder = new ((window as any).BlobBuilder || (window as any).WebKitBlobBuilder || (window as any).MozBlobBuilder)();
        blobBuilder.append('importScripts(\'' + workerUrl + '\');');
        blob = blobBuilder.getBlob('application/javascript');
      }
      const url = window.URL || (window as any).webkitURL;
      const blobUrl = url.createObjectURL(blob);
      worker = new Worker(blobUrl);
    } catch (e2) {
    }
    return worker;
  }
  public startWebworker<T>(file: string) {
    const worker = (file.startsWith('http')) ? this.createWorker(file) : new Worker(file);

    const resultPromise = new Promise((resolve, reject) =>
      worker.addEventListener('message', message => {
        const data = <ResultMessage>(message.data);
        console.log({ 'receivedDataFromWebworker': data });
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

