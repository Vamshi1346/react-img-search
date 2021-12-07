import React from 'react'

const ImageCard = ({imageData}) => {
    const tags=imageData.tags.split(',')
    return (
        <div className="max-w-sm rounded overflow-hiddenb shadow-lg">
            <img src={imageData.webformatURL} alt="" className="w-full"/>
            <div className="px-6 py-4">
                <div className="font-bold text-purple-500 text-xl mb-2">
                    Photo by {imageData.user}

                </div>
                <ul>
                  <li>
                    <strong>Views:</strong>
                        {imageData.views}
                    </li>
                    <li>
                        <strong>Downloads:</strong>
                        {imageData.downloads}
                    </li>
                    <li>
                        <strong>Likes:</strong>
                        {imageData.likes}
                    </li>
                </ul>
            </div>
            <div className="px-6 py-4">
                {tags.map((tag,index)=>(
                    <span className="inline-block bg-gray-20 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#{tag}</span>
                )
                
                )}
                
                
            </div>
            
            
        </div>
    )
}

export default ImageCard;