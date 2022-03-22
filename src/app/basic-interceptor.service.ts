import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BasicInterceptorService {

  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log("In basic Interceptor")
    let basicRequest=req.clone({
      setHeaders:{Authorization:'Basic '+btoa('zensar@gmail.com:zensar')}

    })
    return next.handle(basicRequest);
  }
}

}
