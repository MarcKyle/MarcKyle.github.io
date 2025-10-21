// Simple test script to verify backend setup
const axios = require('axios');

const API_URL = 'http://localhost:3001';

async function testBackend() {
  console.log('🧪 Testing Backend API...\n');

  try {
    // Test 1: Health check
    console.log('Test 1: Health Check');
    const healthResponse = await axios.get(`${API_URL}/health`);
    console.log('✅ Health check passed:', healthResponse.data);
    console.log('');

    // Test 2: Send test email
    console.log('Test 2: Send Test Email');
    const emailResponse = await axios.post(`${API_URL}/api/email/send`, {
      name: 'Test User',
      email: 'test@example.com',
      subject: 'Test Subject',
      message: 'This is a test message from the backend test script.'
    });
    console.log('✅ Email sent:', emailResponse.data);
    console.log('');

    // Test 3: Validation error
    console.log('Test 3: Validation (should fail)');
    try {
      await axios.post(`${API_URL}/api/email/send`, {
        name: 'A', // Too short
        email: 'invalid-email',
        message: 'Short' // Too short
      });
    } catch (error) {
      if (error.response && error.response.status === 400) {
        console.log('✅ Validation working:', error.response.data.message);
      } else {
        console.log('❌ Unexpected error:', error.message);
      }
    }
    console.log('');

    console.log('🎉 All tests passed!');
    console.log('\nNote: Check your EmailJS dashboard to verify email was sent.');

  } catch (error) {
    console.error('❌ Test failed:', error.message);
    if (error.response) {
      console.error('Response:', error.response.data);
    }
    console.log('\nMake sure:');
    console.log('1. Backend server is running (npm run dev)');
    console.log('2. .env.local is configured with EmailJS credentials');
  }
}

// Check if server is specified to be running
console.log('⚠️  Make sure backend server is running first!');
console.log('   Run: cd backend && npm run dev\n');

setTimeout(() => {
  testBackend();
}, 1000);
