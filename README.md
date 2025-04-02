# Nomos - AI-Powered Legal Document Analyzer

Nomos is a sophisticated legal document analysis tool that leverages artificial intelligence to streamline the process of reviewing, analyzing, and extracting insights from legal documents.

## Features

- 📄 Automated document parsing and analysis
- 🔍 Key clause identification and extraction
- 📊 Risk assessment and highlighting
- 📝 Summary generation for complex legal documents
- 🔄 Version comparison and change tracking
- 🏷️ Smart document categorization

## Tech Stack

- **Frontend**: Next.js 15, React 19, TypeScript, TailwindCSS
- **Backend**: Node.js, Express.js, TypeScript
- **Database**: PostgreSQL (via Supabase)
- **ORM**: Prisma

## Getting Started

### Prerequisites

- Node.js (v18.0 or higher)
- PostgreSQL database (we use Supabase)

### Installation

1. Clone the repository

   ```
   git clone https://github.com/generyand/nomos.git
   cd nomos
   ```

2. Install dependencies

   ```
   # Install client dependencies
   cd client
   npm install

   # Install server dependencies
   cd ../server
   npm install
   ```

3. Configure environment variables

   ```
   # In server directory
   cp .env.example .env
   # Add your Supabase and other configuration details

   # In client directory
   cp .env.example .env
   # Add your frontend environment variables
   ```

## Development

1. Start the backend server

   ```
   cd server
   npm run dev
   ```

2. Start the frontend development server

   ```
   cd client
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Building for Production

1. Build the backend

   ```
   cd server
   npm run build
   ```

2. Build the frontend
   ```
   cd client
   npm run build
   ```

## Documentation

For detailed documentation, please visit our [Wiki](https://github.com/yourusername/nomos/wiki).

## Contributing

We welcome contributions! Please see our [Contributing Guidelines](CONTRIBUTING.md) for details.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

For support, please open an issue in the GitHub repository or contact our support team at support@nomos.ai

## Acknowledgments

- Built with ❤️ for the legal community
- Powered by modern web technologies and AI

---

**Note:** Nomos is currently in active development. Features and documentation may be updated frequently.
