import { NextResponse } from "next/server";
import { Resend } from "resend";
import { prisma } from "@/lib/prisma";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { prenom, nom, email, telephone, evenement, date, invites, message } =
      body;

    if (!prenom || !nom || !email || !evenement || !message) {
      return NextResponse.json(
        { error: "Champs obligatoires manquants" },
        { status: 400 }
      );
    }

    // Save to database (non-blocking: email is more important)
    try {
      await prisma.contactRequest.create({
        data: {
          prenom,
          nom,
          email,
          telephone: telephone || null,
          evenement,
          date: date || null,
          invites: invites || null,
          message,
        },
      });
    } catch (dbError) {
      console.error("Erreur sauvegarde DB:", dbError);
      // Continue to send email even if DB fails
    }

    const eventLabels: Record<string, string> = {
      mariage: "Mariage",
      bapteme: "Baptême",
      "bar-mitzvah": "Bar-Mitzvah",
      "ceremonie-laique": "Cérémonie laïque",
      seminaire: "Séminaire",
      "fete-entreprise": "Fête d'entreprise",
      "evenement-prive": "Événement privé",
      autre: "Autre",
    };

    const invitesLabels: Record<string, string> = {
      "moins-50": "Moins de 50",
      "50-100": "50 à 100",
      "100-200": "100 à 200",
      "200-300": "200 à 300",
      "300-500": "300 à 500",
      "plus-500": "Plus de 500",
    };

    await resend.emails.send({
      from: "Smart Moments Event <contact@laphotobootherie.fr>",
      to: "smartmomentsevent@gmail.com",
      replyTo: email,
      subject: `Demande de devis - ${eventLabels[evenement] || evenement} - ${prenom} ${nom}`,
      html: `
        <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; padding: 40px 20px;">
          <h1 style="color: #8B7D6B; font-size: 24px; border-bottom: 2px solid #C4A265; padding-bottom: 15px;">
            Nouvelle demande de devis
          </h1>

          <table style="width: 100%; border-collapse: collapse; margin: 25px 0;">
            <tr>
              <td style="padding: 10px 0; color: #8B7D6B; font-weight: bold; width: 180px;">Nom complet</td>
              <td style="padding: 10px 0; color: #555;">${prenom} ${nom}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #8B7D6B; font-weight: bold;">Email</td>
              <td style="padding: 10px 0;"><a href="mailto:${email}" style="color: #C4A265;">${email}</a></td>
            </tr>
            ${telephone ? `<tr>
              <td style="padding: 10px 0; color: #8B7D6B; font-weight: bold;">Téléphone</td>
              <td style="padding: 10px 0;"><a href="tel:${telephone}" style="color: #C4A265;">${telephone}</a></td>
            </tr>` : ""}
            <tr>
              <td style="padding: 10px 0; color: #8B7D6B; font-weight: bold;">Type d'événement</td>
              <td style="padding: 10px 0; color: #555;">${eventLabels[evenement] || evenement}</td>
            </tr>
            ${date ? `<tr>
              <td style="padding: 10px 0; color: #8B7D6B; font-weight: bold;">Date souhaitée</td>
              <td style="padding: 10px 0; color: #555;">${new Date(date).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" })}</td>
            </tr>` : ""}
            ${invites ? `<tr>
              <td style="padding: 10px 0; color: #8B7D6B; font-weight: bold;">Nombre d'invités</td>
              <td style="padding: 10px 0; color: #555;">${invitesLabels[invites] || invites}</td>
            </tr>` : ""}
          </table>

          <div style="background: #FAF8F5; padding: 20px; border-left: 3px solid #C4A265; margin: 25px 0;">
            <h3 style="color: #8B7D6B; margin: 0 0 10px;">Message</h3>
            <p style="color: #555; line-height: 1.6; margin: 0; white-space: pre-wrap;">${message}</p>
          </div>

          <p style="color: #999; font-size: 12px; margin-top: 30px; text-align: center;">
            Envoyé depuis le formulaire de contact de smartmoments.fr
          </p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Erreur envoi email:", error);
    return NextResponse.json(
      { error: "Erreur lors de l'envoi du message" },
      { status: 500 }
    );
  }
}
