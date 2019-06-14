import { Injectable } from '@angular/core';
import { HttpHandler, HttpInterceptor, HttpErrorResponse, HttpEvent, HttpRequest, HttpResponse} from '@angular/common/http';
import { Router} from '@angular/router';
import { Observable, throwError, of } from 'rxjs';
import { catchError, mergeMap } from 'rxjs/operators';

import { environment } from '../../environments/environment';

@Injectable()
export class DefaultInterceptor implements HttpInterceptor {
    constructor(private router: Router) {

    }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // 统一加上服务端前缀
        let urls = req.url;
        if (!urls.startsWith('https://') && !urls.startsWith('http://')) {
            urls = environment.baseUrl + urls;
        }
        const newReq = req.clone({
            url: urls,
        });
        console.log(newReq.url);
        return next.handle(newReq).pipe(
            mergeMap((event: any) => {
                return of(event);
            }),
            catchError((err: HttpErrorResponse) => this.handleData(err))
        );
    }
    private handleData(
        event: HttpResponse<any> | HttpErrorResponse,
      ): Observable<any> {
        // 业务处理：一些通用操作
        switch (event.status) {
          case 401:
            console.log('not login') ;
            this.router.navigate(['/']);
            return of(event) ;
          default:
        }
        return throwError(event) ;
      }
}
