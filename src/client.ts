import {regen} from "@regen-network/api";

export const newClient = () => regen.ClientFactory.createLCDClient({
    restEndpoint: "http://mainnet.regen.network:1317",
})

