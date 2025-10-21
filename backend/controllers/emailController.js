const emailService = require('../services/emailService');
const { validateEmailInput } = require('../utils/validation');
const { sanitizeInput } = require('../utils/sanitization');

/**
 * Send email via EmailJS
 * @route POST /api/email/send
 */
exports.sendEmail = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    // Validate input
    const validation = validateEmailInput({ name, email, subject, message });
    if (!validation.isValid) {
      return res.status(400).json({
        success: false,
        error: 'Validation Error',
        message: validation.errors.join(', ')
      });
    }

    // Sanitize input to prevent XSS attacks
    const sanitizedData = {
      name: sanitizeInput(name),
      email: sanitizeInput(email),
      subject: sanitizeInput(subject || 'Portfolio Contact Form'),
      message: sanitizeInput(message)
    };

    // Send email using EmailJS service
    const result = await emailService.sendEmail(sanitizedData);

    if (result.success) {
      return res.status(200).json({
        success: true,
        message: 'Email sent successfully! Thank you for reaching out.'
      });
    } else {
      return res.status(500).json({
        success: false,
        error: 'Email Send Failed',
        message: result.error || 'Failed to send email. Please try again later.'
      });
    }

  } catch (error) {
    console.error('Email Controller Error:', error);
    return res.status(500).json({
      success: false,
      error: 'Internal Server Error',
      message: 'An unexpected error occurred while processing your request.'
    });
  }
};
