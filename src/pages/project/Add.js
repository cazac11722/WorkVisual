import { useEffect, useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { useForm } from "../../contexts/hooks/useForm";
import { useNavigate, useParams } from "react-router-dom";

const Add = () => {

    const navigate = useNavigate();
    const { user, token } = useAuth();
    const params = useParams();

    const { mainUrl } = useForm();


    async function create() {
        try {
            let data = {
                "title": `제목을 입력해 주세요.`,
                "progress": '진행중',
                "attributes": [
                    { name: '제목', value: '제목을 입력해 주세요.', type: 'title' },
                    { name: '작성자', value: user.data.username },
                    { name: '업로드일', value: new Date() },
                    { name: '진행사항', value: '진행중' },
                ],
                "table_head": [
                    { accessorKey: "date", header: "날짜", size: 200, type: 'date' },
                    {
                        accessorKey: "workId", header: "업무 고유번호", type: 'initNumber', size: 200
                    },
                    {
                        accessorKey: "startTime", header: "시간", type: 'dubTime', size: 250,
                    },
                    {
                        accessorKey: "detailedWorkTime", header: "세부 작업시간", type: 'time', size: 130
                    },
                    {
                        accessorKey: "AllDetailedWorkTime", header: "총 작업시간", type: 'time', size: 130
                    },
                    {
                        header: "액션", type: 'btn', size: 150
                    },
                    {
                        accessorKey: "worker", type: 'select', size: 130
                    },
                    {
                        accessorKey: "workResult", header: "업무결과", type: 'select', size: 150
                    },
                    {
                        accessorKey: "taskDescription", header: "업무 내용", type: 'textarea', size: 500
                    },
                    {
                        accessorKey: "workConfirm", header: "컨펌요청", type: 'textarea', size: 150
                    },
                    {
                        accessorKey: "workCount", header: "숫자", type: 'number', size: 150
                    },
                    {
                        accessorKey: "workTimeAve", header: "시간별 평균값", type: 'time', size: 150
                    },
                ],
                "table_body": [],
                "author": user.id,
            };
            // const response = await fetch(`${mainUrl}/api/accounts/schedule/`, {
            const response = await fetch(`${mainUrl}/api/task_management/tasks/`, {
                method: "POST",
                headers: {
                    "Authorization": `Token ${token}`,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                const result = await response.json();
                navigate(`/WorkVisual/p/${params.id}/view/${result.id}`);
            } else {
            }

        } catch (error) {
        }
    }


    useEffect(() => {
        create();
    })

}

export default Add;