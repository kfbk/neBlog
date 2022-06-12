// libs/client.js
import { createClient } from 'microcms-js-sdk';

export const client = createClient({
  serviceDomain: 'kfbk',
  // apiKey: process.env.API_KEY, // 次の定義にするとVercelでの設定は不要
  apiKey: process.env.API_KEY,
});