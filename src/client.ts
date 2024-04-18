import {RegenApi} from "@regen-network/api";

export const newClient = () => RegenApi.connect({
    connection: {
        type: 'tendermint',
        endpoint: 'https://api.regen.network/ledger'
    }
});


