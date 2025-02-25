"use client";

import { Bar } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";

// Chart.js의 필요한 컴포넌트 등록
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function ProgressBar({ value }) {
    const getColor = (_value) => {
        if (_value < 30) return "rgba(255, 99, 132, 0.8)"; // 빨간색 (Low)
        if (_value < 70) return "rgba(255, 205, 86, 0.8)"; // 노란색 (Medium)
        return "rgba(75, 192, 192, 0.8)"; // 초록색 (High)
    };

    // Chart.js 데이터 설정
    const data = {
        labels: [""], // ✅ 라벨 제거
        datasets: [
            {
                label: "Skill Level",
                data: [value],
                backgroundColor: getColor(value), // ✅ 색상 설정
                borderColor: getColor(value).replace("0.8", "1"), // ✅ 테두리 색상 조정
                borderWidth: 1,
                barPercentage: 1, // ✅ 막대 길이를 100%로 확장
                categoryPercentage: 1, // ✅ 카테고리(셀) 내에서 100% 차지하도록 설정
            },
        ],
    };

    // Chart.js 옵션 설정
    const options = {
        indexAxis: "y", // ✅ 수평 막대 그래프
        responsive: true,
        maintainAspectRatio: false, // ✅ 크기 조정 가능하도록 설정
        plugins: {
            legend: { display: false }, // ✅ 범례 숨기기
            tooltip: { enabled: false }, // ✅ 툴팁 비활성화
        },
        layout: {
            padding: 0, // ✅ 패딩 제거
        },
        scales: {
            x: {
                display: false, // ✅ x축 숫자 숨기기
                max: 100, // ✅ 최대 100% 설정
                beginAtZero: true,
            },
            y: {
                display: false, // ✅ y축 숫자 숨기기
            },
        },
    };

    return (
        <div className="w-full h-full flex items-center relative">
            {/* ✅ 그래프 중앙에 텍스트 추가 */}
            <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-gray-700">{value}%</span>
            </div>

            {/* ✅ 차트가 부모 크기를 완전히 차지하도록 설정 */}
            <div className="w-full max-h-6">
                <Bar data={data} options={options} />
            </div>
        </div>
    );
}
