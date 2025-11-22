"use client";

import { useState } from "react";
import { toast } from "sonner";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { name, email, message } = form;

    if (!name || !email || !message) {
      toast.error("Please fill all the fields");
      return;
    }

    const response = await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("API call successful");
      }, 1000);
    });

    if (response) {
      toast.success("Form submitted successfully");
    } else {
      toast.error("Something went wrong");
    }
  };

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto flex max-w-lg flex-col gap-10 py-10"
    >
      <div className="flex flex-col gap-2">
        <label
          htmlFor="name"
          className="text-sm font-medium tracking-tight text-neutral-600"
        >
          Full name
        </label>
        <input
          id="name"
          name="name"
          onChange={handleChange}
          className="shadow-custom focus:ring-primary rounded-md px-2 py-1 text-sm focus:ring-2 focus:outline-none"
          type="text"
          placeholder="John Doe"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label
          htmlFor="email"
          className="text-sm font-medium tracking-tight text-neutral-600"
        >
          Full name
        </label>
        <input
          id="eamil"
          name="email"
          onChange={handleChange}
          className="shadow-custom focus:ring-primary rounded-md px-2 py-1 text-sm focus:ring-2 focus:outline-none"
          type="text"
          placeholder="John@gmail.com"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label
          htmlFor="name"
          className="text-sm font-medium tracking-tight text-neutral-600"
        >
          Full name
        </label>
        <textarea
          rows={5}
          id="message"
          name="message"
          onChange={handleChange}
          className="shadow-custom focus:ring-primary resize-none rounded-md px-2 py-1 text-sm focus:ring-2 focus:outline-none"
          placeholder="Show your love here "
        />
      </div>
      <button
        type="submit"
        className="bg-primary rounded-md px-4 py-2 text-white"
      >
        Send Message
      </button>
    </form>
  );
}
