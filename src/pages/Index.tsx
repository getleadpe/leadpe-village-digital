import { useState } from "react";
import logo from "@/assets/logo.png";
import heroImg from "@/assets/hero-classroom.jpg";
import aboutImg from "@/assets/about-student.jpg";
import {
  Phone,
  MessageCircle,
  Monitor,
  FileSpreadsheet,
  Calculator,
  Keyboard,
  Globe,
  GraduationCap,
  MapPin,
  Clock,
  CheckCircle2,
  Award,
  IndianRupee,
  Users,
} from "lucide-react";

const WHATSAPP = "https://wa.me/917050449861";
const PHONE = "tel:+917050449861";

const courses = [
  {
    icon: Monitor,
    title: "Basic Computer",
    desc: "Computer fundamentals, Windows, file management & internet basics.",
  },
  { icon: FileSpreadsheet, title: "MS Office", desc: "Word, Excel, PowerPoint — practical skills for office & study." },
  { icon: Calculator, title: "Tally", desc: "Tally Prime accounting, GST, inventory & billing for jobs/business." },
  {
    icon: Keyboard,
    title: "Typing (Hindi/English)",
    desc: "Speed & accuracy training for govt exams and office work.",
  },
  { icon: Globe, title: "Internet & Email", desc: "Browsing, email, online forms, UPI, e-governance & safety." },
  {
    icon: GraduationCap,
    title: "Govt-Job Computer Prep",
    desc: "CCC, RRB, SSC, Bank & Bihar govt computer exam preparation.",
  },
];

const features = [
  { icon: MapPin, title: "Local in Desari", desc: "Right here in Desari, Bihar — easy to reach for every student." },
  { icon: IndianRupee, title: "Affordable Fees", desc: "Pocket-friendly fees with flexible monthly payment options." },
  { icon: Award, title: "Certified Courses", desc: "Recognised certificates after course completion & exam." },
  { icon: Users, title: "Placement Guidance", desc: "Resume help, interview tips & job referrals for our students." },
];

