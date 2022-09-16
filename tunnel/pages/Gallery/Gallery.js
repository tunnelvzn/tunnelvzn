import Story from "../Story"

const Gallery = () => {
    const stories = ['story1', 'story2', 'story3']
    return (
        <>
            <div className = 'd-flex p-3 m-5 rounded shadow'>
                {stories.map(story => {
                    return (
                    <div className='bg-black text-white p-3 m-4'><Story content={story}/></div>
                    )
                })}
            </div>
        </>
    )
}

export default Gallery