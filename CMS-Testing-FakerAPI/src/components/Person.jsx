export function PersonComponent({username, imageUrl, description}) {

    return (
        <div className="flex flex-col items-center border border-black rounded-lg p-2 w-60 gap-2">
            <img src={imageUrl} alt={username} className="w-full overflow-hidden rounded-lg" />
            <span className="font-bold text-lg">{username}</span>
            <p>{description}</p>
        </div>
    )

}