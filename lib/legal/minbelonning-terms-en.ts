import type { LegalDoc } from "../apps";

const EMAIL = "[hei@bergeprod.no](mailto:hei@bergeprod.no)";
const PRIVACY = "[Privacy Policy](https://apps.bergeprod.no/minbelonning/privacy?lang=en)";
const ADDRESS = ["Berge Media, organization number 933 194 132", "Korsvika 61", "6006 Ålesund", "Norway", `Email: ${EMAIL}`];

export const minBelonningTermsEn: LegalDoc = {
  lang: "en",
  heading: "Terms of Use for My Reward",
  updated: "Last updated September 28, 2026",
  toc: true,
  intro: [
    "These terms (the “Terms”) are an agreement between you and Berge Media (“we”, “us” and “our”) about the use of the mobile app My Reward, called Min Belønning in Norwegian (the “App”), and the services that come with it (the “Service”).",
    `By creating an account or using the App, you accept the Terms. Please read them together with the ${PRIVACY}, which explains how we process personal data. If you do not accept the Terms, you must not use the App.`,
    "The Terms apply in addition to the license agreement of the App Store or Google Play, depending on where you downloaded the App. Apple and Google are not parties to these Terms and are not responsible for the App or its content.",
  ],
  sections: [
    {
      title: "Summary of key points",
      summary: true,
      blocks: [
        { type: "p", text: "This summary gives an overview. The full Terms are set out in the sections below." },
        {
          type: "qa",
          items: [
            {
              q: "Who can create an account?",
              a: "A parent or guardian aged 18 or over. Children use the App through the family, and the parent is responsible for the children’s use.",
            },
            {
              q: "Are the rewards real money?",
              a: "No. The rewards are a record the family keeps for itself. The App does not move any money, and the parent decides whether and how rewards are paid out.",
            },
            {
              q: "What does the App cost?",
              a: "The App is free to use within certain limits. My Reward+ is an optional subscription that renews automatically until you cancel it in the App Store or Google Play.",
            },
            {
              q: "Who owns the content?",
              a: "You own what you add. We only use it to make the App work for your family.",
            },
            {
              q: "Can I stop whenever I want?",
              a: "Yes. You can delete your account or the whole family in the App at any time, and the data is deleted right away.",
            },
          ],
        },
      ],
    },
    {
      id: "about",
      title: "1. About the Service and who we are",
      blocks: [
        {
          type: "p",
          text: "My Reward helps families create chores, approve them and keep track of rewards and savings goals. Parents create the chores, children do them, and parents approve them.",
        },
        { type: "p", text: "The Service is provided by:" },
        { type: "address", lines: ADDRESS },
      ],
    },
    {
      id: "definitions",
      title: "2. Definitions",
      items: [
        "**Family:** the group of parents, guardians and children who use the App together.",
        "**Parent** or **guardian:** an adult with an account in the App who is a member of a family.",
        "**Child:** a child who has been added to the family by a parent and who uses the App on a phone connected to the family.",
        "**Content:** everything the family adds to the App, such as names, photos, chores and savings goals.",
        "**Reward:** an amount recorded in the App when a chore is approved. The reward is virtual, see [section 6](#virtual).",
        "**Family pot:** the amount the parent sets aside in the App, which the children can earn from.",
        "**My Reward+:** the subscription that gives the family more features, see [section 9](#price).",
      ],
    },
    {
      id: "who",
      title: "3. Who can use the App",
      paragraphs: [
        "The account must be created by a parent or guardian who is 18 or older. Children cannot create their own accounts, but use the App through a family that a parent has created.",
        "The parent is responsible for making sure that the children’s use of the App follows these Terms, and that it is appropriate for the child to use the App. The App is made for private use within the family and may not be used commercially, for example in daycare centers, schools or clubs, without an agreement with us.",
      ],
    },
    {
      id: "account",
      title: "4. Your account",
      items: [
        "You must provide correct information and keep it up to date.",
        "You sign in with an email address and password, or with Apple or Google. You must keep your password to yourself, and you are responsible for what happens with your account.",
        "Each account belongs to one person and cannot be shared or transferred.",
        "An account can be a member of one family at a time.",
        "If you suspect that someone else has access to your account, you must change your password and contact us.",
      ],
    },
    {
      id: "family",
      title: "5. The family, guardians and children",
      paragraphs: [
        "The parent who creates the family adds the children and decides what is stored about them. A child’s phone is connected to the family when the parent shows a QR code on their own phone. The code works for 10 minutes and can only be used once. Only show it to your own child.",
        "With My Reward+, you can invite other guardians to the family. All guardians in the family can create and approve chores, add and remove children, disconnect phones and delete the family. Only invite people you trust.",
        "If a parent deletes their account, the family remains for the other guardians. If the last parent deletes their account, the whole family is deleted.",
      ],
    },
    {
      id: "virtual",
      title: "6. The rewards are virtual",
      blocks: [
        { type: "short", text: "The rewards are a record in the App, not money." },
        {
          type: "ul",
          items: [
            "The rewards and the family pot are only numbers that the family records itself. They are not money, not electronic money and not a claim against us.",
            "The App does not move any money, is not a bank and is not a payment service. The rewards earn no interest and cannot be redeemed with us.",
            "The parent decides whether, when and how rewards are paid out, for example in cash or by bank transfer, outside the App.",
            "Agreements about rewards are between the parent and the child. We are not a party to such agreements and are not responsible for them.",
            "The family chooses whether amounts are shown in Norwegian kroner or in US dollars, and can change this in the App at any time. The choice only changes how the amounts are shown. No money is converted or moved.",
            "Amounts are recorded in whole kroner, or in dollars with at most one decimal. The family pot may have an upper limit, which is shown in the App.",
          ],
        },
      ],
    },
    {
      id: "content",
      title: "7. Content you add",
      blocks: [
        {
          type: "p",
          text: "You own the content you add. You give us a limited right to store, process and show the content to your family for as long as needed to provide the Service. We do not use it for anything else.",
        },
        { type: "p", text: "You are responsible for the content you add, and you must not add content that:" },
        {
          type: "ul",
          items: [
            "is illegal, offensive, threatening or harassing",
            "shows or describes other people when you do not have the right to do so",
            "infringes the rights of others, for example copyright",
            "contains harmful code or personal data about people outside the family",
          ],
        },
        {
          type: "p",
          text: "Photos of children must only be shared within your own family. Photos are stored privately, and only your family can see them. We may remove content that breaks the law or these Terms.",
        },
      ],
    },
    {
      id: "use",
      title: "8. Acceptable use",
      blocks: [
        { type: "p", text: "You must use the App as it is intended to be used. You must not:" },
        {
          type: "ul",
          items: [
            "try to access other families’ information or parts of the Service you do not have access to",
            "get around security measures, limits or payment for My Reward+",
            "use automated tools, such as bots, against the Service, or overload it",
            "copy, modify or decompile the App, except as expressly permitted by law",
            "use the App for illegal purposes or in a way that may harm others",
          ],
        },
        {
          type: "p",
          text: `If you find a security vulnerability, we would appreciate it if you reported it to ${EMAIL} instead of exploiting it.`,
        },
      ],
    },
    {
      id: "price",
      title: "9. The free version and My Reward+",
      blocks: [
        {
          type: "short",
          text: "The App is free with limits. My Reward+ gives you more, renews automatically and is cancelled in the App Store or Google Play.",
        },
        { type: "h3", text: "9.1 The free version" },
        {
          type: "p",
          text: "The App can be used for free. Currently, a family on the free version can, among other things, have up to 3 children, 3 active and 5 saved chores, one savings goal per child and one parent, and see the latest events on the home screen. The current limits are shown in the App.",
        },
        { type: "h3", text: "9.2 My Reward+" },
        {
          type: "p",
          text: "My Reward+ applies to the whole family. Currently, the subscription gives, among other things, room for up to 10 children, up to 20 active and 50 saved chores, repeating chores, photo proof, a description and checklist on chores, more savings goals per child, more guardians in the family, the family overview and the full history.",
        },
        { type: "h3", text: "9.3 Price, payment and renewal" },
        {
          type: "ul",
          items: [
            "My Reward+ is purchased through the App Store or Google Play and can be paid monthly or yearly. The price is shown in the App and in the store before you buy, in your local currency and including any applicable taxes.",
            "Payment is charged to your App Store or Google Play account when you confirm the purchase.",
            "The subscription renews automatically for a new period at the same price, unless you cancel it at least 24 hours before the end of the current period.",
            "You cancel in the settings for the App Store or Google Play. Deleting the App or your account does not cancel the subscription.",
            "After cancellation, the family keeps My Reward+ until the end of the period you have paid for.",
          ],
        },
        { type: "h3", text: "9.4 Right of withdrawal and refunds" },
        {
          type: "p",
          text: "Purchases, payment, the right of withdrawal and refunds are handled by Apple or Google under their terms. If you would like a refund, you must request it from Apple or Google. Your rights as a consumer under mandatory law always apply.",
        },
        { type: "h3", text: "9.5 Changes to price and features" },
        {
          type: "p",
          text: "We may change the price or what is included in the free version and in My Reward+. If we change the price, you will be notified before the new price applies, and you can cancel before that happens. Apple or Google may also ask you to accept a price increase before it applies.",
        },
        { type: "h3", text: "9.6 When the subscription ends" },
        {
          type: "p",
          text: "When the subscription ends, the family moves to the free version. The content you have created remains, but the features that require My Reward+ become unavailable, and the limits of the free version apply again.",
        },
      ],
    },
    {
      id: "notifications",
      title: "10. Notifications and messages",
      paragraphs: [
        "The App can send push notifications about what happens in the family, for example that a chore is waiting for approval. You can turn notifications on and off in your phone’s settings. We may also send important messages about the Service in the App or by email, for example about changes to the Terms. We do not send advertising.",
      ],
    },
    {
      id: "availability",
      title: "11. Availability, updates and changes",
      items: [
        "We work to keep the App available and working as it should, but we cannot promise that it will always be free of errors or interruptions, for example during maintenance or in the event of errors at our suppliers.",
        "We may improve, change, add or remove features.",
        "Sometimes you must update the App to keep using it, for example for security reasons.",
        "If we were to shut down the Service, we will give reasonable notice, normally at least 30 days in advance, and stop the renewal of My Reward+.",
      ],
    },
    {
      id: "rights",
      title: "12. Rights to the App",
      paragraphs: [
        "The App, the names My Reward and Min Belønning, the logos, the illustrations, the design and the code belong to Berge Media or our licensors and are protected by copyright and other rights. You receive a personal, limited right to use the App for private use within the family, as long as you follow these Terms. This right cannot be transferred.",
      ],
    },
    {
      id: "others",
      title: "13. Services from others",
      paragraphs: [
        `The App uses services from others, including Apple and Google for downloads, purchases, signing in and notifications, RevenueCat for the subscription and Supabase for the server and storage. When you use Apple or Google, their terms also apply. We are not responsible for services from others, but we choose our suppliers with care and have data processing agreements with them. You will find an overview in the ${PRIVACY}.`,
      ],
    },
    {
      id: "liability",
      title: "14. Liability",
      items: [
        "We provide the App with the quality and functionality described, and we fix errors as soon as we can.",
        "We are not liable for indirect losses, such as lost profits, or for losses caused by circumstances beyond our control.",
        "We are not responsible for agreements or disagreements within the family about chores and rewards.",
        "To the extent permitted by law, our total liability to you is limited to what you have paid for My Reward+ in the last 12 months.",
        "These limitations do not apply in cases of gross negligence or intent, and they never limit the rights you have as a consumer under mandatory law.",
      ],
    },
    {
      id: "termination",
      title: "15. Deletion, cancellation and suspension",
      paragraphs: [
        "**You can stop at any time.** You can delete your account under More → Settings → Delete account, or delete the whole family under More → Settings → Delete the family. The data is then deleted right away, as described in the Privacy Policy. An active subscription must be cancelled in the App Store or Google Play.",
        "**We may suspend or restrict an account** if it is used in violation of these Terms or the law. Where reasonable, we will first give a warning and an opportunity to correct the situation. In the case of serious violations, for example illegal content or attempts to break security, we may suspend the account immediately.",
      ],
    },
    {
      id: "privacy",
      title: "16. Privacy",
      paragraphs: [`How we process personal data, including data about children, is described in the ${PRIVACY}.`],
    },
    {
      id: "changes",
      title: "17. Changes to the Terms",
      paragraphs: [
        "We may change the Terms when the Service or the rules change. For material changes, we will notify you in the App within a reasonable time before they apply, normally at least 30 days in advance. If you continue to use the App after the changes apply, you accept the new Terms. If you do not accept them, you can delete your account and cancel the subscription.",
      ],
    },
    {
      id: "law",
      title: "18. Governing law and disputes",
      paragraphs: [
        "The Terms are governed by Norwegian law. This does not limit any mandatory consumer protection that applies where you live. If you disagree with something, we ask you to contact us first, and we will try to find a solution. Consumers in Norway can also get help from the Norwegian Consumer Council (Forbrukerrådet) and bring the case before the Consumer Disputes Commission (Forbrukerklageutvalget). Disputes that are not resolved are decided by the ordinary courts. As a consumer, you can always bring a case where you live.",
      ],
    },
    {
      id: "contact",
      title: "19. Contact us",
      blocks: [
        { type: "p", text: "If you have questions about the Terms, you can contact us:" },
        {
          type: "address",
          lines: [...ADDRESS, "Help: [apps.bergeprod.no/minbelonning/support](https://apps.bergeprod.no/minbelonning/support)"],
        },
      ],
    },
  ],
};
