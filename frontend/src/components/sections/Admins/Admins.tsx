import React from "react";
import { useGetAdminsQuery } from "../../../features/api";

const Admin = () => {
  const { data, isLoading } = useGetAdminsQuery(null);
  console.log(data);

  return <div></div>;
};

export default Admin;
