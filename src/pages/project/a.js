import React from 'react';
import Sidebar from '../../components/Sidebar';
import Header from '../../components/Header';
import "../../assets/styles/a.css"

const APage = () => {
    return (
        <div className='wrap_inner border-top--main flex'>
            <Sidebar />
            <div className="row w100">
                <Header />
                <main>
                    
                </main>
            </div>
        </div>
    );
}

export default APage;