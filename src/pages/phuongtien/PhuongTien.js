import React from 'react'
import Table from "../../components/table/Table"

export default function PhuongTien() {

    const columns = [
        {
            dataField: 'id',
            text: "Id",
            sort: true,
        },
        {
            dataField: 'Test',
            text: "Test",
            sort: true,
        }
    ]

    return (
        <div >
            <Table
                dataTable={[]}
                columns={columns}  >

            </Table>
        </div>
    )
}
