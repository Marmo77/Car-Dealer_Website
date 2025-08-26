@ -0,0 +1,165 @@
import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./card";
import { CircleCheckBig, Send } from "lucide-react";
import { Button } from "./button";
import { Label } from "./label";
import { Input } from "./input";

const ContactForm = () => {
  //   const [name, setName] = useState<string>("");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    questionType: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      // Reset form after showing success
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
          questionType: "",
        });
      }, 10000);
    }, 1500);
  };

  return (
    <Card className="rounded-2xl w-full px-4">
      <CardHeader className="font-lexend">
        <CardTitle className="text-2xl">Send us a Message</CardTitle>
        <CardDescription className="px-2 text-base font-light">
          If you have any question, fill out the form below and we'll respond
          within 24 hours.
        </CardDescription>
      </CardHeader>
      <CardContent>
        {isSubmitted ? (
          <div className="flex font-montserrat text-center flex-col items-center py-6">
            <CircleCheckBig className="text-green-500 w-18 h-18 mb-4" />
            <h1 className="text-2xl font-semibold py-2">
              Message Sent Successfully!
            </h1>
            <p>
              Thank you for contacting us. We will respond within 24 hours at
              the email address you provided (
              <span className="italic text-blue-400">{formData.email}</span>)
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 font-lexend sm:grid-cols-2 space-y-6 gap-5">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name *</Label>
                <Input
                  type="text"
                  id="firstName"
                  required
                  className="px-2 shadow-md"
                  placeholder="Enter your first name"
                  value={formData.firstName}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      firstName: e.target.value,
                    }))
                  }
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name *</Label>
                <Input
                  type="text"
                  id="lastName"
                  required
                  className="px-2 shadow-md"
                  placeholder="Enter your last name"
                  value={formData.lastName}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      lastName: e.target.value,
                    }))
                  }
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <Input
                  type="email"
                  id="email"
                  required
                  className="px-2 shadow-md"
                  placeholder="Enter your email address"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      email: e.target.value,
                    }))
                  }
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone *</Label>
                <Input
                  type="tel"
                  id="phone"
                  required
                  placeholder="Enter your phone number"
                  className="px-2 shadow-md"
                />
              </div>
            </div>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3"
              size="lg"
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                  Sending Message...
                </>
              ) : (
                <>
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </>
              )}
            </Button>
          </form>
        )}
      </CardContent>
    </Card>
  );
};

export default ContactForm;