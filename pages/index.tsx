import Layout from '@/components/Layout'
import { useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'

const Home = () => {
    let [isOpen, setIsOpen] = useState(false)
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
                <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
                    <Dialog.Overlay />

                    <Dialog.Title>Deactivate account</Dialog.Title>
                    <Dialog.Description>
                        This will permanently deactivate your account
                    </Dialog.Description>

                    <p>
                        Are you sure you want to deactivate your account? All of your data will be
                        permanently removed. This action cannot be undone.
                    </p>

                    <button onClick={() => setIsOpen(false)}>Deactivate</button>
                    <button onClick={() => setIsOpen(false)}>Cancel</button>
                </Dialog>
                <section className="mb-24">
                    <div className="max-w-7xl mx-auto px-4 mb-6">
                        <h1 className="text-2xl font-semibold text-gray-900">Create New Form</h1>
                        <p className="text-gray-600 mb-5">Tap below to create a new form.</p>
                        <button
                            onClick={() => setIsOpen(true)}
                            className="px-4 py-2 text-white bg-blue-800 hover:bg-blue-700"
                        >
                            Create New Form
                        </button>
                    </div>
                </section>
                <section>
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
                </section>
            </>
        </Layout>
    )
}

export default Home
