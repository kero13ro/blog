## What is Prisma
---
Prisma is an open source next-generation ORM. It consists of the following parts:

- Prisma Client: Auto-generated and type-safe query builder for Node.js & TypeScript
- Prisma Migrate: Migration system
- Prisma Studio: GUI to view and edit data in your database

## Prisma quick start demo [link](https://www.prisma.io/docs/getting-started/quickstart)
---
- init Prisma, sqlite DB
- edit schema and init database
- create data
- view by studio

```
npm install typescript ts-node @types/node --save-dev
touch tsconfig.json
# paste tsconfig
npm install prisma --save-dev
npx prisma init --datasource-provider sqlite

# paste schema.prisma
npx prisma migrate dev --name init
touch script.ts
# paste script.ts

npx ts-node script.ts
npx prisma studio
```
## Script
---
```
ts-node script.ts
// or
npx ts-node script.ts
```
