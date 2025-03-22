import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router/index.ts";
import "./assets/css/nucleo-icons.css";
import "./assets/css/nucleo-svg.css";
import MaterialDashboard from "./material-dashboard.ts";

//import SolanaWallets from "solana-wallets-vue";
//import "solana-wallets-vue/styles.css";
//import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
//import {
//  PhantomWalletAdapter,
//  SolflareWalletAdapter,
//} from "@solana/wallet-adapter-wallets";

/*const walletOptions = {
    wallets: [
      new PhantomWalletAdapter(),
      new SolflareWalletAdapter({ network: WalletAdapterNetwork.Devnet }),
    ],
    autoConnect: true,
  };*/

const appInstance = createApp(App);
appInstance.use(store);
appInstance.use(router);
appInstance.use(MaterialDashboard);
//appInstance.use(SolanaWallets, walletOptions);
appInstance.mount("#app");
