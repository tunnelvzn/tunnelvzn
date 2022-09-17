import Image from 'next/image'

const Story = ({content}) => {
    console.log(content)
    return (
       
        <div className='d-inline ms-3 me-3'>
            <Image src= {`/../../galleryImages/${content.image}`} height={500} width={300} alt={content.name}/>
        </div>
      
    )
}

export default Story