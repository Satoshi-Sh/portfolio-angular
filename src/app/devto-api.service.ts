import { Injectable,inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DevtoApiService {
  http = inject(HttpClient)
  getBlog(): Observable<any>{
    const url = "https://dev.to/api/articles?username=satoshi-sh&per_page=1000"  
    return this.http.get(url);
  }
}
