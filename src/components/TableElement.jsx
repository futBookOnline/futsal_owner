
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/react";

const TableElement = (props) => {

    const { isStriped, headers, rows } = props

    return (
        <Table isStriped aria-label="Example static collection table" className="mt-5">
            <TableHeader>
                {headers.map((header, index) =>
                    <TableColumn className="capitalize">{header}</TableColumn>
                )}
            </TableHeader>
            {

            }
            <TableBody>
                {
                    rows.map((rowData, index) =>
                        <TableRow key={index}>
                            {/* <TableCell>{rowData.name}</TableCell>
                    <TableCell /> */}
                            {
                                Object.keys(rowData).map((item) =>
                                    <TableCell>{rowData[item]}</TableCell>
                                )
                            }
                        </TableRow>
                    )
                }
                {/* <TableRow key="1">
                    <TableCell>Tony Reichert</TableCell>
                    <TableCell>CEO</TableCell>
                </TableRow> */}
            </TableBody>
        </Table>
    );
}

export default TableElement;
