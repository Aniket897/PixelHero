
const UserInfo = ({ image }) => {
    return (
        <div className="flex flex-col gap-y-5 mt-3">
            <p className="font-bold text-xl">Information</p>
            <div className="grid grid-cols-3 p-3 gap-5">
                <div>
                    <p className="font-bold">User</p>
                    <p className="text-gray-700">{image.user}</p>
                </div>
                <div>
                    <p className="font-bold">User ID</p>
                    <p className="text-gray-700">{image.user_id}</p>
                </div>
                <div>
                    <p className="font-bold">Type</p>
                    <p className="text-gray-700">Photo</p>
                </div>
                <div>
                    <p className="font-bold">Views</p>
                    <p className="text-gray-700">{image.views}</p>
                </div>
                <div>
                    <p className="font-bold">Downloads</p>
                    <p className="text-gray-700">{image.downloads}</p>
                </div>
                <div>
                    <p className="font-bold">Likes</p>
                    <p className="text-gray-700">{image.likes}</p>
                </div>
            </div>
        </div>
    )
}

export default UserInfo;