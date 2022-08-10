import React, { FC, useState } from "react";

interface IEmployeesTableProps {
  className?: string;
}

interface IEmployee {
  name: string;
  surname: string;
}

const MAX_EMPLOYEES_COUNT = 5;

const EmployeesTable: FC<IEmployeesTableProps> = ({ className }) => {
  const addNewEmployee = () => {
    if (isLimitReached) {
      return false;
    }
    if (newEmployee.name.length < 1 || newEmployee.surname.length < 1) {
      setError(true);
      return;
    }
    updateEmployees([...employees, newEmployee]);
  };

  const [employees, updateEmployees] = useState<IEmployee[]>([
    {
      name: "Jan",
      surname: "Kowalski",
    },
  ]);
  const [newEmployee, setNewEmployee] = useState<IEmployee>({
    name: "",
    surname: "",
  });
  const [error, setError] = useState<boolean>(false);

  const removeEmployeeById = (employeeIndex: number) => {
    if (!isLimitReached) {
      return;
    }
    const newEmployees = [...employees];
    newEmployees.splice(employeeIndex, 1);
    updateEmployees(newEmployees);
  };

  const getEmployees = () => {
    return employees.map((employee, index) => (
      <>
        <p>{employee.name}</p>
        <p className="relative">
          {employee.surname}
          <button
            onClick={() => removeEmployeeById(index)}
            className={`absolute top-1/2 -translate-y-1/2 -right-24 border solid 1px transition ${
              isLimitReached ? "text-black bg-gray hover:bg-red-500" : ""
            }`}
          >
            {isLimitReached ? "Remove" : "Remove disabled"}
          </button>
        </p>
      </>
    ));
  };

  const isLimitReached = employees.length >= MAX_EMPLOYEES_COUNT;

  return (
    <div className={`${className}`}>
      <div className="table mb-12">
        <p
          className="w-full text-center"
          style={{
            gridRowStart: 1,
            gridRowEnd: 3,
            gridColumnStart: 1,
            gridColumnEnd: 3,
          }}
        >
          employees
        </p>
        {getEmployees()}
      </div>

      <div className="text-red-700 h-8">
        {error ? "You can not add empty rows to the table" : ""}
      </div>

      <div className="mt-12 max-w-[500px]">
        <div>
          <label className=" text-black" htmlFor="name">
            Name
          </label>
          <input
            className="w-full p-3 text-sm border-gray-200 border-2 rounded-lg mb-8"
            placeholder="Jan"
            type="text"
            id="name"
            value={newEmployee.name}
            onChange={(e) => {
              setError(false);
              setNewEmployee({ ...newEmployee, name: e.target.value });
            }}
          />
        </div>

        <div>
          <label className="text-black" htmlFor="name">
            Surname
          </label>
          <input
            className="w-full p-3 text-sm border-gray-200 border-2 rounded-lg mb-8"
            placeholder="Kowalski"
            type="text"
            id="name"
            value={newEmployee.surname}
            onChange={(e) => {
              setError(false);
              setNewEmployee({ ...newEmployee, surname: e.target.value });
            }}
          />
        </div>

        <div className="mt-4">
          <button
            onClick={addNewEmployee}
            type="submit"
            className={`
            inline-flex items-center justify-center w-full px-5 py-3 text-white bg-black rounded-lg sm:w-auto
            ${isLimitReached ? "bg-gray-400 cursor-not-allowed" : "bg-black"}
            `}
          >
            <span className="font-medium"> Add Employee </span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 ml-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

EmployeesTable.defaultProps = {
  className: "",
};

export default EmployeesTable;
