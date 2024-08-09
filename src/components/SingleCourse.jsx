import { useParams } from "react-router-dom";

const SingleCourse = () => {
    const params = useParams();

    const id = Number(params.id);

    return <>
        <h1>{id}</h1>
    </>
}

export default SingleCourse