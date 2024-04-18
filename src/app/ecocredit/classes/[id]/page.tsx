'use client'

import {newClient} from "@/client";
import {ProjectTable} from "@/components/ecocredit/projects/ProjectTable";
import {Breadcrumb, Breadcrumbs, Link} from "react-aria-components";
import {Tabs, TabList, Tab, TabPanel} from 'react-aria-components';
import {QueryClientImpl} from "@regen-network/api/lib/generated/regen/ecocredit/v1/query";

export default async function Page({params}: { params: { id: string } }) {
    const client = new QueryClientImpl((await newClient()).queryClient);
    const {class: cls} = await client.Class({classId: params.id})
    if(!cls) {
        return <div>Class not found</div>
    }

    const projectsRes = await client.ProjectsByClass({classId: params.id})
    return <div>
        <h1>Class</h1>
        <table>
            <TR>
                <TH>ID</TH>
                <TD>{cls.id}</TD>
            </TR>
            <TR>
                <TH>Admin</TH>
                <TD>{cls.admin}</TD>
            </TR>
            <TR>
                <TH>Metadata</TH>
                <TD>{cls.metadata}</TD>
            </TR>
        </table>
        <Tabs>
            <TabList>
                <Tab id="Projects">Projects</Tab>
            </TabList>
            <TabList>
                <Tab id="Batches">Batches</Tab>
            </TabList>
            <TabPanel id="Projects">
                <ProjectTable {...projectsRes} />
            </TabPanel>
            <TabPanel id="Batches">

            </TabPanel>
        </Tabs>
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
