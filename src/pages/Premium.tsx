export default function Premium() {
  /* Placeholder Layout for Stripe Payment Features */
  return (
    <section id="pricing" className="container mx-auto mt-16 px-5 sm:px-6 lg:px-8">
      <h2 className="mb-6 text-center text-4xl font-bold tracking-tight sm:text-5xl">
        Choose Your Plan
      </h2>
      <p className="text-muted-foreground mx-auto mb-12 max-w-2xl text-center text-lg">
        Simple pricing. No hidden fees. Cancel anytime.
      </p>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div className="bg-card text-card-foreground flex flex-col rounded-xl border p-6 shadow-sm transition-shadow hover:shadow-md">
          <h3 className="mb-4 text-xl font-semibold">Starter</h3>
          <p className="text-muted-foreground mb-4">For hobby projects or personal use.</p>
          <div className="mb-6 text-4xl font-bold">Free</div>
          <ul className="text-muted-foreground mb-6 space-y-2 text-sm">
            <li>✓ Access to public articles</li>
            <li>✓ Commenting</li>
            <li>✓ Community support</li>
          </ul>
          <a
            href="/registration"
            className="bg-secondary text-secondary-foreground hover:bg-secondary/90 mt-auto rounded-md px-4 py-2 text-center font-semibold transition-colors"
          >
            Get Started
          </a>
        </div>

        <div className="bg-card text-card-foreground flex flex-col rounded-xl border p-6 shadow-sm transition-shadow hover:shadow-md">
          <h3 className="mb-4 text-xl font-semibold">Pro</h3>
          <p className="text-muted-foreground mb-4">Ideal for freelancers and small teams.</p>
          <div className="mb-6 text-4xl font-bold">
            €9<span className="text-base font-medium">/month</span>
          </div>
          <ul className="text-muted-foreground mb-6 space-y-2 text-sm">
            <li>✓ All Starter features</li>
            <li>✓ Write & publish articles</li>
            <li>✓ Access analytics</li>
            <li>✓ Email support</li>
          </ul>
          <a
            href="/checkout"
            className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-md px-4 py-2 text-center font-semibold transition-colors"
          >
            Upgrade to Pro
          </a>
        </div>
      </div>
    </section>
  )
}
