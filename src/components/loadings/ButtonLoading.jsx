import { ClipLoader } from 'react-spinners'

const ButtonLoading = ({text = "loading"}) => {
    return (
        <div className='flex items-center justify-center gap-2'>
            <ClipLoader size={14} color="#36d7b7" />
            <p className='text-gray-300'>{text}...</p>
        </div>
    )
}

export default ButtonLoading;