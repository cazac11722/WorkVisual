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
            const user_profile = await fetch(`${mainUrl}/api/accounts/users-profile/${user.id}`, {
                method: "get",
                headers: {
                    "Authorization": `Token ${token}`,
                    "Content-Type": "application/json"
                },
            });
            const user_profile_re = await user_profile.json();

            let data = {
                "title": `제목을 입력해 주세요.`,
                "progress": '진행중',
                "attributes": [],
                "table_head": [],
                "table_body": [],
                "author": user.id,
                organization: user_profile_re.organization,
            };
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