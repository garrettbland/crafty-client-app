import Layout from '@/components/Layout'

const Home = () => {
    const forms = [
        {
            name: 'Bright Dentistry Onboarding',
            title: 'Regional Paradigm Technician',
            role: 'Admin',
            email: 'jane.cooper@example.com',
        },
        {
            name: 'Jane Cooper',
            title: 'Regional Paradigm Technician',
            role: 'Admin',
            email: 'jane.cooper@example.com',
        },
        {
            name: 'Jane Cooper',
            title: 'Regional Paradigm Technician',
            role: 'Admin',
            email: 'jane.cooper@example.com',
        },
    ]
    return (
        <Layout>
            <>
                <div className="max-w-7xl mx-auto px-4 mb-6">
                    <h1 className="text-2xl font-semibold text-gray-900">Active Forms</h1>
                </div>
                <div className="flex flex-col">
                    <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                            >
                                                Title
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                            >
                                                Email
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                            >
                                                Role
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                        {forms.map((form) => (
                                            <tr key={form.email}>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                    {form.name}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                    {form.title}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                    {form.email}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        </Layout>
    )
}

export default Home
