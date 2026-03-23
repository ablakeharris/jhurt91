# jhurt91

Campaign website for Jarren Hurt.

How to produce build for production, running in Docker.

# Build the image

docker build -t hurt-in-91:latest .

# Run locally (testing)

docker run -p 3000:3000 hurt-in-91:latest

# Run on your VPS

docker run -d -p 80:3000 --name hurt-in-91 --restart unless-stopped hurt-in-91:latest

---

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, install the dependencies:

```bash
npm install
```

Second, run the development server:

```bash
npm run dev
```
