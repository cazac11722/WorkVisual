import React from 'react';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';

const ProjectManagement = () => {
    return (
        <div className='wrap_inner border-top--main flex'>
            <Sidebar />
            <div className="row w100">
                <Header />
                <main>
                    <section className="row padding-3em bg-viwe">
                    </section>
                </main>
            </div>
        </div>
    );
}

export default ProjectManagement;