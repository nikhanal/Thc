import Main_Notices from '../components/Main_Notices'
import { getStaticProps } from '../components/Main_Notices'

const notices = ({ apiDataMain }) => {
    return (
        <>
        <Main_Notices apiDataMain={apiDataMain} />
        </>
    )
}

export default notices;
export { getStaticProps };