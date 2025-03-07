const OptionSelect = ({column, updateTpye}) => {
    return (
        <select
            value={column.type}
            onChange={(e) => updateTpye(column.accessorKey, e)}
            className="text-sm w-32">
            <option value={1}>글자</option>
            <option value={2}>숫자</option>
            <option value={3}>날짜</option>
            <option value={4}>시간</option>
            <option value={5}>업무 결과</option>
            <option value={6}>컨펌 요청</option>
            <option value={7}>시간별 평균값</option>
            <option value={8}>업무 고유번호</option>
            <option value={9}>시간/종료 버튼</option>
            <option value={10}>세부 작업 시간</option>
            <option value={11}>총 작업 시간</option>
            <option value={12}>자동 날짜</option>
        </select>
    )
} 

export default OptionSelect;