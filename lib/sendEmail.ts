import { Resend } from "resend"


const resend = new Resend(process.env.RESEND_API_KEY)
const ownerEmail = process.env.CONTACT_EMAIL
//----- Types---------------------------------------------------------

// ─── Interfaces ───────────────────────────────────────────────────────────────
export interface ContactFormData {
    fullName: string
    email: string
    phone?: string
    company?: string
    suburb?: string
    message: string
  }
export interface IEmailHTML {
  to: string
  buildPayload(): {
    from: string
    to: string
    replyTo?: string
    subject: string
    html: string
  }
}

// ─── Contact Enquiry ─────────────────────────────────────────────────────────

export class ContactEnquiry implements IEmailHTML {
  to: string
  private data: ContactFormData

  constructor(data: ContactFormData) {
    this.data = data
    if (!ownerEmail) throw new Error("CONTACT_EMAIL environment variable is not set")
    this.to = ownerEmail
  }

  buildPayload() {
    return {
      from: "Sparkle Clean Website <onboarding@resend.dev>",
      to: this.to,
      replyTo: this.data.email,
      subject: `New Enquiry from ${this.data.fullName}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1c1917; border-bottom: 2px solid #fbbf24; padding-bottom: 8px;">
            New Enquiry — Sparkle Clean
          </h2>
          <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
            <tr>
              <td style="padding: 8px 0; color: #78716c; width: 140px;">Name</td>
              <td style="padding: 8px 0; color: #1c1917; font-weight: bold;">${this.data.fullName}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #78716c;">Email</td>
              <td style="padding: 8px 0;">
                <a href="mailto:${this.data.email}" style="color: #d97706;">${this.data.email}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #78716c;">Phone</td>
              <td style="padding: 8px 0; color: #1c1917;">${this.data.phone ?? "Not provided"}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #78716c;">Company</td>
              <td style="padding: 8px 0; color: #1c1917;">${this.data.company ?? "Not provided"}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #78716c;">Suburb</td>
              <td style="padding: 8px 0; color: #1c1917;">${this.data.suburb ?? "Not provided"}</td>
            </tr>
          </table>
          <div style="margin-top: 24px;">
            <p style="color: #78716c; margin-bottom: 8px;">Message</p>
            <div style="background: #f5f5f4; padding: 16px; color: #1c1917; line-height: 1.6; white-space: pre-wrap;">
              ${this.data.message}
            </div>
          </div>
          <p style="margin-top: 24px; color: #a8a29e; font-size: 12px;">
            Sent from the Sparkle Clean website contact form.
            Reply directly to this email to respond to ${this.data.fullName}.
          </p>
        </div>
      `,
    }
  }
}




// ─── Send Email ───────────────────────────────────────────────────────────────

export const sendEmail = async (email: IEmailHTML): Promise<{ error: string | null }> => {
  try {
    const payload = email.buildPayload()
    const { error } = await resend.emails.send(payload)
    if (error) {
      console.error("Resend error:", error)
      return { error: error.message }
    }
    return { error: null }
  } catch (err) {
    console.error("sendEmail unexpected error:", err)
    return { error: "Unexpected error sending email." }
  }
}