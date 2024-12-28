import { Component } from '@angular/core';
import { Stripe, StripeCardElement, StripeElements } from '@stripe/stripe-js';
import { StripeService } from 'src/app/services/stripe.service';

@Component({
  selector: 'app-payement',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PayementComponent {

  paymentLink = 'https://buy.stripe.com/test_dR6bKygZkfS66Iw4gg'; // Votre lien de paiement

  redirectToPayment() {
    window.location.href = this.paymentLink;
  }
}
