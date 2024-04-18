'use client'

import {newClient} from "@/client";
import Link from "next/link";
import {Breadcrumb, Breadcrumbs } from "react-aria-components";
import {QueryClientImpl} from "@regen-network/api/lib/generated/regen/ecocredit/v1/query";

export default async function Page({params}: { params: { id: string } }) {
    const client = new QueryClientImpl((await newClient()).queryClient);
    const {project} = await client.Project({projectId: params.id})
    if(!project) {
        return <div>Project not found</div>
    }

    return <div>
        <Breadcrumbs>
            <Breadcrumb><Link href="/ecocredit">Ecocredits</Link></Breadcrumb>
            <Breadcrumb><Link href="/ecocredit/projects">Projects</Link></Breadcrumb>
            <Breadcrumb>{project.id}</Breadcrumb>
        </Breadcrumbs>
        <table>
            <TR>
                <TH>ID</TH>
                <TD>{project.id}</TD>
            </TR>
            <TR>
                <TH>Credit Class</TH>
                <TD><Link href={`/ecocredit/classes/${project.classId}`}>{project.classId}</Link></TD>
            </TR>
            <TR>
                <TH>Jurisdiction</TH>
                <TD>{project.jurisdiction}</TD>
            </TR>
            <TR>
                <TH>Admin</TH>
                <TD>{project.admin}</TD>
            </TR>
            <TR>
                <TH>Metadata</TH>
                <TD><Link href={`/data/iri/${project.metadata}`}>{project.metadata}</Link></TD>
            </TR>
            <TR>
                <TH>Reference ID</TH>
                <TD>{project.referenceId}</TD>
            </TR>
        </table>
    </div>
}

const TR = ({children}: { children: React.ReactNode }) => {
    return <tr className="border">{children}</tr>
}

const TH = ({children}: { children: React.ReactNode }) => {
    return <th className="border px-4">{children}</th>
}

const TD = ({children}: { children: React.ReactNode }) => {
    return <td className="border px-4">{children}</td>
}