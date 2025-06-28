const EducationTable = () => {
  return (
    <section className="max-w-3xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold mb-6 text-center text-blue-700">
        Educational Qualification
      </h2>

      <table className="w-full table-auto border-collapse border border-gray-300">
        <tbody>
          <tr className="bg-blue-100">
            <th className="border border-gray-300 px-4 py-2 text-left">Degree</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Board / Institution</th>
            <th className="border border-gray-300 px-4 py-2 text-left">CGPA / Grade</th>
          </tr>
          <tr className="hover:bg-blue-50">
            <td className="border border-gray-300 px-4 py-2">S.S.C</td>
            <td className="border border-gray-300 px-4 py-2">Rajshahi Board</td>
            <td className="border border-gray-300 px-4 py-2">5.00</td>
          </tr>
          <tr className="hover:bg-blue-50">
            <td className="border border-gray-300 px-4 py-2">H.S.C</td>
            <td className="border border-gray-300 px-4 py-2">Rajshahi Board</td>
            <td className="border border-gray-300 px-4 py-2">5.00</td>
          </tr>
          <tr className="hover:bg-blue-50">
            <td className="border border-gray-300 px-4 py-2">BBA</td>
            <td className="border border-gray-300 px-4 py-2">Rajshahi University</td>
            <td className="border border-gray-300 px-4 py-2">3.38</td>
          </tr>
          <tr className="hover:bg-blue-50">
            <td className="border border-gray-300 px-4 py-2">MBA</td>
            <td className="border border-gray-300 px-4 py-2">Rajshahi University</td>
            <td className="border border-gray-300 px-4 py-2">3.65</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default EducationTable;
