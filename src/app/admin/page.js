import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table';

const AdminPage = () => {
  return (
    <div className="w-full">
      <div className="w-full flex justify-between items-center gap-2">
        <div className="bg-white shadow-lg w-[350px] h-32 p-4 rounded-lg text-lg font-semibold">
          JUMLAH SELURUH CALON 2024
        </div>
        <div className="bg-white shadow-lg w-[350px] h-32 p-4 rounded-lg text-lg font-semibold">
          TOTAL SUARA MASUK 2024
        </div>
        <div className="bg-white shadow-lg w-[350px] h-32 p-4 rounded-lg text-lg font-semibold">
          JUMLAH PANITIA 2024
        </div>
      </div>
      <div className="flex gap-4">
        <div className="mt-8 w-full bg-white shadow-lg p-4 rounded-lg">
          <h1>Calon 2024</h1>
          <Table>
            <TableCaption>A list of your recent invoices.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Invoice</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Method</TableHead>
                <TableHead className="text-right">Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">INV001</TableCell>
                <TableCell>Paid</TableCell>
                <TableCell>Credit Card</TableCell>
                <TableCell className="text-right">$250.00</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
        <div className="mt-8 w-1/3 bg-white shadow-lg p-4 rounded-lg">
          <h1>SUARA MASUK</h1>
          <Table>
            <TableCaption>A list of your recent invoices.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Invoice</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Method</TableHead>
                <TableHead className="text-right">Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">INV001</TableCell>
                <TableCell>Paid</TableCell>
                <TableCell>Credit Card</TableCell>
                <TableCell className="text-right">$250.00</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
