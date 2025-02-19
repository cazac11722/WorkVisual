import IconWidget from "../../../components/Widget/icon_widget";

const SetMyGoals = () => {
    return (
        <div className="flex flex-col p-4 shadow-lg bg-white rounded-lg col-span-1 lg:p-6 dark:bg-gray-900">
            <div className="flex items-center bg-[#f3faf7] py-3 px-4 rounded-lg">
                <IconWidget icon="Document" color="#0e9f6e" />
                <span className="text-sm ml-2 text-[#0c3829] font-black">나만의 목표!!!</span>
            </div>
            <div className="flex justify-between mt-4 text-gray-500">
                <h2>목표내용</h2>
                <select id="select">
                    <option value={0}>모두 목표</option>
                    <option value={0}>장기 목표</option>
                    <option value={0}>중기 목표</option>
                    <option value={0}>월별 목표</option>
                    <option value={0}>주별 목표</option>
                </select>
            </div>
            <div className="py-4 border-y my-4">
                <h1 className="flex justify-between ju text-xl font-semibold text-gray-900 sm:text-2xl dark:text-white ">
                    <span>관리자님</span>
                    <button type="button" className="text-sm flex items-center text-white  bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-2 py-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800">
                        + 목표 추가
                    </button>
                </h1>
            </div>
            <div className="-my-6 divide-y divide-gray-200 dark:divide-gray-800">
                <div className="space-y-4 py-6 md:py-8">
                    <div className="grid gap-4">
                        <div>
                            <span className="inline-block rounded bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-300 md:mb-0"> 3 answers </span>
                        </div>

                        <a href="#" className="text-xl font-semibold text-gray-900 hover:underline dark:text-white">“The specs say this model has 2 USB ports. The one I received has none. Are they hidden somewhere?”</a>
                    </div>
                    <p className="text-base font-normal text-gray-500 dark:text-gray-400">It’s a USB-C port it’s a smaller port. Not the regular size USB port. See the picture below. It fits the newer Apple chargers.</p>
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                        Answered 1 day ago by
                        <a href="#" className="text-gray-900 hover:underline dark:text-white">Bonnie Green</a>
                    </p>
                </div>
            </div>

        </div>
    )
}

export default SetMyGoals;