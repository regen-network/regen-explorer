'use client'

import {newClient} from "@/client";
import {ProjectTable} from "@/components/ecocredit/projects/ProjectTable";

export default async function Page() {
    const client = await newClient();
    const res = await client.regen.ecocredit.v1.projects();
    return <ProjectTable {...res} />;
}
