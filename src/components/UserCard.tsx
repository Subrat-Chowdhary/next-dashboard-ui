import Image from "next/image"

const UserCard = ({type}:{type:string}) => {
  return (
    <div className="rounded-2xl odd:bg-fuchsia-300 even:bg-slate-300 p-4 flex-1 min-w-[130px] ">
        <div className="flex justify-between items-center">
            <span className="text-[10px] bg-white rounded-full text-green-600 px-2 py-1">26-10-24</span>
            <Image src="/more.png" alt="more" width={20} height={20} className="cursor-pointer text-xs" />
        </div>
        <h1 className="text-2xl font-semibold my-4">1.23,567</h1>
        <h2 className="capitalize text-sm text-gray-500 font-medium">{type}s</h2>
    </div>
  )
}

export default UserCard