import Section from "@/components/layout/Section"
import { Check, Euro, Users } from "lucide-react"
import { Link } from "react-router"

/* Placeholder Markup for Stripe Payment Features */

export default function Premium() {
  return (
    <Section id="pricing">
      <h2 className="mb-6 text-center text-4xl font-bold tracking-tight sm:text-5xl">Go Premium</h2>
      <p className="text-muted-foreground mx-auto mb-12 max-w-2xl text-center text-lg">
        Simple pricing. No hidden fees. Cancel anytime.
      </p>
      <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-2">
        {/* Starter Plan */}
        <div className="bg-card text-card-foreground mx-auto flex w-full max-w-md flex-col rounded-xl border p-6 shadow-sm transition-shadow hover:shadow-md">
          <h3 className="mb-4 text-xl font-semibold">Starter</h3>
          <p className="text-muted-foreground mb-4">For hobby projects or personal use.</p>
          <div className="mb-6 flex items-center gap-2 text-4xl font-bold">
            <Users className="text-muted-foreground mr-1 h-5 w-5" />
            <span>Free</span>
          </div>
          <ul className="text-muted-foreground mb-6 space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <Check className="text-primary h-4 w-4" /> Access to public articles
            </li>
            <li className="flex items-center gap-2">
              <Check className="text-primary h-4 w-4" /> Commenting
            </li>
            <li className="flex items-center gap-2">
              <Check className="text-primary h-4 w-4" /> Community support
            </li>
          </ul>
          <Link
            to="/registration"
            className="bg-secondary text-secondary-foreground hover:bg-secondary/90 mt-auto rounded-md px-4 py-2 text-center font-semibold transition-colors"
          >
            Get Started
          </Link>
        </div>

        {/* Pro Plan */}
        <div className="bg-card text-card-foreground mx-auto flex w-full max-w-md flex-col rounded-xl border p-6 shadow-sm transition-shadow hover:shadow-md">
          <h3 className="mb-4 text-xl font-semibold">Pro</h3>
          <p className="text-muted-foreground mb-4">Ideal for freelancers and small teams.</p>
          <div className="mb-6 flex items-center gap-2 text-4xl font-bold">
            <Euro className="text-muted-foreground mr-1 h-5 w-5" />
            <span>9</span>
            <span className="text-base font-medium">/month</span>
          </div>
          <ul className="text-muted-foreground mb-6 space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <Check className="text-primary h-4 w-4" /> All Starter features
            </li>
            <li className="flex items-center gap-2">
              <Check className="text-primary h-4 w-4" /> Write & publish articles
            </li>
            <li className="flex items-center gap-2">
              <Check className="text-primary h-4 w-4" /> Access analytics
            </li>
            <li className="flex items-center gap-2">
              <Check className="text-primary h-4 w-4" /> Email support
            </li>
          </ul>
          <Link
            to="/checkout"
            className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-md px-4 py-2 text-center font-semibold transition-colors"
          >
            Upgrade to Pro
          </Link>
        </div>
      </div>
    </Section>
  )
}
