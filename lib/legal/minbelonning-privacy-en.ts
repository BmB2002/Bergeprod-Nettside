import type { LegalDoc } from "../apps";

const EMAIL = "[hei@bergeprod.no](mailto:hei@bergeprod.no)";
const SUPPORT = "[apps.bergeprod.no/minbelonning/support](https://apps.bergeprod.no/minbelonning/support)";
const ADDRESS = ["Berge Media, organization number 933 194 132", "Korsvika 61", "6006 Ålesund", "Norway"];

export const minBelonningPrivacyEn: LegalDoc = {
  lang: "en",
  heading: "Privacy Policy for My Reward",
  updated: "Last updated September 29, 2026",
  toc: true,
  intro: [
    "This Privacy Policy applies to the mobile app My Reward, called Min Belønning in Norwegian (the “App”), and the services that come with it (the “Services”). The Services are provided by Berge Media (“we”, “us” and “our”).",
    "This policy explains what personal data we process, why we do it, who we share it with, how long we keep it and what rights you have. The processing complies with the General Data Protection Regulation (GDPR) and the Norwegian Personal Data Act.",
    `If you have questions about privacy, you can contact us at ${EMAIL}.`,
  ],
  sections: [
    {
      title: "Summary of key points",
      summary: true,
      blocks: [
        { type: "p", text: "This summary gives an overview. You will find the details in the sections below." },
        {
          type: "qa",
          items: [
            {
              q: "What data do we process?",
              a: "For parents: name, email address and sign in details. For children: a first name or nickname, a character or a photo and a color, added by a parent. We also process the content the family adds, such as chores, savings goals and photos. [Read more](#data)",
            },
            {
              q: "Do we process sensitive data?",
              a: "No. We do not process any special categories of personal data, such as health, religion or ethnicity.",
            },
            {
              q: "Do we receive data from others?",
              a: "To a limited extent. If you sign in with Apple or Google, we receive your name and email address from them. From Apple and Google, through RevenueCat, we learn whether the My Reward+ subscription is active. Information about the children is added by a parent. [Read more](#others)",
            },
            {
              q: "Do we use the data for advertising or tracking?",
              a: "No. The App has no advertising, no analytics tools and no tracking, and we never sell personal data.",
            },
            {
              q: "Who do we share data with?",
              a: "Only with suppliers who run the Services for us, and with the other members of your own family. [Read more](#sharing)",
            },
            {
              q: "Where is the data stored?",
              a: "The database, sign in and photos are stored with Supabase in Ireland, within the EU. [Read more](#transfers)",
            },
            {
              q: "How long do we keep it?",
              a: "For as long as the account and the family exist. If you delete your account or the family in the App, the data is deleted right away. [Read more](#retention)",
            },
            {
              q: "What rights do you have?",
              a: "You have the right of access, rectification, erasure, restriction, data portability and to object, and you can complain to a data protection authority. [Read more](#rights)",
            },
          ],
        },
      ],
    },
    {
      id: "controller",
      title: "1. Who is responsible?",
      blocks: [
        { type: "short", text: "Berge Media is the data controller for the personal data in My Reward." },
        { type: "address", lines: [...ADDRESS, `Email: ${EMAIL}`] },
        {
          type: "p",
          text: "We have not appointed a data protection officer, because this is not required for our business. All questions about privacy can be sent to the email address above.",
        },
      ],
    },
    {
      id: "data",
      title: "2. What data do we process?",
      blocks: [
        { type: "short", text: "We only collect what is needed for the App to work for your family." },
        { type: "h3", text: "2.1 Data about you as a parent or guardian" },
        {
          type: "ul",
          items: [
            "**Name:** your display name in the family, for example “Mom”.",
            "**Email address and password:** used to sign in. If you create an account with your email address, we send you a code by email to confirm the address, and if you forget your password, a code to choose a new one. We also store which language the App used when you created the account, so these emails come in that language. The password is stored encrypted (hashed), and neither we nor anyone else can read it.",
            "**Sign in with Apple or Google:** if you choose this, we receive your name, your email address and a technical identifier for the account. Google also sends a link to your Google profile photo, but we do not use it. We never receive your password. If you choose “Hide My Email” with Apple, we receive an anonymous forwarding address from Apple instead of your real address. If you sign in with Apple, the server stores a code from Apple so that the Apple sign in can be revoked when you delete your account, as Apple requires.",
            "**Profile photo,** if you choose to add one.",
            "**The family’s name and settings,** for example the family pot, whether amounts are shown in Norwegian kroner or US dollars, and the family’s time zone, which decides when a new day starts for the chores.",
          ],
        },
        { type: "h3", text: "2.2 Data about children" },
        {
          type: "ul",
          items: [
            "First name or nickname",
            "A character or a profile photo, and a color",
            "Which phones are connected to the child, with the phone model, for example “iPhone 15”",
          ],
        },
        {
          type: "p",
          text: "The child does not provide an email address, a phone number or a password. Read more in [section 4](#children).",
        },
        { type: "h3", text: "2.3 Content the family adds" },
        {
          type: "ul",
          items: [
            "Chores with a name, icon and amount, and possibly a description, checklist and repetition",
            "Submissions, approvals and chores that are sent back",
            "Photo proof that the child takes when a chore is done, if the family has My Reward+ and the parent has turned it on",
            "Savings goals, rewards, payouts and history",
            "Notifications in the App, for example that a chore is waiting for approval",
          ],
        },
        {
          type: "p",
          text: "All content is private to the family. Photos are compressed on the phone before they are sent, and they are stored privately.",
        },
        { type: "h3", id: "others", text: "2.4 Data we receive from others" },
        {
          type: "ul",
          items: [
            "**Apple and Google:** name, email address and a technical identifier when you sign in with them, see section 2.1.",
            "**RevenueCat, on behalf of Apple and Google:** whether My Reward+ is active, which subscription it is (monthly or yearly), when the period renews or expires, and a transaction identifier.",
          ],
        },
        {
          type: "p",
          text: "We never receive card numbers, payment methods or billing addresses. We never buy personal data, and we do not collect data from public registers, social media or other sources.",
        },
        {
          type: "p",
          text: "Our use of information received from Google APIs adheres to the Google API Services User Data Policy, including the Limited Use requirements.",
        },
        { type: "h3", text: "2.5 Data collected automatically" },
        {
          type: "ul",
          items: [
            "**Technical logs:** when the App communicates with the server, our supplier logs the IP address, the time, the type of request and any error messages. The logs are only used for operations, troubleshooting and security.",
            "**Notification token:** a code from Apple or Google that allows us to send notifications to the phone, whether the phone is an iPhone or an Android phone, and which language the App uses on that phone (Norwegian or English), so that notifications arrive in the right language.",
            "**Phone model** for phones connected to a child, so the parent can see which phone is connected.",
            "**Attempts to use codes:** to prevent anyone from guessing codes, we record attempts to use a code, with a technical identifier and the time.",
            "**Event log:** important actions in the family, for example that a child is removed or a phone is disconnected, are recorded with who did it and when. The log is used for security.",
            "**App version and updates:** the App checks which versions can be used and downloads updates from Expo. These requests contain the platform, the app version and the IP address, but no name or account. On iPhone, the “Update” button may ask Apple for the App’s page in the App Store.",
          ],
        },
        { type: "p", text: "We use no analytics tools, no crash reporting and no advertising identifiers." },
        { type: "h3", text: "2.6 Access to features on your phone" },
        {
          type: "p",
          text: "The App only asks for access when you use the feature. You can change the access at any time in your phone’s settings.",
        },
        {
          type: "ul",
          items: [
            "**Camera:** to scan the QR code that connects a child’s phone to the family, and to take profile photos and photo proof. When a QR code is scanned, the image is only read on the phone and is not sent to us.",
            "**Photos:** to choose a photo from your library. The App only gets access to the photo you choose.",
            "**Notifications:** to send push notifications, see section 3.",
          ],
        },
        {
          type: "p",
          text: "The App never asks for access to your location, contacts, calendar, microphone or Bluetooth.",
        },
        { type: "h3", text: "2.7 Data stored only on the phone" },
        {
          type: "p",
          text: "Your sign in is stored encrypted in the phone’s secure storage (Keychain on iPhone and Keystore on Android). The App also stores some settings locally, such as the language you have chosen, the high score in the game and whether you have chosen “Later” for an update. This is not sent to us.",
        },
      ],
    },
    {
      id: "purposes",
      title: "3. Purposes and legal basis",
      blocks: [
        {
          type: "short",
          text: "We use the data to provide the App you have chosen to use, to keep it safe, and when you have given permission on your phone.",
        },
        {
          type: "table",
          head: ["Purpose", "Data", "Legal basis"],
          rows: [
            [
              "Creating and managing the account and sign in",
              "Name, email address, password or sign in with Apple or Google, and codes sent by email to confirm the address or choose a new password",
              "Contract, Art. 6(1)(b)",
            ],
            [
              "Providing the App’s features to the family: chores, approval, rewards, savings goals, leaderboard and history",
              "Content the family adds, and the children’s names, characters and colors",
              "Contract with the parent, Art. 6(1)(b). For data about the children: the family’s and our legitimate interest in the Service working as the parent has chosen, Art. 6(1)(f)",
            ],
            [
              "Connecting a child’s phone to the family",
              "One time code, technical identifier and phone model",
              "Contract, Art. 6(1)(b), and legitimate interest, Art. 6(1)(f)",
            ],
            [
              "Sending notifications, for example “Emma is done!” or “Clean your room was approved”, in the language of each phone",
              "Notification token, the phone’s app language, the child’s first name, the chore’s name and amount",
              "Consent given on the phone, Art. 6(1)(a)",
            ],
            [
              "Profile photos and photo proof",
              "Photos you or the child choose to add",
              "Consent to camera and photos on the phone, Art. 6(1)(a), and contract, Art. 6(1)(b)",
            ],
            ["Providing and managing My Reward+", "Subscription status and technical identifier", "Contract, Art. 6(1)(b)"],
            [
              "Answering inquiries and providing help",
              "Email address and what you write to us",
              "Contract, Art. 6(1)(b), and legitimate interest, Art. 6(1)(f)",
            ],
            [
              "Giving important information about the Service, for example changes to the terms or that the App must be updated",
              "Email address and notifications in the App",
              "Contract, Art. 6(1)(b)",
            ],
            [
              "Security, preventing misuse and fixing errors",
              "Technical logs, attempts to use codes and the event log",
              "Legitimate interest in keeping the Service safe and stable, Art. 6(1)(f)",
            ],
            [
              "Complying with legal obligations, for example answering authorities",
              "What is necessary in each case",
              "Legal obligation, Art. 6(1)(c)",
            ],
          ],
        },
        {
          type: "p",
          text: "Where we rely on legitimate interest, we have assessed that the interest does not outweigh your and your children’s privacy. The processing is limited to what is necessary, and the data is never used for advertising or profiling. You can object to such processing, see [section 11](#rights).",
        },
        {
          type: "p",
          text: "To create an account, you must provide an email address or sign in with Apple or Google. Without this, we cannot provide the Service. Everything else, such as profile photos, photo proof and notifications, is voluntary.",
        },
      ],
    },
    {
      id: "children",
      title: "4. Children",
      blocks: [
        {
          type: "short",
          text: "Children use the App through the family. They do not create an account, and the parent decides what is stored.",
        },
        {
          type: "p",
          text: "My Reward is made for families, and children use the App. A child never creates an account. A parent or guardian aged 18 or over creates the family, adds each child and chooses what is stored about the child: a first name or nickname, a character or a photo, and a color.",
        },
        {
          type: "p",
          text: "The child’s phone is connected when the parent shows a QR code on their own phone. The code works for 10 minutes and can only be used once. When the phone is connected, an anonymous, technical sign in is created on the child’s phone. It contains no name, email address, phone number or password.",
        },
        {
          type: "p",
          text: "In the App, the child sees their own chores, rewards and savings goals. On the leaderboard, the children see each other’s first names, characters or photos and number of completed chores within the same family.",
        },
        {
          type: "p",
          text: "We only process data about children so that the App works for the family. We never use it for advertising, profiling or tracking, and we do not share it with anyone outside the family, except the suppliers in [section 7](#sharing).",
        },
        {
          type: "p",
          text: "The parent is responsible for the child’s use of the App and can at any time disconnect the child’s phone, remove the child or delete the whole family. When a child is removed, the child’s phones are signed out right away, and the child’s savings goals, notifications and photos are deleted. The anonymous sign in on the phone is deleted automatically within two days. The child’s first name remains in the family’s reward history so that the records add up, and it is deleted together with the family.",
        },
        {
          type: "p",
          text: "We recommend choosing a character instead of a real photo if you want to share as little as possible. Children have the same rights as adults under data protection law. The parent can exercise these rights on the child’s behalf, and we are happy to help.",
        },
      ],
    },
    {
      id: "virtual",
      title: "5. Virtual rewards",
      paragraphs: [
        "The rewards in the App are virtual and are not money. The App does not move any money, is not a bank and is not a payment service. Parents pay out themselves, for example in cash or by bank transfer, outside the App, and can mark the payout in the App. We do not collect bank details or payment details for this.",
      ],
    },
    {
      id: "purchases",
      title: "6. Buying My Reward+",
      paragraphs: [
        "My Reward+ is purchased through the App Store or Google Play. Apple or Google handles the entire payment and is itself responsible for the payment details. We never see card numbers, payment methods or billing addresses.",
        "RevenueCat tells us whether the subscription is active, which subscription it is, when it renews and a transaction identifier. At RevenueCat, the purchase is linked to a technical identifier for your account, not to your name or email address.",
        "When you delete your account, we also delete your customer data at RevenueCat. However, this does not stop an active subscription. You must cancel the subscription in the settings for the App Store or Google Play.",
      ],
    },
    {
      id: "sharing",
      title: "7. Who do we share data with?",
      blocks: [
        {
          type: "short",
          text: "With the members of your own family, and with suppliers who run the Services for us. We never sell personal data.",
        },
        { type: "h3", text: "7.1 Within the family" },
        {
          type: "p",
          text: "The members of a family see each other’s names, characters or profile photos, chores, rewards, savings goals and places on the leaderboard. Parents also see which phones are connected to the children. Nothing is public, and nobody outside the family can see the content.",
        },
        { type: "h3", text: "7.2 Suppliers" },
        {
          type: "p",
          text: "We use these suppliers to run the Services. We have data processing agreements with them, and they may only process the data according to our instructions.",
        },
        {
          type: "table",
          head: ["Supplier", "What they do", "Data", "Where"],
          rows: [
            ["[Supabase](https://supabase.com/privacy)", "Server, database, sign in and photo storage", "The data in the App", "Ireland (EU)"],
            [
              "[Resend](https://resend.com/legal/privacy-policy)",
              "Sends the App’s emails: codes to confirm your email address and to choose a new password",
              "Email address, the language of the App and the content of the email",
              "EU (Ireland). Resend is a company in the USA",
            ],
            ["[RevenueCat](https://www.revenuecat.com/privacy)", "Manages the My Reward+ subscription", "Technical identifier and subscription status", "USA"],
            ["[Expo](https://expo.dev/privacy)", "Delivers push notifications and app updates", "Notification token, the text of the notification, IP address for updates", "USA"],
            ["[Apple](https://www.apple.com/legal/privacy/)", "App Store, purchases, Sign in with Apple, TestFlight and notifications (APNs)", "Sign in, purchases and notification token", "USA and EU"],
            ["[Google](https://policies.google.com/privacy)", "Google Play, purchases, sign in with Google and notifications (Firebase Cloud Messaging)", "Sign in, purchases and notification token", "USA and EU"],
          ],
        },
        {
          type: "p",
          text: "For the App Store, Google Play, purchases and their own accounts, Apple and Google are also independently responsible under their own privacy policies.",
        },
        { type: "h3", text: "7.3 Other cases" },
        {
          type: "ul",
          items: [
            "**Legal obligations:** we may disclose data when required by law, for example by order of an authority.",
            "**Transfer of the business:** if the Service is transferred to another business, the data may be transferred with it. You will be notified before this happens, and the new owner must follow this policy.",
          ],
        },
      ],
    },
    {
      id: "transfers",
      title: "8. Transfers outside the EU and EEA",
      paragraphs: [
        "The database, sign in and photos are stored with Supabase in Ireland, within the EU. RevenueCat, Expo, Resend, Apple and Google may process some data in the USA, as described in section 7.",
        "Such transfers take place on a valid basis under Chapter V of the GDPR: the European Commission’s Standard Contractual Clauses, which are part of the data processing agreements, and, for certified companies, the Data Privacy Framework between the EU and the USA. You can request a copy of the clauses by contacting us.",
      ],
    },
    {
      id: "retention",
      title: "9. How long do we keep the data?",
      blocks: [
        { type: "short", text: "For as long as the account and the family exist. When you delete, the data is deleted right away." },
        {
          type: "table",
          head: ["Data", "Retention period"],
          rows: [
            ["Your account: name, email address, sign in and profile photo", "Until you delete your account. The data is then deleted right away."],
            [
              "The family: children, chores, savings goals, notifications, reward history and subscription status",
              "Until the family is deleted, either with “Delete the family” or when the last parent deletes their account.",
            ],
            [
              "A child who is removed",
              "Phones, savings goals, notifications and photos are deleted right away. The first name in the reward history is deleted together with the family.",
            ],
            ["Photo proof", "Until a parent deletes the photo, the child is removed or the family is deleted."],
            [
              "QR codes and invitation codes",
              "The QR code works for 10 minutes and an invitation for a guardian for 15 minutes, and both can only be used once. The code is stored encrypted and deleted together with the family.",
            ],
            ["Attempts to use codes", "Deleted automatically after one day."],
            [
              "Notification token and the phone’s app language",
              "Until you sign out, delete your account, or Apple or Google makes the code invalid. On a child’s phone, also when the phone is disconnected or the child is removed.",
            ],
            [
              "The anonymous sign in on a child’s phone",
              "Until the phone is disconnected, the child is removed or the family is deleted. It is then deleted automatically within two days. A phone that never connects to a family is deleted in the same way.",
            ],
            [
              "Event log",
              "Until the family is deleted. If a parent deletes their account, that parent’s identifier is removed from the log.",
            ],
            [
              "Technical logs at Supabase",
              "For a short period according to the supplier’s standard routines, after which they are deleted automatically.",
            ],
            [
              "Emails from the App at Resend",
              "Resend keeps a record of each email, with the address and the content, for a short period according to its standard routines, after which it is deleted automatically.",
            ],
            ["Email inquiries", "For as long as needed to help you, and no later than 12 months after the matter is closed."],
            ["Customer data at RevenueCat", "Deleted when you delete your account."],
            [
              "The code from Apple when signing in with Apple",
              "Until you delete your account. The Apple sign in is then revoked, and the code is deleted.",
            ],
            [
              "Backups",
              "Data may remain in backups for a short period after deletion and is deleted automatically when the backups are renewed. Backups are only used to restore the Service after an error.",
            ],
          ],
        },
        {
          type: "p",
          text: "If a parent deletes their account while there is another parent in the family, only that parent’s account, membership and profile photo are deleted. The family remains for the others, and that parent’s identifier is removed from the history.",
        },
      ],
    },
    {
      id: "security",
      title: "10. How do we protect the data?",
      blocks: [
        { type: "short", text: "With encryption, strict access control and as little data as possible." },
        {
          type: "ul",
          items: [
            "All communication between the App and the server is encrypted.",
            "Access control in the database ensures that each family only sees its own data, and that a child only sees what is meant for the child.",
            "The server decides all amounts. The App can never change rewards or the family pot on its own.",
            "Photos are stored privately. Photo proof is only shown through links that work for five minutes, and profile photos through links that work for one hour.",
            "Passwords are stored encrypted, and the sign in is stored in the phone’s secure storage.",
            "Codes only work once and only for a short time, are stored encrypted, and the number of attempts is limited.",
            "Secret keys exist only on the server, never in the App.",
          ],
        },
        {
          type: "p",
          text: "No transmission over the internet or storage of data can be guaranteed to be completely secure. Should a personal data breach nevertheless occur, we will notify the Norwegian Data Protection Authority within 72 hours. If the breach is likely to result in a high risk to you, we will notify you without undue delay.",
        },
      ],
    },
    {
      id: "rights",
      title: "11. Your rights",
      blocks: [
        { type: "short", text: "You are in control of your data, and it is free to exercise your rights." },
        {
          type: "ul",
          items: [
            "**Access** (Art. 15): you can find out what data we have about you and get a copy.",
            "**Rectification** (Art. 16): you can correct data that is wrong. Most of it you can change directly in the App.",
            "**Erasure** (Art. 17): you can delete your account, a child or the whole family in the App, or ask us to delete the data.",
            "**Restriction** (Art. 18): you can ask us to restrict the processing in certain cases.",
            "**Data portability** (Art. 20): you can receive the data you have given us in a common, machine readable format.",
            "**Objection** (Art. 21): you can object to processing based on legitimate interest.",
            "**Withdrawing consent** (Art. 7(3)): see [section 13](#consent).",
          ],
        },
        {
          type: "p",
          text: `You can exercise your rights directly in the App, or by writing to ${EMAIL}. You can also find help at ${SUPPORT}. We respond within one month. If the request is extensive, the deadline may be extended by up to two months, and we will let you know. To protect your data, we may ask you to confirm who you are, for example by writing from the email address linked to the account.`,
        },
      ],
    },
    {
      id: "delete",
      title: "12. How to delete data in the App",
      blocks: [
        {
          type: "ul",
          items: [
            "**Delete your account:** More → Settings → Delete account, and confirm by typing DELETE. If you are the last parent in the family, the whole family is deleted. Otherwise, only your account is deleted.",
            "**Delete the family:** More → Settings → Delete the family, and confirm by typing the family’s name. Everything about the family is deleted, including photos and the children’s connections.",
            "**Remove a child:** open the child’s page and tap Delete.",
            "**Disconnect a phone:** open the child’s page and tap Disconnect.",
            "**Delete a photo:** tap Delete photo when you are looking at the chore.",
          ],
        },
        {
          type: "p",
          text: `If you no longer have the App, you can request deletion by writing to ${EMAIL} from the email address linked to the account. Remember that an active subscription must be cancelled in the App Store or Google Play.`,
        },
      ],
    },
    {
      id: "consent",
      title: "13. Consent and permissions on your phone",
      paragraphs: [
        "Notifications, the camera and photos are based on permissions you give on your phone. You can withdraw them at any time in your phone’s settings, under My Reward. The App still works, but without that feature. Withdrawing consent does not affect processing that took place before.",
      ],
    },
    {
      id: "automated",
      title: "14. Automated decisions and profiling",
      paragraphs: [
        "We make no automated decisions that have legal effects or similarly significant effects on you, and we do not carry out profiling. When the App suggests an icon for a chore, this is done with a simple word list on the phone, without anything being sent to us.",
      ],
    },
    {
      id: "tracking",
      title: "15. Cookies and tracking",
      paragraphs: [
        "The App uses no cookies, no tracking technology and no advertising identifiers, and it does not ask for permission to track. Since we do not track you, there is nothing to turn off with “Do Not Track”.",
        "This policy applies to the App. For the websites bergeprod.no and apps.bergeprod.no, see the [website privacy policy](https://bergeprod.no/personvern) (in Norwegian).",
      ],
    },
    {
      id: "complaints",
      title: "16. Complaints",
      paragraphs: [
        "We would like you to contact us first if you believe that we are not processing your data correctly, and we will do our best to put it right. You also have the right to complain to the Norwegian Data Protection Authority (Datatilsynet), which is the supervisory authority in Norway: [datatilsynet.no](https://www.datatilsynet.no/en/). If you live in another country in the EU or EEA, you can also complain to the supervisory authority there.",
      ],
    },
    {
      id: "changes",
      title: "17. Changes to this policy",
      paragraphs: [
        "We update this policy when the App or the rules change. The date at the top shows when it was last changed. For material changes, we will notify you in the App before the changes apply.",
      ],
    },
    {
      id: "contact",
      title: "18. Contact us",
      blocks: [
        {
          type: "p",
          text: "If you have questions about this policy or about how we process personal data, you can contact us:",
        },
        { type: "address", lines: [...ADDRESS, `Email: ${EMAIL}`, `Help: ${SUPPORT}`] },
      ],
    },
  ],
};
