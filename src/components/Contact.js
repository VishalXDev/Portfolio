"use client";

export default function Contact({ email, phone }) {
  return (
    <section className="py-20 bg-black text-white rounded-lg shadow text-center">
      <h2 className="text-4xl font-bold">Contact Me</h2>
      <p className="text-lg opacity-80 mt-4">Let&apos;s connect! Reach out via email or phone.</p>
      <div className="mt-6 space-y-4">
        <a href={`mailto:${email}`} className="block text-2xl text-yellow-500 hover:underline">📧 {email}</a>
        <p className="text-2xl">📞 {phone}</p>
      </div>
      <div className="mt-10">
        <a href={`mailto:${email}`} className="px-6 py-3 bg-yellow-500 text-black font-semibold rounded-lg text-xl hover:bg-yellow-600 transition-all">
          Send an Email
        </a>
      </div>
    </section>
  );
}
