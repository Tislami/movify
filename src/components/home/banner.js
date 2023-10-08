import {FaPlus} from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";


function Banner({title, overview, imageSrc, categoryList, playOnClick, addOnClick}) {
    return <section className={"flex flex-col pt-24 gap-16 text-white"} >

        <div className={"flex flex-col gap-10"} >
            <h1 className={"text-7xl uppercase font-black leading-10 max-w-[25ch]"} >{title}</h1 >
            <p className={"text-2xl max-w-[50ch]"} >{overview}</p >
        </div >

        <Image
            src={`https://image.tmdb.org/t/p/original${imageSrc}`}
            alt={title}
            fill
            unoptimized
            className={"-z-10"}
        />

        <ActionButtons playOnClick={playOnClick} addOnClick={addOnClick} />
        <CategoryList categoryList={categoryList} />
    </section >
}


const ActionButtons = ({playOnClick, addOnClick}) => {
    return <div className={"flex items-center justify-start gap-2"} >
        <button
            onClick={playOnClick}
            className={"flex items-center justify-center border-2 rounded-full w-72 h-16 bg-white text-black text-xl font-bold"} >
            Play
        </button >

        <button
            onClick={addOnClick}
            className={"flex items-center justify-center border-2 rounded-full w-16 h-16 text-white text-xl font-bold"} >
            <FaPlus />
        </button >
    </div >
}


const CategoryList = ({categoryList}) => {
    return <ul className={"flex items-center overflow-x-scroll justify-start gap-6 "} >
        {categoryList.map((category) =>
            <li key={category.id} >
                <Link
                    href={"/"}
                    className={"w-48 flex items-center justify-center bg-black py-5 border border-[#333] bg-opacity-75 rounded-md font-bold shadow-md"} >
                    {category.name}
                </Link >
            </li >
        )}
    </ul >
}

export default Banner