import Link from "next/link";

const faqs = [
  [
    {
      question: "What's the difference between the Standard and Custom Setup?",
      answer: (
        <p>
          The Custom Setup is for those who want a more involved process -
          it&apos;s all about determining and developing preferences.
          <br />
          <br />
          The Standard Setup is for those who want an &quot;off the shelf&quot;
          solution or have their preferred specs already determined.
        </p>
      ),
    },
  ],
  [
    {
      question: "What strings do you use for setups?",
      answer: (
        <>
          <p>
            It depends on the application, different strings are best for
            different situations. Feel free to choose from{" "}
            <Link href="/shop" className="text-gray-900 underline">
              strings in stock
            </Link>
            , bring your own, or with enough notice, I&apos;ll have them ready
            before your appointment.
          </p>
        </>
      ),
    },
  ],
  [
    {
      question: "What strings do you recommend?",
      answer:
        "It really does depend on the application. But generally I prefer Stringjoy and DR Strings roundwound strings, and La Bella for flatwounds.",
    },
  ],
];

export default function ServicesFaqSection() {
  return (
    <section id="faqs" aria-labelledby="faqs-title" className="mb-20 sm:mb-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faqs-title"
            className="font-[family-name:var(--font-averia-regular)] text-3xl font-medium tracking-tight text-gray-900"
          >
            Services Questions
          </h2>
          <p className="mt-2 text-lg text-gray-600">
            If you have anything else you want to ask,{" "}
            <Link
              href="/contact"
              className="rounded text-gray-900 underline ease-in-out hover:text-black focus-visible:ring focus-visible:ring-amber-400 focus-visible:ring-offset-8 focus-visible:outline-none"
            >
              reach out to us
            </Link>
            .
          </p>
        </div>
        <ul className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:max-w-none lg:grid-cols-3">
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul className="space-y-10">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="text-lg leading-6 font-semibold text-gray-900">
                      {faq.question}
                    </h3>
                    <div className="mt-4 text-sm text-gray-700">
                      {faq.answer}
                    </div>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
