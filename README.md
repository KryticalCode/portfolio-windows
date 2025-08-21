# Portfolio Website

I created this portfolio website to refine my front-end programming skills and showcase my work to friends, family, and potential employers. It's a modern, interactive portfolio built with Next.js featuring a Windows-like UI with draggable windows, sound effects (with a global mute button), and a contact form. The project incorporates multiple technologies, demonstrating full-stack development with AWS cloud deployment.

## 🚀 Technologies Used

**Frontend:**

- Next.js (React Framework)
- TypeScript
- Tailwind CSS
- SSG (Static Site Generation)

**Backend:**

- Node.js with Express
- OAuth2 Gmail integration for contact form (7-day token generation currently, due to it being a testing project)
- Input validation and rate limiting
- Security middleware (Helmet, CORS)

**Infrastructure and Deployment:**

- **Frontend:** Amazon S3 + CloudFront CDN
- **Backend:** AWS Elastic Beanstalk
- **Domain & SSL:** Custom domain with AWS Certificate
  Manager
- **DNS:** Cloudflare (DNS-only mode)

## Architecture Timeline

Initially, both the frontend and backend was deployed on **AWS Elastic Beanstalk** for leaning purposes. On further googling and researching, I later migrated the frontend to a **static S3 + Cloudfront** setup because:

- ✅ **Cost optimization** - The portfolio is primarily static content except for the contact form
- ✅ **Better performance** - Global CDN (Content-delivery-network) distribution via CloudFront
- ✅ **Scalability** - Automatic scaling without server
  management
- ✅ **AWS free tier friendly** - Significantly reduced
  hosting costs
- ✅ **Modern architecture** - Follows industry best
  practices for static sites

The backend still remains on Elastic Beanstalk to handle the contact form's email functionality via Gmail OAuth2 integration.

## 🔒 Security Features

- HTTPS is enforced across all endpoints
- OAuth2 authentication for email services
- Rate limiting on contact form submissions
- Input validation and sanitization
- Security headers via Helmet middleware
