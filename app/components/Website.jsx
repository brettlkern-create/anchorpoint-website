"use client";
import { ShieldCheck, Building2, Hotel, Users, Phone, Mail } from "lucide-react";
const Card = ({ children }) => (
  <div className="rounded-2xl shadow bg-white">{children}</div>
);

const CardContent = ({ children }) => (
  <div className="p-6 text-center">{children}</div>
);

const Button = ({ children, ...props }) => (
  <button
    className="bg-black text-white px-6 py-3 rounded-xl hover:opacity-90"
    {...props}
  >
    {children}
  </button>
);
export default function Website() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">

      {/* Hero Section */}
      <section className="bg-black text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          AnchorPoint Security Group
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Professional Security for Hotels, Residential Buildings & Events
        </p>

        <div className="flex justify-center gap-4 flex-wrap">
          <Button
            className="text-lg px-6 py-3"
            onClick={() => (window.location.href = "tel:2155550123")}
          >
            Call Now
          </Button>

          <Button
            variant="outline"
            className="text-lg px-6 py-3 border-white text-white"
            onClick={() => document.getElementById("quote").scrollIntoView()}
          >
            Request Quote
          </Button>
        </div>

        {/* Trust Badges */}
        <div className="mt-8 text-sm space-y-1">
          <p>✔ Licensed & Insured</p>
          <p>✔ Hospitality-Trained Officers</p>
          <p>✔ 24/7 Coverage Available</p>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Our Services</h2>

        <div className="grid md:grid-cols-3 gap-6">
          <Card className="rounded-2xl shadow">
            <CardContent className="p-6 text-center">
              <Hotel className="mx-auto mb-4" size={40} />
              <h3 className="font-semibold text-xl mb-2">Hospitality Security</h3>
              <p>
                Customer-service focused officers trained for hotels,
                restaurants, and nightlife venues.
              </p>
            </CardContent>
          </Card>

          <Card className="rounded-2xl shadow">
            <CardContent className="p-6 text-center">
              <Building2 className="mx-auto mb-4" size={40} />
              <h3 className="font-semibold text-xl mb-2">
                Corporate & Residential
              </h3>
              <p>
                Reliable protection for office parks, apartment communities,
                and mixed-use properties.
              </p>
            </CardContent>
          </Card>

          <Card className="rounded-2xl shadow">
            <CardContent className="p-6 text-center">
              <Users className="mx-auto mb-4" size={40} />
              <h3 className="font-semibold text-xl mb-2">Event Security</h3>
              <p>
                Scalable teams for high-traffic events, festivals, and major
                sporting events.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* About */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Why AnchorPoint?</h2>

          <p className="text-lg mb-6">
            We combine professional security expertise with
            hospitality-driven service. Our officers are trained in
            de-escalation, customer interaction, and proactive risk
            management—keeping your property safe without disrupting the
            experience.
          </p>

          <p className="font-semibold">
            Trusted by properties across Philadelphia & South Jersey
          </p>
        </div>
      </section>

      {/* Quote Form */}
      <section id="quote" className="bg-gray-100 py-16 px-6">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Request a Free Security Assessment
          </h2>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 border rounded"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full p-3 border rounded"
            />
            <input
              type="text"
              placeholder="Property / Business"
              className="w-full p-3 border rounded"
            />
            <textarea
              placeholder="Tell us about your security needs"
              className="w-full p-3 border rounded"
              rows="4"
            />

            <Button className="w-full text-lg py-3">
              Submit Request
            </Button>
          </form>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-900 text-white py-16 px-6 text-center">
        <ShieldCheck className="mx-auto mb-4" size={48} />

        <h2 className="text-3xl font-bold mb-4">
          Ready to Secure Your Property?
        </h2>

        <p className="mb-6">
          Call us today for immediate service or a custom security plan.
        </p>

        <Button
          className="text-lg px-6 py-3"
          onClick={() => (window.location.href = "tel:2155550123")}
        >
          Call Now
        </Button>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-6 text-center">
        <p>© {new Date().getFullYear()} AnchorPoint Security Group</p>

        <p className="flex items-center justify-center gap-2 mt-2">
          <Phone size={16} /> (215) 555-0123
        </p>

        <p className="flex items-center justify-center gap-2 mt-2">
          <Mail size={16} /> info@anchorpointsecurity.com
        </p>

        <p className="mt-2 text-sm">
          Serving Philadelphia & South Jersey
        </p>
      </footer>
    </div>
  );
}
