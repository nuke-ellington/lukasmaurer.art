import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastService } from '@siemens/ix-angular';

import { MailService } from '../services/mail.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
    contactForm = new FormGroup({
	name: new FormControl<string>(''),
	mail: new FormControl<string>('', [Validators.email]),
	message: new FormControl<string>(''),
	_subject: new FormControl<string>('Message'),
	_honeypot: new FormControl<string>(''),
    });

    constructor(
	private readonly mailService: MailService,
	private readonly toastService: ToastService,
    ) {}

    submit(e: Event) {
	e.preventDefault();

	if (this.contactForm.invalid) {
	    return;
	}

	this.toastService.show({
	    icon: 'info',
	    message: 'You will be forwarded for confirmation.',
	});

	this.mailService.send(this.contactForm.value).subscribe(response => {
	    window.location.href = 'https://mailthis.to/confirm';
	});
    }
}
