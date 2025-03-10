// LoginPage.js
import { Link, useNavigate } from "react-router-dom";
import { useTheme } from "../../contexts/hooks/useTheme";
import { useForm } from "../../contexts/hooks/useForm";
import Layout from "./components/Layout";
import SignLogo from "../../components/Logo/SignLogo";
import InputField from "./components/InputField";

const SignUpPage = () => {
    const { isDarkMode, toggleTheme } = useTheme();
    const navigate = useNavigate();

    const { formState, mainUrl, handleChange, handleSubmit } = useForm(
        { username: "", password: "" },
        async (data) => {
            try {
                const response = await fetch(`${mainUrl}/api/accounts/register/`, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(data),
                });

                if (response.ok) {
                    alert("회원가입이 되었습니다.");
                    navigate("/WorkVisual/login");
                    // 로그인 성공 처리
                } else {
                    console.error("Login failed:", response.status);
                    // 오류 처리
                }
            } catch (error) {
                console.error("An error occurred:", error);
            }
        }
    );
    return (
        <Layout isDarkMode={isDarkMode} onThemeToggle={toggleTheme}>
            <SignLogo />
            <div className="w-full max-w-xl p-6 space-y-8 sm:p-8 bg-white rounded-lg shadow dark:bg-gray-800">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">로그인</h3>
                <form className="mt-8 space-y-6" onSubmit={handleSubmit}  method="post">
                    <InputField label="이메일" type="text" name="username" id="username" placeholder="name@company.com" value={formState.username} onChange={handleChange} required={true} />
                    <InputField label="비밀번호" type="password" name="password" id="password" placeholder="••••••••" value={formState.password } onChange={handleChange} required={true} />
                    <InputField label="비밀번호 확인" type="password" name="passwordChk" id="passwordChk" placeholder="••••••••" required={true} />
                    <div className="flex items-start">
                        <div className="flex items-center h-5">
                            <input
                                id="remember"
                                aria-describedby="remember"
                                name="remember"
                                type="checkbox"
                                className="w-4 h-4 border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:focus:ring-primary-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
                            />
                        </div>
                        <div className="ml-3 text-sm">
                            <label htmlFor="remember" className="font-medium text-gray-900 dark:text-white">
                                <Link to="#" className="text-primary-700 hover:underline dark:text-primary-500">이용약관에</Link> 동의합니다
                            </label>
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="w-full px-5 py-3 text-base font-medium text-center text-white bg-primary-700 rounded-lg hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 sm:w-auto dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                    >
                        회원가입
                    </button>
                </form>
                <div className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    계정이 없나요? <Link to={"/WorkVisual/sign-up"} className="text-primary-700 hover:underline dark:text-primary-500">계정 만들기</Link>
                </div>
            </div>
        </Layout>
    );
};

export default SignUpPage;
