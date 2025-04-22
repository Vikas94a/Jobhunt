import React from "react";
import {
  Table,
  TableRow,
  TableHeader,
  TableHead,
  TableBody,
  TableCell,
} from "../../../components/ui/table";
import { Badge } from "../../../components/ui/badge.jsx";

function AppliedJob() {
  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Date</TableHead>
            <TableHead>Job Type</TableHead>
            <TableHead>Commpany</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          <TableRow>
            <TableCell>1/11/2025</TableCell>
            <TableCell>Frontend-devloper</TableCell>
            <TableCell>Microsoft</TableCell>
            <TableCell>
              <Badge>Pending </Badge>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}

export default AppliedJob;
