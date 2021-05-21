This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```
- Quality: Antonio
- Deployment: Rosie
- User: Maryam
- Facilitator: Michael

---
`users` table
| Column      | Type | Constraints |
| ----------- | ----------- |----------- |
| id      | serial       |primary key       |
| email   | text   | unique not null        |
| password      | text       | not null     |
| name   | text   |not null        |

---



`sessions` table
| Column      | Type | Constraints |
| ----------- | ----------- |----------- |
| sid      | text       |primary key       |
| data  | JSON    | not null |

---

`products` table
| Column      | Type | Constraints |
| ----------- | ----------- |----------- |
| id      | serial       |primary key       |
| product_name   | Text     | |
| description  | Text        |        |
| img_path   | Text        |        |
| price   | Integer        |        |
| product_custom   | JSON         |        |


`categories` table
| Column      | Type | Constraints |
| ----------- | ----------- |----------- |
| id      | serial       |primary key       |
| category_name      | text       |     |


---

## Design Concept

![](https://i.imgur.com/mq5gcTV.png)