import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { Urls } from './urls';

@Injectable({
  providedIn: 'root'
})
export class MailService {

    constructor(private readonly httpClient: HttpClient) { }

    send(payload: any) {
	return this.httpClient.post(Urls.FORMS_URL, payload, { responseType: 'text'  }).pipe(
	    map(
		(response) => { return response; },
	        (error: any) => { return error }
	    ),

	)
    }
}
