# National Amritsari MS Catering

A responsive multi-page website for National Amritsari MS Catering, built with Next.js, TypeScript and React.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000. Set `NEXT_PUBLIC_SITE_URL` to the verified production origin before deployment to enable absolute sitemap URLs and metadata base. For production, run `npm run build` and `npm start`.

## Pages

- `/` Home
- `/our-story`
- `/menu` searchable and filterable full menu
- `/special-breads`
- `/parathas`
- `/naan-roti-kulcha`
- `/gallery` keyboard accessible lightbox
- `/catering` validated WhatsApp inquiry form
- `/contact`

## Content and assets

Menu source data is maintained in `data/menu.ts`. Original supplied asset files are retained in Downloads; web-ready copies are in `public/assets/`. `public/assets/asset-manifest.json` records all 50 source files from `Downloads/a`, their destination, dimensions, sizes, and intended placement. The 11 printed menu photographs are shown on `/menu`; only the supplied bread names drive the searchable menu. Photos use contained layouts so portrait posters and menu sheets remain uncropped. A second Lemon Naan poster is retained in assets but omitted from display because it repeats the same food photograph.

WhatsApp inquiries open a prefilled message to +91 9897925406; clicking the link does not submit or confirm an order. Phone buttons call the numbers supplied in the brief. No hours, prices, ratings, or unverified coordinates are shown. No production domain was supplied, so sitemap domain and default metadata base need replacement before launch.
