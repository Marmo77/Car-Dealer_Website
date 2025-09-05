import React, { useEffect } from "react";
import { contactInfo } from "@/data/contact";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import ContactForm from "./ui/ContactForm";
import { useLocation } from "react-router-dom";

const Contact = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el && "scrollIntoView" in el) {
        (el as HTMLElement).scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  }, [location.hash]);

  return (
    <section className="mx-auto w-full">
      {/* Header */}
      <div className="mt-18">
        <div className="text-center mb-24 max-w-7xl mx-auto px-6 sm:px-12">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Contact Us
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have questions about our vehicles or services? Our expert team is
            here to help. Reach out to us and we'll get back to you as soon as
            possible.
          </p>
        </div>
      </div>
      <div
        className="max-w-7xl scroll-mt-16 mx-auto py-12 px-4"
        id="get-in-touch"
      >
        <div className="grid lg:grid-cols-3 gap-12 grid-cols-1">
          {/* # CONTACT INFORMATIONS # */}
          <div>
            <div className="block pb-6 text-center">
              <h3 className="min-lg:text-start font-raleway mb-3  text-2xl font-bold">
                Get in Touch
              </h3>
              <p className="text-gray-700 min-lg:text-start font-montserrat px-1">
                We're committed to providing exceptional service. Contact us
                through any of the following methods:
              </p>
            </div>
            {/* -- map a contact.ts elements in blocks */}
            <div className="flex flex-col gap-6">
              {contactInfo.map((item, index) => {
                const Icon = item.icon;

                return (
                  <Card
                    key={index}
                    className="hover:shadow-lg transition-shadow"
                  >
                    <CardContent className="px-8">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Icon className="h-6 w-6 text-blue-600" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold  mb-2 font-montserrat">
                            {item.title}
                          </h3>
                          <div className="space-y-1 mb-3">
                            {item.details.map((items) => (
                              <div className="fle">
                                <span className="text-gray-700 hover:text-gray-900">
                                  {items}
                                </span>
                              </div>
                            ))}
                          </div>
                          <Button
                            variant="outline"
                            size="sm"
                            className="text-blue-600 border-blue-600 hover:bg-blue-600 hover:text-white"
                          >
                            {item.action}
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
          {/* # CONTACT FORM # */}
          <div className="lg:col-span-2">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
