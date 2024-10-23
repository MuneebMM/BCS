import Image from 'next/image';

export default function OurClients() {
    const clients = [
        { name: "Client 1", logo: "/Bytebox Media.png" },
        { name: "Client 2", logo: "/Pulan_AI.png" },
        { name: "CAPUP", logo: "/CapUp 1.png" },
        { name: "Client 4", logo: "/Mathionix 1.png" },
        { name: "Adsquaretech", logo: "/Adsquaretech 1.png" },
        { name: "Client 6", logo: "/Communications aqua.png" },
        { name: "NINOLOJIK", logo: "/Nolojik 1.png" },
        { name: "Client 8", logo: "/Brighton Decor 1.png" },
        { name: "Brighton Decor", logo: "/Hello_Errors_1.png" },
      ];
    return (
        <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Our Clients</h2>
          <div className="grid grid-cols-3 md:grid-cols-5 gap-8">
            {clients.map((client, index) => (
              <div key={index} className="flex items-center justify-center">
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={120}
                  height={60}
                  objectFit="contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }


