import Layout from '../../hocs/Layout'
import { useParams } from 'react-router'


const Activate = () => {
    const params = useParams()

    const uid = params.uid
    const token = params.token

    return (
        <Layout>
            <div className='max-w-7x1 mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='max-w-3x1 mx-auto'>
                    <button
                        type="button"
                        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Button text
                    </button>
                </div>
            </div>
        </Layout>
    )
}

export default Activate
