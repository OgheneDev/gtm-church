const team = [
  { name: "Full Name", role: "Lead Pastor" },
  { name: "Full Name", role: "Assistant Pastor" },
  { name: "Full Name", role: "Youth Pastor" },
  { name: "Full Name", role: "Church Administrator" },
  { name: "Full Name", role: "Church Trustee" },
  { name: "Full Name", role: "Evangelism" },
];

export default function Team() {
  return (
    <section className="max-w-[1180px] mx-auto px-5 md:px-10 py-16">
      <span className="inline-block text-[11px] text-[#8a7a52] bg-[#B98C33]/15 px-2.5 py-1 rounded-sm mb-5">
        Placeholder entries — replace with real names, roles, and photos
      </span>

      <h2 className="font-semibold text-[#1B2340] text-2xl mb-8">Our team</h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
        {team.map((person) => (
          <div key={person.role}>
            <div className="bg-[#EAE6DA] rounded aspect-square mb-3.5" />
            <p className="text-[15px] font-medium text-[#1B2340]">
              {person.name}
            </p>
            <p className="text-[13px] text-[#4A4A45]">{person.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
