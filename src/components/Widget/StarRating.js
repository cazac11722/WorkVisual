import { useState } from "react";
import IconWidget from "./icon_widget";

const StarRating = ({ totalStars = 5, initialRating = 0, onRatingChange }) => {
    const [rating, setRating] = useState(initialRating); // 초기 별점 적용
    const [hover, setHover] = useState(0); // 마우스 오버 시 별점 표시

    // 별 클릭 시 별점 저장
    const handleClick = (index) => {
        setRating(index);
        if (onRatingChange) onRatingChange(index);
    };

    return (
        <div className="flex items-center space-x-1">
            {[...Array(totalStars)].map((_, index) => {
                const starValue = index + 1;
                return (
                    <IconWidget
                        key={index}
                        onClick={() => handleClick(starValue)}
                        onMouseEnter={() => setHover(starValue)}
                        onMouseLeave={() => setHover(0)}
                        icon="KidStar" className={`w-8 h-8 cursor-pointer transition-colors duration-300 ${starValue <= (hover || rating) ? "text-yellow-400" : "text-gray-300"
                            }`} />
                );
            })}
        </div>
    );
};

export default StarRating;
