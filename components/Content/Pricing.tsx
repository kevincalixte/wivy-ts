import { FiUnlock, FiTag, FiStar, FiCheckCircle } from 'react-icons/fi';

export const Pricing = () => {
    return (
        <section className='flex flex-col items-center gap-5
         [&_article]:flex [&_article]:flex-col [&_article]:justify-center [&_article]:items-center [&_article]:py-10 [&_article]:hover:cursor-pointer [&_article]:hover:scale-105
          [&_article]:hover:bg-white/5 [&_article]:lg:w-[70%]
         [&_article]:border [&_article]:w-[90%] [&_article]:rounded-xl [&_article]:bg-white/1 [&_article]:border-white/5
         [&_h3]:flex [&_h3]:items-center [&_h3]:gap-2 
         [&_span]:text-[1.1rem] [&_span]:lg:text-xl
         [&_li]:flex [&_li]:items-center [&_li]:space-x-2 [&_li]:leading-7 [&_h3]:mb-5 [&_h3]:text-[1.3rem] [&_h3]:lg:text-3xl
         lg:w-1/2 lg:gap-10'>

            <h2 className='m-5 flex items-center gap-2'><FiUnlock /> Unlock More Features</h2>

            <article>
                <h3><FiTag />Free</h3>
                <ul>
                    <li>
                        <FiCheckCircle className="text-green-500" />
                        <span>Unlimited chat</span>
                    </li>

                    <li>
                        <FiCheckCircle className="text-gray-400" />
                        <span>See who visited you</span>
                    </li>
                    <li>
                        <FiCheckCircle className="text-gray-400" />
                        <span>See who liked you</span>
                    </li>
                    <li>
                        <FiCheckCircle className="text-gray-400" />
                        <span>Ad-free experience</span>
                    </li>
                </ul>
            </article>

            <article>
                <h3><FiStar />Premium</h3>
                <ul>
                    <li>
                        <FiCheckCircle className="text-green-500" />
                        <span>Unlimited chat</span>
                    </li>
                    <li>
                        <FiCheckCircle className="text-green-500" />
                        <span>See who visited you</span>
                    </li>
                    <li>
                        <FiCheckCircle className="text-green-500" />
                        <span>See who liked you</span>
                    </li>
                    <li>
                        <FiCheckCircle className="text-green-500" />
                        <span>Ad-free experience</span>
                    </li>
                </ul>
            </article>
        </section>
    )
}
