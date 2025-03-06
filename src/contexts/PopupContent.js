import React, { useCallback, useEffect, useState } from "react";

import DepartmentSetModal from "../pages/admin/components/DepartmentSetModal";
import RankSetModal from "../pages/admin/components/RankSetModal";
import ReasonSetModal from "../pages/admin/components/ReasonSetModal";
import UserAddModal from "../pages/admin/components/UserAddModal";
import ReasonUpdateModal from "../pages/admin/components/ReasonUpdateModal";
import DepartmentUpdateModal from "../pages/admin/components/DepartmentUpdateModal";
import PointerUpdateModal from "../pages/admin/components/PointerUpdateModal";
import UserProjectAddModal from "../pages/admin/components/UserProjectAddModal";
import ConfigureProjectCategorySetModal from "../pages/admin/components/ConfigureProjectCategorySetModal";
import OrganizationProjectTypeSetModal from "../pages/admin/components/OrganizationProjectTypeSetModal";
import OrganizationGoalSetModal from "../pages/admin/components/OrganizationGoalSetModal";
import OrganizationCommonTextSetModal from "../pages/admin/components/OrganizationCommonTextSetModal";
import OrganizationWorkSetModal from "../pages/admin/components/OrganizationWorkSetModal";

const PopupContent = ({ type, onClose, setData, data, id }) => {

    switch (type) {
        case "DepartmentSetModal":
            return <DepartmentSetModal onClose={onClose} data={data} setData={setData} />;
            break;
        case "RankSetModal":
            return <RankSetModal onClose={onClose} data={data} setData={setData} />
            break;
        case "ReasonSetModal":
            return <ReasonSetModal onClose={onClose} data={data} setData={setData} />
            break;
        case "UserAddModal":
            return <UserAddModal onClose={onClose} data={data} setData={setData} />
            break;
        case "reasonUpdateModal":
            return <ReasonUpdateModal onClose={onClose} data={data} setData={setData} id={id} />
            break;
        case "departmentUpdateModal":
            return <DepartmentUpdateModal onClose={onClose} data={data} setData={setData} id={id} />
            break;
        case "pointerUpdateModal":
            return <PointerUpdateModal onClose={onClose} data={data} setData={setData} id={id} />
            break;
        case "UserProjectAdd":
            return <UserProjectAddModal onClose={onClose} data={data} setData={setData} id={id} />
            break;
        case "ConfigureProjectCategorySetModal":
            return <ConfigureProjectCategorySetModal onClose={onClose} data={data} setData={setData} id={id} />
            break;
        case "OrganizationProjectTypeSetModal":
            return <OrganizationProjectTypeSetModal onClose={onClose} data={data} setData={setData} id={id} />
            break;
        case "OrganizationGoalSetModal":
            return <OrganizationGoalSetModal onClose={onClose} data={data} setData={setData} id={id} />
            break;
        case "OrganizationCommonTextSetModal" :
            return <OrganizationCommonTextSetModal onClose={onClose} data={data} setData={setData} id={id} />
            break;
        case "OrganizationWorkSetModal" :
            return <OrganizationWorkSetModal onClose={onClose} data={data} setData={setData} id={id} />
            break;
        default:
            return (
                <div className="p-4 bg-white rounded-lg shadow dark:bg-gray-700">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                        알 수 없는 팝업
                    </h3>
                    <button
                        onClick={onClose}
                        className="mt-4 px-4 py-2 text-white bg-red-600 rounded-lg hover:bg-red-700"
                    >
                        닫기
                    </button>
                </div>
            );
    }
};

export default PopupContent;
