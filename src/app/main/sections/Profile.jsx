export default function Profile() {
    return (
        <section className="flex items-center space-x-6 bg-white rounded-lg">
            <div className="w-64 h-64 flex ">
                <img src="imgs/profile/avartar.svg" alt="기본 이미지" />
            </div>
            <div className="bg-white p-6">
                <h2 className="text-3xl font-bold flex items-center gap-2 mb-4">
                    메인 소개글
                </h2>
                <div className="pb-6">
                    <h3 className="text-2xl font-bold flex items-center gap-2 mb-4">
                        🎓 학력 (Educaiton)
                    </h3>
                    <ul className="space-y-2">
                        <li className="flex flex-wrap md:flex-nowrap justify-start items-center gap-x-6 border-b pb-2">
                            <span className="text-gray-600 min-w-[130px] md:min-w-[180px]">
                                학력 기간
                            </span>
                            <span className="font-medium">
                                학교 및 전공명
                            </span>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-2xl font-bold flex items-center gap-2 mb-4">
                        🏢 경력 (Career)
                    </h3>
                    <ul className="space-y-2">
                        <li className="flex flex-wrap md:flex-nowrap justify-start items-center gap-x-6 border-b pb-2">
                            <span className="text-gray-600 min-w-[130px] md:min-w-[180px]">
                                경력 기간
                            </span>
                            <span className="font-medium">회사명</span>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}
