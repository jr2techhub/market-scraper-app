// Authentication Service - Dummy implementation ready for OAuth integration
// This service can be easily replaced with real OAuth server calls

const DUMMY_USERS = [
  {
    id: '1',
    name: 'Demo User',
    email: 'demo@example.com',
    password: 'demo123',
  },
];

export const authService = {
  // Login with dummy credentials
  async login(email, password) {
    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 800));

    // Check against dummy users
    const user = DUMMY_USERS.find(
      (u) => u.email === email && u.password === password
    );

    if (!user) {
      throw new Error('Invalid credentials. Try demo@example.com / demo123');
    }

    // Return user data without password
    const { password: _, ...userData } = user;
    return userData;
  },

  // Register new user (stores in memory only for demo)
  async register(name, email, password) {
    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 800));

    // Check if user already exists
    const existingUser = DUMMY_USERS.find((u) => u.email === email);
    if (existingUser) {
      throw new Error('User with this email already exists');
    }

    // Create new user
    const newUser = {
      id: String(DUMMY_USERS.length + 1),
      name,
      email,
      password,
    };

    // In a real app, this would be sent to a server
    DUMMY_USERS.push(newUser);

    // Return user data without password
    const { password: _, ...userData } = newUser;
    return userData;
  },

  // Logout - clear session
  async logout() {
    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 300));
    // In a real app with OAuth, this would invalidate the token on the server
    return Promise.resolve();
  },

  // Get current user from token (for OAuth integration)
  async getCurrentUser(token) {
    // This will be implemented when OAuth is added
    throw new Error('Not implemented - OAuth required');
  },

  // Refresh token (for OAuth integration)
  async refreshToken(refreshToken) {
    // This will be implemented when OAuth is added
    throw new Error('Not implemented - OAuth required');
  },
};
