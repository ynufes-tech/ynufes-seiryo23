# Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## 企画データを以下のコマンドで管理対象外とする

```bash
git update-index --assume-unchanged .\assets\data\events.json
```

## Setup

Make sure to install the dependencies:

```bash
# yarn
yarn install

# npm
npm install

# pnpm
pnpm install
```

## Development Server

Start the development server on `http://localhost:3000`

```bash
npm run dev
```

## Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.



```ts
import events from "assets/data/events.json";
const event = events.find(
  (event) => event.id === Number(route.params.event_id)
) as Event;
```

イベントの情報は、`assets/data/events.json` から提供される

`.github/workflows` でGitHub Actionが定義されている。
以下のステップでダミーデータがGoogleCloudStorageから取得した企画情報に書き換えられることで本番環境のデータが反映される
```yaml
- name: Download events.json from external URL
        run: |
          curl "${{ secrets.EVENTS_DATA_URL }}" -o ./assets/data/events.json          
```
`curl` はHTTPリクエストを実行するツール
上記のコマンドでは、 `secrets.EVENTS_DATA_URL` からデータを取得して `./assets/data/events.json` に保存している。


上記で使用している `secrets` はGitHub Actionsで設定している環境変数を指していて `Settings > Secrets and variables > actions > Repository secrets` で管理している。


前項で取得した企画情報を元に、アイコン画像へのリンクを以下のように得る。
```js
const iconURL = `https://storage.googleapis.com/ynufes-seiryo23-deploy.appspot.com/icons/${event?.id
  .toString()
  .padStart(4, "0")}-01.webp`;
```  

