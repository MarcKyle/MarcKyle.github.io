const axios = require('axios');

/**
 * EmailJS Service
 * Handles email sending through EmailJS API
 */
class EmailService {
  constructor() {
    this.serviceId = process.env.EMAILJS_SERVICE_ID;
    this.templateId = process.env.EMAILJS_TEMPLATE_ID;
    this.publicKey = process.env.EMAILJS_PUBLIC_KEY;
    this.privateKey = process.env.EMAILJS_PRIVATE_KEY;
    // Use private API endpoint for server-side requests
    this.apiUrl = 'https://api.emailjs.com/api/v1.0/email/send';

    // Validate configuration on initialization
    this.validateConfig();
  }

  /**
   * Validate EmailJS configuration
   */
  validateConfig() {
    // Check if we have private key (for server-side) or public key (for client-side)
    const hasPrivateKey = !!this.privateKey;
    const hasPublicKey = !!this.publicKey;
    
    if (!this.serviceId || !this.templateId) {
      console.error('EmailJS configuration is incomplete!');
      console.error('Missing:', {
        serviceId: !this.serviceId,
        templateId: !this.templateId
      });
      throw new Error('EmailJS configuration is incomplete. Please check your environment variables.');
    }
    
    if (!hasPrivateKey && !hasPublicKey) {
      console.error('EmailJS requires either PRIVATE_KEY (server-side) or PUBLIC_KEY!');
      throw new Error('EmailJS configuration is incomplete. Please add EMAILJS_PRIVATE_KEY to .env.local');
    }
    
    // Log configuration
    console.log('EmailJS configured:');
    console.log('   Service ID:', this.serviceId ? this.serviceId.substring(0, 10) + '...' : 'MISSING');
    console.log('   Template ID:', this.templateId ? this.templateId.substring(0, 10) + '...' : 'MISSING');
    console.log('   Auth Mode:', hasPrivateKey ? 'Private Key (Server-side)' : 'Public Key (Client-side)');
    if (hasPrivateKey) {
      console.log('   Private Key:', this.privateKey.substring(0, 10) + '...');
    }
  }

  /**
   * Send email via EmailJS
   * @param {Object} emailData - Email data (name, email, subject, message)
   * @returns {Promise<Object>} Result object with success status
   */
  async sendEmail(emailData) {
    try {
      const { name, email, subject, message } = emailData;

      // Prepare the payload for EmailJS
      // Use private key if available (server-side), otherwise use public key
      const payload = {
        service_id: this.serviceId,
        template_id: this.templateId,
        user_id: this.publicKey,
        template_params: {
          name: name,
          email: email,
          subject: subject || 'Portfolio Contact Form Message',
          message: message,
        }
      };
      
      // Add accessToken for server-side requests if private key is available
      if (this.privateKey) {
        payload.accessToken = this.privateKey;
      }

      console.log('   Sending email via EmailJS...');
      console.log('   From:', name, '<' + email + '>');
      console.log('   Subject:', subject || '(no subject)');
      console.log('   Message preview:', message.substring(0, 50) + '...');
      console.log('   Using:', this.privateKey ? 'Private Key (server-side)' : 'Public Key (client-side)');
      console.log('   Template params:', JSON.stringify(payload.template_params, null, 2));
      
      // Send request to EmailJS
      const response = await axios.post(this.apiUrl, payload, {
        headers: {
          'Content-Type': 'application/json'
        },
        timeout: 10000 // 10 second timeout
      });

      // EmailJS returns 200 on success
      if (response.status === 200) {
        console.log('Email sent successfully via EmailJS');
        return {
          success: true,
          message: 'Email sent successfully'
        };
      } else {
        console.error('EmailJS returned unexpected status');
        return {
          success: false,
          error: 'Unexpected response from email service'
        };
      }

    } catch (error) {
      console.error('EmailJS Service Error:', error.message);
      
      // Handle specific error cases
      if (error.response) {
        // EmailJS API returned an error response
        const statusCode = error.response.status;
        const errorMessage = error.response.data?.message || error.response.data || error.response.statusText;
        
        console.error(`EmailJS API Error [${statusCode}]:`, errorMessage);
        console.error('Response data:', JSON.stringify(error.response.data, null, 2));
        
        // Provide more specific error messages
        if (statusCode === 403) {
          return {
            success: false,
            error: 'EmailJS authentication failed. Please check your Service ID, Template ID, and Public Key in .env.local',
            statusCode
          };
        }
        
        return {
          success: false,
          error: `Email service error: ${errorMessage}`,
          statusCode
        };
      } else if (error.request) {
        // Request was made but no response received
        console.error('No response from EmailJS API');
        return {
          success: false,
          error: 'Unable to reach email service. Please try again later.'
        };
      } else {
        // Something else happened
        console.error('Email Service Setup Error:', error.message);
        return {
          success: false,
          error: 'Email service configuration error'
        };
      }
    }
  }
}

// Export singleton instance
module.exports = new EmailService();
