import Image from "next/image";

const team = [
  {
    name: "Pastor Dennis Agho",
    role: "The Zonal Superintendent",
    image:
      "https://res.cloudinary.com/litvwrc4/image/upload/v1789116061/IMG-20200610-WA0012_edited.avif",
  },
  {
    name: "Sandra Agho",
    role: "Minister's Wives Leader",
    image:
      "https://res.cloudinary.com/litvwrc4/image/upload/v1789116061/77b1e2_21b8db23e89e47c4adab2d205a6b2c43_mv2.avif",
  },
  {
    name: "Evangelist Ernest Aigbonoga",
    role: "Evangelism and Mission",
    image:
      "https://res.cloudinary.com/litvwrc4/image/upload/v1789116061/IMG-20200305-WA0005_edited.avif",
  },
  {
    name: "Elder White Adams",
    role: "Church Trustee/Maintenance",
    image:
      "https://res.cloudinary.com/litvwrc4/image/upload/v1789116062/IMG-20200611-WA0023_edited.avif",
  },
  {
    name: "Elder Eben Edowonyi",
    role: "CACMA Leader",
    image:
      "https://res.cloudinary.com/litvwrc4/image/upload/v1789116061/IMG-20200305-WA0006_edited.avif",
  },
  {
    name: "Evangelist Sia James",
    role: "Finance Director/Project Manager/Admin.",
    image:
      "https://res.cloudinary.com/litvwrc4/image/upload/v1789116061/IMG-20200612-WA0011.avif",
  },
];

export default function Team() {
  return (
    <section className="max-w-295 mx-auto px-5 md:px-10 py-16">
      <h2 className="font-semibold text-[#1B2340] text-2xl mb-8 text-center md:text-start">
        Leadership
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {team.map((person) => (
          <div key={person.name}>
            <div className="relative aspect-square mb-3.5 overflow-hidden rounded bg-[#EAE6DA]">
              <Image
                src={person.image}
                alt={person.name}
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                className="object-cover"
              />
            </div>

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
