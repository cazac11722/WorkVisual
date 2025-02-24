import { useEffect, useState } from "react";
import { useAuth } from "../AuthContext";
import { useForm } from "./useForm";

const useCommute = () => {

    const [commute, setCommute] = useState(false);

    const { user } = useAuth();
    const { mainUrl } = useForm();


    async function over() {
        try {
            // const response = await fetch(`${mainUrl}/api/accounts/schedule/`, {
            // const response = await fetch(`http://127.0.0.1:8000/api/accounts/schedule/com`, {
            //     method: "GET",
            //     headers: {
            //         "Authorization": `Token ${localStorage.getItem('token')}`,
            //         "Content-Type": "application/json"
            //     },
            // });

            // if (response.ok) {
            //     const result = await response.json();
            //     setCommute(result.end_date == null ? true : false);
            // } else {
            //     setCommute(false);
            // }

            // // const response = await fetch(`${mainUrl}/api/accounts/schedule/`, {
            // const all = await fetch(`http://127.0.0.1:8000/api/accounts/schedule/`, {
            //     method: "GET",
            //     headers: {
            //         "Authorization": `Token ${localStorage.getItem('token')}`,
            //         "Content-Type": "application/json"
            //     },
            // });

            // if (all.ok) {
            //     const result = await all.json();
            //     localStorage.setItem("scheduleAll", JSON.stringify(result))
            // } else {
            // }
        } catch (error) {
        }
    }

    const goWork = async () => {

        let data = {
            "title": `${user.data.username}님 출근`,
            "content": user.data.username + "님 " + new Date() + "에 출근 했습니다.",
            "start_date": new Date(),
            "end_date": null,
            "color": "#2563eb",
            "user": user.id,
            "schedule_option": 1
        };

        try {
            // const response = await fetch(`${mainUrl}/api/accounts/schedule/`, {
            const response = await fetch(`http://127.0.0.1:8000/api/accounts/schedule/`, {
                method: "POST",
                headers: {
                    "Authorization": `Token ${localStorage.getItem('token')}`,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                const result = await response.json();
                console.log(result)
                // 로그인 성공 처리
            } else {
                console.error("Login failed:", response.status);
                // 오류 처리
            }
        } catch (error) {
            console.error("An error occurred:", error);
        }

        setCommute(true);
    }

    const leaveWork = async () => {

        try {

            // const response = await fetch(`${mainUrl}/api/accounts/schedule/`, {
            const response1 = await fetch(`http://127.0.0.1:8000/api/accounts/schedule/com`, {
                method: "GET",
                headers: {
                    "Authorization": `Token ${localStorage.getItem('token')}`,
                    "Content-Type": "application/json"
                },
            });
            let rest = await response1.json();
            rest['end_date'] = new Date();

            // const response = await fetch(`${mainUrl}/api/accounts/schedule/`, {
            const response2 = await fetch(`http://127.0.0.1:8000/api/accounts/schedule/${rest.id}/`, {
                method: "PUT",
                headers: {
                    "Authorization": `Token ${localStorage.getItem('token')}`,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(rest),
            });

            if (response1.ok) {
                if (response2.ok) {
                    setCommute(false);
                    over();
                }
            } else {
                console.error("Login failed:", response1.status);
            }

        } catch (error) {
            console.error("An error occurred:", error);
        }

        setCommute(false);
    }

    useEffect(() => {
        over();
    }, [commute])

    return { commute, goWork, leaveWork }
}


export default useCommute;