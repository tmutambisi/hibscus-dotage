import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { SiteFrame } from "@/components/site/SiteFrame";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/volunteer")({
  head: () => ({
    meta: [
      { title: "Volunteer — Hibiscus Dotage Foundation" },
      {
        name: "description",
        content:
          "Apply to volunteer with the Hibiscus Dotage Foundation. Be paired with an elder, receive training, and join the movement.",
      },
      { property: "og:title", content: "Volunteer — Hibiscus Dotage Foundation" },
      {
        property: "og:description",
        content: "Apply to volunteer and be paired with an elder for the season.",
      },
    ],
  }),
  component: VolunteerPage,
});

const schema = z.object({
  fullName: z.string().trim().min(2, "Please enter your full name").max(100),
  email: z.string().trim().email("Enter a valid email").max(255),
  phone: z.string().trim().min(6, "Enter a valid phone number").max(30),
  city: z.string().trim().min(2, "Where are you based?").max(100),
  age: z.string().trim().min(1, "Required").max(3),
  availability: z.string().min(1, "Select an option"),
  motivation: z.string().trim().min(10, "Tell us a little more").max(1000),
});

type FormState = z.infer<typeof schema>;

const initial: FormState = {
  fullName: "",
  email: "",
  phone: "",
  city: "",
  age: "",
  availability: "",
  motivation: "",
};

function VolunteerPage() {
  const [values, setValues] = useState<FormState>(initial);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [submitted, setSubmitted] = useState(false);

  const update = (k: keyof FormState) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setValues((v) => ({ ...v, [k]: e.target.value }));

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse(values);
    if (!parsed.success) {
      const fieldErrors: Partial<Record<keyof FormState, string>> = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0] as keyof FormState;
        if (!fieldErrors[key]) fieldErrors[key] = issue.message;
      }
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    setSubmitted(true);
  };

  return (
    <SiteFrame>
      <PageHero
        eyebrow="Volunteer Application"
        title={
          <>
            Show up.<br />
            Stay in the room.
          </>
        }
        lede="Fill in your details and a chapter coordinator will reach out within a week to walk you through training and pairing."
      />

      <section className="py-24 md:py-32 bg-background">
        <div className="container-editorial max-w-3xl">
          {submitted ? (
            <div className="border border-border p-10 md:p-14 bg-muted">
              <div className="eyebrow"><span className="rule-gold" />Received</div>
              <h2 className="mt-6 font-serif text-4xl md:text-5xl leading-tight">
                Thank you, {values.fullName.split(" ")[0]}.
              </h2>
              <p className="mt-6 text-foreground/80 leading-relaxed">
                Your application is with us. A chapter coordinator will be in touch at{" "}
                <span className="font-medium">{values.email}</span> within seven days.
              </p>
              <button
                type="button"
                onClick={() => {
                  setValues(initial);
                  setSubmitted(false);
                }}
                className="mt-8 btn-primary"
              >
                Submit another
              </button>
            </div>
          ) : (
            <form onSubmit={onSubmit} noValidate className="grid gap-8">
              <Field label="Full name" error={errors.fullName}>
                <input
                  type="text"
                  value={values.fullName}
                  onChange={update("fullName")}
                  maxLength={100}
                  className="form-input"
                />
              </Field>

              <div className="grid md:grid-cols-2 gap-8">
                <Field label="Email" error={errors.email}>
                  <input
                    type="email"
                    value={values.email}
                    onChange={update("email")}
                    maxLength={255}
                    className="form-input"
                  />
                </Field>
                <Field label="Phone" error={errors.phone}>
                  <input
                    type="tel"
                    value={values.phone}
                    onChange={update("phone")}
                    maxLength={30}
                    className="form-input"
                  />
                </Field>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <Field label="City / Town" error={errors.city}>
                  <input
                    type="text"
                    value={values.city}
                    onChange={update("city")}
                    maxLength={100}
                    className="form-input"
                  />
                </Field>
                <Field label="Age" error={errors.age}>
                  <input
                    type="number"
                    min={16}
                    max={120}
                    value={values.age}
                    onChange={update("age")}
                    className="form-input"
                  />
                </Field>
              </div>

              <Field label="Availability" error={errors.availability}>
                <select
                  value={values.availability}
                  onChange={update("availability")}
                  className="form-input"
                >
                  <option value="">Select one…</option>
                  <option>Weekends</option>
                  <option>Weekday evenings</option>
                  <option>One Saturday a month</option>
                  <option>Flexible</option>
                </select>
              </Field>

              <Field label="Why do you want to volunteer?" error={errors.motivation}>
                <textarea
                  value={values.motivation}
                  onChange={update("motivation")}
                  maxLength={1000}
                  rows={5}
                  className="form-input resize-y"
                />
                <div className="mt-2 text-xs text-muted-foreground">
                  {values.motivation.length}/1000
                </div>
              </Field>

              <div>
                <button type="submit" className="btn-primary">
                  Submit application
                </button>
              </div>
            </form>
          )}
        </div>
      </section>
    </SiteFrame>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="block text-[0.72rem] uppercase tracking-[0.22em] text-muted-foreground mb-3">
        {label}
      </span>
      {children}
      {error && (
        <span className="mt-2 block text-xs" style={{ color: "var(--color-primary)" }}>
          {error}
        </span>
      )}
    </label>
  );
}
