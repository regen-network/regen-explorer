'use client'
import {QueryClientImpl} from '@regen-network/api/lib/generated/regen/ecocredit/v1/query';

import {newClient} from "@/client";
import {ProjectTable} from "@/components/ecocredit/projects/ProjectTable";

export default async function Page() {
    const client = new QueryClientImpl((await newClient()).queryClient);
    const res = await client.Projects({});
    return <ProjectTable {...res} />;
}
