/**
 * Input validation utilities
 */

/**
 * Validate email format
 * @param {string} email - Email address to validate
 * @returns {boolean} True if valid
 */
function isValidEmail(email) {
  if (!email || typeof email !== 'string') return false;
  
  // More comprehensive email regex
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  
  return emailRegex.test(email) && email.length <= 254;
}

/**
 * Validate name field
 * @param {string} name - Name to validate
 * @returns {boolean} True if valid
 */
function isValidName(name) {
  if (!name || typeof name !== 'string') return false;
  
  const trimmedName = name.trim();
  return trimmedName.length >= 2 && trimmedName.length <= 100;
}

/**
 * Validate message field
 * @param {string} message - Message to validate
 * @returns {boolean} True if valid
 */
function isValidMessage(message) {
  if (!message || typeof message !== 'string') return false;
  
  const trimmedMessage = message.trim();
  return trimmedMessage.length >= 10 && trimmedMessage.length <= 5000;
}

/**
 * Validate subject field (optional)
 * @param {string} subject - Subject to validate
 * @returns {boolean} True if valid or empty
 */
function isValidSubject(subject) {
  if (!subject) return true; // Subject is optional
  if (typeof subject !== 'string') return false;
  
  return subject.length <= 200;
}

/**
 * Validate email input data
 * @param {Object} data - Email data to validate
 * @returns {Object} Validation result
 */
function validateEmailInput(data) {
  const errors = [];
  
  // Validate name
  if (!isValidName(data.name)) {
    errors.push('Name must be between 2 and 100 characters');
  }
  
  // Validate email
  if (!isValidEmail(data.email)) {
    errors.push('Invalid email address format');
  }
  
  // Validate subject (optional)
  if (!isValidSubject(data.subject)) {
    errors.push('Subject must not exceed 200 characters');
  }
  
  // Validate message
  if (!isValidMessage(data.message)) {
    errors.push('Message must be between 10 and 5000 characters');
  }
  
  return {
    isValid: errors.length === 0,
    errors
  };
}

module.exports = {
  isValidEmail,
  isValidName,
  isValidMessage,
  isValidSubject,
  validateEmailInput
};
