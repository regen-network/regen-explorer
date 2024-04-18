'use client'

import {newClient} from "@/client";
import {ProjectTable} from "@/components/ecocredit/projects/ProjectTable";
import Link from "next/link";
import {Breadcrumb, Breadcrumbs } from "react-aria-components";

export default async function Page({params}: { params: { id: string } }) {
    const client = await newClient();
    const res = await client.regen.ecocredit.v1.project({projectId: params.id})
    return <div>
        <Breadcrumbs>
            <Breadcrumb><Link href="/ecocredit">Ecocredits</Link></Breadcrumb>
            <Breadcrumb><Link href="/ecocredit/projects">Projects</Link></Breadcrumb>
            <Breadcrumb>{res.project.id}</Breadcrumb>
        </Breadcrumbs>
        <table>
            <TR>
                <TH>ID</TH>
                <TD>{res.project.id}</TD>
            </TR>
            <TR>
                <TH>Credit Class</TH>
                <TD><Link href={`/ecocredit/classes/${res.project.class_id}`}>{res.project.class_id}</Link></TD>
            </TR>
            <TR>
                <TH>Jurisdiction</TH>
                <TD>{res.project.jurisdiction}</TD>
            </TR>
            <TR>
                <TH>Admin</TH>
                <TD>{res.project.admin}</TD>
            </TR>
            <TR>
                <TH>Metadata</TH>
                <TD><Link href={`/data/iri/${res.project.metadata}`}>{res.project.metadata}</Link></TD>
            </TR>
            <TR>
                <TH>Reference ID</TH>
                <TD>{res.project.reference_id}</TD>
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