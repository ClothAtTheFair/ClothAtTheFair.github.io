import {useRouter} from 'next/router'
import Nav from '../components/nav'

const Page = () => {
    const router = useRouter();

return(
    <div>
        {/* Content should change based on the title of the page,
        TODO: check if that is even possible */}
    <h1>{router.query.title}</h1>
    <p>something something MVP.</p>
    </div>
    )
};

export default Page;