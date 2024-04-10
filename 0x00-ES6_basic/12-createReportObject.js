/*eslint-disable*/
export default function createReportObject(employeesList) {
	return {
		allEmployees: employeesList,
		getNumberOfDepartements(employeesList) {
			return employeesList.length;
		}		
	};
}
