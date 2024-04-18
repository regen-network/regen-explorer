import {Cell, Column, Row, Table, TableBody, TableHeader} from "react-aria-components";
import Link from "next/link";
import type {
    PageResponseSDKType
} from "@regen-network/api/types/codegen/cosmos/base/query/v1beta1/pagination";
import {ProjectInfoSDKType} from "@regen-network/api/types/codegen/regen/ecocredit/v1/query";

export type ProjectTableProps = {
    projects: ProjectInfoSDKType[];
    pagination?: PageResponseSDKType;
};

export const ProjectTable = ({projects}: ProjectTableProps) => {
    return (
        <div>
            <Table>
                <TableHeader>
                    <Column isRowHeader>ID</Column>
                    <Column>Credit Class</Column>
                    <Column>Jurisdiction</Column>
                    <Column>Admin</Column>
                </TableHeader>
                <TableBody>
                    {projects.map((project) => (
                        <Row key={project.id} className="border">
                            <TableCell><Link href={`/ecocredit/projects/${project.id}`}>{project.id}</Link></TableCell>
                            <TableCell><Link
                                href={`/ecocredit/classes/${project.class_id}`}>{project.class_id}</Link></TableCell>
                            <TableCell>{project.jurisdiction}</TableCell>
                            <TableCell>{project.admin}</TableCell>
                        </Row>))}
                </TableBody>
            </Table>
        </div>
    );
}

const TableCell = ({children}: { children: React.ReactNode }) => {
    return <Cell className="px-4 py-1 border">{children}</Cell>;
}