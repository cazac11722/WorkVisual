import React from 'react';
import HeaderWidget from './widget/header_widget';

const CommuteView = () => {
    return (
        <div className="row w100">
            <header className="flex justify-content-between  border-bottom line-h-5em">
                <div className="flex align-items-center justify-content-between border-right padding-x-1em w20">
                    <input type="text" placeholder="검색어를 입력해주세요." className="border-no" />
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                        fill="undefined">
                        <path
                            d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
                    </svg>
                </div>
                <div className="flex align-items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                        fill="undefined">
                        <path
                            d="M160-200v-80h80v-280q0-83 50-147.5T420-792v-28q0-25 17.5-42.5T480-880q25 0 42.5 17.5T540-820v28q80 20 130 84.5T720-560v280h80v80H160Zm320-300Zm0 420q-33 0-56.5-23.5T400-160h160q0 33-23.5 56.5T480-80ZM320-280h320v-280q0-66-47-113t-113-47q-66 0-113 47t-47 113v280Z" />
                    </svg>
                    <div className="border-radius"></div>
                    <p>admin 님 <span>환영합니다.</span></p>
                    <a href="">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                            fill="undefined">
                            <path
                                d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h280v80H200Zm440-160-55-58 102-102H360v-80h327L585-622l55-58 200 200-200 200Z" />
                        </svg>
                        <span>로그아웃</span>
                    </a>
                </div>
            </header>
            <main>

                <section className="row padding-3em bg-viwe">

                </section>


            </main>
        </div>
    );
}

export default CommuteView;