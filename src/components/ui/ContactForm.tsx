import React, { useEffect, useState } from "react";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "./textarea";
import { handleContactForm } from "@/appwrite";

const questionTypes = [
  { value: "car_information", label: "Vehicle Information" },
  { value: "availability", label: "Vehicle Availability" },
  { value: "financing", label: "Financing & Payment Options" },
  { value: "vehicle_financing", label: "Vehicle Financing" },
  { value: "trade_in", label: "Trade-In Appraisal" },
  { value: "test_drive", label: "Schedule a Test Drive" },
  { value: "warranty_service", label: "Warranty & Service Plans" },
  { value: "parts_and_accessories", label: "Parts & Accessories" },
  { value: "vehicle_history", label: "Vehicle History & Condition" },
  { value: "other", label: "Other" },
];

const ContactForm = ({
  questionFooter,
}: {
  questionFooter: string | null | undefined;
}) => {
  //   const [name, setName] = useState<string>("");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    questionType: questionFooter || "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  useEffect(() => {
    console.log(questionFooter);
    if (
      questionFooter &&
      questionTypes.some((item) => item.value === questionFooter)
    ) {
      if (questionFooter !== "") {
        setFormData((prev) => ({
          ...prev,
          questionType: questionFooter,
        }));
      } else {
        setFormData((prev) => ({
          ...prev,
          questionType: "other",
        }));
      }
    }
  }, [questionFooter]);

  useEffect(() => {
    if (questionFooter !== formData.questionType) {
      const params = new URLSearchParams(location.search);
      params.set("question", formData.questionType);
      const newUrl = `${location.pathname}?${params.toString()}`;
      window.history.replaceState(null, "", newUrl);
    }
  }, [formData.questionType]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      // Data submission to appwrite Database
      handleContactForm(formData);

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
            <div className="grid grid-cols-1 mb-6 font-lexend sm:grid-cols-2 gap-5">
              {/* FIRST NAME */}
              <div className="space-y-2 md:col-span-1 col-span-2">
                <Label htmlFor="firstName">First Name *</Label>
                <Input
                  type="text"
                  maxLength={20}
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
              {/* LAST NAME */}
              <div className="space-y-2 md:col-span-1 col-span-2">
                <Label htmlFor="lastName">Last Name *</Label>
                <Input
                  type="text"
                  maxLength={32}
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
              {/* EMAIL */}
              <div className="space-y-2 md:col-span-1 col-span-2">
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
              {/* PHONE */}
              <div className="space-y-2 md:col-span-1 col-span-2">
                <Label htmlFor="phone">Phone *</Label>
                <Input
                  type="tel"
                  id="phone"
                  maxLength={15}
                  required
                  placeholder="Enter your phone number"
                  className="px-2 shadow-md"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, phone: e.target.value }))
                  }
                />
              </div>
              {/* QUESTION TYPE */}
              <div className="space-y-2 col-span-2">
                <Label htmlFor="questionType">Question Type</Label>
                <Select
                  name="questionType"
                  value={formData.questionType}
                  onValueChange={(e) =>
                    setFormData((prev) => ({ ...prev, questionType: e }))
                  }
                >
                  <SelectTrigger className="w-full shadow-md px-2 text-blue-600">
                    <SelectValue placeholder="Select a question type" />
                  </SelectTrigger>
                  <SelectContent>
                    {questionTypes.map((questionType) => (
                      <SelectItem value={questionType.value}>
                        {questionType.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              {/* SUBJECT */}
              <div className="space-y-2 col-span-2">
                <Label htmlFor="subject">Subject *</Label>
                <Input
                  type="text"
                  maxLength={128}
                  required
                  value={formData.subject}
                  className="shadow-md px-2"
                  placeholder="Enter your subject"
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      subject: e.target.value,
                    }))
                  }
                />
              </div>
              {/* MESSAGE */}
              <div className="col-span-2">
                <Label htmlFor="message">Message *</Label>
                <Textarea
                  value={formData.message}
                  required
                  maxLength={1024}
                  placeholder="Enter your message here..."
                  className="max-h-[250px] min-h-[150px] max-lg:border-accent my-2 shadow-md px-2"
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      message: e.target.value,
                    }))
                  }
                />
              </div>
            </div>
            {/* PRIVACY NOTICE */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
              <p className="text-sm text-blue-800">
                <strong>Privacy Notice:</strong> Your information will be kept
                confidential and used solely for responding to your question. We
                will never share your details with third parties without your
                consent.
              </p>
            </div>
            {/* SUBMIT BUTTOn */}
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
