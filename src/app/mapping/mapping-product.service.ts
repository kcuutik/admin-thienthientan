import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from './product';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class MappingProductService {
// Define API
apiURL = 'http://localhost:5000/api';
constructor(private http: HttpClient) { }
/*========================================
CRUD Methods for consuming RESTful API
=========================================*/
// Http Options
httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
        })
}  
// HttpClient API get() method => Fetch employees list
getProducts(): Observable<Product> {
    return this.http.get<Product>(this.apiURL + '/Products/GetAlls')
    .pipe(
    retry(1),
        catchError(this.handleError)
    )
}

// HttpClient API get() method => Fetch employee
getProduct(id): Observable<Product> {
return this.http.get<Product>(this.apiURL + '/Products/GetById/' + id)
.pipe(
retry(1),
catchError(this.handleError)
)
}  
// HttpClient API post() method => Create employee
createProduct(product): Observable<Product> {
return this.http.post<Product>(this.apiURL + '/Products/Insert', JSON.stringify(product), this.httpOptions)
.pipe(
retry(1),
catchError(this.handleError)
)
}  
// HttpClient API put() method => Update employee
updateProduct(id, product): Observable<Product> {
    
return this.http.put<Product>(this.apiURL + '/Products/Update', product, this.httpOptions)
.pipe(
retry(1),
catchError(this.handleError)
)
}
// HttpClient API delete() method => Delete employee
deleteProduct(id){
return this.http.delete<Product>(this.apiURL + '/Products/Delete' + id, this.httpOptions)
.pipe(
retry(1),
catchError(this.handleError)
)
}
// Error handling 
handleError(error) {
let errorMessage = '';
if(error.error instanceof ErrorEvent) {
// Get client-side error
errorMessage = error.error.message;
} else {
// Get server-side error
errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
}
window.alert(errorMessage);
return throwError(errorMessage);
}
}