const Index = () => {
  const [form, setForm] = useState({ name: "", phone: "", course: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hello BNS Computer Institute,%0AI am ${form.name}.%0APhone: ${form.phone}%0AInterested in: ${form.course}`;
    window.open(`https://wa.me/917050449861?text=${msg}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur">
        <div className="container flex h-16 items-center justify-between">
          <a href="#top" className="flex items-center gap-2 font-bold tracking-tight">
            <img src={logo} alt="BNS Computer Institute logo" width={40} height={40} className="h-10 w-10" />
            <span className="flex flex-col leading-tight">
              <span className="text-base sm:text-lg text-foreground">BNS</span>
              <span className="text-[10px] sm:text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Computer Institute
              </span>
            </span>
          </a>
          <a
            href={PHONE}
            className="tap inline-flex items-center gap-2 rounded-full bg-brand px-4 py-2 text-sm font-semibold text-brand-foreground shadow-sm transition hover:bg-brand-dark"
          >
            <Phone className="h-4 w-4" /> Call Now
          </a>
        </div>
      </header>

      <main id="top">
        {/* Hero */}
        <section className="relative overflow-hidden bg-gradient-to-b from-brand-soft to-background">
          <div className="container py-14 sm:py-20">
            <div className="mx-auto max-w-3xl text-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-brand/30 bg-white px-3 py-1 text-xs font-semibold text-brand">
                <CheckCircle2 className="h-3.5 w-3.5" /> Trusted in Desari, Bihar
              </span>
              <h1 className="mt-5 text-3xl font-extrabold leading-tight sm:text-5xl">
                BNS COMPUTER INSTITUTE — Best Computer Coaching in <span className="text-brand">Desari</span>
              </h1>
              <p className="mt-4 text-base text-muted-foreground sm:text-lg">
                Learn Basic Computer, Tally, MS Office, Typing, Internet & Govt-job computer courses from experienced
                teachers — affordable fees, real practice, certified training.
              </p>
              <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tap inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand px-6 py-3 text-base font-semibold text-brand-foreground shadow-md transition hover:bg-brand-dark sm:w-auto"
                >
                  <MessageCircle className="h-5 w-5" /> WhatsApp Us
                </a>
                <a
                  href={PHONE}
                  className="tap inline-flex w-full items-center justify-center gap-2 rounded-full border-2 border-brand bg-white px-6 py-3 text-base font-semibold text-brand transition hover:bg-brand-soft sm:w-auto"
                >
                  <Phone className="h-5 w-5" /> Call Now
                </a>
              </div>
              <p className="mt-4 text-xs text-muted-foreground">Mon–Sat · 9 AM – 7 PM · Owner: Kanhai Kumar</p>
              <div className="mt-10 overflow-hidden rounded-3xl border border-border shadow-2xl">
                <img
                  src={heroImg}
                  alt="Students learning computers at BNS Computer Institute, Desari"
                  width={1280}
                  height={896}
                  className="h-auto w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Courses */}
        <section id="courses" className="py-14 sm:py-20">
          <div className="container">
            <div className="mx-auto mb-10 max-w-2xl text-center">
              <h2 className="text-2xl font-bold sm:text-3xl">Our Courses</h2>
              <p className="mt-2 text-muted-foreground">
                Practical computer courses designed for students, job seekers and shopkeepers in Desari.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {courses.map((c) => (
                <div
                  key={c.title}
                  className="group rounded-2xl border border-border bg-card p-6 transition hover:-translate-y-1 hover:border-brand hover:shadow-lg"
                >
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-soft text-brand">
                    <c.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold">{c.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="bg-brand-soft py-14 sm:py-20">
          <div className="container grid gap-10 lg:grid-cols-2 lg:items-center">
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-xl">
              <img
                src={aboutImg}
                alt="Confident BNS Computer Institute student"
                width={1024}
                height={768}
                loading="lazy"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/85 via-brand-dark/30 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-brand-foreground">
                <p className="text-xs uppercase tracking-widest opacity-90">Serving Desari</p>
                <p className="mt-1 text-4xl font-extrabold">100% Practical</p>
                <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
                  <div className="rounded-xl bg-white/15 p-3 backdrop-blur">
                    <p className="text-2xl font-bold">6+</p>
                    <p className="opacity-90">Courses</p>
                  </div>
                  <div className="rounded-xl bg-white/15 p-3 backdrop-blur">
                    <p className="text-2xl font-bold">Mon–Sat</p>
                    <p className="opacity-90">9 AM – 7 PM</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold sm:text-3xl">About BNS Computer Institute</h2>
              <p className="mt-4 text-muted-foreground">
                BNS COMPUTER INSTITUTE is a trusted computer coaching institute serving Desari and nearby areas of
                Bihar. Founded by <strong className="text-foreground">Kanhai Kumar</strong>, our mission is simple —
                give every local student strong, practical computer skills at an affordable fee.
              </p>
              <p className="mt-3 text-muted-foreground">
                We teach Basic Computer, Tally, MS Office, Hindi & English typing, Internet, Email and complete computer
                preparation for government jobs. With small batches, friendly teachers and real practice on computers,
                we have helped many students from Desari clear exams, find jobs and run their own business work
                confidently.
              </p>
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 font-semibold text-brand hover:underline"
              >
                Talk to us on WhatsApp <MessageCircle className="h-4 w-4" />
              </a>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-14 sm:py-20">
          <div className="container">
            <div className="mx-auto mb-10 max-w-2xl text-center">
              <h2 className="text-2xl font-bold sm:text-3xl">Why Choose Us</h2>
              <p className="mt-2 text-muted-foreground">Local · Affordable · Certified · Placement guidance.</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {features.map((f) => (
                <div
                  key={f.title}
                  className="rounded-2xl border border-border bg-card p-6 text-center transition hover:border-brand"
                >
                  <div className="mx-auto mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-brand text-brand-foreground">
                    <f.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-semibold">{f.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Lead Capture (LeadPe widget) */}
        <section id="enquire" className="bg-foreground/[0.02] py-14 sm:py-20">
          <div className="container">
            <div className="mx-auto max-w-xl rounded-3xl border border-border bg-card p-6 shadow-xl sm:p-8">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand">LEADPE</p>
              <h2 className="mt-2 text-2xl font-bold sm:text-3xl">Get In Touch</h2>
              <p className="mt-1 text-sm text-muted-foreground">One tap. We respond instantly.</p>

              <form onSubmit={handleSubmit} className="mt-6 space-y-3">
                <input
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Your Name"
                  className="tap w-full rounded-xl border border-border bg-background px-4 py-3 text-base outline-none focus:border-brand"
                />
                <input
                  required
                  type="tel"
                  pattern="[0-9]{10}"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  placeholder="Mobile Number (10 digits)"
                  className="tap w-full rounded-xl border border-border bg-background px-4 py-3 text-base outline-none focus:border-brand"
                />
                <select
                  required
                  value={form.course}
                  onChange={(e) => setForm({ ...form, course: e.target.value })}
                  className="tap w-full rounded-xl border border-border bg-background px-4 py-3 text-base outline-none focus:border-brand"
                >
                  <option value="">Select a course</option>
                  {courses.map((c) => (
                    <option key={c.title} value={c.title}>
                      {c.title}
                    </option>
                  ))}
                </select>
                <button
                  type="submit"
                  className="tap inline-flex w-full items-center justify-center gap-2 rounded-xl bg-brand px-6 py-3 text-base font-semibold text-brand-foreground transition hover:bg-brand-dark"
                >
                  Send Enquiry
                </button>
              </form>

              <a
                href="https://wa.me/917050449861"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 block text-center text-sm font-semibold text-brand hover:underline"
              >
                WhatsApp Now →
              </a>

              <p className="mt-6 text-center text-[11px] text-muted-foreground">Website Bhi. Customer Bhi. — LeadPe</p>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-14 sm:py-20">
          <div className="container grid gap-8 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold sm:text-3xl">Visit Us</h2>
              <p className="mt-3 text-muted-foreground">Drop in for a free demo class or counselling session.</p>
              <ul className="mt-6 space-y-4 text-sm">
                <li className="flex gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand" />
                  <span>BNS Computer Institute, Desari, Bihar, India</span>
                </li>
                <li className="flex gap-3">
                  <Clock className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand" />
                  <span>Monday – Saturday · 9 AM – 7 PM</span>
                </li>
                <li className="flex gap-3">
                  <Phone className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand" />
                  <a href={PHONE} className="hover:underline">
                    +91 70504 49861
                  </a>
                </li>
                <li className="flex gap-3">
                  <MessageCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand" />
                  <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="hover:underline">
                    Chat on WhatsApp
                  </a>
                </li>
              </ul>
            </div>
            <div className="overflow-hidden rounded-2xl border border-border shadow-md">
              <iframe
                title="Map of Desari, Bihar"
                src="https://www.google.com/maps?q=Desari,Bihar,India&output=embed"
                width="100%"
                height="320"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="block h-[320px] w-full border-0"
              ></iframe>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-foreground py-8 text-background">
        <div className="container flex flex-col items-center gap-3 text-center text-sm">
          <p className="font-semibold">BNS COMPUTER INSTITUTE · Desari, Bihar</p>
          <p className="opacity-70">© {new Date().getFullYear()} All rights reserved.</p>
          <a
            href="https://leadpe.ONLINE"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex items-center gap-2 rounded-full bg-brand px-4 py-2 text-xs font-semibold text-brand-foreground hover:bg-brand-dark"
          >
            Built with LeadPe — Website Bhi. Customer Bhi.
          </a>
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <a
        href={WHATSAPP}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-brand text-brand-foreground shadow-2xl ring-4 ring-brand/20 transition hover:scale-110 hover:bg-brand-dark"
      >
        <MessageCircle className="h-7 w-7" />
      </a>
    </div>
  );
};

export default Index;
