import { rest } from 'msw';

export const handlers = [
    rest.get('http://localhost:3030/scoops', (req, res, ctx) => {
      return res(
        ctx.json([
          { name: 'Chocolate', imagePath: '/images/chocolate.png' },
          { name: 'Vanilla', imagePath: '/images/vanilla.png' },
        ])
      );
    }),
    rest.get('http://localhost:3030/toppings', (req, res, ctx) => {
      return res(
        ctx.json([
          { name: 'Hot fudge', imagePath: '/images/hotfudge.png' },
          { name: 'Rainbow sprinkles', imagePath: '/images/rainbowsprinkles.png' },
          { name: 'Cherry', imagePath: '/images/cherry.png' },
        ])
      );
    }),
    ]