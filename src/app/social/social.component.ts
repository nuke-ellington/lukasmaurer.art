import { Component, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalService, ToastService } from '@siemens/ix-angular';

import { MailService } from '../services/mail.service';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.scss']
})
export class SocialComponent {
    @ViewChild('subscribeForm', { read: TemplateRef }) subscribeRef!: TemplateRef<any>;

    subForm = new FormGroup({
	email: new FormControl<string>('', [Validators.required, Validators.email]),
	type: new FormControl<string>('collector'),
	_subject: new FormControl<string>('Newsletter'),
	_honeypot: new FormControl<string>(''),
    });

    constructor(
	private readonly mailService: MailService,
	private readonly modalService: ModalService,
	private readonly toastService: ToastService,
    ) {}

    openLink(url: string) {
	window.open(url, '_blank');
    }

    async subscribe() {
	const instance = await this.modalService.open({
	    content: this.subscribeRef,
	    title: '',
	    size: 'lg',
	});

	instance.onClose.on(result => {
	    if (result === 'Submit') {

		if (this.subForm.valid) {
		    this.toastService.show({
			type: 'success',
			message: 'Thank you for subscribing to our newsletter.\nYou will be forwarded for confirmation.',
		    });

		    this.mailService.send(this.subForm.value).subscribe(response => {
			window.location.href = 'https://mailthis.to/confirm';
		    });

		} else {
		    this.toastService.show({
			type: 'error',
			message: 'Please provide a valid email address.',
		    });
		}
	    }
	});
    }


}
