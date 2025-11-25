import DashboardLayout from '../../components/DashboardLayout';

export default function Jobs() {
  return (
    <DashboardLayout>
      <div className="max-w-4xl">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">My Jobs</h2>
        <div className="bg-white rounded-lg shadow p-6">
          <p className="text-gray-600">Jobs content will be displayed here</p>
        </div>
      </div>
    </DashboardLayout>
  );
}
