import { Injectable } from '@angular/core';

@Injectable()
export class PreviousurlService {

constructor() { }
private previousUrl: string='';
setPreviousUrl(url:string):void{
  this.previousUrl=url;
}

getPreviousUrl():string{
  return this.previousUrl;
}

}
