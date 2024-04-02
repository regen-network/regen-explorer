import {
    QueryProjectsResponseSDKType
} from "../../../../../../regen-js/packages/api/types/codegen/regen/ecocredit/v1/query";
import {Cell, Column, Row, Table, TableBody, TableHeader} from "react-aria-components";

export type ProjectTableProps = QueryProjectsResponseSDKType & {};

export const ProjectTable = ({projects}: ProjectTableProps) => {
    return (
        <div>
            <Table>
                <TableHeader>
                    <Column>ID</Column>
                </TableHeader>
                <TableBody>
                    {projects.map((project) => (
                        <Row key={project.id}>
                            <Cell>{project.id}</Cell>
                        </Row>))}
                </TableBody>
            </Table>
        </div>
    );
}