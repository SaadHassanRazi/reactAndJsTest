import React from "react";

const EmployeeDashboard = () => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get(`employee/apiUrl`);
        if (response.status === 200) {
          const data = response.data;
          console.log(data);
        }
      } catch (error) {
        console.error("Error", error);
      }
    };
    fetchData();
  }, [role]);
  return (
    <div>
      <h1>Employee Dashboard</h1>
    </div>
  );
};

export default EmployeeDashboard;
