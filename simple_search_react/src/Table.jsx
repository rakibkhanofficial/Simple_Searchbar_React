const Table = ({ data }) => {
  return (
    <table>
      <tbody>
        <tr>
            <th>ID</th>
          <th>Name</th>
          <th>Company_name</th>
          <th>Email</th>
            <th>Zipcode</th>
        </tr>
        {data.map((item) => (
          <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.company_name}</td>
              <td>{item.email}</td>
              <td>{item.zipcode}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
