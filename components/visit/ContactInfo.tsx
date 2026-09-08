export default function ContactInfo() {
  return (
    <section className="bg-[#1B2340] text-[#F3ECDA]">
      <div className="max-w-[1180px] mx-auto px-5 md:px-10 py-14 flex flex-col md:flex-row justify-between gap-8">
        <div>
          <h2 className="font-semibold text-white text-xl mb-4">
            Get in touch
          </h2>
          <p className="text-[14px] leading-relaxed">
            75 Stafford Street, Walsall, WS2 8DU
            <br />
            07478 734631
          </p>
        </div>

        <a
          href="https://www.facebook.com/profile.php?id=100010515730997"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[14px] border-b border-[#B98C33] pb-0.5 self-start md:self-end"
        >
          Find us on Facebook
        </a>
      </div>
    </section>
  );
}
