import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShieldCheck, Building2, Hotel, Users, Phone } from "lucide-react";

export default function Website() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <section className="bg-black text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          AnchorPoint Security Group
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Your Foundation for Safety Across Philadelphia & South Jersey
        </p>
        <Button className="text-lg px-6 py-3">Request a Quote</Button>
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
                Professional, customer-service driven officers for hotels,
                restaurants, and nightlife venues.
              </p>
            </CardContent>
          </Card>

          <Card className="rounded-2xl shadow">
            <CardContent className="p-6 text-center">
              <Building2 className="mx-auto mb-4" size={40} />
              <h3 className="font-semibold text-xl mb-2">Corporate & Residential</h3>
              <p>
                Reliable security for office parks, residential communities, and
                mixed-use properties.
              </p>
            </CardContent>
          </Card>

          <Card className="rounded-2xl shadow">
            <CardContent className="p-6 text-center">
              <Users className="mx-auto mb-4" size={40} />
              <h3 className="font-semibold text-xl mb-2">Event Security</h3>
              <p>
                Scalable security teams for high-traffic events including
                festivals and major sporting events.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* About */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Why AnchorPoint?</h2>
          <p className="text-lg">
            AnchorPoint Security Group combines professional security expertise
            with hospitality-driven service. Our officers are trained in
            de-escalation, customer interaction, and proactive risk management
            to ensure safety without disrupting the guest experience.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-900 text-white py-16 px-6 text-center">
        <ShieldCheck className="mx-auto mb-4" size={48} />
        <h2 className="text-3xl font-bold mb-4">
          Ready to Secure Your Property?
        </h2>
        <p className="mb-6">
          Contact us today to discuss your security needs.
        </p>
        <Button className="text-lg px-6 py-3">Contact Us</Button>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-6 text-center">
        <p>© {new Date().getFullYear()} AnchorPoint Security Group</p>
        <p className="flex items-center justify-center gap-2 mt-2">
          <Phone size={16} /> (XXX) XXX-XXXX
        </p>
      </footer>
    </div>
  );
}
