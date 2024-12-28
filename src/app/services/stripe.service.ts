import { Injectable } from '@angular/core';
import { loadStripe, Stripe } from '@stripe/stripe-js';

@Injectable({
  providedIn: 'root',
})
export class StripeService {
  private stripePromise: Promise<Stripe | null>;

  constructor() {
    // Clé publique Stripe (remplacez-la par votre clé réelle)
    this.stripePromise = loadStripe('pk_test_51QUBpQRojG7U4BOuULp01cDJZ8Yry2oSsj24Ls9WlP36TIPIXk0rhoQGNYwqKnEn6aW5SBDeX6HHK3TggGTIQC8000k3ZIXXTB');
  }

  async getStripe() {
    return this.stripePromise;
  }

  async redirectToCheckout(sessionId: string) {
    const stripe = await this.getStripe();
    if (stripe) {
      return stripe.redirectToCheckout({ sessionId });
    } else {
      console.error('Stripe.js n\'a pas pu être chargé.');
      return Promise.resolve({ error: { message: 'Stripe.js non chargé' } });
    }
  }

}
