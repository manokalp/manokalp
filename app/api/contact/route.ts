import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    // Parse the request body
    const body = await request.json();
    const { 
      name, 
      email, 
      phone, 
      location, 
      sessionMode, 
      reasonForVisit, 
      preferredDaysTiming 
    } = body;
    
    // Validate required fields
    if (!name || !email || !phone) {
      return NextResponse.json(
        { message: 'Please fill in all required fields: name, email, and phone number.' },
        { status: 400 }
      );
    }

    // Check if environment variables are set
    if (!process.env.EMAIL_USER || !process.env.EMAIL_APP_PASSWORD) {
      console.error('Missing email configuration in environment variables');
      return NextResponse.json(
        { message: 'Server configuration error. Please contact the administrator.' },
        { status: 500 }
      );
    }

    // Create transporter with Gmail credentials
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_APP_PASSWORD // App password generated from Google account
      }
    });

    const currentDate = new Date().toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });

    // Email content for admin (recipient)
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_RECIPIENT || process.env.EMAIL_USER,
      subject: `New Booking Request: ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>New Booking Request</title>
          <style>
            body {
              font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
              line-height: 1.6;
              color: #202124;
              margin: 0;
              padding: 0;
              background-color: #f6f6f6;
            }
            .container {
              max-width: 600px;
              margin: 0 auto;
              padding: 20px;
            }
            .email-card {
              background-color: #ffffff;
              border-radius: 8px;
              overflow: hidden;
              box-shadow: 0 1px 3px rgba(0,0,0,0.12);
            }
            .email-header {
              background-color: #0E7EA0;
              color: #ffffff;
              padding: 20px;
              text-align: center;
            }
            .email-body {
              padding: 20px;
            }
            .email-footer {
              background-color: #f5f5f5;
              padding: 15px 20px;
              color: #666666;
              font-size: 12px;
              text-align: center;
            }
            .contact-info {
              background-color: #f9f9f9;
              border-left: 4px solid #0E7EA0;
              padding: 15px;
              margin-top: 20px;
              border-radius: 4px;
            }
            .contact-row {
              margin-bottom: 10px;
              display: block;
            }
            .contact-label {
              font-weight: 500;
              color: #0E7EA0;
              min-width: 150px;
              display: inline-block;
            }
            .message-box {
              background-color: #f9f9f9;
              padding: 15px;
              border-radius: 4px;
              margin-top: 15px;
            }
            .timestamp {
              color: #757575;
              font-size: 12px;
              margin-top: 20px;
              text-align: right;
            }
            .logo {
              margin-bottom: 10px;
            }
            .details-section {
              margin-top: 20px;
              border-top: 1px solid #eee;
              padding-top: 20px;
            }
            .session-mode {
              display: inline-block;
              background-color: #e0f2f7;
              border-radius: 16px;
              padding: 4px 10px;
              margin-right: 6px;
              margin-bottom: 6px;
              font-size: 14px;
              color: #0E7EA0;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="email-card">
              <div class="email-header">
                <h1 style="margin:0;">New Booking Request</h1>
              </div>
              <div class="email-body">
                <p>You have received a new booking request from the Manokalp website.</p>
                
                <div class="contact-info">
                  <div class="contact-row">
                    <span class="contact-label">From:</span> ${name}
                  </div>
                  <div class="contact-row">
                    <span class="contact-label">Email:</span> ${email}
                  </div>
                  <div class="contact-row">
                    <span class="contact-label">Phone:</span> ${phone}
                  </div>
                  ${location ? `
                  <div class="contact-row">
                    <span class="contact-label">Location:</span> ${location}
                  </div>` : ''}
                </div>
                
                <div class="details-section">
                  <div class="contact-row">
                    <span class="contact-label">Session Mode:</span> 
                    ${sessionMode && sessionMode.length > 0 
                      ? sessionMode.map((mode: string) => `<span class="session-mode">${mode}</span>`).join(' ') 
                      : 'Not specified'}
                  </div>
                  
                  <div class="contact-row">
                    <span class="contact-label">Preferred Days/Timings:</span>
                  </div>
                  <div class="message-box">
                    ${preferredDaysTiming ? preferredDaysTiming.replace(/\n/g, '<br>') : 'Not specified'}
                  </div>
                  
                  <div class="contact-row" style="margin-top: 20px;">
                    <span class="contact-label">Reason for Visit:</span>
                  </div>
                  <div class="message-box">
                    ${reasonForVisit ? reasonForVisit.replace(/\n/g, '<br>') : 'Not specified'}
                  </div>
                </div>
                
                <p class="timestamp">Received on ${currentDate}</p>
              </div>
              <div class="email-footer">
                <p>&copy; ${new Date().getFullYear()} Manokalp. All rights reserved.</p>
              </div>
            </div>
          </div>
        </body>
        </html>
      `
    };

    // Reply to sender (auto-reply to user)
    const autoReplyOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Thank you for booking with Manokalp',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Thank you for booking with us</title>
          <style>
            body {
              font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
              line-height: 1.6;
              color: #202124;
              margin: 0;
              padding: 0;
              background-color: #f6f6f6;
            }
            .container {
              max-width: 600px;
              margin: 0 auto;
              padding: 20px;
            }
            .email-card {
              background-color: #ffffff;
              border-radius: 8px;
              overflow: hidden;
              box-shadow: 0 1px 3px rgba(0,0,0,0.12);
            }
            .email-header {
              background-color: #0E7EA0;
              color: #ffffff;
              padding: 20px;
              text-align: center;
            }
            .email-body {
              padding: 20px;
            }
            .email-footer {
              background-color: #f5f5f5;
              padding: 15px 20px;
              color: #666666;
              font-size: 12px;
              text-align: center;
            }
            .social-links {
              margin-top: 25px;
              text-align: center;
            }
            .social-link {
              display: inline-block;
              margin: 0 10px;
              width: 32px;
              height: 32px;
            }
            .logo {
              margin-bottom: 10px;
            }
            .booking-summary {
              background-color: #f9f9f9;
              border-radius: 8px;
              padding: 15px;
              margin: 20px 0;
            }
            .booking-row {
              margin-bottom: 8px;
            }
            .booking-label {
              font-weight: 500;
              color: #555;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="email-card">
              <div class="email-header">
                <h1 style="margin:0;">Thank You</h1>
              </div>
              <div class="email-body">
                <p>Dear ${name},</p>
                
                <p>Thank you for booking a session with Manokalp. We have received your booking request.</p>
                
                <div class="booking-summary">
                  <h3 style="margin-top:0;">Your Booking Details</h3>
                  ${sessionMode && sessionMode.length > 0 ? `
                  <div class="booking-row">
                    <span class="booking-label">Session Mode:</span> ${sessionMode.join(', ')}
                  </div>` : ''}
                  
                  ${preferredDaysTiming ? `
                  <div class="booking-row">
                    <span class="booking-label">Preferred Days/Timings:</span> ${preferredDaysTiming}
                  </div>` : ''}
                </div>
                
                <p>Our team will contact you within 24 hours to confirm your session.</p>
                
                <p>We appreciate your interest in Manokalp's services.</p>
                
                <p>Warm regards,<br>
                The Manokalp Team</p>
                
                <div class="social-links">
                  <p style="color: #757575; margin-bottom: 10px;">Follow us on social media</p>
                  <a href="#" style="color: #0E7EA0; text-decoration: none; margin: 0 10px;">Facebook</a>
                  <a href="#" style="color: #0E7EA0; text-decoration: none; margin: 0 10px;">Instagram</a>
                  <a href="#" style="color: #0E7EA0; text-decoration: none; margin: 0 10px;">Twitter</a>
                </div>
              </div>
              <div class="email-footer">
                <p>&copy; ${new Date().getFullYear()} Manokalp. All rights reserved.</p>
              </div>
            </div>
          </div>
        </body>
        </html>
      `
    };

    try {
      // Send emails
      await transporter.sendMail(mailOptions);
      await transporter.sendMail(autoReplyOptions);
      
      return NextResponse.json(
        { message: 'Your booking request has been received. We will contact you within 24 hours!' },
        { status: 200 }
      );
    } catch (emailError) {
      console.error('Email sending error:', emailError);
      return NextResponse.json(
        { message: 'Email delivery failed. Please check your email address or contact us directly.' },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { message: 'We encountered an issue processing your request. Please try again.' },
      { status: 500 }
    );
  }
} 