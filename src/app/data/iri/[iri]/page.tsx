import {newClient} from "@/client";
import {QueryClientImpl} from "@regen-network/api/lib/generated/regen/data/v1/query";
// import {QueryAttestationsByIRIRequest, QueryResolversByIRIRequest} from "@regen-network/api/types/codegen/regen/data/v1/query"

const rndResolverBase = `https://api.regen.network/data/v1/metadata-graph`

export default async function Page({params}: { params: { iri: string } }) {
    const iri = decodeURIComponent(params.iri);
    const client = new QueryClientImpl((await newClient()).queryClient);
    const anchor = await client.AnchorByIRI({iri: iri})
        .catch(() => undefined);
    const res = await fetch(`${rndResolverBase}/${iri}`)
    const data = await res.json()
    console.log(data)

    // const attestations = await client.regen.data.v1.attestationsByIRI(QueryAttestationsByIRIRequest.fromPartial({iri: params.iri}));
    // const resolvers = await client.regen.data.v1.resolversByIRI(QueryResolversByIRIRequest.fromPartial({iri:params.iri}));
    return <div>
        <h2>{iri}</h2>
        {anchor && anchor.anchor && <div>
            <h2>Anchor Timestamp: {anchor.anchor.timestamp?.toString()}</h2>
        </div>}
        <pre>
            {JSON.stringify(data, null, 2)}
        </pre>
        {/*<h2>Attestations</h2>*/}
        {/*{JSON.stringify(attestations)}*/}
        {/*<h2>Resolvers</h2>*/}
        {/*{JSON.stringify(resolvers)}*/}
    </div>
}
