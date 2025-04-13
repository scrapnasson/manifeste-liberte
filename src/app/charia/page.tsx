import Layout from "@/components/Layout";

export default function Charia() {
  const pays = [
    {
      nom: "Arabie Saoudite",
      application: "Quasi-totale",
      details:
        "La charia est la seule source de droit. Les châtiments corporels sont en vigueur (flagellation, décapitation), basés sur le fiqh hanbalite.",
      source: "https://fr.wikipedia.org/wiki/Arabie_saoudite"
    },
    {
      nom: "Iran",
      application: "Quasi-totale",
      details:
        "République islamique fondée sur la charia chiite. Code pénal basé sur le droit islamique (hudud, qisas, diyya).",
      source: "https://fr.wikipedia.org/wiki/Iran"
    },
    {
      nom: "Brunei",
      application: "Quasi-totale",
      details:
        "Brunei a instauré la charia en 2013, avec des peines sévères comme la flagellation, l'amputation et la lapidation, bien que certaines soient suspendues.",
      source: "https://fr.wikipedia.org/wiki/Brunei"
    },
    {
      nom: "Afghanistan",
      application: "Très forte",
      details:
        "Sous le régime taliban, application très rigide de la charia sunnite, notamment sur les femmes, l'apostasie, le voile, et les exécutions.",
      source: "https://fr.wikipedia.org/wiki/Afghanistan"
    },
    {
      nom: "Pakistan",
      application: "Partielle",
      details:
        "La constitution intègre des éléments de charia. Blasphème, hudud, et lois sur les femmes inspirées du droit islamique.",
      source: "https://fr.wikipedia.org/wiki/Pakistan"
    },
    {
      nom: "Soudan",
      application: "Historique puis réduite",
      details:
        "Jusqu’en 2020, la charia dominait. Depuis, réformes vers un droit civil. Apostasie décriminalisée récemment.",
      source: "https://fr.wikipedia.org/wiki/Soudan"
    },
    {
      nom: "Nigéria (Nord)",
      application: "Régionale",
      details:
        "Dans 12 États du Nord, la charia est appliquée pour les musulmans uniquement. Lapidation et amputations ont été ordonnées.",
      source: "https://fr.wikipedia.org/wiki/Nigeria"
    },
    {
      nom: "Indonésie (Aceh)",
      application: "Régionale",
      details:
        "La province d’Aceh applique la charia : flagellation publique, interdictions morales, peines pour adultère et homosexualité.",
      source: "https://fr.wikipedia.org/wiki/Indon%C3%A9sie"
    },
    {
      nom: "Émirats Arabes Unis",
      application: "Modérée",
      details:
        "Charia utilisée en droit familial, successions, morale publique. Droit civil partiellement influencé par les modèles occidentaux.",
      source: "https://fr.wikipedia.org/wiki/%C3%89mirats_arabes_unis"
    },
    {
      nom: "Dubaï (Émirats Arabes Unis)",
      application: "Partielle et sélective",
      details:
        "À Dubaï, la charia s'applique principalement aux musulmans dans le droit familial et moral. Les lois civiles influencées par le modèle occidental sont en place pour les expatriés non musulmans. Certaines pratiques (alcool, cohabitation hors mariage, vêtements) sont tolérées pour les touristes, mais restent punissables pour les locaux musulmans selon la charia.",
      source: "https://fr.wikipedia.org/wiki/Duba%C3%AF"
    },
    {
      nom: "Maroc",
      application: "Partielle",
      details:
        "Droit familial (Moudawana) fondé sur la charia, mais réformé en 2004. Peines religieuses non appliquées.",
      source: "https://fr.wikipedia.org/wiki/Maroc"
    },
    {
      nom: "Algérie",
      application: "Partielle",
      details:
        "L’Algérie applique la charia dans le droit familial (Code de la famille). L’article 222 du Code pénal permet la poursuite de personnes pour non-respect du jeûne de Ramadan.",
      source: "https://fr.wikipedia.org/wiki/Alg%C3%A9rie"
    },
    {
      nom: "Malaisie",
      application: "Partielle",
      details:
        "La charia est appliquée aux musulmans dans les domaines du droit familial et moral. Certains États, comme Kelantan et Terengganu, ont adopté des lois inspirées de la charia, mais leur mise en œuvre est limitée par la Constitution fédérale.",
      source: "https://fr.wikipedia.org/wiki/Malaisie"
    },
    {
      nom: "Turquie",
      application: "Aucune",
      details:
        "Laïcité constitutionnelle depuis Atatürk. Droit totalement civil, bien que l’influence islamique réapparaisse politiquement.",
      source: "https://fr.wikipedia.org/wiki/Turquie"
    }
  ];

  return (
    <Layout>
      <section className="max-w-5xl mx-auto px-4 py-12 space-y-8">
        <h1 className="text-3xl font-bold text-center">⚖️ Application de la charia dans le monde musulman</h1>
        <p className="text-center italic">
          Aucun État musulman n&apos;applique la charia de manière intégrale. Ce sont souvent les lois civiles ou internationales qui freinent son application totale.
        </p>

        <p className="text-md text-center">
          Cette tension entre les prescriptions religieuses et les droits humains universels illustre le rôle structurant de la pression moderne dans la limitation des lois islamistes.
        </p>

        <div className="space-y-6">
          {pays.map((p, idx) => (
            <div
              key={idx}
              className="border border-[color:rgba(0,0,0,0.1)] dark:border-[color:rgba(255,255,255,0.1)] p-4 rounded-lg bg-[var(--background)] text-[var(--foreground)] shadow"
            >
              <h2 className="text-xl font-semibold">{p.nom}</h2>
              <p className="text-sm italic">Application : {p.application}</p>
              <p className="mt-2">{p.details}</p>
              <a
                href={p.source}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-blue-600 dark:text-blue-400 underline mt-2 inline-block"
              >
                Source
              </a>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}
