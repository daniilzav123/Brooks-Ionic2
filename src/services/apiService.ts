import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Spinner } from './spinnerService';

const API_BASEURL = 'http://172.20.11.60/Brooks/public/';

@Injectable()
export class ApiService {

  constructor(
    private http: Http,
    private spinner: Spinner
  ) {

  }

  public get(url: string, data: any, loadingText: string) {
    url = API_BASEURL + url;
    let params = this.ObjectToURLEncoded(data);
    if (params !== '')
      url += ('?' + params);

    let header_json: any = {
      'Content-Type': 'application/json'
    };

    let headers = new Headers(header_json);
    let options = new RequestOptions({
      headers: headers
    });
    this.spinner.show(loadingText);

    return this.http.get(url, options)
      .map((res: Response) => {
        return this.extractData(res);
      })
      .catch((error: any) => {
        return this.handleError(error);
      });
  }

  public post(url: string, data: any, loadingText: string) {
    url = API_BASEURL + url;
    let header_json: any = {};
    header_json['Content-Type'] = 'application/json';

    let headers = new Headers(header_json);
    let options = new RequestOptions({
      headers: headers
    });
    this.spinner.show(loadingText);

    return this.http.post(url, data, options)
      .map((res: Response) => {
        return this.extractData(res);
      })
      .catch((error: any) => {
        return this.handleError(error);
      });
  }

  public put(url: string, data: any, loadingText: string) {
    url = API_BASEURL + url;
    let header_json: any = {};
    header_json['Content-Type'] = 'application/json';

    let headers = new Headers(header_json);
    let options = new RequestOptions({
      headers: headers
    });
    this.spinner.show(loadingText);

    return this.http.put(url, data, options)
      .map((res: Response) => {
        return this.extractData(res);
      })
      .catch((error: any) => {
        return this.handleError(error);
      });
  }

  public loadLocalJSON(path: string) {
    return this.http.get(path)
      .map((res: Response) => {
        return this.extractData(res);
      })
      .catch((error: any) => {
        return this.handleError(error);
      });
  }

  private ObjectToURLEncoded(json_data: any) {
    var encoded_data = "";
    for (var p in json_data) {
      encoded_data = encoded_data + p + "=" + encodeURIComponent(json_data[p]) + "&";
    }

    if (encoded_data === "")
      return "";
    else
      return encoded_data.substr(0, encoded_data.length - 1);
  }

  private extractData(res: Response) {
    this.spinner.hide();
    return res.json();
  }

  private handleError(error: any) {
    this.spinner.hide();
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message : (error.status ? (error.status + ' - ' + error.statusText) : 'Server error');
    console.error(errMsg); // log to console instead

    error.body = JSON.parse(error._body);
    return Observable.throw(error);
  }

}
