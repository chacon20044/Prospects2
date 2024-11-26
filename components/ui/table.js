export const Table = ({ children, ...props }) => (
  <table className="min-w-full table-auto" {...props}>
    {children}
  </table>
);

export const TableBody = ({ children, ...props }) => (
  <tbody {...props}>
    {children}
  </tbody>
);

export const TableCell = ({ children, ...props }) => (
  <td className="px-4 py-2 border" {...props}>
    {children}
  </td>
);

export const TableHead = ({ children, ...props }) => (
  <thead {...props}>
    {children}
  </thead>
);

export const TableHeader = ({ children, ...props }) => (
  <th className="px-4 py-2 text-left font-medium" {...props}>
    {children}
  </th>
);

export const TableRow = ({ children, ...props }) => (
  <tr {...props}>
    {children}
  </tr>
);