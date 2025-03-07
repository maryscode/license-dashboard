# About This Project

This project explores **Zustand** for global state management in a Next.js application.

## Dashboard Features

1. **Next.js with API routing** 
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/pages/api-reference/create-next-app). 

2. **Zustand for State Management**  
   Created `useLicenseStore.js` to manage licenses globally.

3. **Fetch API Data & Store in Zustand**  
   - Created an API route (`/api/licenses`) to serve mock data.  
   - Modified the Zustand store to fetch & store licenses in the global state.  
   - Used `useEffect` in `index.js` to load licenses when the page loads.

4. **Install & Configure Tailwind CSS**  
   - Verified Tailwind installation (using PostCSS with v4.0).  
   - Styled the dashboard container & license list for better UI.

5. **Add Filtering for Licenses**  
   - Modified Zustand store to store `filterText`.  
   - Created a search bar in `index.js` to filter licenses dynamically.

6. **Add a Reset Button for the Filter**  
   - Added a "Reset" button to clear `filterText` and show all licenses.

7. **Add New Licenses Dynamically**  
   - Created a form where users can add a new license and update Zustand state.

-------

## Getting Started

Run the development server:

```bash
npm run dev
```

Access via: [http://localhost:3000](http://localhost:3000) 

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/pages/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn-pages-router) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/pages/building-your-application/deploying) for more details.