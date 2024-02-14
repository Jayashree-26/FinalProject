import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JewelRateService {
  private ratesUrl = 'assets/jewel-rates.properties';

  constructor(private http: HttpClient) { }

  getJewelRates(): Promise<any> {
    return this.http.get(this.ratesUrl, { responseType: 'text' })
      .toPromise()
      .then(data => {
        if (data) {
          return this.parseProperties(data);
        } else {
          throw new Error('Data is undefined or empty.');
        }
      })
      .catch(error => {
        console.error('Error fetching jewel rates:', error);
        throw error;
      });
  }


  private parseProperties(data: string): { [key: string]: number } {
    const properties: { [key: string]: number } = {};
    const lines = data.split('\n');
    lines.forEach((line) => {
      const keyValue = line.split('=');
      if (keyValue.length === 2) {
        const key = keyValue[0].trim();
        const value = parseInt(keyValue[1].trim(), 10);
        properties[key] = value;
      }
    });
    return properties;
  }


}
