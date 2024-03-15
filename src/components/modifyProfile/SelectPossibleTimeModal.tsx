import React, { useRef, useState } from 'react';
import { styled } from 'styled-components';
import Txt from '../common/text';
import { ReactComponent as CloseIcon } from '@/assets/icons/ic_close.svg';
import { ReactComponent as CheckIcon } from '@/assets/icons/ic_check.svg';
import { ReactComponent as ActiveCheckIcon } from '@/assets/icons/ic_active_check.svg';
import { colors } from '@/assets/styles/theme';
import useOutsideClickModalClose from '@/hooks/useOutsideClickModalClose';
import PossibleTimeCalendar from '../common/calendar/PossibleTimeCalendar';
import { Col, Row } from '../common/flex/Flex';
import { EmptyDiv } from '@/pages/notification/NotificationPage.styles';
import { Value } from 'node_modules/react-calendar/dist/esm/shared/types';
import moment from 'moment';
import { TimeRange } from '@/interface/api/modifyProfileType';

type SelectPossibleTimeModalProps = {
    isOpen: boolean;
    onClose: () => void;
    selectedDates?: TimeRange;
    setSelectedDates: (dates: TimeRange) => void;
};

const timeRanges = {
    8: '오전 8:00 ~ 오전 9:00',
    9: '오전 9:00 ~ 오전 10:00',
    10: '오전 10:00 ~ 오전 11:00',
    11: '오전 11:00 ~ 오후 12:00',
    12: '오후 12:00 ~ 오후 1:00',
    13: '오후 1:00 ~ 오후 2:00',
    14: '오후 2:00 ~ 오후 3:00',
    15: '오후 3:00 ~ 오후 4:00',
    16: '오후 4:00 ~ 오후 5:00',
    17: '오후 5:00 ~ 오후 6:00',
    18: '오후 6:00 ~ 오후 7:00',
    19: '오후 7:00 ~ 오후 8:00',
    20: '오후 8:00 ~ 오후 9:00',
    21: '오후 9:00 ~ 오후 10:00',
};

export default function SelectPossibleTimeModal({
    isOpen,
    onClose,
    selectedDates,
    setSelectedDates,
}: SelectPossibleTimeModalProps) {
    const selectScheduleModalRef = useRef<HTMLDivElement>(null);
    const [selectedDate, setSelectedDate] = useState<string>(
        moment(new Date()).format('YYYY-MM-DD')
    );

    const handleCheckIcon = (time: number) => {
        if (!selectedDates) return false;
        const isExist = selectedDates[selectedDate]?.includes(time);
        return isExist;
    };

    const handleSelectTime = (time: number) => {
        if (!selectedDates) {
            setSelectedDates({ [selectedDate]: [time] });
            return;
        }
        const isExist = selectedDates?.[selectedDate]?.includes(time);
        if (isExist) {
            const filteredTimes = selectedDates[selectedDate].filter((t) => t !== time);
            if (filteredTimes.length === 0) {
                const { [selectedDate]: _, ...rest } = selectedDates;
                setSelectedDates(rest);
            } else {
                setSelectedDates({
                    ...(selectedDates || {}),
                    [selectedDate]: filteredTimes,
                });
            }
        } else {
            setSelectedDates({
                ...(selectedDates || {}),
                [selectedDate]: [...((selectedDates && selectedDates[selectedDate]) || []), time],
            });
        }
        console.log(selectedDates);
    };

    useOutsideClickModalClose({ ref: selectScheduleModalRef, isOpen: isOpen, closeModal: onClose });

    return (
        <SelectScheduleModalModalContainer open={isOpen} ref={selectScheduleModalRef}>
            <TitleBox>
                <EmptyDiv />
                <Txt variant="body">일정 선택</Txt>
                <IconBox onClick={onClose}>
                    <CloseIcon />
                </IconBox>
            </TitleBox>
            <CalendarContainer>
                <PossibleTimeCalendar
                    onClose={onClose}
                    selectedDate={selectedDate}
                    setSelectedDate={setSelectedDate}
                    selectedDates={selectedDates}
                    setSelectedDates={setSelectedDates}
                />
            </CalendarContainer>
            <SelectScheduleContainer>
                <Txt variant="caption1">선호하는 시간대를 모두 선택해주세요</Txt>
                <Col style={{ width: 176 }} gap={12} alignItems="center" justifyContent="center">
                    {Object.entries(timeRanges).map(([startTime, timeRange]) => (
                        <Row
                            gap={10}
                            alignItems="center"
                            justifyContent="flex-start"
                            key={startTime}
                        >
                            <IconButton onClick={() => handleSelectTime(Number(startTime))}>
                                {handleCheckIcon(Number(startTime)) ? (
                                    <ActiveCheckIcon />
                                ) : (
                                    <CheckIcon />
                                )}
                            </IconButton>

                            <Txt
                                style={{
                                    paddingTop: '3px',
                                }}
                                variant="caption1"
                            >
                                {timeRange}
                            </Txt>
                        </Row>
                    ))}
                </Col>
            </SelectScheduleContainer>
        </SelectScheduleModalModalContainer>
    );
}

const SelectScheduleModalModalContainer = styled.div<{ open: boolean }>`
    max-width: 512px;
    min-width: 375px;
    width: 100vw;
    height: auto;
    background-color: white;
    position: fixed; // 변경된 부분
    bottom: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 20px 20px 0 0;
    z-index: 10;
    transform: translateY(${(props) => (props.open ? '0' : '100%')});
    transition: transform 0.5s ease;
`;

const TitleBox = styled.div`
    width: 100%;
    padding: 16px 16px 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const CalendarContainer = styled.div`
    width: 100%;
`;

const SelectScheduleContainer = styled.div`
    width: 100%;
    height: 345px;
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 25px;
    padding: 30px 30px 8px;
    background-color: ${colors.white_10};
`;

const IconBox = styled.div`
    width: 24px;
    height: 24px;
    cursor: pointer;
`;

const IconButton = styled.div`
    width: 16px;
    height: 16px;
    cursor: pointer;
`;
