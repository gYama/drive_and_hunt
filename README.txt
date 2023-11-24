# 環境構築（Mac）

## Gitをクローン
git clone https://diamondf.backlog.com/git/WEB3_GH_2023/drive-and-hunt.git
cd drive-and-hunt

## Expo CLIのインストール
npm install -g expo-cli

## 依存関係のインストール
npx expo install

## 地図を表示するためのモジュールのインストール
npm install react-native-maps

## 現在地取得するためのモジュールのインストール
expo install expo-location

## expoでビルド＆起動
npx expo start
QRコードが表示される

## 端末での確認
- expo go のアプリをインストール
- PCとスマホをWifiに接続し、同じネットワーク内にする
- expo go を起動して、QRコードを読み込む