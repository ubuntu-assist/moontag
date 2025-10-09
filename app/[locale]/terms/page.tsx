'use client'

import React from 'react'
import { motion } from 'framer-motion'

const TermsAndConditionsPage: React.FC = () => {
  return (
    <div className='bg-[#FFF4E9] min-h-screen flex flex-col'>
      <main className='flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className='max-w-4xl mx-auto'>
            <h1 className='text-4xl md:text-5xl font-bold text-gray-900 mb-8 text-center'>
              Conditions Générales
            </h1>

            <div className='bg-white rounded-xl shadow-md p-6 md:p-8 mb-8'>
              <div className='prose prose-lg max-w-none'>
                <p className='text-gray-700'>
                  Dernière mise à jour : 16 Avril 2025
                </p>

                <h2 className='text-xl font-bold mt-8 mb-4 text-gray-900'>
                  1. Introduction
                </h2>
                <p className='text-gray-700 mb-4'>
                  Bienvenue chez Abokyh. Les présentes Conditions Générales
                  régissent votre utilisation de la plateforme Abokyh, y compris
                  notre site web, nos applications mobiles et nos services. En
                  accédant à Abokyh ou en l&apos;utilisant, vous acceptez
                  d&apos;être lié par ces Conditions Générales. Si vous
                  n&apos;acceptez pas une partie quelconque de ces conditions,
                  vous ne pouvez pas utiliser nos services.
                </p>
                <p className='text-gray-700 mb-4'>
                  Abokyh est une plateforme de cartes-cadeaux basée sur la
                  crypto-monnaie, conçue pour permettre des transactions
                  fluides, abordables et sécurisées en Afrique francophone.
                  Notre plateforme permet aux utilisateurs d&apos;acheter des
                  cartes-cadeaux pour des marques locales et internationales,
                  des recharges mobiles et des paiements de services publics en
                  utilisant des crypto-monnaies.
                </p>

                <h2 className='text-xl font-bold mt-8 mb-4 text-gray-900'>
                  2. Définitions
                </h2>
                <p className='text-gray-700 mb-4'>
                  Tout au long de ces Conditions Générales, les termes suivants
                  auront les significations qui leur sont attribuées ci-dessous
                  :
                </p>
                <ul className='list-disc pl-6 mb-4 text-gray-700'>
                  <li>
                    <strong>
                      &quot;Abokyh&quot;, &quot;nous&quot;, &quot;notre&quot; ou
                      &quot;nos&quot;
                    </strong>{' '}
                    fait référence à Abokyh, Inc. et à ses filiales, sociétés
                    affiliées, directeurs, responsables, employés, agents et
                    contractants.
                  </li>
                  <li>
                    <strong>&quot;Plateforme&quot;</strong> fait référence au
                    site web d&apos;Abokyh, aux applications mobiles et à tous
                    les services connexes.
                  </li>
                  <li>
                    <strong>
                      &quot;Utilisateur&quot;, &quot;vous&quot; ou
                      &quot;votre&quot;
                    </strong>{' '}
                    fait référence à toute personne physique ou morale qui
                    accède à la plateforme Abokyh ou l&apos;utilise.
                  </li>
                  <li>
                    <strong>&quot;Carte-cadeau&quot;</strong> fait référence aux
                    cartes-cadeaux numériques disponibles à l&apos;achat sur la
                    Plateforme.
                  </li>
                  <li>
                    <strong>&quot;Crypto-monnaie&quot;</strong> fait référence
                    aux monnaies numériques ou virtuelles, telles que Bitcoin,
                    Ethereum ou Stellar, qui utilisent la cryptographie pour
                    leur sécurité.
                  </li>
                </ul>

                <h2 className='text-xl font-bold mt-8 mb-4 text-gray-900'>
                  3. Inscription au Compte
                </h2>
                <p className='text-gray-700 mb-4'>
                  Pour utiliser certaines fonctionnalités de la Plateforme, vous
                  devez vous inscrire pour créer un compte. Lors de votre
                  inscription, vous acceptez de fournir des informations
                  exactes, actuelles et complètes vous concernant et de mettre à
                  jour ces informations si nécessaire. Vous êtes responsable du
                  maintien de la confidentialité de vos identifiants de compte
                  et de toutes les activités qui se déroulent sous votre compte.
                </p>
                <p className='text-gray-700 mb-4'>
                  Nous nous réservons le droit de suspendre ou de résilier votre
                  compte si nous soupçonnons que les informations que vous
                  fournissez sont inexactes, incomplètes ou frauduleuses, ou si
                  vous violez ces Conditions Générales.
                </p>

                <h2 className='text-xl font-bold mt-8 mb-4 text-gray-900'>
                  4. Transactions en Crypto-monnaie
                </h2>
                <p className='text-gray-700 mb-4'>
                  Abokyh vous permet d&apos;effectuer des achats en utilisant
                  diverses crypto-monnaies. En utilisant notre Plateforme, vous
                  reconnaissez et acceptez ce qui suit :
                </p>
                <ul className='list-disc pl-6 mb-4 text-gray-700'>
                  <li>
                    Les transactions en crypto-monnaie sont irréversibles. Une
                    fois complétées, elles ne peuvent être remboursées ou
                    annulées.
                  </li>
                  <li>
                    La valeur des crypto-monnaies peut fluctuer. Nous ne sommes
                    pas responsables des pertes de valeur dues à la volatilité
                    du marché.
                  </li>
                  <li>
                    Vous êtes seul responsable de la sécurité de votre
                    portefeuille de crypto-monnaies et de vos clés privées.
                  </li>
                  <li>
                    Les transactions en crypto-monnaie peuvent être soumises à
                    des frais de réseau et à des délais de traitement
                    indépendants de notre volonté.
                  </li>
                </ul>

                <h2 className='text-xl font-bold mt-8 mb-4 text-gray-900'>
                  5. Cartes-Cadeaux et Produits Numériques
                </h2>
                <p className='text-gray-700 mb-4'>
                  Les cartes-cadeaux et autres produits numériques achetés via
                  Abokyh sont soumis aux conditions générales fixées par les
                  marchands respectifs. Abokyh ne garantit pas la disponibilité,
                  la qualité ou la performance des produits ou services offerts
                  par ces marchands.
                </p>
                <p className='text-gray-700 mb-4'>
                  Les cartes-cadeaux achetées via Abokyh :
                </p>
                <ul className='list-disc pl-6 mb-4 text-gray-700'>
                  <li>
                    Ne peuvent être retournées, échangées ou remboursées une
                    fois que le code a été révélé ou utilisé
                  </li>
                  <li>
                    Peuvent être soumises à des dates d&apos;expiration et à
                    d&apos;autres restrictions déterminées par le marchand
                  </li>
                  <li>
                    Sont destinées à un usage personnel uniquement et ne peuvent
                    être revendues, sauf autorisation explicite
                  </li>
                  <li>
                    Peuvent être soumises à des mesures de vérification pour
                    prévenir la fraude
                  </li>
                </ul>

                <h2 className='text-xl font-bold mt-8 mb-4 text-gray-900'>
                  6. Recharge Mobile et Paiements de Services
                </h2>
                <p className='text-gray-700 mb-4'>
                  Lorsque vous utilisez notre Plateforme pour effectuer des
                  recharges mobiles ou des paiements de services, vous acceptez
                  de fournir des informations de compte exactes pour le
                  destinataire prévu. Nous ne sommes pas responsables des
                  recharges ou des paiements effectués sur des comptes
                  incorrects en raison d&apos;erreurs dans les informations que
                  vous fournissez.
                </p>
                <p className='text-gray-700 mb-4'>
                  Nous ne garantissons pas le traitement immédiat des recharges
                  mobiles ou des paiements de services, car ces services
                  dépendent de fournisseurs tiers. Les délais de traitement
                  peuvent varier en fonction du fournisseur et des conditions du
                  réseau.
                </p>

                <h2 className='text-xl font-bold mt-8 mb-4 text-gray-900'>
                  7. Activités Interdites
                </h2>
                <p className='text-gray-700 mb-4'>
                  Vous acceptez de ne pas utiliser la Plateforme pour :
                </p>
                <ul className='list-disc pl-6 mb-4 text-gray-700'>
                  <li>Violer les lois ou réglementations applicables</li>
                  <li>Porter atteinte aux droits d&apos;autrui</li>
                  <li>
                    Vous livrer à des pratiques frauduleuses ou trompeuses
                  </li>
                  <li>Blanchir de l&apos;argent ou financer le terrorisme</li>
                  <li>
                    Contourner les mesures techniques que nous mettons en œuvre
                    pour protéger la Plateforme
                  </li>
                  <li>
                    Interférer avec le bon fonctionnement de la Plateforme
                  </li>
                  <li>
                    Collecter ou recueillir des données utilisateur sans
                    consentement
                  </li>
                  <li>Transmettre du code ou du contenu nuisible</li>
                </ul>

                <h2 className='text-xl font-bold mt-8 mb-4 text-gray-900'>
                  8. Propriété Intellectuelle
                </h2>
                <p className='text-gray-700 mb-4'>
                  Tout le contenu, les caractéristiques et les fonctionnalités
                  de la Plateforme, y compris, mais sans s&apos;y limiter, les
                  textes, graphiques, logos, icônes, images, clips audio,
                  téléchargements numériques, compilations de données, logiciels
                  et la conception, sélection et arrangement de ceux-ci, sont la
                  propriété d&apos;Abokyh, de ses concédants de licence ou
                  d&apos;autres fournisseurs de contenu et sont protégés par les
                  lois sur le droit d&apos;auteur, les marques et autres lois
                  sur la propriété intellectuelle.
                </p>
                <p className='text-gray-700 mb-4'>
                  Vous ne pouvez pas reproduire, distribuer, modifier, créer des
                  œuvres dérivées, afficher publiquement, exécuter publiquement,
                  republier, télécharger, stocker ou transmettre tout matériel
                  de notre Plateforme sans notre consentement écrit préalable.
                </p>

                <h2 className='text-xl font-bold mt-8 mb-4 text-gray-900'>
                  9. Confidentialité
                </h2>
                <p className='text-gray-700 mb-4'>
                  Votre vie privée est importante pour nous. Notre Politique de
                  Confidentialité, qui est incorporée à ces Conditions Générales
                  par référence, explique comment nous collectons, utilisons et
                  protégeons vos informations personnelles. En utilisant notre
                  Plateforme, vous consentez à notre collecte et utilisation de
                  vos informations comme décrit dans notre Politique de
                  Confidentialité.
                </p>

                <h2 className='text-xl font-bold mt-8 mb-4 text-gray-900'>
                  10. Limitation de Responsabilité
                </h2>
                <p className='text-gray-700 mb-4'>
                  Dans la mesure maximale permise par la loi, Abokyh ne sera pas
                  responsable de tout dommage indirect, accessoire, spécial,
                  consécutif ou punitif, y compris, mais sans s&apos;y limiter,
                  la perte de profits, de données, d&apos;utilisation, de
                  clientèle ou d&apos;autres pertes intangibles, résultant de :
                </p>
                <ul className='list-disc pl-6 mb-4 text-gray-700'>
                  <li>
                    Votre utilisation ou incapacité à utiliser la Plateforme
                  </li>
                  <li>
                    Tout accès non autorisé à nos serveurs et/ou toute
                    information personnelle qui y est stockée
                  </li>
                  <li>
                    Toute interruption ou cessation de transmission vers ou
                    depuis la Plateforme
                  </li>
                  <li>
                    Tous bogues, virus, chevaux de Troie ou autres qui
                    pourraient être transmis à ou par la Plateforme
                  </li>
                </ul>

                <h2 className='text-xl font-bold mt-8 mb-4 text-gray-900'>
                  11. Exclusion de Garanties
                </h2>
                <p className='text-gray-700 mb-4'>
                  La Plateforme est fournie &quot;telle quelle&quot; et
                  &quot;selon disponibilité&quot;, sans aucune garantie
                  d&apos;aucune sorte, explicite ou implicite. Abokyh décline
                  toutes les garanties, y compris, mais sans s&apos;y limiter,
                  les garanties implicites de qualité marchande,
                  d&apos;adéquation à un usage particulier et de non-violation.
                </p>
                <p className='text-gray-700 mb-4'>
                  Nous ne garantissons pas que la Plateforme sera ininterrompue,
                  sécurisée ou exempte d&apos;erreurs, que les défauts seront
                  corrigés, ou que la Plateforme ou les serveurs qui la rendent
                  disponible sont exempts de virus ou d&apos;autres composants
                  nuisibles.
                </p>

                <h2 className='text-xl font-bold mt-8 mb-4 text-gray-900'>
                  12. Indemnisation
                </h2>
                <p className='text-gray-700 mb-4'>
                  Vous acceptez d&apos;indemniser, de défendre et de tenir à
                  l&apos;écart Abokyh et ses dirigeants, administrateurs,
                  employés, agents et affiliés contre toute réclamation,
                  responsabilité, dommage, perte, coût, dépense ou frais (y
                  compris les honoraires raisonnables d&apos;avocat) découlant
                  de ou liés à votre utilisation de la Plateforme, votre
                  violation de ces Conditions Générales, ou votre violation des
                  droits d&apos;autrui.
                </p>

                <h2 className='text-xl font-bold mt-8 mb-4 text-gray-900'>
                  13. Modifications
                </h2>
                <p className='text-gray-700 mb-4'>
                  Nous nous réservons le droit de modifier ces Conditions
                  Générales à tout moment. Nous vous informerons des changements
                  importants en publiant les Conditions Générales mises à jour
                  sur notre Plateforme et en mettant à jour la date de
                  &quot;Dernière mise à jour&quot;. Votre utilisation continue
                  de la Plateforme après ces changements constitue votre
                  acceptation des nouvelles Conditions Générales.
                </p>

                <h2 className='text-xl font-bold mt-8 mb-4 text-gray-900'>
                  14. Droit Applicable
                </h2>
                <p className='text-gray-700 mb-4'>
                  Ces Conditions Générales sont régies et interprétées
                  conformément aux lois de la Côte d&apos;Ivoire, sans égard à
                  ses dispositions en matière de conflit de lois. Tout litige
                  découlant de ou lié à ces Conditions Générales ou à votre
                  utilisation de la Plateforme sera soumis à la juridiction
                  exclusive des tribunaux de Côte d&apos;Ivoire.
                </p>

                <h2 className='text-xl font-bold mt-8 mb-4 text-gray-900'>
                  15. Divisibilité
                </h2>
                <p className='text-gray-700 mb-4'>
                  Si une disposition de ces Conditions Générales est jugée
                  invalide, illégale ou inapplicable, les autres dispositions
                  resteront pleinement en vigueur. La disposition invalide,
                  illégale ou inapplicable sera considérée comme modifiée pour
                  la rendre valide, légale et applicable dans la mesure maximale
                  permise par la loi.
                </p>

                {/* <h2 className='text-xl font-bold mt-8 mb-4 text-gray-900'>
                  16. Informations de Contact
                </h2>
                <p className='text-gray-700 mb-4'>
                  Si vous avez des questions ou des préoccupations concernant
                  ces Conditions Générales, veuillez nous contacter à :
                </p>
                <div className='bg-[#FFE9D1] p-4 rounded-lg mb-4'>
                  <p className='font-medium mb-1'>Abokyh, Inc.</p>
                  <p className='mb-1'>Email : support@abokyh.com</p>
                  <p className='mb-1'>
                    Adresse : 123 Tech Lane, Abidjan, Côte d&apos;Ivoire
                  </p>
                  <p>Téléphone : +225 01 23 45 67 89</p>
                </div> */}
              </div>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  )
}

export default TermsAndConditionsPage
