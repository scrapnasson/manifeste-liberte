import Layout from "@/components/Layout";

export default function Chatiments() {
  const sources = [
    {
      type: "Coran",
      ref: "Sourate An-Nur (24:2)",
      text:
        "La fornicatrice et le fornicateur, fouettez-les chacun de cent coups de fouet. Et ne soyez point pris de pitié pour eux dans l'application de la religion d’Allah."
    },
    {
      type: "Coran",
      ref: "Sourate Al-Ma'ida (5:38)",
      text:
        "Le voleur et la voleuse, à tous deux coupez la main, en punition de ce qu’ils ont acquis, et comme châtiment exemplaire d’Allah."
    },
    {
      type: "Coran",
      ref: "Sourate Al-Ahzab (33:60-61)",
      text:
        "S’ils ne cessent pas, Nous t’ordonnerons de les expulser. Maudits ils seront ! On les saisira partout où ils seront trouvés et on les tuera impitoyablement."
    },
    {
      type: "Hadith (Sahih Muslim)",
      ref: "Livre 17, Hadith 4191",
      text:
        "Un homme a été lapidé par ordre du Prophète pour adultère."
    },
    {
      type: "Fiqh (Reliance of the Traveller)",
      ref: "Section o12.2",
      text:
        "La peine pour l'adultère est la lapidation si la personne est mariée, et 100 coups de fouet si elle ne l'est pas."
    },
    {
      type: "Tafsir",
      ref: "Tafsir Ibn Kathir sur 5:38",
      text:
        "Ce verset est une preuve claire de la validité de la peine de l'amputation pour vol, à condition que les conditions soient réunies."
    }
  ];

  return (
    <Layout>
      <section className="max-w-4xl mx-auto px-4 py-12 space-y-8">
        <h1 className="text-3xl font-bold text-center">🔗 Châtiments corporels dans l’islam</h1>
        <p className="text-center italic">
          Une compilation des textes fondant la légitimité religieuse des peines comme le fouet, la lapidation ou l’amputation.
        </p>

        <div className="space-y-6">
          {sources.map((source, idx) => (
            <div
              key={idx}
              className="border border-[color:rgba(0,0,0,0.1)] dark:border-[color:rgba(255,255,255,0.1)] p-4 rounded-lg bg-[var(--background)] text-[var(--foreground)] shadow"
            >
              <h3 className="font-semibold text-sm uppercase tracking-wide">{source.type}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-1">{source.ref}</p>
              <p className="text-md">{source.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center space-y-4">
          <h2 className="text-xl font-bold">📌 Pourquoi ces peines ne sont-elles plus appliquées ?</h2>
          <p>
            La majorité des pays musulmans ont abandonné ou suspendu l’application de ces châtiments au nom des droits humains, des conventions internationales, ou par adaptation à un droit civil moderne.
          </p>
          <p>
            La tension entre ces peines et les principes fondamentaux de la dignité humaine a conduit les États à ne plus appliquer à la lettre ce qui est pourtant présenté comme la &quot;parole d’Allah&quot;.
          </p>
          <p className="italic">
            La loi religieuse se heurte ici à l’évolution de la conscience morale et juridique universelle.
          </p>
        </div>
      </section>
    </Layout>
  );
}
